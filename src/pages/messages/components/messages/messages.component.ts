import { Component, ElementRef, Injector, OnInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from "firebase/app";
import 'firebase/auth';
import { DataService } from "src/app/services/data.service";
import { LoaderService } from "src/app/services/loader.service";
import { AuthService } from "src/pages/auth/services/auth/auth.service";
import { NotificationService } from "src/app/notifications/service/notification.service";
import { MenuController, ModalController, NavController } from "@ionic/angular";
import { Extender } from "src/shared/helpers/extender";
import { FeedAddComponent } from "src/pages/feed/components/feed-add/feed-add.component";
import { FirestoreService } from "src/shared/services/firestore/firestore.service";
import { MessagesService } from "src/app/services/messages.service";

/**
 * view users messages, manage messages.
 */
@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent extends Extender implements OnInit {

  tab = "chat";
  conversations: any;
  updateDateTime: any;
  searchFriend: any = '';
  groups: any;
  searchGroup: any;
  isLoading;

  unreadMessagesCount = 0;
  unreadGroupMessagesCount = 0;
  conversationsInfo = [];
  groupsInfo = [];

  constructor(
    protected injector: Injector,
    private loadingProvider: LoaderService,
    private dataProvider: DataService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private firestore: FirestoreService,
    public messagesService: MessagesService
  ) { 
    super(injector);
  }

  ngOnInit() {
    this.searchGroup = '';
    this.messagesService.initGroups();
    // Get groups
    
  }

  segmentChanged(event: any) {
  }

  // Open Group Chat.
  viewGroup(groupId) {
    this.navCtrl.navigateForward('group', {
      queryParams: {
        groupId: groupId
      }
    });
  }

  // Return class based if group has unreadMessages or not.
  hasGroupUnreadMessages(group) {
    if (group.unreadMessagesCount > 0) {
      return 'group bold';
    } else
      return 'group';
  }

  async ionViewDidEnter() {
   this.messagesService.initConversation();
  }

  // Add or update conversation for real-time sync based on our observer, sort by active date.
  

  // Open chat with friend.
  message(userId) {
    this.navCtrl.navigateForward('message', {
      queryParams: {
        id: userId
      }
    });
    // this.app.getRootNav().push(MessagePage, { userId: userId });
  }

  // Return class based if conversation has unreadMessages or not.
  hasUnreadMessages(conversation) {
    if (conversation.unreadMessagesCount > 0) {
      return 'bold';
    } else
      return '';
  }

  openMenu() {
    this.menuCtrl.enable(true, "first");
    this.menuCtrl.toggle("first");
  }

  public goToMessages() {
    this.goto(this.routes.messages);
  }

  public goToNotifications() {
    this.goto(this.routes.notifications);
  }

    /** open add post modal, add to array of feed after completed */
 public async addPost(): Promise<any> {
  const modal = await this.openModal(FeedAddComponent, null, "custom-modal");
  await modal.present();
  modal.onWillDismiss().then(async (modalData) => {
    if (modalData.data === "save") {
      this.doRefreshTop();
    }
  });
 }

  public doRefreshTop(event?: any) {
    console.log("call in dorefresh", event);
    // this.loadPosts(event);
    // this.feedService
    //   .getFeedPrevious(this.user.uid, cursor)
    //   .pipe(take(1))
    //   .subscribe(
    //     (feed: any) => {
    //       if (event) {
    //         event.target.complete();
    //       }
    //       if (feed.length > 0) {
    //         for (let i = feed.length; i >= 0; i--) {
    //           this.feed.unshift(feed[i]);
    //         }
    //       }
    //     },
    //     (err) => {
    //       this.loading = false;
    //       this.toast(err);
    //     }
    //   );
  }

  createGroup() {
    this.navCtrl.navigateForward('newgroup');
  }

  

}
