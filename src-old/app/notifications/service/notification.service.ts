import { Injectable, Injector } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { IFeed } from "../../../pages/feed/models/feed";
import { INotification } from "../../../pages/messages/models/message";
import { Extender } from "../../../shared/helpers/extender";
import { FirestoreService } from "../../../shared/services/firestore/firestore.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { resolve } from "url";
import { AuthService } from "src/pages/auth/services/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class NotificationService extends Extender {

  isFound = true;
  public notifications: INotification[];
  public unreadCounter = 0;

  constructor(
    private firestoreService: FirestoreService,
    private injector: Injector,
    private afs: AngularFirestore,
    private authService: AuthService
  ) {
    super(injector);
  }

  public getNotifications(uid: string) {
    return new Promise(async (resolve, reject) => {
      // let currentUser = await this.authService.getUser();
      let friends: any;
      // console.log("current user", currentUser.uid);
      this.firestoreService.colWithIds$<INotification>("notifications", ref => ref.where('to', 'array-contains-any', [uid]).orderBy("timestamp", "desc").limit(10)).subscribe(resp => {
        this.notifications = [];
        this.unreadCounter = 0;
        console.log(resp);
        resp.forEach(async (notification) => {
          // let notification = item.payload.doc.data() as INotification;

          if (notification.type === 1) {
            notification.seenBy = !notification.seenBy
              ? []
              : notification.seenBy;
          }
          notification.deletedBy = !notification.deletedBy
            ? []
            : notification.deletedBy;
          notification.postPhoto = !notification.postPhoto
            ? null
            : notification.postPhoto;
          this.notifications.push(notification);
          resolve(this.notifications);

          // if (notification.to && notification.to.indexOf(uid) > -1) {
           
          // }
        });
      }, err => {
        console.log('err', err);
        reject(err);
      });
      // this.afs
      //   .collection("notifications", (ref) => ref.orderBy("timestamp", "desc"))
      //   .snapshotChanges()
      //   .subscribe((resp) => {
      //     this.notifications = [];
      //     this.unreadCounter = 0;
      //     resp.forEach(async (item) => {
      //       let notification = item.payload.doc.data() as INotification;

      //       if (notification.to && notification.to.indexOf(uid) > -1) {
      //         if (notification.type === 1) {
      //           notification.seenBy = !notification.seenBy
      //             ? []
      //             : notification.seenBy;
      //         }
      //         notification.deletedBy = !notification.deletedBy
      //           ? []
      //           : notification.deletedBy;
      //         notification.postPhoto = !notification.postPhoto
      //           ? null
      //           : notification.postPhoto;
      //         this.notifications.push(notification);
      //         resolve(this.notifications);
      //       }
      //     });
      //     // resolve(this.notifications);
      //     // this.getUnreadCount(this.notifications, uid);
      //   });
    });
  }

  public getUnreadCount(notifications: INotification[], uid) {
    this.unreadCounter = 0;
    notifications.forEach((item: INotification) => {
      if (!item.deletedBy.includes(uid)) {
        if (item.type === 1 || (item.to.indexOf(uid) > -1 && item.by !== uid)) {
          if (
            (item.type === 1 && item.seenBy.indexOf(uid) === -1) ||
            (item.type !== 1 && (item.seen === 0 || item.seen === 2))
          ) {
            this.unreadCounter = this.unreadCounter + 1;
          }
        }
      }
    });
    return this.unreadCounter;
  }
  // public getNotificationCount(uid: string) {
  //  this.notifications.map((notifications: INotification[]) => {
  //     let counter = 0;
  //     notifications.forEach((item: INotification) => {
  //       if (!item.deletedBy.includes(uid)) {
  //         if (
  //           item.type === 1 ||
  //           (item.to.indexOf(uid) > -1 && item.by !== uid)
  //         ) {
  //           if (
  //             (item.type === 1 && item.seenBy.indexOf(uid) === -1) ||
  //             (item.type !== 1 && (item.seen === 0 || item.seen === 2))
  //           ) {
  //             counter = counter + 1;
  //           }
  //         }
  //       }
  //     });
  //     return this.notifications;
  //     // return counter;
  //   });
  // }

  public getUpdateSpecificDoc(id: string): Observable<IFeed> {
    return this.firestoreService.getSpecificDoc<IFeed>(`feed/${id}`);
  }


  deleteAll(notifications, currentUser) {
    let notificationsFound = [];
    this.loadingService.presentProcessingLoading();
    notifications.forEach((item, index) => {
      if (!item.deletedBy.includes(currentUser.uid)) {
        if (item.deletedBy) {
          item.deletedBy.push(currentUser.uid);
        } else {
          let arr: string[] = [];
          arr.push(currentUser.uid);
          item.deletedBy = arr;
        }
        if (item.type !== 1) {
          this.firestoreService.delete(`notifications/${item.id}`).then(
            () => {
              this.loadingService.dismissLoader();
            },
            (err) => this.loadingService.dismissLoader()
          );
          if (index === notifications.length - 1) {
            this.loadingService.dismissLoader();
            this.isFound = false;
            console.log("completed delete");
          }
        } else {
          this.firestoreService
            .update(`notifications/${item.id}`, { deletedBy: item.deletedBy })
            .then(
              () => {
                console.log("deleted " + index);
                this.loadingService.dismissLoader();
              },
              (err) => {
                this.loadingService.dismissLoader();
                this.toast("Error Occurred while deleting");
              }
            );
          if (index === notifications.length - 1) {
            this.loadingService.dismissLoader();
            this.isFound = false;
          }
        }
      }
    });
  }
}
