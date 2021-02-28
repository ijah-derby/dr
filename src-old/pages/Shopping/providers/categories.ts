
//import * as Constants from '../../config/constants';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class CategoriesProvider {

  private snapshotChangesSubscription: any;

  constructor(public afs: AngularFirestore) {}

  getCat(){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('categories').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  getCatParent(){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('categories', ref => ref.where('id_parent', '==', '')).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  getCatChild(id_parent){
    
    return new Promise<any>((resolve, reject) => {
      // ref => ref.where('id_parent', '==', id_parent)
    //   this.snapshotChangesSubscription = this.afs.doc(`categories/${id_parent}`).snapshotChanges()
    //   .subscribe(snapshots => {
    //     resolve(snapshots);
    //     this.snapshotChangesSubscription.unsubscribe();
    //   })
    // });
    this.afs.collection(`categories`).doc(id_parent).get().subscribe(doc => {
      if(doc.exists) {
        console.log(doc.data());
        resolve([doc.data()]);
      } else {
        resolve([]);
      }
    });
   });
  }

}
