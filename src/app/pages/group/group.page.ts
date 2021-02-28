import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController, IonContent, ModalController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ImageService } from 'src/app/services/image.service';
import { LoaderService } from 'src/app/services/loader.service';
import * as firebase from 'firebase/app';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { Camera } from '@ionic-native/camera/ngx';
import { CommonService } from 'src/shared/services/common/common.service';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { IUser } from 'src/pages/auth/helpers/model';
import { UploadProgressComponent } from 'src/app/component/upload-progress/upload-progress.component';
import { ImageModalComponent } from 'src/app/components/image-modal/image-modal.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

  // @ViewChild('content', null) content: ElementRef;
  @ViewChild(IonContent, null) contentArea: IonContent;

  title: any;
  groupId: any;
  message: any;
  messages: any;
  updateDateTime: any;
  subscription: any;
  messagesToShow: any;
  startIndex: any = -1;
  // Set number of messages to show.
  numberOfMessages = 10;
  currentUser: IUser;

  @ViewChild("fileInputButton", null) private fileInputButton: ElementRef;
  @ViewChild("videoInputButton", null) private videoInputButton: ElementRef;
  @ViewChild('videoPlayer', null) videoPlayer: ElementRef;
  // GroupPage
  // This is the page where the user can chat with other group members and view group info.
  constructor(
    private dataProvider: DataService,
    private modalCtrl: ModalController,
    private angularfire: AngularFireDatabase,
    private alertCtrl: AlertController,
    private imageProvider: ImageService,
    private loadingProvider: LoaderService,
    private camera: Camera,
    private actionSheet: ActionSheetController,
    private geolocation: Geolocation,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private firestore: FirestoreService,
    private commonService: CommonService,
    private authService: AuthService
  ) { 
    this.route.queryParamMap.subscribe(params => {
      this.groupId = params.get('groupId');
    })
  }

  async ngOnInit() {
    this.currentUser = await this.authService.getUser();
    setTimeout(() => {
      this.scrollBottom();
    }, 5000);
  }

  ionViewDidEnter() {
    // Get group details

    this.subscription = this.dataProvider.getGroup(this.groupId).subscribe((group: any) => {
      if (group) {
        this.title = group.name;
        // Get group messages
        this.dataProvider.getGroupMessages(group.id).subscribe((messagesRes: any) => {
          let messages = messagesRes;
          if (messages == null || messages == undefined) messages = [];

          if (this.messages != null && this.messages != undefined) {
            // Just append newly added messages to the bottom of the view.

            if (messages.length > this.messages.length) {
              let message = messages[messages.length - 1];
              this.dataProvider.getUser(message.sender).subscribe((user: any) => {
                message.avatar = user.photoURL;
                message.displayName = user.displayName;
              });
              this.messages.push(message);
              // Also append to messagesToShow.
              this.messagesToShow.push(message);
              console.log('msgs', this.messagesToShow);
            }
          } else {
            // Get all messages, this will be used as reference object for messagesToShow.
            this.messages = [];
            messages.forEach((message) => {
              this.dataProvider.getUser(message.sender).subscribe((user: any) => {
                if (user.id != null) {
                  message.avatar = user.photoURL;
                  message.displayName = user.displayName;
                }
              });
              this.messages.push(message);
            });
            // Load messages in relation to numOfMessages.
            if (this.startIndex == -1) {
              // Get initial index for numberOfMessages to show.
              if ((this.messages.length - this.numberOfMessages) > 0) {
                this.startIndex = this.messages.length - this.numberOfMessages;
              } else {
                this.startIndex = 0;
              }
            }
            if (!this.messagesToShow) {
              this.messagesToShow = [];
            }
            // Set messagesToShow
            for (var i = this.startIndex; i < this.messages.length; i++) {
              this.messagesToShow.push(this.messages[i]);
            }
            this.loadingProvider.dismissLoader();
          }
        });
      }
    });

    // Update messages' date time elapsed every minute based on Moment.js.
    var that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(function () {
        if (that.messages) {
          that.messages.forEach((message) => {
            message.date = new Date(message.date);
          });
        }
      }, 60000);
    }
    setTimeout(() => this.scrollBottom(), 1000);
  }

  // Load previous messages in relation to numberOfMessages.
  loadPreviousMessages() {
    var that = this;
    // Show loading.
    this.loadingProvider.presentProcessingLoading();
    setTimeout(function () {
      // Set startIndex to load more messages.
      if (that.startIndex - that.numberOfMessages > -1) {
        that.startIndex -= that.numberOfMessages;
      } else {
        that.startIndex = 0;
      }
      // Refresh our messages list.
      that.messages = null;
      that.messagesToShow = null;
      // Set scroll direction to top.
      // Populate list again.
      that.ionViewDidEnter();
    }, 1000);
  }

  // Update messagesRead when user lefts this page.
  ionViewWillLeave() {
    if (this.messages)
      this.setMessagesRead(this.messages);
  }

  // Check if currentPage is active, then update user's messagesRead.
  setMessagesRead(messages) {
    this.firestore.update('users/' + firebase.auth().currentUser.uid + '/groups/' + this.groupId, {
      messagesRead: this.messages ? this.messages.length : 0
    });
  }

  scrollBottom() {
    console.log("Calling Sb")
    setTimeout(() => {
      if (this.contentArea.scrollToBottom) {
        this.contentArea.scrollToBottom();
      }
    }, 500);
    this.setMessagesRead(this.messages);
  }

  scrollTop() {
    console.log("Calling St")
    setTimeout(() => {
      if (this.contentArea.scrollToTop) {
        this.contentArea.scrollToTop();
      }
    }, 500);
  }

  // Check if the user is the sender of the message.
  isSender(message) {
    return message.sender == firebase.auth().currentUser.uid ? true : false;
  }

  // Check if the message is a system message.
  isSystemMessage(message) {
    return message.type == 'system' ? true : false;
  }

  // View user info
  viewUser(userId) {
    this.navCtrl.navigateForward('profile', {
      queryParams: {
        id: userId
      }
    });
  }

  // Send text message to the group.
  send(type) {
    // Clone an instance of messages object so it will not directly be updated.
    // The messages object should be updated by our observer declared on ionViewDidLoad.
    let messages = JSON.parse(JSON.stringify(this.messages));

    let obj = {
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: type,
      message: this.message,
      id: this.firestore.createId()
    }

    // Update group messages.
    this.firestore.set(`groups/${this.groupId}/messages/${obj.id}`, obj);
    // this.dataProvider.getGroup(this.groupId).update({ messages: messages });
    // Clear messagebox.
    this.message = '';
    this.scrollBottom();
  }

  enlargeImage(img) {
    this.modalCtrl.create({
      component: ImageModalComponent,
      componentProps: {
        img: img
      }
    }).then(res => res.present())
  }

  attach() {
    this.actionSheet.create({
      header: 'Choose attachments',
      buttons: [{
        text: 'Camera',
        handler: () => {
          console.log("take photo");
          if((window as any).cordova) {
            this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
              // Process image message.
              this.sendPhotoMessage(url);
            });
          } else {
            (this.fileInputButton.nativeElement as HTMLInputElement).click();
          }
        }
      }, {
        text: 'Photo Library',
        handler: () => {
          console.log("Access gallery");
          if((window as any).cordova) {
            this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
              // Process image message.
              this.sendPhotoMessage(url);
            });
          } else {
            (this.fileInputButton.nativeElement as HTMLInputElement).click();
          }
        }
      }, {
        text: 'Video',
        handler: () => {
          console.log("Video");
          if((window as any).cordova) {
            this.loadingProvider.presentProcessingLoading();
            this.imageProvider.uploadVideoMessage(this.groupId).then(url => {
              // this.displayProgress();
              this.sendVideoMessage(url);
            }, err => {
              this.loadingProvider.dismissLoader();
            });
          } else {
            (this.videoInputButton.nativeElement as HTMLInputElement).click();
          }
        }
      }, {
        text: 'Location',
        handler: () => {
          console.log("Location");
          this.geolocation.getCurrentPosition({
            timeout: 2000
          }).then(res => {
            let locationMessage = "current location: lat:" + res.coords.latitude + " lng:" + res.coords.longitude;
            let mapUrl = "<a href='https://www.google.com/maps/search/" + res.coords.latitude + "," + res.coords.longitude + "'>View on Map</a>";
            let confirm = this.alertCtrl.create({
              header: 'Your Location',
              message: locationMessage,
              buttons: [{
                text: 'cancel',
                handler: () => {
                  console.log("canceled");
                }
              }, {
                text: 'Share',
                handler: () => {
                  console.log("share");
                  this.message = locationMessage + "<br>" + mapUrl;
                  this.send('location');
                }
              }]
            }).then(r => r.present());
          }, locationErr => {
            console.log("Location Error" + JSON.stringify(locationErr));
          });
        }
      },
      {
        text: 'cancel',
        role: 'cancel',
        handler: () => {
          console.log("cancelled");
        }
      }]
    }).then(r => r.present());
  }
  takePhoto() {
    this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
      // Process image message.
      this.sendPhotoMessage(url);
    });
  }

  // Process photoMessage on database.
  sendPhotoMessage(url) {
    let messages = JSON.parse(JSON.stringify(this.messages));
    let obj = {
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: 'image',
      url: url,
      id: this.firestore.createId()
    };
    this.firestore.set(`groups/${this.groupId}/messages/${obj.id}`, obj);
    // this.dataProvider.getGroup(this.groupId).update({
    //   messages: messages
    // });
    this.message = '';
  }

  sendVideoMessage(url) {
    let messages = JSON.parse(JSON.stringify(this.messages));
    let obj = {
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: 'video',
      url: url,
      id: this.firestore.createId()
    };
    this.firestore.set(`groups/${this.groupId}/messages/${obj.id}`, obj);
    this.scrollBottom();
    this.loadingProvider.dismissLoader();
    // this.dataProvider.getGroup(this.groupId).update({
    //   messages: messages
    // });
    this.message = '';
  }

  // View group info.
  groupInfo() {
    // this.router.navigateByUrl('/groupinfo/' + this.groupId);
    this.navCtrl.navigateForward('group-info', {
      queryParams: {
        id: this.groupId
      }
    });
  }

  public detectFiles(event: any) {
    this.loadingProvider.presentProcessingLoading();
    this.commonService.getImagesFromFiles(event).then((images) => {
      console.log('images', images);
      (this.fileInputButton.nativeElement as HTMLInputElement).value = null;
      images.forEach(imageData => {
        this.firestore.uploadImage(imageData, new Date().getTime().toString() + '.png', 'chat-images').then(resp => {
          this.sendPhotoMessage(resp);
          this.loadingProvider.dismissLoader();
        });
      }, err => {
        this.loadingProvider.dismissLoader();
      })
    }, err => {
      this.loadingProvider.dismissLoader();
    });
  }

  /** used for browser image uploads, hooked up to input file type on change event */
  public detectVideo(event: any) {
    // this.loadingProvider.presentProcessingLoading();
    this.commonService.getVideoFile(event).then((url: any) => {
      this.firestore.progressVal.subscribe(val => {
        console.log('group page %', val);
      });
      // this.displayProgress();
      this.firestore
      .uploadVideoString(url, `${Date.now()}-${this.currentUser.uid}`)
      .then(
        async (link) => {
          this.sendVideoMessage(link);
          this.loadingProvider.dismissLoader();
        },
        (err) => {
          this.loadingProvider.dismissLoader();
        }
      );
    }, err => {
      this.loadingProvider.dismissLoader();
    });
  }

  test() {
    alert('loaded');
  }

  async displayProgress() {
    const modal = await this.modalCtrl.create({
      component: UploadProgressComponent,
      cssClass: 'upload-modal',
      backdropDismiss: true
    });
    modal.present();
  }


  openMsgOption(msgId: string, index: number) {
    this.actionSheet.create({
      header: 'Options',
      buttons: [{
        text: 'Delete',
        handler: () => {
          this.delete(msgId, index);
        }
      }, {
        text: 'cancel',
        role: 'cancel',
        handler: () => {
          console.log("cancelled");
        }
      }]
    }).then(r => r.present());
  }

  delete(msgID: any, index: number) {
    this.loadingProvider.presentProcessingLoading();
    console.log('groupId', this.groupId);
    console.log('msgID', msgID);
    this.firestore.delete(`groups/${this.groupId}/messages/${msgID}`).then(() => {
      this.loadingProvider.dismissLoader();
      this.messagesToShow.splice(index,1);
    }, err => {
      this.loadingProvider.dismissLoader();
    })
  }

  filterMessage(msg: string) {
    var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    return msg.replace(urlRegex, function(url) {
      return '<span class="url" (click)="openUrl('+url+')">' + url + '</span>';
    })
  }

  getMessage(msg: string) {
    var exp = /(https?:\/\/[^\s]+)/g;
    let text = msg.replace(exp,"<a href='$1' class='url' target='_blank'>$1</a>");
    return text;
  }

  openUrl(url: string) {
    console.log('url clicked');
    window.open(url, '_system');
  }


}
