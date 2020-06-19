
//import * as Constants from '../../config/constants';
// import { Observable } from 'rxjs-compat/Observable';
// import { AngularFirestore } from 'angularfire2/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class SettingsProvider {

  private snapshotChangesSubscription: any;

  constructor(public afs: AngularFirestore) {}

  getCurrency(){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('currencies').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    })
  }

  getGeneralSettings(){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('settings').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  getAboutSettings(){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('about').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  updateGeneral(value, key = null) {
    return new Promise<any>((resolve, reject) => {
      if(key == null){
        value.created = Date();
        this.snapshotChangesSubscription = this.afs.collection('settings').add(value).then(
          res => resolve(res),
          err => reject(err)
        )
      }else{
        value.updated = Date();
        this.snapshotChangesSubscription = this.afs.collection('settings').doc(key).update(value).then(
          res => resolve(res),
          err => reject(err)
        )
      }
    })
  }

  updateAbout(value, key = null){
    return new Promise<any>((resolve, reject) => {
      if(key == null){
        value.created = Date();
        this.snapshotChangesSubscription = this.afs.collection('about').add(value).then(
          res => resolve(res),
          err => reject(err)
        )
      }else{
        value.updated = Date();
        this.snapshotChangesSubscription = this.afs.collection('about').doc(key).update(value).then(
          res => resolve(res),
          err => reject(err)
        )
      }
    })
  }

}
