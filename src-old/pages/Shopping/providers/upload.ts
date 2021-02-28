
import { Injectable } from '@angular/core';
// import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
// import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class UploadProvider {

  uploadProgress: any;
  task: any;
  ref: any;
  
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private afStorage: AngularFireStorage, private db: AngularFirestore) { }

  upload(file, folderName) {
    const randomId = Math.random().toString(36).substring(2);

    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child('/'+folderName+'/'+randomId).put(file);
     
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

  // private deleteFileStorage(name: string) {
  //   const storageRef = firebase.storage().ref();
  //   storageRef.child(`${this.basePath}/${name}`).delete();
  // }
  
}