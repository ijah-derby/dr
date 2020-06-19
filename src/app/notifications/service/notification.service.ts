import { Injectable, Injector } from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IFeed } from '../../../pages/feed/models/feed'
import {INotification} from '../../../pages/messages/models/message';
import {Extender} from '../../../shared/helpers/extender';
import {FirestoreService} from '../../../shared/services/firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends Extender {

  public notifications: INotification[];
  public unreadCounter = 0;

  constructor(private firestoreService: FirestoreService, private injector: Injector) {
    super(injector);
   }

   public getNotifications(uid: string) {
     return this.firestoreService.colWithIds$<INotification>('notifications', (ref: any) =>
    ref.orderBy('timestamp', 'desc')
     )
     .pipe(
       switchMap((_notification: INotification[]) => {
         const users = [];
         this.notifications = _notification.map((item) => {
          if (item.type == 1 || item.to.indexOf(uid) > -1) {
            if (item.type === 1) {
              item.seenBy = !item.seenBy ? [] : item.seenBy;
             }
            return item;
          }
         });
         this.notifications = this.notifications.filter(item => {
           return item != null
         });
         this.notifications.forEach((item) => {
           users.push(this.firestoreService.doc$(`users/${item.by}`));
         });
         return combineLatest(users);
       }),
       map((data: any) => {
         return (this.notifications = this.notifications.map((item: INotification, index: number) => {
            return {
              ...item,
              userSeen: (item.type !== 1 && item.seen === 1) || (item.type === 1 && item.seenBy.indexOf(uid) === 1) ? true : false,
              user: data[index] || null
            }
         }));
       })
     )
   }

   public getUnreadCount(notifications: INotification[], uid) {
    this.unreadCounter = 0;
    notifications.forEach((item: INotification) => {
       if (item.type === 1 || (item.to.indexOf(uid) > -1 && item.by !== uid)) {
         if ((item.type === 1 && item.seenBy.indexOf(uid) === -1) || (item.type !== 1 && (item.seen === 0 || item.seen === 2))) {
            this.unreadCounter = this.unreadCounter + 1;
         }
       }
     });
    return this.unreadCounter;
   }
   public getNotificationCount( uid: string): Observable<number> {
      return this.getNotifications(uid).pipe(
          map((notifications: INotification[] ) => {
              let counter = 0;
              notifications.forEach((item: INotification) => {
                  if (item.type === 1 || (item.to.indexOf(uid) > -1 && item.by !== uid)) {
                      if ((item.type === 1 && item.seenBy.indexOf(uid) === -1) || (item.type !== 1 && (item.seen === 0 || item.seen === 2))) {
                          counter = counter + 1;
                      }
                  }
              });
              return counter;
          })
      )
   }

   public getUpdateSpecificDoc(id: string): Observable<IFeed> {
      return this.firestoreService.getSpecificDoc<IFeed>(`feed/${id}`)
   }
}
