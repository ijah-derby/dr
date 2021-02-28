import {
  Component,
  Injector,
  OnInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Extender } from "../../../../shared/helpers/extender";
import { EditProfileComponent } from "../../../../shared/modals/edit-profile/edit-profile.component";
import { IUser } from "../../../auth/helpers/model";
import { AuthService } from "../../../auth/services/auth/auth.service";
import { IFeed } from "../../../feed/models/feed";
import { FeedService } from "../../../feed/services/feed/feed.service";
import { PeopleService } from "../../../people/services/people/people.service";
import { ActivatedRoute } from "@angular/router";
import { FirestoreService } from "src/shared/services/firestore/firestore.service";
import { first } from "rxjs/operators";
import { MessagesService } from "src/pages/messages/services/messages/messages.service";
import { CommonService } from "src/shared/services/common/common.service";
import { NavController, LoadingController } from "@ionic/angular";
import { UserPostsComponent } from "../user-posts/user-posts.component";
import { AngularFirestore } from "@angular/fire/firestore";

/**
 * view users details and their posts, followers and friends
 */
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent extends Extender implements OnInit {
  public user: IUser;
  public curUser: IUser;
  public friends: string[] = [];
  public friendsCur: string[] = [];
  public followers: string[] = [];
  public selectedView: number = 0;
  public posts: IFeed[] = [];
  otherUser: boolean = false;
  uid: string;
  count: any = 0;

  @ViewChild("callNumber", null) public callNumber: ElementRef;
  @ViewChild(UserPostsComponent, null) userPostComp: UserPostsComponent;

  constructor(
    protected injector: Injector,
    private authService: AuthService,
    private feedService: FeedService,
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private messageService: MessagesService,
    private commonService: CommonService,
    private navCtrl: NavController,
    private loaderCtrl: LoadingController,
    private angularFire: AngularFirestore
  ) {
    super(injector);
  }

  /** set tab data  */
  public get views(): any[] {
    return [
      {
        id: 0,
        name: this.translate.instant("profile-component.post"),
        value: this.posts.length,
      },
      {
        id: 1,
        name: this.translate.instant("profile-component.following"),
        value: this.friends ? this.friends.length : 0,
      },
      {
        id: 2,
        name: this.translate.instant("profile-component.followers"),
        value: this.followers.length,
      },
    ];
  }

  /** get current user */
  public async ngOnInit() {
    this.count = this.count + 1;
    // this.initFeed();
  }

  private async initFeed() {
    this.curUser = await this.authService.getUser();
    this.route.queryParams.subscribe(
      async (params) => {
        if (params.id) {
          this.otherUser = true;
          console.log("params id", params.id);
          this.uid = params.id;
          this.fillStats(params.id);
          this.loadingService.dismissLoader();
        } else {
          console.log("current user");
          this.fillStats(this.curUser.uid);
          this.user = await this.authService.getUser();
          this.uid = this.user.uid;
          this.otherUser = false;
          this.loadingService.dismissLoader();
          if (this.count > 1) {
            // this.userPostComp.ionViewDidEnter();
          } else {
            this.count++;
          }
        }
      },
      (err) => {
        this.loadingService.dismissLoader();
      }
    );
  }

  ionViewWillLeave() {
    console.log("leaving");
    this.userPostComp.reset();
  }

  async fillStats(userId: string) {
    const loading = await this.loaderCtrl.create({
      duration: 5000,
      message: "",
    });
    // loading.present();
    await this.getUser(userId).subscribe((usr) => {
      this.user = usr;
      this.uid = userId;
      console.log(this.user);
      this.feedService.getUserFeed(this.user.uid).subscribe((posts) => {
        this.posts = posts;
        loading.dismiss();
        this.loadingService.dismissLoader();
      });
      this.peopleService.getFriendIds(this.user.uid).subscribe((friends) => {
        this.friends = friends;
      });
      this.peopleService
        .getFollowersIds(this.user.uid)
        .subscribe((friends) => (this.followers = friends));
      loading.dismiss();
      if (this.isCurrentUser(this.user.uid)) {
        this.otherUser = false;
      }
      loading.dismiss();
    });
  }

  /** get user and user details such as feed, friends and followers */
  public async ionViewDidEnter() {
    console.log("Enter Profile page");
    if (this.userPostComp) {
      this.userPostComp.doReload();
    }
    this.initFeed();
    // if (this.userPostComp && !this.firstRun) {
    //   this.firstRun = true;
    // }
    let currentUser = await this.authService.getUser();
    this.peopleService.getFriendIds(currentUser.uid).subscribe((friends) => {
      this.friendsCur = friends ? friends : [];
    });

    if (this.otherUser) {
      if (this.userPostComp) {
        this.userPostComp.ionViewDidEnter();
      }
      return;
    }
    this.subscriptions.push(
      this.authService.user.subscribe((user) => {
        if (user) {
          this.user = user;
          this.subscriptions.push(
            this.feedService
              .getUserFeed(this.user.uid)
              .subscribe((posts) => (this.posts = posts))
          );
          this.subscriptions.push(
            this.peopleService
              .getFriendIds(this.user.uid)
              .subscribe((friends) => (this.friends = friends))
          );
          this.subscriptions.push(
            this.peopleService
              .getFollowersIds(this.user.uid)
              .subscribe((friends) => (this.followers = friends))
          );
        }
      })
    );
  }

  ngOnDestroy() {
    console.log("page destroyed");
  }

  private isCurrentUser(uid: string) {
    if (this.curUser.uid === uid) {
      return true;
    }
    return false;
  }

  private getUser(uid: string) {
    return this.firestoreService.doc$<IUser>(`users/${uid}`);
  }

  /** getter to check if user is a friend */
  public isFriend() {
    return this.friendsCur.includes(this.user.uid);
  }

  /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
  public async manage() {
    this.loadingService.presentProcessingLoading();
    if (this.friendsCur.includes(this.user.uid)) {
      await this.peopleService.unfollow(this.user.uid).then(
        () => this.loadingService.dismissLoader(),
        () => this.loadingService.dismissLoader()
      );
    } else {
      await this.peopleService.follow(this.user.uid).then(
        () => this.loadingService.dismissLoader(),
        () => this.loadingService.dismissLoader()
      );
    }
  }

  /** call user */
  public async call() {
    await this.commonService.callUser(
      this.user.mobile || this.user.phone,
      this.callNumber
    );
  }

  /** chat to user */
  public async chat() {
    this.messageService.startChat(this.user);
  }

  /** share user */
  public async share() {
    const url = `people?id=${this.user.uid}`;
    await this.commonService.share(
      this.user.displayName,
      this.user.email,
      this.user.photoURL,
      url
    );
  }

  /** open more options in action sheet with options to edit, logout or close action sheet */
  public async more(): Promise<any> {
    const actionSheetCtrl = await this.actionSheetCtrl.create({
      header: this.translate.instant("other.options"),
      buttons: [
        {
          text: this.translate.instant("setting-component.edit-account"),
          handler: () => this.edit(),
        },
        {
          text: this.translate.instant("setting-component.logout-button"),
          handler: () => {
            this.authService.signOut().then(() => this.goto(this.routes.auth));
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

  /** open profile edit modal */
  public async edit() {
    const modal = await this.openModal(EditProfileComponent, this.user);
    modal.present();
  }

  goBack() {
    this.navCtrl.back();
    this.userPostComp.test();
    // this.initFeed();
  }

  navRecieved(event: any) {
    this.selectedView = this.views[0].id;
  }

  reset() {
    this.posts = [];
  }
}
