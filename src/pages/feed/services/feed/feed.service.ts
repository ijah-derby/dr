import { Injectable, Injector } from '@angular/core';
import * as firebase from 'firebase/app';
import {combineLatest, Observable, of} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { isArray } from 'util';
import {Extender} from '../../../../shared/helpers/extender';
import {ITabView} from '../../../../shared/helpers/models';
import {FirestoreService} from '../../../../shared/services/firestore/firestore.service';
import {AuthService} from '../../../auth/services/auth/auth.service';
import { IComment } from '../../models/comment';
import { IFeed } from '../../models/feed';
import { IReply } from '../../models/reply';

/**
 * crud methods to interact with firebase cloud store regarding feed posts
 */
@Injectable({
  providedIn: 'root'
})
export class FeedService extends Extender {
  public get views(): ITabView[] {
    return [
      {
        id: 1,
        icon: 'ios-flame',
        name: this.translate.instant('feed-component.minimal'),
        active: true
      },
      {
        id: 2,
        icon: 'ios-cloud-upload',
        name: this.translate.instant('feed-component.timeline')
      },
      {
        id: 3,
        icon: 'videocam',
        name: this.translate.instant('feed-component.showcase')
      },
      {
        id: 4,
        icon: 'md-play',
        name: this.translate.instant('feed-component.modern')
      }
    ];
  }
  private comments: IComment[];
  private replies: IReply[];
  public feed: IFeed[] = [];

  constructor(protected injector: Injector, private authService: AuthService, private firestoreService: FirestoreService) {
    super(injector);
  }

  /** get feed from fire base cloud store, set default likes and comments array to empty array if not already set */
  public getFeed(uid: string) {
    // console.log('fun feed',this.feed, uid);
    // this.firestoreService.col$<IFeed>('feed', ref => ref.orderBy('createdAt', 'desc').limit(10)).subscribe(feed => {
    //   console.log(feed);
    // });
    return this.firestoreService
      .colWithIds$<IFeed>(`feed`, (ref: any) => ref.orderBy('createdAt', 'desc').limit(10))
      .pipe(
        switchMap((_feed: IFeed[]) => {
          const reads = [];
          this.feed = [];
          this.feed = _feed.map((item) => {
            item.likes = !item.likes ? [] : item.likes;
            item.comments = !item.comments ? [] : item.comments;
            return item;
          });
          console.log('feed1', this.feed);
          this.feed.forEach((item: IFeed) => {
            reads.push(this.firestoreService.doc$(`users/${item.uid}`));
          });
          console.log('feed2', this.feed);
          return combineLatest(reads);
        }),
        map((data: any) => {
          return (this.feed = this.feed.map((item: IFeed, index: number) => {
            return {
              ...item,
              userLiked: item.likes && isArray(item.likes) ? item.likes.includes(uid) : false,
              user: data[index] || null
            };
          }));
        })
      );
  }

  public getUserFeeds(uid: string) {
    let feed: IFeed[] = [];
    // this.firestoreService.col$<IFeed>('feed', ref => ref.where('uid', '==', uid).orderBy('createdAt', 'desc').limit(10)).subscribe(feed => {
    //   console.log(feed);
    // });
    return this.firestoreService
      .col$<IFeed>(`feed`, (ref: any) => ref.where('uid', '==', uid).orderBy('createdAt', 'desc').limit(10))
      .pipe(
        switchMap((_feed: IFeed[]) => {
          const reads = [];
          this.feed = _feed.map((item) => {
            item.likes = !item.likes ? [] : item.likes;
            item.comments = !item.comments ? [] : item.comments;
            return item;
          });
          this.feed.forEach((item: IFeed) => {
            reads.push(this.firestoreService.doc$(`users/${item.uid}`));
          });
          console.log(this.feed);
          return combineLatest(reads);
        }),
        map((data: any) => {
          return (this.feed = this.feed.map((item: IFeed, index: number) => {
            return {
              ...item,
              userLiked: item.likes && isArray(item.likes) ? item.likes.includes(uid) : false,
              user: data[index] || null
            };
          }));
        })
      );
  }

