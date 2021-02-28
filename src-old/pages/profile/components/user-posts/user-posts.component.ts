import { Component, Injector, OnInit, Input } from "@angular/core";
import { Extender } from "../../../../shared/helpers/extender";
import { ImagePreviewComponent } from "../../../../shared/modals/image-preview/image-preview.component";
import { AuthService } from "../../../auth/services/auth/auth.service";
import { IFeed } from "../../../feed/models/feed";
import { FeedService } from "../../../feed/services/feed/feed.service";
import { take } from "rxjs/operators";
import { FeedAddComponent } from "src/pages/feed/components/feed-add/feed-add.component";
import { FeedDetailComponent } from "src/pages/feed/components/feed-detail/feed-detail.component";
import { FeedCommentComponent } from "src/pages/feed/components/feed-comment/feed-comment.component";
import { CommonService } from "src/shared/services/common/common.service";
import { LoaderService } from "src/app/services/loader.service";
import { LoadingController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { FirestoreService } from "src/shared/services/firestore/firestore.service";
import { IUser } from "src/pages/auth/helpers/model";

/**
 * get users posts images and list them in a gallery format
 */
@Component({
  selector: "app-user-posts",
  templateUrl: "./user-posts.component.html",
  styleUrls: ["./user-posts.component.scss"],
})
export class UserPostsComponent extends Extender implements OnInit {
  public posts: any[] = [];
  public tempFeeds: any[] = [];
  @Input() public feeds: IFeed[];
  @Input() public uid;

  constructor(
    protected injector: Injector,
    private authService: AuthService,
    private feedService: FeedService,
    private commonService: CommonService,
    private loaderCtrl: LoadingController,
    private angularFire: AngularFirestore,
    private firestoreservice: FirestoreService
  ) {
    super(injector);
  }

  /** get user feed and extract images into one array */
  public async ngOnInit() {
    if (!this.uid) {
      const user = await this.authService.getUser();
      this.uid = user.uid;
    }
    this.doReload();
  }

  public async ionViewDidEnter() {
    if (!this.uid) {
      const user = await this.authService.getUser();
      this.uid = user.uid;
    }
    this.feeds = [];
    this.posts = [];
    // this.doReload();
  }

  reset() {
    this.posts = [];
    this.feeds = [];
    this.tempFeeds = [];
  }

  public test() {
    setTimeout(() => {
      this.doReload();
    }, 700);
  }

  public async doReload(event?: any) {
    let loader = await this.loaderCtrl.create({
      message: "",
    });
    loader.present();
    // this.loadingService.presentProcessingLoading();
    this.reset();
    console.log("poster uid", this.uid);

    this.angularFire
      .collection("feed", (ref: any) =>
        ref.where("uid", "==", this.uid).orderBy("createdAt", "desc").limit(4)
      )
      .get()
      .subscribe((resp) => {
        if (resp.docs.length === 0) {
          loader.dismiss();
        }

        resp.docs.forEach((item) => {
          let feed: IFeed = item.data() as IFeed;
          feed.doc = item;
          // console.log(feed);
          this.firestoreservice
            .doc$(`users/${feed.uid}`)
            .subscribe((user: IUser) => {
              feed.user = user;
              feed.userLiked =
                feed.likes && Array.isArray(feed.likes)
                  ? feed.likes.includes(this.uid)
                  : false;
              this.feeds.push(feed);
              console.log(this.feeds);
              loader.dismiss();
              // event.target.complete();
            });
        });
      });
  }

  ionViewDidLeave() {
    this.loadingService.dismissLoader();
  }

  /** open image preview */
  public async open(image: string) {
    const modal = await this.openModal(
      ImagePreviewComponent,
      image,
      "custom-modal"
    );
    modal.present();
  }

  public manage(_event: { type: string; data: any; index: number }): void {
    if (_event.type === "like") {
      this.feedService.like(_event.data).then((_) => {
        this.feedService
          .getUpdateSpecificDoc(_event.data)
          .subscribe((updatedFeed) => {
            console.log(_event.data.userLiked);
            Object.assign(this.feeds[_event.index], {
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
        this.feeds.splice(index, 1);
      } else if (index === this.feeds.length - 1) {
        this.feeds.splice(index, 1);
      } else {
        this.feeds.splice(index, 1);
      }
    });
  }

  /** go to post author's profile page */
  public profile(post: IFeed): void {
    this.goto(this.routes.people + "/" + post.user.uid);
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
              Object.assign(this.feeds[index], {
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
    modal.onWillDismiss().then(async (resp) => {
      console.log(resp);
      if (resp.data) {
        this.doReload();
      }
      // this.feedService
      //   .getUpdateSpecificDoc(feed)
      //   .subscribe((updatedFeed: IFeed) => {
      //     Object.assign(this.feeds[index], {
      //       ...updatedFeed,
      //       likes: feed.likes,
      //       userLiked: feed.userLiked,
      //       doc: feed.doc,
      //     });
      //   });
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

  /** load more posts */
  loadMoreFeed(event: any) {
    console.log("loading more feeds");
    const cursor = this.getCursor(false);
    console.log("cursor", this.getCursor(false));

    this.angularFire
      .collection("feed", (ref: any) =>
        ref
          .where("uid", "==", this.uid)
          .orderBy("createdAt", "desc")
          .limit(4)
          .startAfter(cursor)
      )
      .get()
      .subscribe((resp) => {
        let feedArr: IFeed[] = [];
        console.log(resp);
        if (resp.docs.length === 0) {
          event.target.complete();
        }
        resp.docs.forEach((item) => {
          let feed: IFeed = item.data() as IFeed;
          feed.doc = item;
          // console.log(feed);
          this.firestoreservice
            .doc$(`users/${feed.uid}`)
            .subscribe((user: IUser) => {
              feed.user = user;
              feed.userLiked =
                feed.likes && Array.isArray(feed.likes)
                  ? feed.likes.includes(this.uid)
                  : false;
              this.feeds.push(feed);
              console.log(this.feeds);
              event.target.complete();
            });
        });
      });
  }

  /** get curser of current feed */
  private getCursor(prePend: boolean) {
    console.log("length", this.feeds.length);
    if (this.feeds.length) {
      return prePend
        ? this.feeds[0].doc
        : this.feeds[this.feeds.length - 1].doc;
    }
    return null;
  }
}
