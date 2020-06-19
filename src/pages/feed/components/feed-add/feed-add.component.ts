import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { isArray } from 'util';
import {Extender} from '../../../../shared/helpers/extender';
import {ImagePreviewComponent} from '../../../../shared/modals/image-preview/image-preview.component';
import {CommonService} from '../../../../shared/services/common/common.service';
import {FirestoreService} from '../../../../shared/services/firestore/firestore.service';
import {IUser} from '../../../auth/helpers/model';
import {AuthService} from '../../../auth/services/auth/auth.service';
import { IFeed } from '../../models/feed';
import { FeedService } from '../../services/feed/feed.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProgressBarComponent } from 'src/app/pages/feed/progress-bar/progress-bar.component';

/**
 * allows the user to edit or add new post, browse, select and store images to firebase storage
 */
@Component({
  selector: 'app-feed-add',
  templateUrl: './feed-add.component.html',
  styleUrls: ['./feed-add.component.scss']
})
export class FeedAddComponent extends Extender implements OnInit {
  public currentUser: IUser;
  public feed: IFeed;
  public images: any = [];
  public tempImages: any = [];
  public more: boolean;
  public videoShare: boolean;
  public videoUrl: string;
  public feedOptions = [
        {
            icon: 'camera',
            click: () => {
                this.openImageOptions();
            },
            disable: false
        },
        {
            icon: 'check-square',
            click: () => {
                this.more = !this.more;
                if (this.more) {
                    this.feed.videoContent = '';
                }
                this.feedOptions[0].disable = false;
                this.videoShare = false;
            },
            disable: false
        },
        {
            icon: 'video',
            click: () => {
                this.more = false;
                this.videoShare = !this.videoShare;
                if ( this.videoShare) {
                    this.feed.subtitle = '';
                    this.feed.content = '';
                    this.feedOptions[0].disable = true;
                } else {
                    this.feedOptions[0].disable = false;
                }
            },
            disable: false
        }
    ];
  @ViewChild('fileInputButton', null) private fileInputButton: ElementRef;
  @ViewChild('videoInputButton', null) private videoInputButton: ElementRef;

  constructor(
    protected injector: Injector,
    private navParams: NavParams,
    private authService: AuthService,
    private commonService: CommonService,
    private feedService: FeedService,
    private firestoreService: FirestoreService,
    private afStorage: AngularFireStorage,
  ) {
    super(injector);
  }

  /** get current user, get id from navParam, if id present get data for feed, if no id set default data */
  public async ngOnInit() {
    this.currentUser = await this.authService.getUser();
    const id = this.navParams.get('data');
    if (!id) {
      this.feed = {
        id: this.firestoreService.createId(),
        content: '',
        images: [],
        subtitle: '',
        title: '',
        uid: this.currentUser.uid
      };
    } else {
      this.subscriptions.push(
        this.feedService.getPost(id, this.currentUser.uid).subscribe((feed) => {
          this.feed = feed;
          this.images = this.feed.images;
        })
      );
    }
  }

  /** open options for image upload */
  public async openImageOptions(): Promise<any> {
    const actionSheetCtrl = await this.actionSheetCtrl.create({
      header: this.translate.instant('feed-add-component.image-option-header'),
      buttons: [
        {
          text: 'Pick Video',
          handler: () => {
            this.getVideo();
          }
        },
        {
          text: this.translate.instant('feed-add-component.image-option-library'),
          handler: () => {
            this.getPictures(0, true);
          }
        },
        {
          text: this.translate.instant('feed-add-component.image-option-camera'),
          handler: () => {
            this.getPictures(1);
          }
        },
        {
          text: this.translate.instant('other.close'),
          role: 'cancel'
        }
      ]
    });

    await actionSheetCtrl.present();
  }

  /** open options on image selection, present actionsheet to delete or open image */
  public async doMoreOnImage(image: string, index: number): Promise<any> {
    const actionSheetCtrl = await this.actionSheetCtrl.create({
      header: this.translate.instant('other.options'),
      buttons: [
        {
          text: this.translate.instant('other.open-label'),
          handler: () => {
            this.openImage(image);
          }
        },
        {
          text: this.translate.instant('other.delete-label'),
          handler: () => {
            this.removeImage(index);
          }
        },
        {
          text: this.translate.instant('other.close'),
          role: 'cancel'
        }
      ]
    });

    await actionSheetCtrl.present();
  }

  /** used for browser image uploads, hooked up to input file type on change event */
  public detectFiles(event: any) {
    this.commonService.getImagesFromFiles(event).then((images) => {
      this.checkAndSaveImages(images);
    });
  }

   /** used for browser image uploads, hooked up to input file type on change event */
  public detectVideo(event: any) {
    this.commonService.getVideoFile(event).then((url: any) => {
      this.videoUrl = url;
      this.loading = false;
    });
  }

