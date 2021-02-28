
//import * as Constants from '../../config/constants';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AboutProvider {

  private snapshotChangesSubscription: any;

  constructor(public afs: AngularFirestore) {}

  getAbout(){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('about').valueChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  sendContact(val){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('contacts').add(val).then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

}
