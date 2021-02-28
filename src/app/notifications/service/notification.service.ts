import { Injectable, Injector } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
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
    if(!uid) {
      return;
    }
    return new Promise(async (resolve, reject) => {
      this.firestoreService.colWithIds$<INotification>("notifications", ref => ref.where('to', 'array-contains-any', [uid]).orderBy("timestamp", "desc").limit(10)).subscribe(resp => {
        this.notifications = [];
        this.unreadCounter = 0;
        console.log(resp);
        resp.forEach(async (notification) => {

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
        });
        if(resp.length === 0) {
          resolve([]);
        }
      }, err => {
        console.log('err', err);
        reject(err);
      });
    });
  }

  private loadNotificationsPromise(uid: string) {
    if(!uid) {
      return;
    }
    return new Promise(async (resolve, reject) => {
      this.firestoreService.colWithIds$<INotification>("notifications", ref => ref.where('to', 'array-contains-any', [uid])).subscribe(resp => {
        this.notifications = [];
        this.unreadCounter = 0;
        console.log(resp);
        resp.forEach(async (notification) => {

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
        });
        if(resp.length === 0) {
          resolve([]);
        }
      }, err => {
        console.log('err', err);
        reject(err);
      });
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

  public getUpdateSpecificDoc(id: string): Observable<IFeed> {
    return this.firestoreService.getSpecificDoc<IFeed>(`feed/${id}`);
  }


  deleteAll(notifications: any, currentUser) {
    let notificationsFound = [];
    if(notifications.length === 0){
      return;
    }
    return new Promise((resolve, reject) => {
      this.loadingService.presentProcessingLoadingMsg(`Fetching Notifications....`);
      this.loadNotificationsPromise(currentUser.uid).then((resp: any[]) => {
        console.log('fetched notifications',resp);
        notificationsFound = resp;
        notifications = resp;
        this.loadingService.dismissLoader();
        this.loadingService.presentProcessingLoadingMsg(`Deleting ${(notifications.length - 1)} notifications`);
  
        notificationsFound.forEach(async (item, index) => {
          if (!item.deletedBy || !item.deletedBy.includes(currentUser.uid)) {
            if (item.deletedBy) {
              item.deletedBy.push(currentUser.uid);
            } else {
              let arr: string[] = [];
              arr.push(currentUser.uid);
              item.deletedBy = arr;
            }
            if (item.type !== 1) {
              console.log("!=1");
              this.firestoreService.delete(`notifications/${item.id}`).then(
                () => {
                  console.log('deleted != 1', index, (notifications.length - 1), (notificationsFound.length - 1));
                  if (index === (notifications.length - 1)) {
                    this.loadingService.dismissLoader();
                    this.isFound = false;
                    console.log("completed delete");
                    resolve(true);
                  }
                },
                (err) => this.loadingService.dismissLoader()
              );
            } else {
              console.log("==1");
              const toArr = item.to;
              if(toArr.indexOf(currentUser.uid) > -1) {
                toArr.splice(toArr.indexOf(currentUser.uid), 1);
              }
              this.firestoreService
              .update(`notifications/${item.id}`, { to: toArr })
              .then(
                () => {
                  if (index === (notifications.length - 1)) {
                    this.loadingService.dismissLoader();
                    this.isFound = false;
                    resolve(true);
                  }
                },
                (err) => {
                  this.loadingService.dismissLoader();
                  this.toast("Error Occurred while deleting");
                  reject(false);
                }
              );
            }
          } else {
            console.log('not deletedBy found');
            const toArr = item.to;
              if(toArr.indexOf(currentUser.uid) > -1) {
                toArr.splice(toArr.indexOf(currentUser.uid), 1);
              }
              this.firestoreService
              .update(`notifications/${item.id}`, { to: toArr })
              .then(
                () => {
                  if (index === (notifications.length - 1)) {
                    this.loadingService.dismissLoader();
                    this.isFound = false;
                    resolve(true);
                  }
                },
                (err) => {
                  this.loadingService.dismissLoader();
                  this.toast("Error Occurred while deleting");
                  reject(false);
                }
              );
          }
        });
      });
    });
  }


}
