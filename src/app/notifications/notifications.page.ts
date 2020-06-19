import { Component, Injector, OnInit } from '@angular/core';
import {
  Action,
  AngularFirestore,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {IUser} from '../../pages/auth/helpers/model';
import {AuthService} from '../../pages/auth/services/auth/auth.service';
import {FeedCommentComponent} from '../../pages/feed/components/feed-comment/feed-comment.component';
import {FeedDetailComponent} from '../../pages/feed/components/feed-detail/feed-detail.component';
import { IFeed } from '../../pages/feed/models/feed';
import {INotification} from '../../pages/messages/models/message';
import { PersonComponent } from '../../pages/people/components/person/person.component';
import {Extender} from '../../shared/helpers/extender';
import {FirestoreService} from '../../shared/services/firestore/firestore.service';
import { NotificationService } from './service/notification.service';
import { FeedReplyComponent } from 'src/pages/feed/components/feed-reply/feed-reply.component';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage extends Extender implements OnInit {

  public currentUser: IUser;
  public notifications: INotification[] = [];
  public photoURLs = [];

  constructor(private firestore: AngularFirestore, private authService: AuthService, private notificationService: NotificationService,
              private firestoreService: FirestoreService, protected injector: Injector, private navCtrl: NavController) {
    super(injector);
  }

  public getSpecificFeed(id: string): Observable<any> {
    return this.firestore.doc<IFeed>(`feed/${id}`).snapshotChanges().pipe(
        take(1),
        map((doc: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<IFeed>>) => {
          return { id: doc.payload.id, ...(doc.payload.data() as IFeed) };
        }),
    );
  }
  public getSpecificComment(fid: string, cid: string): Observable<any> {
    return this.firestore.doc<IFeed>(`feed/${fid}/comments/${cid}`).snapshotChanges().pipe(
        take(1),
        map((doc: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<IFeed>>) => {
          return { id: doc.payload.id, ...(doc.payload.data() as IFeed) };
        }),
    );
  }
  public getSpecificUser(uid: string): Observable<any> {
    return this.firestore.doc<IFeed>(`users/${uid}`).snapshotChanges().pipe(
        take(1),
        map((doc: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<IFeed>>) => {
          return { uid: doc.payload.id, ...(doc.payload.data() as IFeed) };
        }),
    );
  }
  public async ngOnInit() {
    this.loading = true;
    this.currentUser = await this.authService.getUser();
    this.notificationService.getNotifications(this.currentUser.uid).subscribe(
      (notification) => {
        this.notifications = [...notification];
        this.loading = false;
      }, err => {
        this.loading = false;
      }
    )
  }
  /** open post details modal, update array of feed if any change is made */
  public async viewPost(id: string): Promise<any> {
    const modal = await this.openModal(FeedDetailComponent, id);
    modal.present();
  }
  /** open feed's comments */
  public async comment(id: string): Promise<any> {
    this.getSpecificFeed(id).subscribe(async (feed) => {
      const modal = await this.openModal(FeedCommentComponent, feed);
      modal.present();
    })
  }

  /** open feed's comment's reply */
  public async reply(fid: string, cid: string, rid: string): Promise<any> {
    this.getSpecificFeed(fid).subscribe(async (feed) => {
      this.getSpecificComment(fid, cid).subscribe(async (comment) => {
        this.getSpecificUser(comment.uid).subscribe(async (user) => {
          comment.user = user;
          const modal = await this.openModal(FeedReplyComponent, {feed,comment, type: 1, replyID: rid});
          modal.present();
        });
      });
    });
    // const modal = await this.openModal(FeedReplyComponent, {type: 1});
    // modal.present();
  }

  public async open(uid: string) {
    const modal = await this.openModal(PersonComponent, uid, 'custom-modal');
    modal.present();
  }

  public deleteNotification(id: string) {
    this.firestoreService.delete(`notifications/${id}`);
  }

  public goToPage(not: INotification) {
    console.log(not);
    if (not.type === 1 || not.type === 4) {
      this.viewPost(not.postId);
    } else if (not.type === 2) {
      this.comment(not.postId);
    } else if(not.type === 3) {
      this.reply(not.postId, not.commentID, not.replyID);
    } else if(not.type === 0) {
      this.openProfile(not.by);
    }
    this.seenNotification(not);
  }

  public seenNotification(not: INotification) {
    if (not.type === 2 || not.type === 3) {
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seen: 1
      });
    } else if (not.type === 1) {
      const arr = not.seenBy;
      arr.push(this.currentUser.uid);
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seenBy: arr
      });
    } else {
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seen: 1
      });
    }
  }

  isSeen(not: INotification) {
    if(not.seen == 1) {
      return true;
    }
    if((not.type === 3 || not.type == 1) && (not.seenBy.indexOf(this.currentUser.uid) > -1)) {
      return true;
    }
  return false;
  }

  openProfile(uid: string) {
    let extras: NavigationExtras = {
      queryParams: {
        id: uid
      }
    }
    this.navCtrl.navigateForward('profile', extras);
  }

}
