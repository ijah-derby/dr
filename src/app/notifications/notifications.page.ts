import { Component, Injector, OnInit } from "@angular/core";
import {
  Action,
  AngularFirestore,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { IUser } from "../../pages/auth/helpers/model";
import { AuthService } from "../../pages/auth/services/auth/auth.service";
import { FeedCommentComponent } from "../../pages/feed/components/feed-comment/feed-comment.component";
import { FeedDetailComponent } from "../../pages/feed/components/feed-detail/feed-detail.component";
import { IFeed } from "../../pages/feed/models/feed";
import { INotification } from "../../pages/messages/models/message";
import { PersonComponent } from "../../pages/people/components/person/person.component";
import { Extender } from "../../shared/helpers/extender";
import { FirestoreService } from "../../shared/services/firestore/firestore.service";
import { NotificationService } from "./service/notification.service";
import { FeedReplyComponent } from "src/pages/feed/components/feed-reply/feed-reply.component";
import { NavigationExtras } from "@angular/router";
import { NavController, MenuController } from "@ionic/angular";
import { not } from "@angular/compiler/src/output/output_ast";
import { LoaderService } from "../services/loader.service";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"],
})
export class NotificationsPage extends Extender implements OnInit {
  public currentUser: IUser;
  public notifications: INotification[] = [];
  public photoURLs = [];
  isFound = true;
  notificationsFound = [];
  notificationCounter = 0;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
    private notificationService: NotificationService,
    private firestoreService: FirestoreService,
    protected injector: Injector,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private loaderService: LoaderService
  ) {
    super(injector);
  }

  public getSpecificFeed(id: string): Observable<any> {
    return this.firestore
      .doc<IFeed>(`feed/${id}`)
      .snapshotChanges()
      .pipe(
        take(1),
        map(
          (
            doc: Action<
              DocumentSnapshotDoesNotExist | DocumentSnapshotExists<IFeed>
            >
          ) => {
            return { id: doc.payload.id, ...(doc.payload.data() as IFeed) };
          }
        )
      );
  }
  public getSpecificComment(fid: string, cid: string): Observable<any> {
    return this.firestore
      .doc<IFeed>(`feed/${fid}/comments/${cid}`)
      .snapshotChanges()
      .pipe(
        take(1),
        map(
          (
            doc: Action<
              DocumentSnapshotDoesNotExist | DocumentSnapshotExists<IFeed>
            >
          ) => {
            return { id: doc.payload.id, ...(doc.payload.data() as IFeed) };
          }
        )
      );
  }
  public getSpecificUser(uid: string): Observable<any> {
    return this.firestore
      .doc<IFeed>(`users/${uid}`)
      .snapshotChanges()
      .pipe(
        take(1),
        map(
          (
            doc: Action<
              DocumentSnapshotDoesNotExist | DocumentSnapshotExists<IFeed>
            >
          ) => {
            return { uid: doc.payload.id, ...(doc.payload.data() as IFeed) };
          }
        )
      );
  }
  public async ngOnInit() {
    // this.notifications = [...this.notificationService.notifications];
  }

  async ionViewDidEnter() {
    console.log("onInit()");
    this.currentUser = await this.authService.getUser();
    console.log('currentUser', this.currentUser);
    if(!this.currentUser.uid) {
      this.navCtrl.navigateRoot('auth/login');
      return;
    }
    this.loadingService.presentProcessingLoading();
    this.notificationService
      .getNotifications(this.currentUser.uid)
      .then((not: INotification[]) => {
        this.loaderService.dismissLoader();
        console.log(not);
        this.notifications = [...not];
        this.notificationCounter = this.notificationService.unreadCounter;
        this.notificationsFound = not.filter(
          (item) => !item.deletedBy.includes(this.currentUser.uid)
        );
        if (this.notificationsFound.length === 0) {
          this.loaderService.dismissLoader();
        }
        this.notificationService.getUnreadCount(
          this.notificationService.notifications,
          this.currentUser.uid
        );
        this.notificationCounter = this.notificationService.unreadCounter;
        // setTimeout(() => {
        //   this.loaderService.dismissLoader();
        // }, 3000);
      })
      .catch((err) => {
        this.loaderService.dismissLoader();
      });
  }

  /** open post details modal, update array of feed if any change is made */
  public async viewPost(id: string): Promise<any> {
    const modal = await this.openModal(FeedDetailComponent, id);
    modal.present();
  }
  /** open feed's comments */
  public async comment(id: string): Promise<any> {
    this.getSpecificFeed(id).subscribe(async (feed) => {
      const modal = await this.openModal(FeedCommentComponent, feed);
      modal.present();
    });
  }

  /** open feed's comment's reply */
  public async reply(fid: string, cid: string, rid: string): Promise<any> {
    this.getSpecificFeed(fid).subscribe(async (feed) => {
      this.getSpecificComment(fid, cid).subscribe(async (comment) => {
        this.getSpecificUser(comment.uid).subscribe(async (user) => {
          comment.user = user;
          const modal = await this.openModal(FeedReplyComponent, {
            feed,
            comment,
            type: 1,
            replyID: rid,
          });
          modal.present();
        });
      });
    });
    // const modal = await this.openModal(FeedReplyComponent, {type: 1});
    // modal.present();
  }

  public async open(uid: string) {
    const modal = await this.openModal(PersonComponent, uid, "custom-modal");
    modal.present();
  }

  public async deleteNotification(item: INotification) {
    console.log("not id", item.id);
    let alert = await this.alertCtrl.create({
      header: "Delete Notification",
      message: "Do you want to delete this notification?",
      buttons: [
        {
          text: "Delete",
          handler: () => {
            // this.firestoreService.delete(`notifications/${id}`);
            if (item.deletedBy) {
              item.deletedBy.push(this.currentUser.uid);
            } else {
              let arr: string[] = [];
              arr.push(this.currentUser.uid);
              item.deletedBy = arr;
            }
            this.firestoreService.update(`notifications/${item.id}`, {
              deletedBy: item.deletedBy,
            });
          },
        },
        {
          text: "Cancel",
        },
      ],
    });
    alert.present();
  }

  public goToPage(not: INotification) {
    console.log(not);
    if (not.type === 1 || not.type === 4) {
      not.type === 1 ? not.seenBy.push(this.currentUser.uid) : (not.seen = 1);
      this.viewPost(not.postId);
    } else if (not.type === 2) {
      not.seen = 1;
      this.comment(not.postId);
    } else if (not.type === 3) {
      not.seen = 1;
      this.reply(not.postId, not.commentID, not.replyID);
    } else if (not.type === 0) {
      not.seen = 1;
      this.openProfile(not.by);
    } else {
      not.seen = 1;
    }
    this.seenNotification(not);
  }

  public seenNotification(not: INotification) {
    if (not.type === 2 || not.type === 3) {
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seen: 1,
      });
    } else if (not.type === 1) {
      const arr = not.seenBy;
      arr.push(this.currentUser.uid);
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seenBy: arr,
      });
    } else {
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seen: 1,
      });
    }
  }

  isSeen(not: INotification) {
    if (not.seen == 1) {
      return true;
    }
    if (
      (not.type === 3 || not.type == 1) &&
      not.seenBy.indexOf(this.currentUser.uid) > -1
    ) {
      return true;
    }
    return false;
  }

  openProfile(uid: string) {
    let extras: NavigationExtras = {
      queryParams: {
        id: uid,
      },
    };
    this.navCtrl.navigateForward("profile", extras);
  }

  getSize(item: INotification) {
    if (item.postPhoto || (item.type === 0 && item.photoURL)) {
      return "8";
    } else {
      return "10";
    }
  }

  async deleteAllConfirm() {
    let alert = await this.alertCtrl.create({
      header: "Delete All",
      message: "Do you want to delete all notifications?",
      buttons: [
        {
          text: "Delete All",
          handler: () => {
            this.deleteAll();
          },
        },
        {
          text: "Cancel",
        },
      ],
    });
    alert.present();
  }

  deleteAll() {
    this.notificationService.deleteAll(this.notifications, this.currentUser).then(resp => {
      if(resp) {
        console.log('empty notifications');
        this.notifications = [];
        this.notificationsFound = [];
        console.log('notifications', this.notifications);
      }
      this.loaderService.dismissLoader();
    }, err => {
      this.loaderService.dismissLoader();
      this.toast("Error in deleting some notifications");
    })
  }

  openMenu() {
    this.menuCtrl.enable(true, "first");
    this.menuCtrl.toggle("first");
  }


  loadData(event: any) {
    let id = this.notifications[this.notifications.length - 1].doc;
    this.firestoreService.colWithIds$<INotification>("notifications", ref => ref.where('to', 'array-contains-any', [this.currentUser.uid]).orderBy("timestamp", "desc").limit(10).startAfter(id)).subscribe(resp => {
      this.notifications.push(...resp);
      event.target.complete();
    }, err => {
      console.log('err', err);
      event.target.complete();
    });
  }

}
