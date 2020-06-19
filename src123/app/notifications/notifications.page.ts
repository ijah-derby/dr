import { Component, OnInit, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { INotification, IFriends } from 'src/pages/messages/models/message';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { IUser } from 'src/pages/auth/helpers/model';
import { PeopleService } from 'src/pages/people/services/people/people.service';
import { PersonComponent } from '../../pages/people/components/person/person.component';
import { combineLatest } from 'rxjs';
import { IFeed } from 'src/pages/feed/models/feed';
import { CommonService } from 'src/shared/services/common/common.service';
import { FeedDetailComponent } from 'src/pages/feed/components/feed-detail/feed-detail.component';
import { Extender } from 'src/shared/helpers/extender';
import { FeedCommentComponent } from 'src/pages/feed/components/feed-comment/feed-comment.component';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { NotificationService } from './service/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage extends Extender implements OnInit {

  currentUser: IUser;
  notifications: INotification[] = [];
  photoURLs = [];

  constructor(private firestore: AngularFirestore, private authService: AuthService, private peopleService: PeopleService,
    private firestoreService: FirestoreService, protected injector: Injector, private notificationService: NotificationService) {
    super(injector);
  }

  async ngOnInit() {
    this.currentUser = await this.authService.getUser();
    //this.getNotifications();
    this.notificationService.getNotifications(this.currentUser.uid).subscribe(
      (notification) => {
        this.notifications = [...notification];
        this.notifications.reverse();
      }
    )
  }

  /** open post details modal, update array of feed if any change is made */
  public async viewPost(id: string): Promise<any> {
    console.log("pid", id);
    const modal = await this.openModal(FeedDetailComponent, id);
    modal.present();
  }
  /** open feed's comments */
  public async comment(id: string): Promise<any> {
    const modal = await this.openModal(FeedCommentComponent, id);
    modal.present();
  }

  public async open(uid: string) {
    const modal = await this.openModal(PersonComponent, uid, 'custom-modal');
    modal.present();
  }

  public deleteNotification(id: string) {
    this.firestoreService.delete(`notifications/${id}`);
    console.log(id);
  }

  goToPage(not: INotification) {
    if(not.type == 1) {
    } else if (not.type == 2) {
      this.comment(not.postId);
    }
    this.seenNotification(not);
  }

  async seenNotification(not: INotification) {
    if (not.type == 2) {
      console.log('comment cleared', not.id);
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seen: 1
      });
    } else if (not.type == 1) {
      await this.viewPost(not.postId);
      console.log("post cleared", not.id);
      let arr = not.seenBy;
      if (arr.indexOf(this.currentUser.uid) == -1) {
        arr.push(this.currentUser.uid);
        await this.firestoreService.updateCounter(`notifications/${not.id}`, {
          seenBy: arr
        });
      }
    } else {
      this.firestoreService.updateCounter(`notifications/${not.id}`, {
        seen: 1
      });
      this.open(not.by);
      // this.router.navigate(['/people']);
    }
  }

}
