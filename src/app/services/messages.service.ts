import { Injectable } from '@angular/core';
import { IUser } from 'src/pages/auth/helpers/model';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  conversations: any;
  updateDateTime: any;
  groups: any;
  isLoading;

  unreadMessagesCount = 0;
  unreadGroupMessagesCount = 0;
  conversationsInfo = [];
  groupsInfo = [];

  constructor(
    private firestore: FirestoreService,
    private authService: AuthService,
    private dataProvider: DataService
  ) { }

  initGroups() {
    this.isLoading = true;
    this.dataProvider.getGroups().subscribe((groupIdsRes: any[]) => {
      let groupIds = [];
      groupIds = groupIdsRes;
      if (groupIds.length > 0) {
        this.groupsInfo = groupIds;
        if (this.groups && this.groups.length > groupIds.length) {
          // User left/deleted a group, clear the list and add or update each group again.
          this.groups = [];
        }
        groupIds.forEach((groupId) => {
          this.dataProvider.getGroup(groupId.id).subscribe((groupRes: any) => {
            let group = groupRes;
            if (group.id != null) {

              this.firestore.col$(`groups/${groupId.id}/messages`, ref => ref.orderBy('createdAt').startAt(groupId.createdAt)).subscribe((resp: any[]) => {
                group.messages = resp;
                group.unreadMessagesCount = group.messages ? group.messages.length - groupId.messagesRead : 0;
                // Get group's last active date
                if(resp.length > 0) {
                  group.date = resp[resp.length - 1].date;
                }
                this.addOrUpdateGroup(group);
              })
            }

          });
        });
        this.isLoading = false;
      } else {
        this.groups = [];
        this.isLoading = false;
        this.groupsInfo = null;
      }
    });

    // Update groups' last active date time elapsed every minute based on Moment.js.
    var that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(function () {
        if (that.groups) {
          that.groups.forEach((group) => {
            let date = group.date;
            group.date = new Date(date);
          });
        }
      }, 60000);
    }
  }

  async initConversation() {
    this.conversations = [];
    this.isLoading = true;

    const currentUser = await this.authService.getUser();
    if (currentUser != null) {
      // Get info of conversations of current logged in user.
      this.dataProvider.getConversations().subscribe((conversationsInfoRes: any) => {

        let conversations = [];
        conversations = conversationsInfoRes.map(c => ({ key: c.id, ...c }));

        this.conversationsInfo = [];

        if (conversations.length > 0) {
          this.conversationsInfo = conversations;
          conversations.forEach((conversation) => {
            if (conversation) {
              console.log('LOOP TOP');
              // Get conversation partner info.
              this.dataProvider.getUser(conversation.key).subscribe((user) => {
                conversation.friend = user;
                // Get conversation info.

                this.firestore.colWithIds$('conversations/' + conversation.conversationId + '/messages', ref => ref.orderBy('createdAt', 'desc')).subscribe(resp => {
                  // resp = resp.reverse();
                  console.log('COL WITH IDs');
                  let lastMessage = resp[0];
                  if(!lastMessage) {
                    return;
                  }
                  conversation.date = lastMessage.date;
                  conversation.sender = lastMessage.sender;
                  // Set unreadMessagesCount
                  conversation.unreadMessagesCount = resp.length - conversation.messagesRead;
                  // Process last message depending on messageType.
                  if (lastMessage.type == 'text') {
                    if (lastMessage.sender == currentUser.uid) {
                      conversation.message = 'You: ' + lastMessage.message;
                    } else {
                      conversation.message = lastMessage.message;
                    }
                  } else {
                    if (lastMessage.sender == currentUser.uid) {
                      conversation.message = 'You sent a photo message.';
                    } else {
                      conversation.message = 'has sent you a photo message.';
                    }
                  }
                  // Add or update conversation.
                  this.addOrUpdateConversation(conversation);
                });

                // this.dataProvider.getConversation(conversation.conversationId).subscribe((obj: any) => {
                //   // Get last message of conversation.
                //   if (obj != null) {
                   
                //   }
                // });
              });
            }

          });
          this.isLoading = false;
        }
        else {
          this.conversations = [];
          this.isLoading = false;
        }
      });

      // Update conversations' last active date time elapsed every minute based on Moment.js.
      var that = this;
      if (!that.updateDateTime) {
        that.updateDateTime = setInterval(function () {
          if (that.conversations) {
            that.conversations.forEach((conversation) => {
              let date = conversation.date;
              conversation.date = new Date(date);
            });
          }
        }, 60000);
      }
    }
  }


  addOrUpdateConversation(conversation) {
    if (!this.conversations) {
      this.conversations = [conversation];
    } else {
      var index = -1;
      index = this.conversations.findIndex(item => item.conversationId === conversation.conversationId);
      // for (var i = 0; i < this.conversations.length; i++) {
      //   if (this.conversations[i].sender == conversation.sender) {
      //     index = i;
      //   }
      // }
      if (index > -1) {
        this.conversations[index] = conversation;
      } else {
        this.conversations.push(conversation);
      }
      // Sort by last active date.
      this.conversations.sort((a: any, b: any) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);
        if (date1 > date2) {
          return -1;
        } else if (date1 < date2) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    this.computeUnreadMessagesCount();
  }


  // Add or update group for real-time sync based on our observer.
  addOrUpdateGroup(group) {
    if (!this.groups) {
      this.groups = [group];
    } else {
      var index = -1;
      for (var i = 0; i < this.groups.length; i++) {
        if (this.groups[i].id == group.id) {
          index = i;
        }
      }
      if (index > -1) {
        this.groups[index] = group;
      } else {
        this.groups.push(group);
      }
    }
    this.computeUnreadGroupMessagesCount();
  }


  // Compute all conversation's unreadMessages.
  computeUnreadMessagesCount() {
    this.unreadMessagesCount = 0;
    if (this.conversations) {
      this.conversations.forEach(group => {
        this.unreadMessagesCount = this.unreadMessagesCount + group.unreadMessagesCount;
      });
    }
  }

  getUnreadMessagesCount() {
    return (this.unreadMessagesCount != null && this.unreadMessagesCount > 0) ? this.unreadMessagesCount : 0;
  }

  // Compute all group's unreadMessages.
  computeUnreadGroupMessagesCount() {
    this.unreadGroupMessagesCount = 0;
    if (this.groups) {
      this.groups.forEach(group => {
        if(group.name) {
          this.unreadGroupMessagesCount = this.unreadGroupMessagesCount + group.unreadMessagesCount;
        }
      });
    }
  }

  getUnreadGroupMessagesCount() {
    return (this.unreadGroupMessagesCount != null && this.unreadGroupMessagesCount > 0) ? this.unreadGroupMessagesCount : 0;
  }

}
