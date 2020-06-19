import { Component, Injector, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { SettingService } from 'src/pages/setting/services/setting/setting.service';
import { Extender } from 'src/shared/helpers/extender';
import { FcmService } from 'src/shared/services/fcm/fcm.service';
import { AppService, IAppPages } from '../services/app/app.service';
import { NotifierService } from 'angular-notifier';
import { IUser } from 'src/pages/auth/helpers/model';
import { INotification } from 'src/pages/messages/models/message';
import { AngularFirestore } from '@angular/fire/firestore';
import { PeopleService } from 'src/pages/people/services/people/people.service';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';

/**
 * @class AppComponent
 * @extends Extender
 * @implements OnInit
 * sets pages for side-menu when user is logged in. default color used here to style side-menu buttons in a gradient.
 * here we set and store default language to english until user can make changes either in welcome page or from user settings.
 * we also register fire cloud messaging and token and listen for notifications in-app.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent extends Extender implements OnInit {
  public pages = [];
  public color: string = '#f5f5f5';
  currentUser: IUser;
  notifications: INotification[] = [];
  photoURLs = [];

  constructor(
    protected injector: Injector,
    private appService: AppService,
    private authService: AuthService,
    private fcmService: FcmService,
    private settingService: SettingService,
    private storage: Storage,
    private notifier: NotifierService,
    private firestore: AngularFirestore,
    private peopleService: PeopleService,
    private firestoreService: FirestoreService
  ) {
    super(injector);
    this.notifier = notifier;
  }

  /**
   * run initializeApp from appServices
   * get language from localstorage, if language is set, use to configure translations
   * otherwise default to english (gb)
   * if user is logged in, get firebase cloud messaging token and listen for notifications
   * setup app pages
   * get user preferences to setup lang
   */
  public async ngOnInit() {
    this.appService.initializeApp();
    this.currentUser = await this.authService.getUser();
    const lang = await this.storage.get('language');
    this.appService.langConfig(lang);
    // this.showNotification('success', 'Haseeb Azeem uploaded a new post');
    this.getNotifications();
    this.subscriptions.push(
      this.authService.user.subscribe((user) => {
        if (user) {
          this.fcmService.getToken().then(() => {
            this.listen4Notifications();
          });
          this.subscriptions.push(
            this.settingService.getUserSettings(user.uid).subscribe((setting) => this.appService.langConfig(setting.language))
          );
          this.pages = this.appService.setUpPages(user);
        }
      })
    );
  }

  /**
   * open component pages except for when component property is logout
   * then logout user from app and route to login page
   * @param page
   */
  public open(page: IAppPages) {
    if (page.component === 'logout') {
      this.authService.signOut().then(() => this.goto(this.routes.login));
    } else {
      this.goto(page.component);
    }
  }

  /* Listen to incoming messages */
  private listen4Notifications() {
    this.subscriptions.push(this.fcmService.listenToNotifications().subscribe());
  }

  public showNotification( type: string, message: string, notification: INotification ): void {
    this.seenNotification(notification);
    this.notifier.notify( type, message );
  }
  
  async getNotifications() {
    let notification: INotification;
    await this.firestore.collection('notifications').valueChanges().subscribe(async data => {
      let load = 0;
      this.notifications = [];
       notification = data as INotification;
       for (let index = 0; index < data.length; index++) {
        const friendShot =  this.peopleService.getFriends(this.currentUser.uid);
        friendShot.subscribe(async (resp) => {
          // filter post notifications
          if(notification[index].type == 1) {
            for (let i = 0; i < resp.length; i++) {
              if(notification[index].by == resp[i].uid) {
                let seenNotification = {
                  body: notification[index].body,
                  by: notification[index].by,
                  id: notification[index].id,
                  postId: notification[index].postId,
                  seenBy: notification[index].seenBy,
                  timestamp: notification[index].timestamp,
                  type: notification[index].type,
                  seen: 0,
                  photoURL: undefined
                };
                this.firestore.doc(`users/${notification[index].by}`).valueChanges().subscribe(async data => {
                  const user = data as IUser;
                  seenNotification.photoURL = user.photoURL;
                });

                if (notification[index].seenBy.indexOf(this.currentUser.uid) > -1) {
                  seenNotification.seen = 1;
                  // if (load == 0) {
                  //   await this.showNotification('success', 'You have a new notification', notification[index]);
                  //   console.log('user_seen',notification[index].seen);
                  //   load++;
                  // }
                  await this.notifications.push(seenNotification);
                } else {
                  seenNotification.seen = 0;
                  await this.notifications.push(seenNotification);
                }
                
              }
            }   
          } else {
            if (notification[index].to == this.currentUser.uid) {
              await this.notifications.push(notification[index]);
              if (notification[index].seen == 0 && load == 0) {
                await this.showNotification('success', 'You have a new notification', notification[index]);
                load++;
              }
            }
          }
          await this.orderNotification(this.notifications);
          await this.notifications.reverse();
        });
       }
    });
  }

  orderNotification(notification) {
    notification.sort((a,b) => {
      return a.timestamp.toMillis() - b.timestamp.toMillis();
    })
  }

  seenNotification(not: INotification) {
    if (not.type == 2) {
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seen: 2
      });
    } else if (not.type == 1) {
      let arr = not.seenBy;
      arr.push(this.currentUser.uid);
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seenBy: arr
      });
    } else {
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seen: 2
      });
    }
  }

}
