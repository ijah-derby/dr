import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireDatabase } from '@angular/fire/database';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import * as firebase from "firebase/app";
import { LoaderService } from './loader.service';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { CommonService } from 'src/shared/services/common/common.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private profilePhotoOptions: CameraOptions = {
    quality: 50,
    targetWidth: 384,
    targetHeight: 384,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true
  };

  private photoMessageOptions: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true,
    allowEdit: true
  };

  private groupPhotoOptions: CameraOptions = {
    quality: 50,
    targetWidth: 384,
    targetHeight: 384,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true
  };


  constructor(
    public angularfire: AngularFireDatabase,
    public loadingProvider: LoaderService,
    public camera: Camera,
    public mediaCapture: MediaCapture,
    private firestore: FirestoreService,
    private commonService: CommonService,
    public file: File) {
    console.log("Initializing Image Provider");
  }

  // Function to convert dataURI to Blob needed by Firebase
  imgURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: mimeString
    });
  }

  // Generate a random filename of length for the image to be uploaded
  generateFilename() {
    var length = 8;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + ".jpg";
  }

  // Set ProfilePhoto given the user and the cameraSourceType.
  // This function processes the imageURI returned and uploads the file on Firebase,
  // Finally the user data on the database is updated.
  setProfilePhoto(user, sourceType) {
    console.log(user);
    this.profilePhotoOptions.sourceType = sourceType;
    this.loadingProvider.presentProcessingLoading();
    // Get picture from camera or gallery.
    this.camera.getPicture(this.profilePhotoOptions).then((imageData) => {
      // Process the returned imageURI.
      let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
      let metadata = {
        'contentType': imgBlob.type
      };
      let name = this.generateFilename();
      let dpStorageRef = firebase.storage().ref().child('images/' + user.userId + '/' + name);
      // Generate filename and upload to Firebase Storage.
      dpStorageRef.put(imgBlob, metadata).then((snapshot) => {
        // Delete previous profile photo on Storage if it exists.
        // this.deleteImageFile(user.img);
        // URL of the uploaded image!
        console.log(snapshot);


        dpStorageRef.getDownloadURL().then(res => {
          console.log(res);
          let url = res;

          let profile = {
            displayName: user.name,
            photoURL: url
          };
          // Update Firebase User.
          firebase.auth().currentUser.updateProfile(profile)
            .then((success) => {
              // Update User Data on Database.
              this.angularfire.object('/accounts/' + user.userId).update({
                img: url
              }).then((success) => {
                this.loadingProvider.dismissLoader();
                this.loadingProvider.showToast("Profile Updated");
              }).catch((error) => {
                console.log(error);
                this.loadingProvider.dismissLoader();
                this.loadingProvider.showToast("Something went wrong");
              });
            })
            .catch((error) => {
              console.log(error);
              this.loadingProvider.dismissLoader();
              this.loadingProvider.showToast("Something went wrong");
            });

        });



      }).catch((error) => {
        console.log(error);
        this.loadingProvider.dismissLoader();
        this.loadingProvider.showToast("Something went wrong");
      });
    }).catch((error) => {
      this.loadingProvider.dismissLoader();
    });
  }

  // Upload and set the group object's image.
  setGroupPhoto(group, sourceType) {
    this.groupPhotoOptions.sourceType = sourceType;
    // this.loadingProvider.presentProcessingLoading();
    // Get picture from camera or gallery.
    this.camera.getPicture(this.groupPhotoOptions).then((imageData) => {
      // Process the returned imageURI.
      let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
      let metadata = {
        'contentType': imgBlob.type
      };

      let name = this.generateFilename();
      let groupStorageRef = firebase.storage().ref().child('images/' + firebase.auth().currentUser.uid + '/' + name);
      groupStorageRef.put(imgBlob, metadata).then((snapshot) => {
        // this.deleteImageFile(group.img);
        // URL of the uploaded image!
        groupStorageRef.getDownloadURL().then(url => {
          group.img = url;
          console.log('group', group);
          this.loadingProvider.dismissLoader();
        })

      }).catch((error) => {
        this.loadingProvider.dismissLoader();
        this.loadingProvider.showToast("Something went wrong");
      });
    }).catch((error) => {
      this.loadingProvider.dismissLoader();
    });
  }

  // Set group photo and return the group object as promise.
  setGroupPhotoPromise(group, sourceType): Promise<any> {
    return new Promise(resolve => {
      this.groupPhotoOptions.sourceType = sourceType;
      this.loadingProvider.presentProcessingLoading();
      // Get picture from camera or gallery.
      this.camera.getPicture(this.groupPhotoOptions).then((imageData) => {
        // Process the returned imageURI.
        let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        let uploadRef = firebase.storage().ref().child('images/' + firebase.auth().currentUser.uid + '/' + this.generateFilename());

        uploadRef.put(imgBlob, metadata).on('state_changed', (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.loadingProvider.showProgress(Math.round(progress) + " %");
        }, () => {
          this.loadingProvider.dismissLoader();
          console.log("Failed");
          this.loadingProvider.showToast("Failed Uploading, please try again")
        }, () => {
          this.loadingProvider.dismissLoader();
          this.loadingProvider.showToast("Uploaded successfully")
          uploadRef.getDownloadURL().then(url => {
            resolve(url);
          })
        });

      }).catch((error) => {
        this.loadingProvider.dismissLoader();
      });
    });
  }

  //Delete the image given the url.
  deleteImageFile(path) {
    var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
    firebase.storage().ref().child('images/' + firebase.auth().currentUser.uid + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

  //Delete the user.img given the user.
  deleteUserImageFile(user) {
    var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
    firebase.storage().ref().child('images/' + user.userId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

  // Delete group image file on group storage reference.
  deleteGroupImageFile(groupId, path) {
    var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
    firebase.storage().ref().child('images/' + groupId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

  // Upload photo message and return the url as promise.
  uploadPhotoMessage(conversationId, sourceType): Promise<any> {
    return new Promise((resolve, reject) => {
      this.photoMessageOptions.sourceType = sourceType;
      this.loadingProvider.presentProcessingLoading();
      // Get picture from camera or gallery.
      this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
        // Process the returned imageURI.
        let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        // Generate filename and upload to Firebase Storage.
        let uploadRef = firebase.storage().ref().child('images/' + conversationId + '/' + this.generateFilename());

        // uploadRef.put(imgBlob, metadata).on('state_changed', (snapshot) => {
        //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //   this.loadingProvider.showProgress(Math.round(progress) + " %");
        // }, () => {
        //   this.loadingProvider.dismissLoader();
        //   console.log("Failed");
        //   this.loadingProvider.showToast("Failed Uploading, please try again")
        // }, () => {
        //   this.loadingProvider.dismissLoader();
        //   this.loadingProvider.showToast("Uploaded successfully")
        //   uploadRef.getDownloadURL().then(url => {
        //     resolve(url);
        //   })
        // });
        this.firestore.uploadImage(imageData, new Date().getTime().toString() + '.png', 'chat-images').then(resp => {
          this.loadingProvider.dismissLoader();
          resolve(resp);
        })
      }).catch((error) => {
        this.loadingProvider.dismissLoader();
        reject(error);
      });
    });
  }

  // Upload group photo message and return a promise as url.
  uploadGroupPhotoMessage(groupId, sourceType): Promise<any> {
    return new Promise(resolve => {
      this.photoMessageOptions.sourceType = sourceType;
      this.loadingProvider.presentProcessingLoading();
      // Get picture from camera or gallery.
      this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
        // Process the returned imageURI.
        let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        // Generate filename and upload to Firebase Storage.
        let uploadRef = firebase.storage().ref().child('images/' + groupId + '/' + this.generateFilename());

        uploadRef.put(imgBlob, metadata).on('state_changed', (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.loadingProvider.showProgress(Math.round(progress) + " %");
        }, () => {
          this.loadingProvider.dismissLoader();
          console.log("Failed");
          this.loadingProvider.showToast("Failed Uploading, please try again")
        }, () => {
          this.loadingProvider.dismissLoader();
          this.loadingProvider.showToast("Uploaded successfully")
          uploadRef.getDownloadURL().then(url => {
            resolve(url);
          })
        });

      }).catch((error) => {
        this.loadingProvider.dismissLoader();
      });
    });
  }
  uploadGroupVideoMessage(groupId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.commonService.getVideo().then((url) => {
        let videoUrl = url;
        videoUrl = this.commonService.videoBase64;
        this.firestore.uploadVideoString(videoUrl, 'DontRamp_chat_' + new Date().getTime()).then(url => {
          this.loadingProvider.dismissLoader();
          resolve(url);
        }, err => {
          this.loadingProvider.dismissLoader();
        })
      }, err => {
        this.loadingProvider.dismissLoader();
      });
      // this.mediaCapture.captureVideo().then(data => {
      //   let videoUrl = data[0].fullPath;
      //   console.log("video path: " + videoUrl);
      //   let x = videoUrl.split("/");
      //   let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
      //   let name = x[x.length - 1];
      //   console.log(filepath + " - " + name);
      //   this.file.readAsArrayBuffer(filepath, name).then(success => {
      //     console.log(success);
      //     let blob = new Blob([success], { type: "video/mp4" });
      //     console.log(blob);

      //     resolve(blob);

      //     // let uploadRef = firebase.storage().ref().child('videos/' + groupId + "/" + name);

      //     // uploadRef.put(blob).on('state_changed', (snapshot) => {
      //     //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     //   this.loadingProvider.showProgress(Math.round(progress) + " %");
      //     // }, () => {
      //     //   this.loadingProvider.dismissLoader();
      //     //   console.log("Failed");
      //     //   this.loadingProvider.showToast("Failed Uploading, please try again")
      //     // }, () => {
      //     //   this.loadingProvider.dismissLoader();
      //     //   this.loadingProvider.showToast("Uploaded successfully")
      //     //   uploadRef.getDownloadURL().then(url => {
      //     //     resolve(url);
      //     //   })
      //     // });

      //   });
      // }, err => {
      //   this.loadingProvider.dismissLoader();
      //   console.log("Media Err = " + err);
      //   reject(null);
      // });
    });
  }

  uploadVideoMessage(conversationId): Promise<any> {
    return new Promise(resolve => {
      this.loadingProvider.presentProcessingLoading();
      this.commonService.getVideo().then((url) => {
        let videoUrl = url;
        videoUrl = this.commonService.videoBase64;
        this.firestore.uploadVideoString(videoUrl, 'DontRamp_chat_' + new Date().getTime()).then(url => {
          this.loadingProvider.dismissLoader();
          resolve(url);
        }, err => {
          this.loadingProvider.dismissLoader();
        })
      }, err => {
        this.loadingProvider.dismissLoader();
      });
      // this.mediaCapture.captureVideo().then(data => {
      //   let videoUrl = data[0].fullPath;
      //   console.log("video path: " + videoUrl);
      //   let x = videoUrl.split("/");
      //   let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
      //   let name = x[x.length - 1];
      //   console.log(filepath + " - " + name);
      //   this.file.readAsArrayBuffer(filepath, name).then(success => {
      //     console.log(success);
      //     let blob = new Blob([success], { type: "video/mp4" });
      //     console.log(blob);
      //     // let timestamp = (Math.floor(Date.now() / 1000)).toString();

      //     let uploadRef = firebase.storage().ref().child('videos/' + name);

      //     uploadRef.put(blob).on('state_changed', (snapshot) => {
      //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //       this.loadingProvider.showProgress(Math.round(progress) + " %");
      //     }, () => {
      //       this.loadingProvider.dismissLoader();
      //       console.log("Failed");
      //       this.loadingProvider.showToast("Failed Uploading, please try again")
      //     }, () => {
      //       this.loadingProvider.dismissLoader();
      //       this.loadingProvider.showToast("Uploaded successfully")
      //       uploadRef.getDownloadURL().then(url => {
      //         resolve(url);
      //       })
      //     });


      //   });
      // }, err => {
      //   this.loadingProvider.dismissLoader();
      //   console.log("Media Err = " + err);
      // });
    });
  }
}
