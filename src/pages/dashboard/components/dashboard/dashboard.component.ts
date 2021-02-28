import { Component, Injector, OnInit } from "@angular/core";
import { Extender } from "src/shared/helpers/extender";
import { ITabView } from "src/shared/helpers/models";
import { DashboardService } from "../../services/dashboard/dashboard.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { IUser } from "src/pages/auth/helpers/model";
import { AuthService } from "src/pages/auth/services/auth/auth.service";
import { IMessage, INotification } from "src/pages/messages/models/message";
import { PeopleService } from "src/pages/people/services/people/people.service";
import { NotificationService } from "src/app/notifications/service/notification.service";
import { MenuController } from "@ionic/angular";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

/**
 * get dashboard tabs information
 * set appropriate tab based on if page data param match tab id
 */
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent extends Extender implements OnInit {
  public views: ITabView[];
  currentUser: IUser;
  messages: IMessage[] = [];
  counter: number;
  notificationCounter: number;

  constructor(
    private spinnerDialog: SpinnerDialog,
    private iab: InAppBrowser,
    protected injector: Injector,
    private dashboardService: DashboardService,
    private angularFire: AngularFirestore,
    private authService: AuthService,
    private peopleService: PeopleService,
    private notificationService: NotificationService,
    private menuCtrl: MenuController
  ) {
    super(injector);
    this.views = this.dashboardService.views;
  }

  /** get dashboard tabs information set appropriate tab based on if page data param match tab id */
  public async ionViewDidEnter() {
    this.currentUser = await this.authService.getUser();
    this.notificationService
      .getNotifications(this.currentUser.uid)
      .then((not: INotification[]) => {
        console.log("page-not", not);
        this.notificationCounter = this.notificationService.unreadCounter;
        this.notificationCounter = this.notificationService.getUnreadCount(
          not,
          this.currentUser.uid
        );
        console.log("unread counter", this.notificationService.unreadCounter);
        this.loadingService.dismissLoader();
        setTimeout(() => this.loadingService.dismissLoader(), 5000);
      });

    this.views = this.dashboardService.views;

    this.views.map((view) => {
      if (view.id === this.activatedRoute.snapshot.firstChild.data.page) {
        view.active = true;
      }
      return view;
    });
  }

  async ngOnInit() {
    console.log("Dashboard ngOnInit");
    this.currentUser = await this.authService.getUser();
    this.getFilteredMessages();
    this.menuCtrl.enable(false, "shop");
    this.menuCtrl.enable(true, "first");
    this.menuCtrl.enable(true, "second");
    //this.getNotifications();
    // .subscribe(
    //   (data) => {
    //     this.notificationCounter = this.notificationService.getUnreadCount(
    //       [...data],
    //       this.currentUser.uid
    //     );
    //   },
    //   (err) => {
    //   }
    // );
  }

  public async getAllMessages() {
    return this.angularFire.collection<any>("messages").valueChanges();
  }

  /**
   * Filtering all messages
   * **/

  public async getFilteredMessages() {
    (await this.getAllMessages()).subscribe((data) => {
      this.messages = data;
      this.messages.forEach((msg) => {
        if (
          msg.participantsId.indexOf(this.currentUser.uid) != -1 &&
          msg.last_sender != this.currentUser.uid
        ) {
          this.counter = 0;
          this.counter = this.counter + msg.unread_count;
        }
      });
    });
  }

  public goToMessages() {
    this.goto(this.routes.messages);
  }

  public goToNotifications() {
    this.goto(this.routes.notifications);
  }

  async getNotifications() {
    let notification: any;
    await this.angularFire
      .collection("notifications")
      .valueChanges()
      .subscribe(async (data) => {
        let load = 0;
        this.notificationCounter = 0;
        notification = data;
        for (let index = 0; index < data.length; index++) {
          const friendShot = this.peopleService.getFriends(
            this.currentUser.uid
          );
          friendShot.subscribe(async (resp) => {
            // filter post notifications
            if (notification[index].type == 1) {
              for (let i = 0; i < resp.length; i++) {
                if (notification[index].by == resp[i].uid) {
                  if (
                    notification[index].seenBy.indexOf(this.currentUser.uid) ==
                    -1
                  ) {
                    this.notificationCounter++;
                    console.log("counter", this.notificationCounter);
                  }
                }
              }
            } else {
              if (
                notification[index].to == this.currentUser.uid &&
                (notification[index].seen == 0 || notification[index].seen == 2)
              ) {
                this.notificationCounter++;
                console.log("counter", this.notificationCounter);
              }
            }
          });
        }
      });
  }


    openShop() {
      let browser = this.iab.create('https://pagez.biz/store', '_blank','toolbarcolor=#ffffff,location=yes,closebuttoncolor=#202020,navigationbuttoncolor=#202020');

  
    browser.on('loadstart').subscribe((eve) => {
      this.spinnerDialog.show(null, null, true);     
    }, err => {
      this.spinnerDialog.hide();
    })
    
    browser.on('loadstop').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('loaderror').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('exit').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    }

  openMenu() {
    this.menuCtrl.enable(true, "first");
    this.menuCtrl.toggle("first");
  }
}
