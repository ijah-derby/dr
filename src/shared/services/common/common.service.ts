import { HttpClient } from '@angular/common/http';
import { ElementRef, Inject, Injectable, Injector } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators';
import {AuthService} from '../../../pages/auth/services/auth/auth.service';
import {Extender} from '../../helpers/extender';
import {SocialShareComponent} from '../../modals/social-share/social-share.component';
import { FirestoreService } from '../firestore/firestore.service';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends Extender {
  public cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  public countries: any[] = [];
  public videoBase64: any;

  constructor(
    protected injector: Injector,
    @Inject(HttpClient) protected http: HttpClient,
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private camera: Camera,
    private callNumber: CallNumber,
    private imagePicker: ImagePicker,
    private socialSharing: SocialSharing,
    private diagnostic: Diagnostic,
    private file: File,
    private webView: WebView,
    private base64: Base64
  ) {
    super(injector);
  }

  /* get list of countries from free api */
  public getCountries(): Observable<any> {
    if (this.countries.length === 0) {
      return this.http.get<any[]>('https://restcountries.eu/rest/v2/all').pipe(
        map((res) => {
          this.countries = res;
          return res;
        })
      );
    } else {
      return of(this.countries);
    }
  }

  /* search country by name */
  public searchCountry(search): Observable<any> {
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/name/' + search).pipe(
      map((res) => {
        return res;
      })
    );
  }

  /** call user method checks if the device supports native and uses native call number function.
   * otherwise pass reference to <a href="tel:" and access click event to make a browser call
   */
  public async callUser(mobile: string, el: ElementRef) {
    if (mobile) {
      if ((window as any).cordova) {
        await this.callNumber.isCallSupported();
        return await this.callNumber.callNumber(mobile, false);
      } else {
        el.nativeElement.click();
      }
    } else {
      this.toast('User does not have a phone number');
    }
  }

  /** checks if the device supports native and uses native share function
   * otherwise using open social share component
   */
  public async share(message: string, subject?: string, file?: string | string[], url?: string) {
    if ((window as any).cordova) {
      return await this.socialSharing
        .share(message, subject, file, url)
        .then(() => this.toast(this.translate.instant('feed-component.share-confirm')));
    } else {
      const modal = await this.openModal(SocialShareComponent, url, 'custom-modal');
      modal.present();
    }
  }

  public isExternalStorageAuthorized(): Promise<boolean> {
    return this.diagnostic.isExternalStorageAuthorized();
  }

  public async requestExternalStoragePermission(): Promise<boolean> {
    const authorized = await this.isExternalStorageAuthorized();
    if (!authorized) {
      const status = await this.diagnostic.requestExternalStorageAuthorization();
      switch (status) {
        case this.diagnostic.permissionStatus.NOT_REQUESTED:
          return Promise.resolve(true);
        case this.diagnostic.permissionStatus.GRANTED:
          return Promise.resolve(true);
        case this.diagnostic.permissionStatus.DENIED_ONCE:
          return this.requestExternalStoragePermission();
        case this.diagnostic.permissionStatus.DENIED_ALWAYS:
          return this.requestExternalStoragePermission();
      }
    } else {
      return Promise.resolve(true);
    }
  }

  public isCameraAuthorized(): Promise<boolean> {
    return this.diagnostic.isCameraAuthorized();
  }

  public async requestCameraPermission(): Promise<boolean> {
    const authorized = await this.isCameraAuthorized();
    if (!authorized) {
      const status = await this.diagnostic.requestCameraAuthorization();
      switch (status) {
        case this.diagnostic.permissionStatus.NOT_REQUESTED:
          return Promise.resolve(true);
        case this.diagnostic.permissionStatus.GRANTED:
          return Promise.resolve(true);
        case this.diagnostic.permissionStatus.DENIED_ONCE:
          return this.requestCameraPermission();
        case this.diagnostic.permissionStatus.DENIED_ALWAYS:
          return this.requestCameraPermission();
      }
    } else {
      return Promise.resolve(true);
    }
  }
  /** specify which native library to use to get images.
   * if multiple images, use imagePicker library, if camera, use camera library
   */
  public async getPictures(type: number, multiple = false): Promise<string | any> {
    if (!multiple) {
      return await this.getPicturesNative(type);
    } else {
      const requestExternalStoragePermissionStatus = await this.requestExternalStoragePermission();
      if (requestExternalStoragePermissionStatus) {
        return await this.getPicturesFromLibrary();
      } else {
        return [];
      }
    }
  }

  public async getVideo() {
    return new Promise((resolve, reject) => {
      let retrievedFile;
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        mediaType: this.camera.MediaType.VIDEO
      };
  
      return this.camera.getPicture(options)
        .then( async (videoUrl) => {
          console.log('video url', videoUrl);
         
          if (videoUrl) {
            const filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
            let dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
            dirpath = dirpath.includes('file://') ? dirpath : 'file://' + dirpath;
            
            try {
              const dirUrl = await this.file.resolveDirectoryUrl(dirpath);
              retrievedFile = await this.file.getFile(dirUrl, filename, {});
              
              console.log('retrieved file', retrievedFile);
              let fileObj = await this.getFile(retrievedFile) as any;
              console.log('fileObj', fileObj);
  
              this.getBase64(fileObj).then((resp: any) => {
                if(resp) {
                  this.videoBase64 = resp;
                  let sV = this.webView.convertFileSrc(retrievedFile.nativeURL);
                  // sV = await this.toBase64(sV) as any;
                  console.log('sV is -->', sV);
                  resolve(sV);
                } else {
                  this.toast("Error in loading video from gallery");
                  reject('error in getting video');
                }
              }, err => {
                reject(err);
              });
              // return retrievedFile.file( async data => {
              //   console.log('data', data);
                
              // });
            } catch (err) {
              console.log('error 1', err);
              reject(err);
            }
          } else {
            reject("video url not found");
          }
        },
        (err) => {
          console.log('err2', err);
          reject(err);
        });
    });
  }
  private convertToBase64(url: any) {
    this.base64.encodeFile(url).then((base64File: string) => {
      console.log('base64 1',base64File);
      this.videoBase64 = base64File;
    }, (err) => {
      console.log(err);
    });
  }

  /* get files from browser file input and convert to images and resolve all */
  public async getImagesFromFiles(event: any) {
    let reads = [];
    const images = Array.prototype.slice.call(event.target.files);
    if (images && images.length > 0) {
      reads = images.map((element) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = (e) => {
            resolve((e.target as any).result);
          };
          return reader.readAsDataURL(element);
        });
      });
      const _images = await Promise.all(reads);
      return _images;
    }
  }

  public async getVideoFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onload = function(e) { 
          console.log('base64',(e.target as any).result);
          resolve((e.target as any).result); 
        };
        return reader.readAsDataURL(event.target.files[0]);
      });
    }
  }

  /* get single image from camera or library and append base64 string text and resolve */
  private async getPicturesNative(type: number) {
    this.cameraOptions.sourceType = type;
    this.cameraOptions.quality = 20;
    return await new Promise<string | any>((resolve, reject) => {
      this.camera
        .getPicture(this.cameraOptions)
        .then((results: string) => {
          resolve('data:image/jpeg;base64,' + results);
        })
        .catch((err) => reject(err));
    });
  }

  /* get images from library and append base64 string text and resolve */
  private async getPicturesFromLibrary(): Promise<string[] | any> {
    const options = {
      outputType: 1,
      quality: 20,
      maximumImagesCount: 5
    };
    return await new Promise<string[] | any>((resolve, reject) => {
      this.imagePicker
        .getPictures(options)
        .then((results) => {
          resolve(results.map((item: string) => 'data:image/jpeg;base64,' + item));
        })
        .catch((err) => {
          reject(err);
          this.toast('fail' + err);
        });
    });
  }


  async getFile(fileEntry: any) {
    try {
      return await new Promise((resolve, reject) => fileEntry.file(resolve, reject));
    } catch (err) {
      console.log(err);
    }
  }


  getBase64(file) {
    return new Promise((resolve, reject) => {
      const blob = file as Blob;
      console.log('MY FILE', file);
      console.log('MY BLOB', blob);
  
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = function () {
        console.log('helllllllllllooooooooooooo',reader.result);
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
        reject(false);
      };
    });
 }
 
}