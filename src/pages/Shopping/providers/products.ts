
//import * as Constants from '../../config/constants';

import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ProductsProvider {

  private snapshotChangesSubscription: any;
  private temp: any;

  constructor(public afs: AngularFirestore) {
       const settings: firebase.firestore.Settings = { timestampsInSnapshots: true };
        afs.firestore.settings(settings);   
  }

  getProduct(start, jump){
    if(start !== null){
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.orderBy('name').startAfter(start).limit(jump)).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }else{
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.orderBy('name').limit(jump)).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }
  }

  getProductById(id_product){
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.where('id_pd', '==', id_product)).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
  }

  getProductByCat(start, jump, id_cat){
    if(start !== null){
      return new Promise<any>((resolve, reject) => {
        console.log(start);
        this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.where('id_cat', '<', id_cat).orderBy('id_cat').startAfter(start)).snapshotChanges()
        .subscribe(snapshots => {
          console.log(snapshots);
          resolve(snapshots);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }else{
      return new Promise<any>((resolve, reject) => {
        this.afs.collection(`products`).doc(id_cat).get().subscribe(doc => {
          if(doc.exists) {
            console.log(doc.data());
            resolve([doc.data()]);
          } else {
            resolve([]);
          }
        });
        // this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.where('id_cat', '==', id_cat).limit(jump)).snapshotChanges()
        // .subscribe(snapshots => {
        //   resolve(snapshots);
        //   this.snapshotChangesSubscription.unsubscribe();
        // })
      });
    }
  }

  getProductByOffer(start, jump){
    if(start !== null){
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.where('discount', '>', 0).orderBy('discount').startAfter(start).limit(jump)).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }else{
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.where('discount', '>', 0).limit(jump)).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }
  }

  getProductByName(start, jump, name_str){
    if(start !== null){
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.orderBy('name').startAfter(start)).snapshotChanges()
        .subscribe(snapshots => {
          let arr = new Array();
          snapshots.forEach(val =>{
            let temp = val.payload.doc.data()['name'];
            if(temp.startsWith(name_str)){
              arr = arr.concat(val);
            }
          })
          resolve(arr);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }else{
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.orderBy('name')).snapshotChanges()
        .subscribe(snapshots => {
          let arr = new Array();
          snapshots.forEach(val =>{
            let temp = val.payload.doc.data()['name'];
            if(temp.startsWith(name_str)){
              arr = arr.concat(val);
            }
          })
          resolve(arr);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }
  }

  getProductBySlide(limit, cat = null){
    if(cat != null){
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.where('id_cat', '==', cat).where('type', '==', 1).limit(limit)).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }else{
      return new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.where('type', '==', 1).limit(limit)).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
          this.snapshotChangesSubscription.unsubscribe();
        })
      });
    }
  }
  
  getProductByCreated(limit){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.orderBy('created').limit(limit)).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  getProductByRelated(tag){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('products', ref => ref.where('tag', '==', tag).limit(5)).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

}