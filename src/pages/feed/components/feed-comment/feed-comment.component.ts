import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavParams, NavController} from '@ionic/angular';
import {Extender} from '../../../../shared/helpers/extender';
import {ImagePreviewPage} from '../../../../shared/modals/image-modal/imagemodal.page';
import {IUser} from '../../../auth/helpers/model';
import {AuthService} from '../../../auth/services/auth/auth.service';
import { IComment } from '../../models/comment';
import {IFeed} from '../../models/feed';
import { FeedService } from '../../services/feed/feed.service';
import { FeedReplyComponent } from '../feed-reply/feed-reply.component';
import { NavigationExtras } from '@angular/router';

/**
 * enable user to add comments to a post
 */
@Component({
  selector: 'app-feed-comment',
  templateUrl: './feed-comment.component.html',
  styleUrls: ['./feed-comment.component.scss']
})
export class FeedCommentComponent extends Extender implements OnInit, OnDestroy  {
  public user: IUser;
  public comments: IComment[] = [];
  public editComment: IComment;
  public commentMsg: string = '';
  public openSearch: boolean = false;
  public videoContent: string = '';
  public post: IFeed;
  public currentIndex: number = 0;
  public editCommentIndex: number = 0;
  public isImageAvailable: boolean = false;
  public isVideoAvailable: boolean = false;
  constructor(
      protected injector: Injector,
      private navParams: NavParams,
      private authService: AuthService,
      private feedService: FeedService,
      private modalController: ModalController,
      private navCrtl: NavController
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
    this.post = this.navParams.get('data');
    console.log(this.post);
    if (this.post.hasOwnProperty('videoContent') && this.post.videoContent.trim() !== '') {
      this.isVideoAvailable = true;
    }
    if (this.post.hasOwnProperty('images') && this.post.images.length) {
      this.isImageAvailable = true;
    }
    this.loading = true;
    this.subscriptions.push(
        this.feedService.getComments(this.post.id, this.user.uid).subscribe(
            (comments) => {
              this.loading = false;
              this.comments = [...comments];
              console.log(this.comments);
              setTimeout(() => {
                this.scrollToBottom();
              }, 500);
            },
            (err) => {
              this.loading = false;
              this.toast(err);
            }
        )
    );
  }

  /** search comments */
  public onSearch(val: string) {
    this.comments = this.feedService.searchComments(val);
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

  /** open comment's replies */
  public async openReplies(comment: IComment, index: number): Promise<any> {
    const modal = await this.openModal(FeedReplyComponent, {
      feed: this.post,
      comment: comment,
      type: 0
    } );
    modal.present();
    modal.onWillDismiss().then( async (_) => {
      this.feedService.getUpdateSpecificComment(comment).subscribe((updatedComment: IComment ) => {
        Object.assign(this.comments[index], { ...updatedComment, doc: comment.doc});
      })
    });
  }

  /** save or edit new or existing comment */
  public save() {
    let comment: IComment = {};
    if (this.editComment) {
      comment = {...this.editComment, text: this.commentMsg};
      this.comments[this.editCommentIndex] = comment;
    } else {
      comment = {
        uid: this.user.uid,
        fid: this.post.id,
        text: this.commentMsg
      };
      this.comments.push({...comment, user: this.user});
    }
    this.commentMsg = '';
    this.feedService.upsertComment(comment).then(() => {
      this.editComment = null;
      setTimeout(() => {
        this.scrollToBottom();
      }, 500);
    });
  }

  get newDate() {
    return new Date();
  }
  /** manage comment by opening actionsheet and displaying options edit or delete comment. */
  public async openOptions(comment: IComment, index: number): Promise<any> {

    const actionSheet = await this.actionSheetCtrl.create({
      header: this.translate.instant('other.options'),
      buttons: [
        {
          text: this.translate.instant('other.edit-label'),
          handler: () => {
            this.editComment = comment;
            this.commentMsg = comment.text;
            this.editCommentIndex = index;
          }
        },
        {
          text: this.translate.instant('other.delete-label'),
          handler: () => {
            this.feedService.deleteComment(comment);
            this.comments.splice(index, 1);
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

  /** navigate to the next image */
  public forward(): void {
    if (this.currentIndex < this.post.images.length - 1) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
  }
  /** navigate to the previous image */
  public back(): void {
    if (this.currentIndex < 1) {
      this.currentIndex = this.post.images.length - 1;
    } else {
      this.currentIndex -= 1;
    }
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

  public async openImage(feed: IFeed) {
    const modal = await this.modalController
        .create({
          component: ImagePreviewPage,
          componentProps: {
            img: feed.images[this.currentIndex]
          }
        })
    modal.present();
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

  goToProfile(uid: string) {
    console.log('opening profile', uid);
    this.closeModal();
    let extras: NavigationExtras = {
      queryParams: {
        id: uid
      }
    }
    this.navCrtl.navigateForward('profile', extras);
  }
}
// export class FeedCommentComponent extends Extender implements OnInit {
//   public user: IUser;
//   public comments: IComment[] = [];
//   public editComment: IComment;
//   public commentMsg: string;
//   public openSearch: boolean = false;
//
//   constructor(
//     protected injector: Injector,
//     private navParams: NavParams,
//     private authService: AuthService,
//     private feedService: FeedService
//   ) {
//     super(injector);
//   }
//
//   /** get current user and post id from navParams and get comments for the post */
//   public async ngOnInit() {
//     this.user = await this.authService.getUser();
//     const fid = this.navParams.get('data');
//     this.loading = true;
//     this.subscriptions.push(
//       this.feedService.getComments(fid, this.user.uid).subscribe(
//         (comments) => {
//           this.loading = false;
//           this.comments = comments;
//         },
//         (err) => {
//           this.loading = false;
//           this.toast(err);
//         }
//       )
//     );
//   }
//
//   /** search comments */
//   public onSearch(val: string) {
//     this.comments = this.feedService.searchComments(val);
//   }
//
//   /** save or edit new or existing comment */
//   public save(text: string) {
//     let comment: IComment;
//     if (this.editComment) {
//       comment = this.editComment;
//       comment.text = text;
//     } else {
//       comment = {
//         uid: this.user.uid,
//         fid: this.navParams.get('data'),
//         text
//       };
//     }
//     this.feedService.upsertComment(comment).then(() => {
//       comment = null;
//       this.commentMsg = null;
//       this.editComment = null;
//     });
//   }
//
//   /** manage comment by opening actionsheet and displaying options edit or delete comment. */
//   public async openOptions(comment: IComment): Promise<any> {
//     const actionSheet = await this.actionSheetCtrl.create({
//       header: this.translate.instant('other.options'),
//       buttons: [
//         {
//           text: this.translate.instant('other.edit-label'),
//           handler: () => {
//             this.editComment = comment;
//             this.commentMsg = comment.text;
//           }
//         },
//         {
//           text: this.translate.instant('other.delete-label'),
//           handler: () => {
//             this.feedService.deleteComment(comment);
//           }
//         },
//         {
//           text: this.translate.instant('other.cancel'),
//           role: 'cancel',
//           handler: () => {}
//         }
//       ]
//     });
//     await actionSheet.present();
//   }
// }
