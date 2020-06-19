import { Component, Injector, OnInit } from '@angular/core';
import { IUser } from 'src/pages/auth/helpers/model';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { ITabView } from 'src/shared/helpers/models';
import { CommonService } from 'src/shared/services/common/common.service';
import { IFeed } from '../../models/feed';
import { FeedService } from '../../services/feed/feed.service';
import { FeedAddComponent } from '../feed-add/feed-add.component';
import { FeedCommentComponent } from '../feed-comment/feed-comment.component';
import { FeedDetailComponent } from '../feed-detail/feed-detail.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { IMessage, INotification } from 'src/pages/messages/models/message';
import { map } from 'rxjs/operators';
import { PeopleService } from 'src/pages/people/services/people/people.service';
import { NotificationService } from 'src/app/notifications/service/notification.service';

/**
 * get feed from the app, displays 4 design versions, search feed, like and open comment for feed.
 * open feed detail and add new feed can all be accessed from feed component
 */
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent extends Extender implements OnInit {
  public feed: IFeed[];
  public posts: IFeed[];
  public openSearch: boolean = false;
  public view: ITabView;
  public views: ITabView[];
  public user: IUser;
  messages: IMessage[] = [];
  counter: number;
  notificationCounter: number;
  currentUser: IUser;

  constructor(
    protected injector: Injector,
    private authService: AuthService,
    private feedService: FeedService,
    private commonService: CommonService,
    private angularFire: AngularFirestore,
    private peopleService: PeopleService,
    private notificationService: NotificationService
  ) {
    super(injector);
    this.views = this.feedService.views;
  }

  /** get current user, get feed
   * handle openPostFromUrl method
   */
  public async ngOnInit() {
    this.loading = true;

    this.user = await this.authService.getUser();
    this.openPostFromUrl();
    this.getFilteredMessages();
    this.currentUser = await this.authService.getUser();
    this.getNotifications();
    this.subscriptions.push(
      this.feedService.getFeed(this.user.uid).subscribe(
        (feed) => {
          this.feed = [...feed];
          this.loading = false;
        },
        (err) => {
          this.loading = false;
          this.toast(err);
        }
      )
    );
    
  }

  async ionViewDidEnter() {
    await this.getAllPosts();
    console.log(this.posts);
  }

  public async getAllPosts() {
    console.log('getting all posts');
    const posts = this.angularFire.collection('feed').snapshotChanges();
    console.log('posts', posts);
    return posts.subscribe(async data => {
      this.posts = [];
        data.map(async a => {
        this.posts.push(a.payload.doc.data() as IFeed);
      })
    });
  }

  /** if url has query param, navigate to view and id in param (used for share links when you click the share button) */
  public openPostFromUrl() {
    this.subscriptions.push(
      this.activatedRoute.queryParams.subscribe((param) => {
        if (param && param.id) {
          this.viewPost({ id: param.id });
        }
      })
    );
  }

  /** search friends feed */
  public onSearch(val: string): void {
    this.feed = this.feedService.searchFeed(val);
  }

  /** manage feed actions such as likes, comments etc */
  public manage(_event: { type: string; data: any }): void {
    if (_event.type === 'like') {
      this.feedService.like(_event.data);
    } else if (_event.type === 'comment') {
      this.comment(_event.data);
    } else if (_event.type === 'profile') {
      this.profile(_event.data);
    } else if (_event.type === 'share') {
      this.share(_event.data);
    } else if (_event.type === 'detail') {
      this.viewPost(_event.data);
    } else if (_event.type === 'more') {
      this.more(_event.data);
    }
  }

  /** delete a post */
  public delete(post: IFeed): void {
    this.feedService.delete(post);
  }

  /** go to post author's profile page */
  public profile(post: IFeed): void {
    this.goto(this.routes.people + '/' + post.user.uid);
  }

  /** open add post modal, add to array of feed after completed */
  public async addPost(): Promise<any> {
    const modal = await this.openModal(FeedAddComponent, null, 'custom-modal');
    modal.present();
  }

  /** open post details modal, update array of feed if any change is made */
  public async viewPost(post: IFeed): Promise<any> {
    const modal = await this.openModal(FeedDetailComponent, post.id);
    modal.present();
  }

  /** open feed's comments */
  public async comment(post: IFeed): Promise<any> {
    const modal = await this.openModal(FeedCommentComponent, post.id);
    modal.present();
  }

  /** open actionsheet for more options */
  public async more(data: IFeed): Promise<any> {
    const actionSheetCtrl = await this.actionSheetCtrl.create({
      header: this.translate.instant('feed-component.more-header'),
      buttons: [
        {
          text: this.translate.instant('feed-component.more-option-open'),
          handler: () => {
            this.viewPost(data);
          }
        },
        {
          text: this.translate.instant('feed-component.more-option-delete'),
          handler: () => {
            this.delete(data);
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

  /** share feed to other apps */
  public share(post: IFeed): void {
    const url = `feed?id=${post.id}`;
    this.commonService.share(post.content, post.title, post.images, url);
  }

  public async getAllMessages() {
    return this.angularFire.collection<any>('messages').valueChanges();
  }

  /**
   * Filtering all messages
   * **/ 

   public async getFilteredMessages() {
    (await this.getAllMessages()).subscribe(data => {
      this.messages = data;
      this.messages.forEach(msg => {
        if (msg.participantsId.indexOf(this.user.uid) != -1 && msg.last_sender != this.user.uid) {
          this.counter = 0;
          this.counter = this.counter + msg.unread_count;
        }
      })
    });
   }

   public goToMessages() {
     this.goto(this.routes.messages);
   }

   public goToNotifications() {
    this.goto(this.routes.notifications);
  }

   async getNotifications() {
    let notification: INotification;
    await this.angularFire.collection('notifications').valueChanges().subscribe(async data => {
      let load = 0;
      this.notificationCounter = 0;
       notification = data as INotification;
       for (let index = 0; index < data.length; index++) {
        const friendShot =  this.peopleService.getFriends(this.currentUser.uid);
        friendShot.subscribe(async (resp) => {
          // filter post notifications
          if(notification[index].type == 1) {
            for (let i = 0; i < resp.length; i++) {
              if(notification[index].by == resp[i].uid) {
                if (notification[index].seenBy.indexOf(this.currentUser.uid) == -1) {
                  this.notificationCounter++;
                  console.log('counter', this.notificationCounter);
                }
              }
            }   
          } else {
            if (notification[index].to == this.currentUser.uid && (notification[index].seen == 0 || notification[index].seen == 2)) {
              this.notificationCounter++;
              console.log('counter', this.notificationCounter);
            }
          }
        });
       }
    });
  }

}
