import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { LoaderService } from 'src/app/services/loader.service';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.page.html',
  styleUrls: ['./add-members.page.scss'],
})
export class AddMembersPage implements OnInit {

  groupId: any;
  group: any;
  groupMembers: any;
  friends: any;
  searchFriend: any;
  toAdd: any;
  user: any;
  // AddMemberPage
  // This is the page where the user can add their friends to an existing group.
  // The user can only add their friends to the group.
  constructor(
    private route: ActivatedRoute,
    private dataProvider: DataService,
    private loadingProvider: LoaderService,
    private alertCtrl: AlertController,
    private firestore: FirestoreService
  ) {
    this.route.queryParamMap.subscribe(params => {
      this.groupId = params.get('id');
    })
  }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.searchFriend = '';
    this.toAdd = [];
    this.loadingProvider.presentProcessingLoading();

    // Get user information for system message sent to the group when a member was added.
    this.dataProvider.getCurrentUser().subscribe((user) => {
      this.user = user;
    });

    // Get group information
    this.dataProvider.getGroup(this.groupId).subscribe((group: any) => {
      this.group = group;
      this.groupMembers = null;
      // Get group members
      if (group.members) {
        group.members.forEach((memberId) => {
          this.dataProvider.getUser(memberId).subscribe((member) => {
            this.addOrUpdateMember(member);
          });
        });
        // Get user's friends to add
        this.dataProvider.getCurrentUser().subscribe((account: any) => {
          this.firestore.doc$(`friends/${account.uid}`).subscribe((resp: any) => {
            if (resp.friendIds) {
              for (var i = 0; i < resp.friendIds.length; i++) {
                this.dataProvider.getUser(resp.friendIds[i]).subscribe((friendRes: any) => {
                  // Only friends that are not yet a member of this group can be added.
                  let friend = friendRes;
                  console.log(friend)
                  if (!this.isMember(friend))
                    this.addOrUpdateFriend(friend);
                });
              }
              this.loadingProvider.dismissLoader();
              if (!this.friends) {
                this.friends = [];
              }
            } else {
              this.friends = [];
            }
          });
        });
      }
      console.log(this.friends);
      this.loadingProvider.dismissLoader();
    });
  }

  // Check if friend is a member of the group or not.
  isMember(friend) {
    if (this.groupMembers) {
      for (var i = 0; i < this.groupMembers.length; i++) {
        if (this.groupMembers[i].uid == friend.uid) {
          return true;
        }
      }
    }
    return false;
  }

  // Check if friend is already on the list of members to be added.
  isAdded(friend) {
    if (this.toAdd) {
      for (var i = 0; i < this.toAdd.length; i++) {
        if (this.toAdd[i].uid == friend.uid) {
          return true;
        }
      }
    }
    return false;
  }

  // Toggle for adding/removing friend on the list of members to be added.
  addOrRemove(friend) {
    if (this.isAdded(friend)) {
      this.remove(friend);
    } else {
      this.add(friend);
    }
  }

  // Add or update friend information for real-time sync.
  addOrUpdateFriend(friend) {
    if (!this.friends) {
      this.friends = [friend];
    } else {
      var index = -1;
      for (var i = 0; i < this.friends.length; i++) {
        if (this.friends[i].uid == friend.uid) {
          index = i;
        }
      }
      if (index > -1) {
        this.friends[index] = friend;
      } else {
        this.friends.push(friend);
      }
    }
  }

  // Add or update member information for real-time sync.
  addOrUpdateMember(member) {
    if (!this.groupMembers) {
      this.groupMembers = [member];
    } else {
      var index = -1;
      for (var i = 0; i < this.groupMembers.length; i++) {
        if (this.groupMembers[i].uid == member.uid) {
          index = i;
        }
      }
      if (index > -1) {
        this.groupMembers[index] = member;
      } else {
        this.groupMembers.push(member);
      }
    }
  }

  // Add friend to the list of to be added.
  add(friend) {
    this.toAdd.push(friend);
  }

  // Remove friend from the list of to be added.
  remove(friend) {
    this.toAdd.splice(this.toAdd.indexOf(friend), 1);
  }
  // Get names of the members to be added to the group.
  getNames() {
    var names = '';
    this.toAdd.forEach((friend) => {
      names += friend.displayName + ', ';
    });
    return names.substring(0, names.length - 2);
  }

  // Confirm adding of new members, afterwards add the members.
  done() {
    this.alertCtrl.create({
      header: 'Add Members',
      message: 'Are you sure you want to add <b>' + this.getNames() + '</b> to the group?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            // Proceed
            this.loadingProvider.presentProcessingLoading();
            this.toAdd.forEach((friend) => {
              // Add groupInfo to each friend added to the group.
              this.firestore.set('users/' + friend.uid + '/groups/' + this.groupId, {
                id: this.groupId,
                messagesRead: 0
              });
              // Add friend as members of the group.
              console.log(friend.uid);
              console.log(this.group.members);
              this.group.members.push(friend.uid);
              // Add system message that the members are added to the group.
            });
            let msgID = this.firestore.createId();
            let msgObj = {
              date: new Date().toString(),
              sender: this.user.uid,
              type: 'system',
              message: this.user.displayName + ' has added ' + this.getNames() + ' to the group.',
              icon: 'people-outline',
              id: msgID
            }
            // Update group data on the database.
            this.firestore.update('groups/' + this.groupId, {
              members: this.group.members
            }).then(() => {
              // Back.
              this.loadingProvider.dismissLoader();
            });
            this.firestore.set('groups/' + this.groupId + '/messages/' + msgID, msgObj).then(() => {
              // Back.
              this.loadingProvider.dismissLoader();
            });
          }
        }
      ]
    }).then(r => r.present());
  }


}