  public reset() {
    (this.videoInputButton.nativeElement as HTMLInputElement).value = null;
    this.videoUrl = null;
  }

  /** remove uploaded images */
  public removeImage(index: number): void {
    this.firestoreService.deleteUpload(this.images[index]);
    this.images.splice(index, 1);
  }

  /** preview image in modal */
  public async openImage(image: string) {
    const modal = await this.openModal(ImagePreviewComponent, image, 'custom-modal');
    modal.present();
  }

  public getYoutubeId(videoUrl: string): string {
    const [a, , b] = videoUrl
        .replace(/(>|<)/gi, '')
        .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (b !== undefined) {
        return b.split(/[^0-9a-z_-]/i)[0];
    } else {
        return a;
    }
  }

  /** save feed and feed images */
  public async save() {

      this.loading = true;
      if (!this.feed.images || (!this.feed.images && !isArray(this.feed.images))) {
          this.feed.images = [];
      }
      if (this.videoShare) {
          this.feed.images = [];
          this.tempImages = [];
      }

      if (this.feed.videoContent) {
          this.feed.videoContent = 'https://www.youtube.com/embed/' + this.getYoutubeId(this.feed.videoContent) + '?rel=0';
      }

      this.uploadImage(this.tempImages).then(async (images: string[]) => {
          console.log(images);
          this.feed.images = this.feed.images.concat(images);
          if(this.videoUrl) {
            this.uploadVideo();
            return;
          }
          await this.feedService.upsertPost(this.feed).then(
              (_data) => {
                  this.loading = false;
                  this.closeModal('save');
              },
              (error) => this.toast(error)
          );
      });
  }
  /**
   * get image using native camera plugin to retrieve from either camera or library of device
   * param type is a number that specifies whether to get from camera or from library
   * one image retrieved, upload to firebase storage. if error, display a toast with error message
   */
  private async getPictures(type: number, multiple = false) {
    let imageData = [];
    this.loading = true;
    if ((window as any).cordova) {
      // if on device use native plugins
      imageData = await this.commonService.getPictures(type, multiple);
      console.log('imgData', imageData);
      await this.checkAndSaveImages(imageData);
    } else {
      // if on device use browser file upload
      (this.fileInputButton.nativeElement as HTMLInputElement).click();
    }
  }

  private async getVideo() {
    this.loading = true;
    if ((window as any).cordova) {
      // if on device use native plugins
      this.commonService.getVideo().then(url => {
        this.videoUrl = url;
        console.log('videoURL', this.videoUrl);
      });
      this.loading = false;
    } else {
      // if on device use browser file upload
      (this.videoInputButton.nativeElement as HTMLInputElement).click();
    }
  }

  /** remove images from input file for browser only
   * store images or send a toast id no image found
   */
  private async checkAndSaveImages(imageData: any[] | string) {
    this.loading = false;
    (this.fileInputButton.nativeElement as HTMLInputElement).value = null;
    this.tempImages = [];
    if (!isArray(imageData)) {
        this.tempImages.push(imageData);
        this.images = this.images.concat(this.tempImages);
        console.log('na',this.images);
    } else {
        if (imageData.length > 0) {
            this.tempImages = imageData;
            this.images = this.images.concat(this.tempImages);
            console.log('arr',this.images);
        } else {
            this.toast(this.translate.instant('message-component.no-images-selected'));
        }
    }
  }

  /**
   * append base 64 string to image data, upload image data to firebase storage.
   * the upload function returns a download data which is then saved to images
   */
  private async uploadImage(imageData: string[]) {
    const read$ = [];
    console.log(this.images);
    this.images.forEach((i: string) => {
      console.log('i', i);
        read$.push(this.firestoreService.uploadImage(i, `${Date.now()}-${this.currentUser.uid}`, `feed-images-${this.feed.id}`));
    });

    try {
      const res = await Promise.all(read$);
      console.log(res);
      this.loading = false;
      return res;
    } catch (err) {
      return this.failPromise(err);
    }
  }

  public async uploadVideo() {

    this.loading = true;
    if ((window as any).cordova) {
      this.videoUrl = this.commonService.videoBase64;
    }
    
    console.log('videoURL', this.videoUrl);

    this.firestoreService.uploadVideoString(this.videoUrl, `${Date.now()}-${this.currentUser.uid}`).then(async url => {
      this.feed.videoUrl = url;
      await this.feedService.upsertPost(this.feed).then(
        (_data) => {
            this.loading = false;
            this.closeModal('save');
            console.log(this.feed.id);
        },
        (error) => {this.toast(error); this.loading = false;}
      );
    }, err => {
      this.loading = false;
      this.toast('Error in uploading video');
    });

  }

  private failPromise = (err: any) => {
    this.loading = false;
    this.toast(err);
  };
}