  public getFeedNext(uid: string, lastInResponse: any) {
    return this.firestoreService
        .colWithIds$<IFeed>(`feed`, (ref: any) => ref.orderBy('createdAt', 'desc').limit(20).startAfter(lastInResponse))
        .pipe(
            switchMap((_feed: IFeed[]) => {
              if ( _feed.length !== 0 ) {
                const reads = [];
                this.feed = _feed.map((item) => {
                  item.likes = !item.likes ? [] : item.likes;
                  item.comments = !item.comments ? [] : item.comments;
                  return item;
                });
                this.feed.forEach((item: IFeed) => {
                  reads.push(this.firestoreService.doc$(`users/${item.uid}`));
                });
                return combineLatest(reads);
              } else {
                return of([]);
              }

            }),
            map((data: any) => {
              if (data.length === 0) {
                return of([]);
              } else {
                return (this.feed = this.feed.map((item: IFeed, index: number) => {
                  return {
                    ...item,
                    userLiked: item.likes && isArray(item.likes) ? item.likes.includes(uid) : false,
                    user: data[index] || null
                  };
                }));
              }

            })
        );
  }

  public getFeedPrevious(uid: string, firstInResponse: any) {
    return this.firestoreService
        .colWithIds$<IFeed>(`feed`, (ref: any) => ref.orderBy('createdAt', 'desc').limit(20).endBefore(firstInResponse))
        .pipe(
            switchMap((_feed: IFeed[]) => {
              const reads = [];
              if (_feed.length > 0) {
                this.feed = _feed.map((item) => {
                  item.likes = !item.likes ? [] : item.likes;
                  item.comments = !item.comments ? [] : item.comments;
                  return item;
                });
                this.feed.forEach((item: IFeed) => {
                  reads.push(this.firestoreService.doc$(`users/${item.uid}`));
                });
                return combineLatest(reads);
              } else {
                return of([]);
              }
            }),
            map((data: any) => {
              if (data.length === 0) {
                return of([]);
              } else {
                return (this.feed = this.feed.map((item: IFeed, index: number) => {
                  return {
                    ...item,
                    userLiked: item.likes && isArray(item.likes) ? item.likes.includes(uid) : false,
                    user: data[index] || null
                  };
                }));
              }

            })
        );
  }

  public getUserFeed(uid) {
    return this.firestoreService.colWithIds$<IFeed>(`feed`, (ref: any) => ref.where('uid', '==', uid).orderBy('createdAt', 'desc'));
  }

  /** get a single post from feed collection in firestore and join its user and comments */
  public getPost(pid: string, uid: string) {
    let feed;
    return this.firestoreService.doc$(`feed/${pid}`).pipe(
      switchMap((_feed: IFeed) => {
        _feed.likes = !_feed.likes ? [] : _feed.likes;
        _feed.comments = !_feed.comments ? [] : _feed.comments;
        feed = _feed;
        const docs = [];
        docs.push(this.firestoreService.doc$(`users/${feed.uid}`));
        docs.push(this.firestoreService.colWithIds$(`feed/${pid}/comments`, (ref) => ref.where('fid', '==', feed.id)));

        return combineLatest(docs);
      }),
      map((arr: any) => {
        const joins = ['user', 'comments'].reduce((acc, cur, idx) => {
          return { ...acc, [cur]: arr[idx] };
        }, {});
        return { ...feed, ...joins, userLiked: feed.likes && isArray(feed.likes) ? feed.likes.includes(uid) : false };
      })
    );
  }

  public searchFeed(val: string) {
    const feed = [...this.feed];

    if (val && val.trim() !== '') {
      return feed.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.subtitle.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.content.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.user.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    } else {
      return this.feed;
    }
  }

  public async upsertPost(post: IFeed) {
    return await this.firestoreService.set(`feed/${post.id}`, post);
  }

  public async delete(post: IFeed) {
    return await this.firestoreService.delete(`feed/${post.id}`);
  }

  public getComments(fid: string, uid: string) {
    return this.firestoreService
      .colWithIds$<IComment>(`feed/${fid}/comments`, (ref: any) => ref.orderBy('createdAt', 'asc'))
      .pipe(
        switchMap((_comment: IComment[]) => {
          const reads = [];
          this.comments = _comment;
          if (this.comments.length > 0) {
            this.comments.forEach((item: IComment) => {
              reads.push(this.firestoreService.doc$(`users/${item.uid}`));
            });
            return combineLatest(reads);
          } else {
            return of([]);
          }
        }),
        map((data: any) => {
          return (this.comments = this.comments.map((item: IComment, index: number) => {
            return {
              ...item,
              user: data[index] || null
            };
          }));
        })
      );
  }

