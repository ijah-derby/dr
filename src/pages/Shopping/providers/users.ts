
//import * as Constants from '../../config/constants';

import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Observable } from 'rxjs-compat/Observable';
import * as firebase from 'firebase';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class UsersProvider {

  private snapshotChangesSubscription: any;

  downloadURL: Observable<string>;

  constructor(public afs: AngularFirestore, public facebook: Facebook, public alertCtrl: AlertController ) {}

  uploadAvt(file) {
    const randomId = Math.random().toString(36).substring(2);

    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child('/users/'+randomId).put(file);
     
    return new Promise<any>((resolve, reject) => {
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {},
        (error) => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.downloadURL = downloadURL;
            console.log('File available at', downloadURL);
            resolve(this.downloadURL);
          });
        }
      );
    });
  }


  loginUser(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email, password, fullname, phone = null, address = null ) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((newUser) => {
         
        console.log(JSON.stringify(newUser));
        
        resolve(newUser);

        let tempIndex = email.indexOf('@');

        this.snapshotChangesSubscription = this.afs.collection('users').add({
          username: email.slice(0, tempIndex),
          fullname: fullname,
          email: email,
          phone: (phone != null)? phone : '',
          address: (address != null)? address : '',
          avt: '',
          id_auth: newUser.user.uid
        })

      }, error =>{
        this.presentAlertErr(error);
      })
    })
  }

  facebookLogin(){
    return new Promise<any>((resolve, reject) => {
      this.facebook.login(['email']).then( response => {
        
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential).then( success => { 
          console.log("Firebase success: " + JSON.stringify(success)); 
          
          resolve(success);


          this.afs.collection('users', ref => ref.where('id_auth', '==', success.user.uid)).snapshotChanges().subscribe(snapshots => {

            if(snapshots.length <= 0){
              let tempIndex = success.user.email.indexOf('@');

              this.snapshotChangesSubscription = this.afs.collection('users').add({
                created: Date(),
                active: true,
                username: success.user.email.slice(0, tempIndex),
                fullname: success.user.displayName,
                email: success.user.email,
                phone: (success.user.phoneNumber != null)? success.user.phoneNumber : '',
                address: '',
                avt: success.user.photoURL,
                id_auth: success.user.uid
              })
            }

            this.snapshotChangesSubscription.unsubscribe();
          })

        })
      })
    }).catch((error) => { console.log(error) });
  }

  getUser(uid){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('users', ref => ref.where('id_auth', '==', uid)).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
        this.snapshotChangesSubscription.unsubscribe();
      })
    });
  }

  updateUser(id_user, val){
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('users').doc(id_user).update(val)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  resetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser() {
    return firebase.auth().signOut();
  }


  async presentAlertErr(err) {
    const alert = await this.alertCtrl.create({
      message: err,
      buttons: [{
        text: "Ok",
        role: 'cancel'
      }]
    });
    await alert.present();
  }

}
