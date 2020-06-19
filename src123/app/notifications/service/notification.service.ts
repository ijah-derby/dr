import { Injectable, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { Extender } from 'src/shared/helpers/extender';
import { INotification } from 'src/pages/messages/models/message';
import { switchMap, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends Extender {

  notifications: INotification[];

  constructor(private firestoreService: FirestoreService, private injector: Injector) {
    super(injector);
   }

   getNotifications(uid: string) {
     return this.firestoreService.colWithIds$<INotification>('notifications', (ref: any) => ref.where('to', '==', uid)
     )
     .pipe(
       switchMap((_notification: INotification[]) => {
         const users = [];
         this.notifications = _notification.map((item) => {
          if (item.to == uid) {
            if (item.type == 1) {
              item.seenBy = !item.seenBy ? [] : item.seenBy;
             }
             return item;
          }
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
             userSeen: (item.type != 1 && item.seen == 1) || (item.type ==1 && item.seenBy.indexOf(uid) == 1) ? true : false,
             user: data[index] || null
           }
         }));
       })
     )
   }

}