  public getReplies(fid: string, cid: string, uid: string) {
    return this.firestoreService
      .colWithIds$<IReply>(`feed/${fid}/comments/${cid}/replies`, (ref: any) => ref.orderBy('createdAt', 'asc'))
      .pipe(
        switchMap((_reply: IReply[]) => {
          const reads = [];
          this.replies = _reply;
          if (this.replies.length > 0) {
            this.replies.forEach((item: IReply) => {
              reads.push(this.firestoreService.doc$(`users/${item.uid}`));
            });
            return combineLatest(reads);
          } else {
            return of([]);
          }
        }),
        map((data: any) => {
          return (this.replies = this.replies.map((item: IReply, index: number) => {
            return {
              ...item,
              user: data[index] || null
            };
          }));
        })
      );
  }

  public searchComments(val: string) {
    const comments = [...this.comments];

    if (val && val.trim() !== '') {
      return comments.filter((item) => {
        return (
          item.text.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.user.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    } else {
      return this.comments;
    }
  }

  // public async upsertComment(comment: IComment) {
  //   if (!comment.id) {
  //     comment.id = this.firestoreService.createId();
  //   }
  //   if (comment.user) {
  //     delete comment.user;
  //   }
  //   await this.firestoreService.set(`feed/${comment.fid}/comments/${comment.id}`, comment);
  //   return this.firestoreService.update(`feed/${comment.fid}`, {
  //     comments: firebase.firestore.FieldValue.arrayUnion(comment.id)
  //   });
  // }

  public async upsertComment(comment: IComment) {
    const commentObject: IComment = {uid: ''};
    Object.assign(commentObject, comment);
    if (!commentObject.id) {
      commentObject.id = this.firestoreService.createId();
    }
    if (commentObject.user) {
      delete commentObject.user;
      delete commentObject.doc;
    }
    await this.firestoreService.set(`feed/${commentObject.fid}/comments/${commentObject.id}`, commentObject);
    return this.firestoreService.update(`feed/${commentObject.fid}`, {
      comments: firebase.firestore.FieldValue.arrayUnion(commentObject.id)
    });
  }

  public async upsertReply(reply: IReply) {
    const replyObject: IReply = {uid: ''};
    Object.assign(replyObject, reply);
    if (!replyObject.id) {
      replyObject.id = this.firestoreService.createId();
    }
    if (replyObject.user) {
      delete replyObject.user;
      delete replyObject.doc;
    }
    await this.firestoreService.set(`feed/${replyObject.fid}/comments/${replyObject.cid}/replies/${replyObject.id}`, replyObject);
    return this.firestoreService.update(`feed/${replyObject.fid}/comments/${replyObject.cid}`, {
      replies: firebase.firestore.FieldValue.arrayUnion(replyObject.id)
    });
  }

  public async deleteComment(comment: IComment) {
    await this.firestoreService.delete(`feed/${comment.fid}/comments/${comment.id}`);
    return this.firestoreService.update(`feed/${comment.fid}`, {
      comments: firebase.firestore.FieldValue.arrayRemove(comment.id)
    });
  }

  public async deleteReply(reply: IReply) {
    await this.firestoreService.delete(`feed/${reply.fid}/comments/${reply.cid}/replies/${reply.id}`);
    return this.firestoreService.update(`feed/${reply.fid}/comments/${reply.cid}`, {
      replies: firebase.firestore.FieldValue.arrayRemove(reply.id)
    });
  }

  public async like(feed: IFeed) {
    const { uid } = await this.authService.getUser();
    if (feed.userLiked) {
      return this.firestoreService.update<IFeed>(`feed/${feed.id}`, {
        likes: firebase.firestore.FieldValue.arrayUnion(uid)
      }).then ((_) => {
        return '';
      })
    } else {
      return this.firestoreService.update<IFeed>(`feed/${feed.id}`, {
        likes: firebase.firestore.FieldValue.arrayRemove(uid)
      }).then ((_) => {
        return '';
      })
    }
  }
  public getUpdateSpecificDoc(feed: IFeed): Observable<IFeed> {
    return this.firestoreService.getSpecificDoc<IFeed>(`feed/${feed.id}`)
  }

  public getUpdateSpecificComment(comment: IComment): Observable<IComment> {
    return this.firestoreService.getSpecificDoc<IComment>(`feed/${comment.fid}/comments/${comment.id}`)
  }
}
