import { Injectable } from "@angular/core";
import {
  Action,
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists,
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebase from "firebase/app";
import { from, Observable, BehaviorSubject } from "rxjs";
import {
  expand,
  map,
  mergeMap,
  take,
  takeWhile,
  tap,
  finalize,
} from "rxjs/operators";
import { Upload } from "../../helpers/upload";
import { AlertController } from "@ionic/angular";
import { AuthService } from "src/pages/auth/services/auth/auth.service";

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  public progressMsg = "Please Wait...";
  public progressVal = new BehaviorSubject(0);
  public isProgress = false;
  private alert;

  /// **************
  /// Write Data
  /// **************
  /// Firebase Server Timestamp
  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
  constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
    private alertCtrl: AlertController
  ) {}

  /// **************
  /// Get a Reference
  /// **************

  public createId() {
    return this.afs.createId();
  }

  public col<T>({
    ref,
    queryFn,
  }: {
    ref: CollectionPredicate<T>;
    queryFn?: any;
  }): AngularFirestoreCollection<T> {
    return typeof ref === "string" ? this.afs.collection<T>(ref, queryFn) : ref;
  }

  public doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === "string" ? this.afs.doc<T>(ref) : ref;
  }

  /// **************
  /// Get Data
  /// **************

  public doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref)
      .snapshotChanges()
      .pipe(
        map(
          (
            doc: Action<
              DocumentSnapshotDoesNotExist | DocumentSnapshotExists<T>
            >
          ) => {
            return { id: doc.payload.id, ...(doc.payload.data() as T) };
          }
        )
      );
  }

  public docOnce$<T>(path: string) {
    return this.afs.doc(path).get().pipe(
      map((actions) => {
        return { ...actions.data() as any};
        // return actions.map(a => {
        //   const data: any = a.data() as T;
        //   const id = a.id;
        //   const doc = a;
        //   return {doc, id, ...data };
        // })
      })
    );
  }

  public col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col({ ref, queryFn })
      .snapshotChanges()
      .pipe(
        map((docs: Array<DocumentChangeAction<T>>) => {
          return docs.map((a: DocumentChangeAction<T>) =>
            a.payload.doc.data()
          ) as T[];
        })
      );
  }

  public colOnce$<T>(path: string, queryFn?) {
    return this.afs.collection(path, queryFn).get().pipe(
      map((actions) => {
        return actions.docs.map(a => {
          const data: any = a.data() as T;
          const id = a.id;
          const doc = a;
          return {doc, id, ...data };
        })
      })
    );
  }

  /// with Ids
  public colWithIds$<T>(
    ref: CollectionPredicate<T>,
    queryFn?
  ): Observable<any[]> {
    return this.col({ ref, queryFn })
      .snapshotChanges()
      .pipe(
        map((actions: Array<DocumentChangeAction<T>>) => {
          return actions.map((a: DocumentChangeAction<T>) => {
            const data: any = a.payload.doc.data() as T;
            const id = a.payload.doc.id;
            const doc = a.payload.doc;
            return { doc, id, ...data };
          });
        })
      );
  }

  /** set document update created and updated timestamp, use merge true to merge data if its an update */
  public set<T>(ref: DocPredicate<T>, data: any): Promise<void> {
    const timestamp = this.timestamp;
    return this.doc(ref).set(
      {
        ...data,
        updatedAt: timestamp,
        createdAt: timestamp,
      },
      { merge: true }
    );
  }

  /** update data and timestamp */
  public update<T>(ref: DocPredicate<T>, data: any): Promise<void> {
    return this.doc(ref).update({
      ...data,
      updatedAt: this.timestamp,
    });
  }

  public updateCounter<T>(ref: DocPredicate<T>, data: any): Promise<void> {
    return this.doc(ref).update({
      ...data,
    });
  }

  public delete<T>(ref: DocPredicate<T>): Promise<void> {
    return this.doc(ref).delete();
  }

  public add<T>(
    ref: CollectionPredicate<T>,
    data
  ): Promise<firebase.firestore.DocumentReference> {
    const timestamp = this.timestamp;
    return this.col({ ref }).add({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp,
    });
  }

  public async getUserFriends(uid: string) {
    return new Promise((resolve, reject) => {
      this.doc$(`friends/${uid}`).subscribe(
        (ref: any) => {
          resolve(ref);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  public geopoint(lat: number, lng: number): firebase.firestore.GeoPoint {
    return new firebase.firestore.GeoPoint(lat, lng);
  }

  /// If doc exists update, otherwise set
  public upsert<T>(ref: DocPredicate<T>, data: any): Promise<void> {
    const doc = this.doc(ref).snapshotChanges().pipe(take(1)).toPromise();

    return doc.then(
      (
        snap: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<T>>
      ) => {
        return snap.payload.exists
          ? this.update(ref, data)
          : this.set(ref, data);
      }
    );
  }

  /// *************
  /// Upload Data to Firestore
  /// *************

  /** configure storage name for image upload,
   * if image is a URI, encode to data_url and upload using putString function in firebase storage reference
   * if image isn't a URI just call putString without encoding
   */
  public uploadImage(
    imageURI: string,
    filename: string,
    store: string,
    isURI = false
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const name = `${store}/${filename}`;
      const storageRef = this.afStorage.storage.ref();
      const imageRef = storageRef.child(name);
      if (isURI) {
        console.log("isURI", imageURI);
        this.encodeImageUri(imageURI, (image64: string) => {
          this.uploadWithPutString(imageRef, image64, name, resolve, reject);
        });
      } else {
        console.log("no isURI");
        this.uploadWithPutString(imageRef, imageURI, name, resolve, reject);
      }
    });
  }

  /** upload a file to firebase and save file metadata in files document */
  public uploadFile(upload: Upload, store: string) {
    const storageRef = this.afStorage.storage.ref();
    const uploadTask = storageRef
      .child(`${store}/${upload.file.name}`)
      .put(upload.file);

    return uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
        upload.progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      }
    );
  }

  /** get token from download url, use token as id to file file in files collection,
   * delete file and use name from file doc to delete from storage
   */
  public async deleteUpload(url: string) {
    const token = this.getDownloadToken(url);
    if (token) {
      return this.doc$<{ name: string; url: string }>(
        `files/${token}`
      ).subscribe(async (file) => {
        await this.deleteFileData(token);
        return await this.deleteFileStorage(file.name);
      });
    }
  }

  /** encode uri to data url */
  public encodeImageUri(
    imageUri: string,
    callback: { (image64: any): void; (arg0: any): void }
  ) {
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    const img = new Image();
    img.onload = function () {
      const aux: any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  }

  /// **************
  /// Inspect Data
  /// **************

  public inspectDoc(ref: DocPredicate<any>): void {
    const tick = new Date().getTime();
    this.doc(ref)
      .snapshotChanges()
      .pipe(
        take(1),
        tap(
          (
            d: Action<
              DocumentSnapshotDoesNotExist | DocumentSnapshotExists<any>
            >
          ) => {
            const tock = new Date().getTime() - tick;
            console.log(`Loaded Document in ${tock}ms`, d);
          }
        )
      )
      .subscribe();
  }

  public inspectCol(ref: CollectionPredicate<any>): void {
    const tick = new Date().getTime();
    this.col({ ref })
      .snapshotChanges()
      .pipe(
        take(1),
        tap((c: Array<DocumentChangeAction<any>>) => {
          const tock = new Date().getTime() - tick;
          console.log(`Loaded Collection in ${tock}ms`, c);
        })
      )
      .subscribe();
  }

  /// **************
  /// Create and read doc references
  /// **************

  /// create a reference between two documents
  public connect(host: DocPredicate<any>, key: string, doc: DocPredicate<any>) {
    return this.doc(host).update({ [key]: this.doc(doc).ref });
  }

  /// returns a documents references mapped to AngularFirestoreDocument
  public docWithRefs$<T>(ref: DocPredicate<T>) {
    return this.doc$(ref).pipe(
      map((doc: T) => {
        for (const k of Object.keys(doc)) {
          if (doc[k] instanceof firebase.firestore.DocumentReference) {
            doc[k] = this.doc(doc[k].path);
          }
        }
        return doc;
      })
    );
  }

  /**
   * Delete a collection, in batches of batchSize. Note that this does
   * not recursively delete sub-collections of documents in the collection
   * from: https://github.com/AngularFirebase/80-delete-firestore-collections/blob/master/src/app/firestore.service.ts
   */
  public deleteCollection(path: string, batchSize: number): Observable<any> {
    const source = this.deleteBatch(path, batchSize);

    // expand will call deleteBatch recursively until the collection is deleted
    return source.pipe(
      expand((val) => this.deleteBatch(path, batchSize)),
      takeWhile((val) => val > 0)
    );
  }

  public getSpecificDoc<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc<T>(ref)
      .snapshotChanges()
      .pipe(
        take(1),
        map(
          (
            doc: Action<
              DocumentSnapshotDoesNotExist | DocumentSnapshotExists<T>
            >
          ) => {
            return { id: doc.payload.id, ...(doc.payload.data() as T) };
          }
        )
      );
  }

  /** upload image base64 string to firebase storage using putString method */
  private uploadWithPutString(
    imageRef: firebase.storage.Reference,
    imageURI: string,
    name: string,
    resolve: (value?: any) => void,
    reject: (reason?: any) => void
  ) {
    imageRef.putString(imageURI, "data_url").then(
      async (url) => {
        this.saveFileData({ name, url: await imageRef.getDownloadURL() });
        resolve(imageRef.getDownloadURL());
      },
      (err) => {
        reject(err);
      }
    );
  }

  /** upload image base64 string to firebase storage using putString method */
  public uploadVideoString(imageURI: string, name: string) {
    this.progressMsg = "Preparing Video...";
    const storageRef = this.afStorage.storage.ref();
    const imageRef = storageRef.child("videos").child(name);
    let task = imageRef.putString(imageURI, "data_url");

    // this.displayAlert();
    task.on(
      "state_changed",
      (snapshot) => {
        this.isProgress = true;
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.progressMsg = Math.trunc(progress) + "% uploaded...";
        this.progressVal.next(Math.trunc(progress));
        console.log(this.progressMsg);
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        this.isProgress = false;
        this.progressMsg = "Please wait...";
        this.progressVal.next(0);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          this.progressMsg = "Finishing...";
          this.isProgress = false;
          this.progressVal.next(0);
          console.log(this.progressMsg);
        });
      }
    );

    return task.then(
      async (url) => {
        // task.on('state_changed', snap => {
        //   console.log( (snap.bytesTransferred / snap.totalBytes) * 100);
        // });
        this.saveFileData({ name, url: await imageRef.getDownloadURL() });
        // this.alert.dismiss();
        return imageRef.getDownloadURL();
      },
      (err) => {
        console.log(err);
        this.isProgress = false;
        this.progressMsg = "Please wait...";
        this.progressVal.next(0);
        // this.alert.dismiss();
        return err;
      }
    );
  }

  private async displayAlert() {
    this.alert = await this.alertCtrl.create({
      header: "Video Uploading",
      message: "this.progressMsg",
      backdropDismiss: false,
    });
    this.alert.present();
  }

  /** get token from url query param */
  private getDownloadToken(url) {
    const urlParams = new URLSearchParams(url);
    return urlParams.get("token");
  }

  // add files details from the realtime db
  public saveFileData({ name, url }) {
    const token = this.getDownloadToken(url);

    return this.set(`files/${token}`, { name, url });
  }

  // Deletes the file details from the realtime db
  private async deleteFileData(key: string) {
    return await this.delete(`files/${key}`);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private async deleteFileStorage(name: string) {
    return await this.afStorage.storage.ref().child(`${name}`).delete();
  }

  // Detects documents as batched transaction
  private deleteBatch(path: string, batchSize: number): Observable<any> {
    const colRef = this.afs.collection(path, (ref) =>
      ref.orderBy("__name__").limit(batchSize)
    );

    return colRef.snapshotChanges().pipe(
      take(1),
      mergeMap((snapshot: Array<DocumentChangeAction<{}>>) => {
        // Delete documents in a batch
        const batch = this.afs.firestore.batch();
        snapshot.forEach((doc) => {
          batch.delete(doc.payload.doc.ref);
        });

        return from(batch.commit()).pipe(map(() => snapshot.length));
      })
    );
  }
}
