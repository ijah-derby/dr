
//import * as Constants from '../../config/constants';
// import { Observable } from 'rxjs-compat/Observable';
// import { AngularFirestore } from 'angularfire2/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class OrdersProvider {

  private snapshotChangesSubscription: any;
  private temp: any;

  constructor(public afs: AngularFirestore) {}

  getOrders() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('orders').snapshotChanges().subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  getOrdersPending(id_user) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('orders', ref => ref.where('id_user', '==', id_user).where('active', '==', true)).snapshotChanges().subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  getOrdersSuccess(id_user, limit) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('orders', ref => ref.where('id_user', '==', id_user).where('active', '==', false).limit(limit)).snapshotChanges().subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  addOrders(data) {
    return new Promise<any>((resolve, reject) => {
      data.active = true;
      data.created = Date();
      this.snapshotChangesSubscription = this.afs.collection('orders').add(data).then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

}
