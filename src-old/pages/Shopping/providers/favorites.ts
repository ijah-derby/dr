
//import * as Constants from '../../config/constants';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FavoritesProvider {

  private snapshotChangesSubscription: any;
  private temp: any;

  constructor(private afs: AngularFirestore) {
 
  }

  getFavorites(){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('favorites').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  getFavoByIdPd(id_product){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.where('id_pd', '==', id_product)).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  getByUserId(uid){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('favorites', ref => ref.where('id_user', '==', uid)).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    })
  }


  favoritesAdd(id_product, id_user, key){
    return new Promise<any>((resolve, reject) => {
      if(key){
        this.snapshotChangesSubscription = this.afs.collection('favorites').doc(key).update({
          id_product: id_product,
          created: Date()
        }).then(
          res => resolve(res),
          err => reject(err)
        )
      }else{
        this.snapshotChangesSubscription = this.afs.collection('favorites').add({
          id_product: id_product,
          id_user: id_user,
          created: Date()
        }).then(
          res => resolve(res),
          err => reject(err)
        )
      }
    })
  }

}