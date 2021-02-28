import { Component, Injector, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { take } from "rxjs/operators";
import { NotificationService } from "../../../../app/notifications/service/notification.service";
import { Extender } from "../../../../shared/helpers/extender";
import { ITabView } from "../../../../shared/helpers/models";
import { CommonService } from "../../../../shared/services/common/common.service";
import { IUser } from "../../../auth/helpers/model";
import { AuthService } from "../../../auth/services/auth/auth.service";
import { IMessage } from "../../../messages/models/message";
import { IFeed } from "../../models/feed";
import { FeedService } from "../../services/feed/feed.service";
import { FeedAddComponent } from "../feed-add/feed-add.component";
import { FeedCommentComponent } from "../feed-comment/feed-comment.component";
import { FeedDetailComponent } from "../feed-detail/feed-detail.component";
import { MessagesService } from "src/pages/messages/services/messages/messages.service";
import { NavController, MenuController } from "@ionic/angular";
import { FirestoreService } from "src/shared/services/firestore/firestore.service";

/**
 * get feed from the app, displays 4 design versions, search feed, like and open comment for feed.
 * open feed detail and add new feed can all be accessed from feed component
 */
@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent extends Extender implements OnInit {
  public feed: IFeed[];
  public openSearch: boolean = false;
  public view: ITabView;
  public views: ITabView[];
  public user: IUser;
  public messages: IMessage[] = [];
  public messageCounter: number;
  public notificationCounter: number = 0;

  videos;
  constructor(
    protected injector: Injector,
    private authService: AuthService,
    private feedService: FeedService,
    private commonService: CommonService,
    private angularFire: AngularFirestore,
    public notificationService: NotificationService,
    private messageService: MessagesService,
    private navCtrl: NavController,
    private manuCtrl: MenuController,
    private firestoreService: FirestoreService
  ) {
    super(injector);
    this.views = this.feedService.views;
  }

  /** get current user, get feed
   * handle openPostFromUrl method
   */

  // public async ngOnInit() {
  //   this.feed = [];
  //   this.loading = true;
  //   this.user = await this.authService.getUser();
  //   this.openPostFromUrl();
  //   this.getFilteredMessages();
  //   console.log('user', this.user.uid);

  //   // const cursor = this.getCursor(true);
  //   console.log('call in ngOnInit()');
  //   // this.feedService.getFeedPrevious(this.user.uid, cursor).pipe(take(1)).subscribe(
  //   //     (feed: any) => {
  //   //       // if (event) {
  //   //       //   event.target.complete();
  //   //       // }
  //   //       this.loading = false;
  //   //       if (feed.length > 0) {
  //   //         for (let i = feed.length ; i >= 0; i--) {
  //   //           this.feed.unshift(feed[i]);
  //   //         }
  //   //       }
  //   //     },
  //   //     (err) => {
  //   //       this.loading = false;
  //   //       this.toast(err);
  //   //     }
  //   // )

  //   // this.loadPosts();
  //   console.log('counter', this.messageService.unreadCounter);
  // }

  async ngOnInit() {
    // this.loading = true;
    this.manuCtrl.enable(false, "shop");
    this.manuCtrl.enable(true, "first");
    this.user = await this.authService.getUser();
    this.openPostFromUrl();
    this.getFilteredMessages();
    this.loadPosts();
  }

  async loadPosts(event?: any) {
    this.user = await this.authService.getUser();
    this.loadingService.presentProcessingLoading();
    this.angularFire
      .collection("feed", (ref: any) =>
        ref.orderBy("createdAt", "desc").limit(10)
      )
      .get()
      .subscribe(
        (resp) => {
          let feedArr: IFeed[] = [];
          console.log(resp);
          resp.docs.forEach((item) => {
            let feed: IFeed = item.data() as IFeed;
            feed.doc = item;
            // console.log(feed);
            this.firestoreService
              .doc$(`users/${feed.uid}`)
              .subscribe((user: IUser) => {
                feed.user = user;
                feed.userLiked =
                  feed.likes && Array.isArray(feed.likes)
                    ? feed.likes.includes(this.user.uid)
                    : false;
                feedArr.push(feed);
                this.feed = feedArr;
                console.log(feedArr);
                this.loadingService.dismissLoader();
                if (event) {
                  event.target.complete();
                }
                console.log("sorting");
                feedArr.sort((a, b) => {
                  return b.createdAt.seconds - a.createdAt.seconds;
                });
                this.loadingService.dismissLoader();
              });
          });
        },
        (err) => this.loadingService.dismissLoader()
      );
    // window.addEventListener("scroll", this.checkScroll, false);
    // window.addEventListener("resize", this.checkScroll, false);
  }

  async ionViewDidEnter() {
    this.user = await this.authService.getUser();
    this.notificationService.getNotifications(this.user.uid).then((not) => {
      console.log("page-not", not);
      this.notificationCounter = this.notificationService.unreadCounter;
      console.log("not unread counter", this.notificationCounter);
      console.log(
        "not unread counter 2",
        this.notificationService.unreadCounter
      );
      this.notificationService.getUnreadCount(
        this.notificationService.notifications,
        this.user.uid
      );
      this.notificationCounter = this.notificationService.unreadCounter;
    });
  }

  public doRefreshTop(event?: any) {
    console.log("call in dorefresh", event);
    this.loadPosts(event);
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
  public loadMoreFeed(event) {
    const cursor = this.getCursor(false);
    console.log("cursor", this.getCursor(false));

    this.angularFire
      .collection("feed", (ref: any) =>
        ref.orderBy("createdAt", "desc").limit(10).startAfter(cursor)
      )
      .get()
      .subscribe((resp) => {
        let feedArr: IFeed[] = [];
        console.log(resp);
        resp.docs.forEach((item) => {
          let feed: IFeed = item.data() as IFeed;
          feed.doc = item;
          // console.log(feed);
          this.firestoreService
            .doc$(`users/${feed.uid}`)
            .subscribe((user: IUser) => {
              feed.user = user;
              feed.userLiked =
                feed.likes && Array.isArray(feed.likes)
                  ? feed.likes.includes(this.user.uid)
                  : false;
              this.feed.push(feed);
              console.log(this.feed);
              event.target.complete();
            });
        });
      });

    // this.feedService.getFeedNext(this.user.uid, cursor).subscribe(
    //   (feed: any) => {
    //     event.target.complete();
    //     if (feed.length === 0) {
    //       event.target.disabled = true;
    //       return false;
    //     } else {
    //       feed.forEach((value, index) => {
    //         this.feed.push(value);
    //       });
    //     }
    //   },
    //   (err) => {
    //     this.loading = false;
    //     this.toast(err);
    //   }
    // );
  }
  /** if url has query param, navigate to view and id in param (used for share links when you click the share button) */
  public openPostFromUrl() {
    this.subscriptions.push(
      this.activatedRoute.queryParams.subscribe((param) => {
        if (param && param.id) {
          // this.viewPost({ id: param.id });
        }
      })
    );
  }

  /** search friends feed */
  public onSearch(val: string): void {
    this.feed = this.feedService.searchFeed(val);
  }

  /** manage feed actions such as likes, comments etc */
  public manage(_event: { type: string; data: any; index: number }): void {
    if (_event.type === "like") {
      this.feedService.like(_event.data).then((_) => {
        this.feedService
          .getUpdateSpecificDoc(_event.data)
          .subscribe((updatedFeed) => {
            console.log(_event.data.userLiked);
            Object.assign(this.feed[_event.index], {
              ...updatedFeed,
              userLiked: _event.data.userLiked,
            });
          });
      });
    } else if (_event.type === "comment") {
      this.comment(_event.data, _event.index);
    } else if (_event.type === "profile") {
      this.profile(_event.data);
    } else if (_event.type === "share") {
      this.share(_event.data);
    } else if (_event.type === "detail") {
      this.viewPost(_event.data, _event.index);
    } else if (_event.type === "more") {
      this.more(_event.data, _event.index);
    }
  }

  /** delete a post */
  public delete(post: IFeed, index: number): void {
    this.feedService.delete(post).then((_) => {
      if (index === 0) {
        this.feed.splice(index, 1);
      } else if (index === this.feed.length - 1) {
        this.feed.splice(index, 1);
      } else {
        this.feed.splice(index, 1);
      }
    });
  }

  /** go to post author's profile page */
  public profile(post: IFeed): void {
    this.goto(this.routes.people + "/" + post.user.uid);
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

  /** open post details modal, update array of feed if any change is made */
  public async viewPost(post: IFeed, index?: number): Promise<any> {
    const modal = await this.openModal(FeedDetailComponent, post.id);
    await modal.present();
    modal.onWillDismiss().then(async (modalData) => {
      console.log(modalData);
      if (modalData.data === "delete") {
        this.delete(post, index);
      }
      if (modalData.data === "edit") {
        modal.onWillDismiss().then(async (_) => {
          this.feedService
            .getUpdateSpecificDoc(post)
            .subscribe((updatedFeed: IFeed) => {
              Object.assign(this.feed[index], {
                ...updatedFeed,
                likes: post.likes,
                userLiked: post.userLiked,
                doc: post.doc,
              });
            });
        });
      }
    });
  }

  /** open feed's comments */
  public async comment(feed: IFeed, index: number): Promise<any> {
    const modal = await this.openModal(FeedCommentComponent, feed);
    modal.present();
    modal.onWillDismiss().then(async (_) => {
      this.feedService
        .getUpdateSpecificDoc(feed)
        .subscribe((updatedFeed: IFeed) => {
          Object.assign(this.feed[index], {
            ...updatedFeed,
            likes: feed.likes,
            userLiked: feed.userLiked,
            doc: feed.doc,
          });
        });
    });
  }
  /** open actionsheet for more options */
  public async more(data: IFeed, index: number): Promise<any> {
    const actionSheetCtrl = await this.actionSheetCtrl.create({
      header: this.translate.instant("feed-component.more-header"),
      buttons: [
        {
          text: this.translate.instant("feed-component.more-option-open"),
          handler: () => {
            this.viewPost(data, index);
          },
        },
        {
          text: this.translate.instant("feed-component.more-option-delete"),
          handler: () => {
            this.delete(data, index);
          },
        },
        {
          text: this.translate.instant("other.close"),
          role: "cancel",
        },
      ],
    });
    await actionSheetCtrl.present();
  }

  /** share feed to other apps */
  public share(post: IFeed): void {
    const url = `feed?id=${post.id}`;
    this.commonService.share(post.content, post.title, post.images, url);
  }

  public async getAllMessages() {
    return this.angularFire.collection<any>("messages").valueChanges();
  }

  /**
   * Filtering all messages
   */
  public async getFilteredMessages() {
    (await this.getAllMessages()).subscribe((data) => {
      this.messages = data;
      this.messageCounter = 0;
      this.messages.forEach((msg) => {
        if (
          msg.participantsId.indexOf(this.user.uid) !== -1 &&
          msg.last_sender !== this.user.uid
        ) {
          this.messageCounter = this.messageCounter + msg.unread_count;
          console.log("unread", msg.unread_count, this.messageCounter);
        }
      });
    });
  }

  public goToMessages() {
    this.goto(this.routes.messages);
  }

  public goToNotifications() {
    this.goto(this.routes.notifications);
  }
  private getCursor(prePend: boolean) {
    console.log("length", this.feed.length);
    if (this.feed.length) {
      return prePend ? this.feed[0].doc : this.feed[this.feed.length - 1].doc;
    }
    return null;
  }

  goToShop() {
    this.navCtrl.navigateForward("home");
  }

  openMenu() {
    this.manuCtrl.enable(true, "first");
    this.manuCtrl.toggle("first");
  }
}
