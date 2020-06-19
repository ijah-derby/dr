
//import * as Constants from '../../config/constants';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class PostsProvider {

  private snapshotChangesSubscription: any;

  constructor(public afs: AngularFirestore) {}

  getPost(start, jump){
    if(start !== null){
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('posts', ref => ref.orderBy('name').startAfter(start).limit(jump)).valueChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }else{
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('posts', ref => ref.orderBy('name').limit(jump)).valueChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }
  }

  getPostByStar(){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('posts', ref => ref.where('highlight', '==', true)).valueChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  getPostByNew(){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('posts', ref => ref.orderBy('created', 'desc').limit(4)).valueChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  getPostByRelated(tag, name){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('posts', ref => ref.orderBy('name').limit(10)).valueChanges()
      .subscribe(snapshots => {
        let arr = new Array();
        snapshots.forEach(val =>{
          let temp = val['tag'];
          if(temp.startsWith(tag) && val['name'] != name){
            arr = arr.concat(val);
          }
        })
        resolve(arr);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

}
