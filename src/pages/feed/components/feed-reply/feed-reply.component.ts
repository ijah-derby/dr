import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Extender} from '../../../../shared/helpers/extender';
import {ImagePreviewPage} from '../../../../shared/modals/image-modal/imagemodal.page';
import {IUser} from '../../../auth/helpers/model';
import {AuthService} from '../../../auth/services/auth/auth.service';
import { IComment } from '../../models/comment';
import { IReply } from '../../models/reply';
import { FeedService } from '../../services/feed/feed.service';
import { IFeed } from '../../models/feed';
import { Observable } from 'rxjs';
import { DocumentSnapshotDoesNotExist, DocumentSnapshotExists, Action } from '@angular/fire/firestore';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { take, map } from 'rxjs/operators';

/**
 * enable user to add comments to a post
 */
@Component({
  selector: 'app-feed-reply',
  templateUrl: './feed-reply.component.html',
  styleUrls: ['./feed-reply.component.scss']
})
export class FeedReplyComponent extends Extender implements OnInit, OnDestroy  {
  public user: IUser;
  // public comments: IComment[] = [];
  // public editComment: IComment;
  // public commentMsg: string = '';
  public openSearch: boolean = false;
  public videoContent: string = '';
  public post: IFeed;
  public currentIndex: number = 0;
  // public editCommentIndex: number = 0;
  public editReplyIndex: number = 0;
  public isImageAvailable: boolean = false;
  public isVideoAvailable: boolean = false;

  public replies: IReply[] = [];
  public editReply: IReply;
  public replyMsg: string = '';
  public comment: IComment;
  fromNotification = false;
  replyID: string;

  constructor(
      protected injector: Injector,
      private navParams: NavParams,
      private authService: AuthService,
      private feedService: FeedService,
      private modalController: ModalController,
      private firestore: FirestoreService
  ) {
    super(injector);
  }
  // /** scroll to bottom when view loads with messages */
  // public ngAfterContentChecked() {
  //   if (this.option) {
  //     this.scrollToBottom();
  //   }
  // }
  /** get current user and post id from navParams and get comments for the post */
  public async ngOnInit() {
    this.user = await this.authService.getUser();
    this.loading = true;
    console.log('nav params: ', this.navParams);
    this.post = this.navParams.get('data').feed;
    this.comment = this.navParams.get('data').comment;
    if(this.navParams.get('data').replyID) {
      this.replyID = this.navParams.get('data').replyID;
      this.fromNotification = true;
    }
    console.log('fromNotification', this.fromNotification);

    console.log(this.post);
    console.log(this.comment);
    console.log(this.comment.user.displayName);
    
    this.subscriptions.push(
        this.feedService.getReplies(this.post.id, this.comment.id, this.user.uid).subscribe(
            (replies) => {
              console.log('getting replies success');
              this.loading = false;
              this.replies = [...replies];
              console.log(this.replies);
              setTimeout(() => {
                this.scrollToBottom();
              }, 500);
            },
            (err) => {
              console.log('getting replies failure');
              this.loading = false;
              this.toast(err);
            }
        )
    );
  }

  public async showImage(image: string) {
    const modal = await this.modalController
        .create({
          component: ImagePreviewPage,
          componentProps: {
            img: image
          }
        })
    modal.present();
  }

  /** search replies */
  // public onSearch(val: string) {
  //   this.replies = this.feedService.searchReplies(val);
  // }

  
  /** save or edit new or existing reply */
  public save() {
    let reply: IReply = {};
    if (this.editReply) {
      reply = {...this.editReply, text: this.replyMsg};
      this.replies[this.editReplyIndex] = reply;
    } else {
      reply = {
        uid: this.user.uid,
        fid: this.post.id,
        cid: this.comment.id,
        text: this.replyMsg
      };
      this.replies.push({...reply, user: this.user});
    }
    this.replyMsg = '';
    this.feedService.upsertReply(reply).then(() => {
      this.editReply = null;
      setTimeout(() => {
        this.scrollToBottom();
      }, 500);
    });
  }

  get newDate() {
    return new Date();
  }
  /** manage comment by opening actionsheet and displaying options edit or delete reply. */
  public async openOptions(reply: IReply, index: number): Promise<any> {

    const actionSheet = await this.actionSheetCtrl.create({
      header: this.translate.instant('other.options'),
      buttons: [
        {
          text: this.translate.instant('other.edit-label'),
          handler: () => {
            this.editReply = reply;
            this.replyMsg = reply.text;
            this.editReplyIndex = index;
          }
        },
        {
          text: this.translate.instant('other.delete-label'),
          handler: () => {
            this.feedService.deleteReply(reply);
            this.replies.splice(index, 1);
          }
        },
        {
          text: this.translate.instant('other.cancel'),
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    await actionSheet.present();
  }

  
  public scrollToBottom(): void {
    const element = document.getElementById('last-item');
    if (element) {
      element.scrollIntoView({
        behavior: 'auto',
        block: 'end',
        inline: 'nearest'
      });
    }
  }

  public keyUpMessage(event: string) {
    setTimeout(() => {
      this.scrollToBottom();
    }, 500);
  }
  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }
}
