import { Component, OnInit, ViewChild, ElementRef, Injector } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController, AlertController, ModalController, IonContent } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as firebase from "firebase/app";
import 'firebase/auth';
import { LoaderService } from 'src/app/services/loader.service';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';
import { Extender } from 'src/shared/helpers/extender';
import { FeedAddComponent } from 'src/pages/feed/components/feed-add/feed-add.component';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { IUser } from 'src/pages/auth/helpers/model';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { CommonService } from 'src/shared/services/common/common.service';
import { ImageModalComponent } from 'src/app/components/image-modal/image-modal.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage extends Extender implements OnInit {

  @ViewChild(IonContent, null) contentArea: IonContent;

  userId: any;
  title: any;
  avatar: any;
  message: any;
  conversationId: any;
  messages: any;
  updateDateTime: any;
  messagesToShow = [];
  startIndex: any = -1;
  // Set number of messages to show.
  numberOfMessages = 10;
  loggedInUserId: any;

  currentUser: IUser;
  replyMessage = {
    id: null,
    message: null,
    displayName: null,
    type: null
  }

  allMessages: any[] = [];

  isSingleMessage = 0;


  @ViewChild("fileInputButton", null) private fileInputButton: ElementRef;
  @ViewChild("videoInputButton", null) private videoInputButton: ElementRef;
  @ViewChild('myInput', null) myInput ;
  @ViewChild(IonContent, null) content: IonContent;

  // MessagePage
  // This is the page where the user can chat with a friend.
  constructor(
    // public navCtrl: NavController,
    // public navParams: NavParams,
    protected injector: Injector,
    private route: ActivatedRoute,
    private dataProvider: DataService,
    private angularfire: AngularFireDatabase,
    private loadingProvider: LoaderService,
    private imageProvider: ImageService,
    private camera: Camera,
    private actionSheet: ActionSheetController,
    private geolocation: Geolocation,
    private authService: AuthService,
    private firestore: FirestoreService,
    private commonService: CommonService
  ) { 
    super(injector);
    this.route.queryParamMap.subscribe(params => {
      this.userId = params.get("id");
      this.title = params.get("name");
      this.avatar = params.get("img");
    });
  }

  async ngOnInit() {
  }

  async ionViewDidEnter(isLoad = false) {
    this.loggedInUserId = firebase.auth().currentUser.uid;

    this.currentUser = await this.authService.getUser();
    
    // Get friend details.
    // this.dataProvider.getUser(this.userId).subscribe((user: any) => {
    //   this.title = user.displayName;
    // });

    // Get conversationInfo with friend.
    this.firestore.docOnce$('users/' + this.loggedInUserId + '/conversations/' + this.userId).subscribe((conversation: any) => {
      if (conversation) {
        // User already have conversation with this friend, get conversation
        this.conversationId = conversation.conversationId;
        console.log('conv id', this.conversationId);

        this.firestore.col$('conversations/' + this.conversationId + '/messages', ref => ref.orderBy('createdAt', 'desc').limit(1)).subscribe((resp: any[]) => {
          if(this.isSingleMessage >= 1) {
            console.log('recent message',resp);
            const index = this.allMessages.findIndex(item => item.id === resp[0].id);
            console.log('index', 1);
            if(index === -1) {
              this.allMessages.push(resp[0]);
              this.displayMessages(this.allMessages);
            }
          }
        });

        // Get conversation
        this.dataProvider.getConversationMessages(this.conversationId).subscribe((messagesRes: any[]) => {
          let messages = messagesRes.reverse();
          console.log('allMessage', messages.reverse());
          this.allMessages = messagesRes.reverse();
          this.displayMessages(messages);
          if(this.isSingleMessage === 0) this.isSingleMessage = 1;
          // this.scrollBottom();
          // console.log("SCROLL TO BOTTOM CALLED");
        });
      }
    });

    // Update messages' date time elapsed every minute based on Moment.js.
    var that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(function () {
        if (that.messages) {
          that.messages.forEach((message) => {
            let date = message.date;
            message.date = new Date(date);
          });
        }
      }, 60000);
    }
    // if(!isLoad)
    setTimeout(() => {
      setTimeout(() => {
        if (this.contentArea.scrollToBottom) {
          this.contentArea.scrollToBottom();
        }
      }, 500);
    }, 1000);
  }

  displayMessages(messages: any[]) {
    this.contentArea.scrollToBottom();
    console.log("scrolled to bottom");
    if (messages == null)
      messages = [];
    if (this.messages) {
      // Just append newly added messages to the bottom of the view.
      if (messages.length > this.messages.length) {
        let message = messages[messages.length - 1];

        this.dataProvider.getUser(message.sender).subscribe((user: any) => {
          message.avatar = user.photoURL;
          message.displayName = user.displayName;
        });
        if(message.replyTo) {
          const index = messages.findIndex(item => item.id === message.replyTo);
          message.replyToMessage = messages[index] ? messages[index].message : 'Message Deleted';
          message.replyToMessageType = messages[index] ? messages[index].type : 'text';
        }
        this.messages.push(message);
        this.messagesToShow.push(message);
        console.log('new message received');
        setTimeout(() => {
          if (this.contentArea.scrollToBottom) {
            this.contentArea.scrollToBottom();
          }
        }, 500);
        // if(!isLoad) {
        //   console.log('isLoad', isLoad);
        //   setTimeout(() => {
        //     if (this.contentArea.scrollToBottom) {
        //       this.contentArea.scrollToBottom();
        //     }
        //   }, 500);
        // }
      }
    } else {
      // Get all messages, this will be used as reference object for messagesToShow.
      this.messages = [];
      messages.forEach((message) => {
        this.dataProvider.getUser(message.sender).subscribe((user: any) => {
          message.avatar = user.photoURL;
          message.displayName = user.displayName;
        });
        if(message.replyTo) {
          const index = messages.findIndex(item => item.id === message.replyTo);
          message.replyToMessage = messages[index] ? messages[index].message : 'Message Deleted';
          message.replyToMessageType = messages[index] ? messages[index].type : 'Message Deleted';
        }
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
  }


  // Load previous messages in relation to numberOfMessages.
  loadPreviousMessages() {
    var that = this;

    let cursor = this.messagesToShow[0].doc;

    // this.firestore.colWithIds$('conversations/' + this.conversationId + '/messages', ref => ref.orderBy('createdAt').limit(10).startAfter(cursor)).subscribe(resp => {
    //   this.allMessages = this.allMessages.concat(resp);
    //   console.log('messagesToShow', this.messagesToShow);
    //   that.scrollTop();
    // })

    setTimeout(function () {
      // Set startIndex to load more messages.
      if ((that.startIndex - that.numberOfMessages) > -1) {
        that.startIndex -= that.numberOfMessages;
      } else {
        that.startIndex = 0;
      }
      // Refresh our messages list.
      that.messages = null;
      that.messagesToShow = null;

      that.scrollTop();

      // Populate list again.
      that.ionViewDidEnter(true);
    }, 1000);
  }

  // Update messagesRead when user lefts this page.
  ionViewWillLeave() {
    this.setMessagesRead();
  }

  // Check if currentPage is active, then update user's messagesRead.
  setMessagesRead() {
    console.log('setMessagesRead');
    this.firestore.update('users/' + this.currentUser.uid + '/conversations/' + this.userId, {messagesRead: this.allMessages ? this.allMessages.length : 0}).then(() => {}).catch(() => {
      this.firestore.set('users/' + this.currentUser.uid + '/conversations/' + this.userId, {messagesRead: this.allMessages ? this.allMessages.length : 0});
    });
    this.loadingProvider.dismissLoader();
  }

  scrollBottom(justScroll = false) {
    setTimeout(() => {
      if (this.contentArea.scrollToBottom) {
        this.contentArea.scrollToBottom();
      }
    }, 500);
    this.setMessagesRead();
  }

  scrollTop() {
    setTimeout(() => {
      if (this.contentArea.scrollToTop) {
        this.contentArea.scrollToTop();
      }
    }, 500);
  }


  // Check if the user is the sender of the message.
  isSender(message) {
    if (message.sender == this.loggedInUserId) {
      return true;
    } else {
      return false;
    }
  }


  // Send message, if there's no conversation yet, create a new conversation.
  send(type) {
    if (this.message) {
      // User entered a text on messagebox
      let msgID = this.firestore.createId();
      let msg = {
        date: new Date().toString(),
        sender: this.loggedInUserId,
        type: type,
        message: this.message,
        id: msgID,
        replyTo: this.replyMessage.id || null
      };

      if (this.conversationId) {
        // let messages = JSON.parse(JSON.stringify(this.messages));

        // Update conversation on database.
        this.firestore.set('conversations/' + this.conversationId + '/messages/' + msgID, msg);
        // this.firestore.set('users/' + this.loggedInUserId + '/conversations/' + this.userId, {
        //   conversationId: this.conversationId,
        //   messagesRead: 1
        // }).then(() => {
        // });
        // this.firestore.set('users/' + this.userId + '/conversations/' + this.loggedInUserId, {
        //   conversationId: this.conversationId,
        //   messagesRead: 0
        // });
        // Clear messagebox.
        this.message = '';
        this.scrollBottom();
        console.log("message just send");
        this.replyMessage.id = null;
        this.replyMessage.displayName = null;
        this.replyMessage.message = null;
      } else {
        let messages = [];
        messages.push(msg);
        // New Conversation with friend.
        var users = [];
        users.push(this.loggedInUserId);
        users.push(this.userId);
        console.log('new conversation');
        // Add conversation.
        let cid = this.firestore.createId();
        this.firestore.set('conversations/' + cid, {
          dateCreated: new Date().toString(),
          users: users
        }).then((success) => {
          let conversationId = cid;
          this.message = '';
          // Add conversation reference to the users.
          this.firestore.set('conversations/' + cid + '/messages/' + msg.id, msg);
          this.firestore.set('users/' + this.loggedInUserId + '/conversations/' + this.userId, {
            conversationId: conversationId,
            messagesRead: 1
          }).then(() => {
            this.replyMessage.id = null;
            this.replyMessage.displayName = null;
            this.replyMessage.message = null;
          });
          this.firestore.set('users/' + this.userId + '/conversations/' + this.loggedInUserId, {
            conversationId: conversationId,
            messagesRead: 0
          });
        });
        this.scrollBottom(true);
      }
    }
  }

  viewUser(userId) {
    this.router.navigateByUrl('userinfo/' + userId);
  }


  attach() {
    this.actionSheet.create({
      header: 'Choose attachments',
      buttons: [{
        text: 'Camera',
        handler: () => {
          if((window as any).cordova) {
            this.imageProvider.uploadGroupPhotoMessage(this.conversationId, this.camera.PictureSourceType.CAMERA).then((url) => {
              this.message = url;
              this.send("image");
            }, err => {
              
            });
          } else {
            (this.fileInputButton.nativeElement as HTMLInputElement).click();
          }
        }
      }, {
        text: 'Photo Library',
        handler: () => {
          if((window as any).cordova) {
            this.imageProvider.uploadGroupPhotoMessage(this.conversationId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
              this.message = url;
              this.send("image");
            }, err => {
              
            });
          } else {
            (this.fileInputButton.nativeElement as HTMLInputElement).click();
          }
        }
      },
      {
        text: 'Video',
        handler: () => {
          if((window as any).cordova) {
            this.imageProvider.uploadVideoMessage(this.conversationId).then(url => {
              this.message = url;
              this.send("video");
            });
          } else {
            (this.videoInputButton.nativeElement as HTMLInputElement).click();
          }
        }
      }
        , {
        text: 'Location',
        handler: () => {
          this.geolocation.getCurrentPosition({
            timeout: 5000
          }).then(res => {
            let locationMessage = "Location:<br> lat:" + res.coords.latitude + "<br> lng:" + res.coords.longitude;
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
                  this.message = locationMessage + "<br>" + mapUrl;
                  this.send("location");
                }
              }]
            }).then(r => r.present());
          }, locationErr => {
          });
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

  // Enlarge image messages.
  enlargeImage(img) {
    this.modalCtrl.create({
      component: ImageModalComponent,
      componentProps: {
        img: img
      }
    }).then(res => res.present())
  }

  public detectFiles(event: any) {
    this.loadingProvider.presentProcessingLoading();
    this.commonService.getImagesFromFiles(event).then((images) => {
      (this.fileInputButton.nativeElement as HTMLInputElement).value = null;
      images.forEach(imageData => {
        this.firestore.uploadImage(imageData, new Date().getTime().toString() + '.png', 'chat-images').then(resp => {
          this.message = resp;
          this.send("image");
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
    this.loadingProvider.presentProcessingLoading();
    this.commonService.getVideoFile(event).then((url: any) => {
      this.firestore
      .uploadVideoString(url, `${Date.now()}-${this.currentUser.uid}`)
      .then(
        async (link) => {
          this.message = link;
          this.send("video");
          this.loadingService.dismissLoader();
        },
        (err) => {
          this.loadingProvider.dismissLoader();
          this.toast("Error in uploading video");
        }
      );
    }, err => {
      this.loadingProvider.dismissLoader();
    });
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
    this.firestore.delete(`conversations/${this.conversationId}/messages/${msgID}`).then(() => {
      this.loadingProvider.dismissLoader();
      this.messagesToShow.splice(index,1);
    }, err => {
      this.loadingProvider.dismissLoader();
    })
  }

  drag(event: any, msg: any) {
    const slidingItem = document.getElementById('slidingItem' + msg.id) as any;
    setTimeout(() => {
      slidingItem.close();
      this.replyMessage.id = msg.id;
      this.replyMessage.message = msg.message;
      this.replyMessage.displayName = msg.displayName;
      this.replyMessage.type = msg.type;
    }, 100);
  }

  getMessage(msg: string) {
    var exp = /(https?:\/\/[^\s]+)/g;
    let text = msg.replace(exp,"<a href='$1' class='url' target='_blank'>$1</a>");
    return text;
  }

  getRepliedMessage(msgID: string) {
    let index = this.messages.findIndex(item => item.id === msgID);
    return this.messages[index];
  }

  scrollTo(elementId: string) {
    console.log('elementID', elementId);
    let y = document.getElementById(elementId).offsetTop;
    document.getElementById(elementId).classList.add('blur');
    this.content.scrollToPoint(0, y - 100);
    setTimeout(() => {
      document.getElementById(elementId).classList.remove('blur');
    }, 1000);
  }

}
