import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Validator } from 'src/environments/validator';
import { Camera } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';

@Component({
  selector: 'app-newgroup',
  templateUrl: './newgroup.page.html',
  styleUrls: ['./newgroup.page.scss'],
})
export class NewgroupPage implements OnInit {

  group: any;
  groupForm: FormGroup;
  friends: any;
  searchFriend: any;
  groupMembers: any;
  alert: any;
  name: any;
  description: any;

  myForm: FormGroup;
  submitAttempt = false;
  errorMessages: any = [];
  currentUser: any;

  constructor(
    private navCtrl: NavController,
    private imageProvider: ImageService,
    private dataProvider: DataService,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    private loadingProvider: LoaderService,
    private camera: Camera,
    private firestore: FirestoreService
  ) {
    this.errorMessages = Validator.errorMessages

  }

  ngOnInit() {
    // this.myForm = this.formBuilder.group({
    //   groupName: Validator.groupNameValidator,
    //   groupDescription: Validator.groupDescriptionValidator,
    // })
  }

  ionViewDidEnter() {
    // Initialize
    this.group = {
      img: './assets/images/default-group.png'
    };
    this.searchFriend = '';

    // Get user's friends to add to the group.
    this.dataProvider.getCurrentUser().subscribe((accountRes: any) => {
      let account = accountRes;
      if (!this.groupMembers) {
        this.groupMembers = [account];
      }
      this.firestore.doc$(`friends/${accountRes.id}`).subscribe((resp: any) => {
        account.friends = resp.friendIds;
        console.log('account', account);
        if (account.friends) {
          for (var i = 0; i < account.friends.length; i++) {
            this.dataProvider.getUser(account.friends[i]).subscribe((friendRes: any) => {
              if (friendRes.id != null) {
                let friend = friendRes;
                this.addOrUpdateFriend(friend);
              }
            });
          }
        } else {
          this.friends = [];
        }
      });
    });
  }

  // Add or update friend for real-time sync.
  addOrUpdateFriend(friend) {
    if (!this.friends) {
      this.friends = [friend];
    } else {
      var index = -1;
      for (var i = 0; i < this.friends.length; i++) {
        if (this.friends[i].id == friend.id) {
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

  // Proceed with group creation.
  done() {
    this.submitAttempt = true;
    if (this.name && this.description) {
      this.loadingProvider.presentProcessingLoading();
      // Add system message that group is created.
      let msgId = this.firestore.createId();
      let msgObj = {
        date: new Date().toString(),
        sender: firebase.auth().currentUser.uid,
        type: 'system',
        message: 'This group has been created.',
        icon: 'chatbubbles-outline',
        id: msgId
      }
      // Add members of the group.
      var members = [];
      for (var i = 0; i < this.groupMembers.length; i++) {
        members.push(this.groupMembers[i].id);
      }
      // Add group info and date.
      this.group.dateCreated = new Date().toString();
      this.group.members = members;
      this.group.name = this.name;
      this.group.description = this.description;
      this.group.id = this.firestore.createId();
      this.group.admin = firebase.auth().currentUser.uid;
      // Add group to database.
      
      this.firestore.set(`groups/${this.group.id}`, this.group).then(() => {
        let groupId = this.group.id;
        this.firestore.set(`groups/${this.group.id}/messages/${msgId}`, msgObj).then(() => {
          // Add group reference to users.
          this.firestore.set('users/' + this.groupMembers[0].id + '/groups/' + groupId, {messagesRead: 1, id: groupId});
          for (var i = 1; i < this.groupMembers.length; i++) {
            this.firestore.set('users/' + this.groupMembers[i].id + '/groups/' + groupId, {messagesRead: 0, id: groupId});
          }
          this.navCtrl.navigateRoot('group', {
            queryParams: {
              groupId: groupId
            }
          });
        })
      });
    }
  }

  // Add friend to members of group.
  addToGroup(friend) {
    this.groupMembers.push(friend);
  }

  // Remove friend from members of group.
  removeFromGroup(friend) {
    var index = -1;
    for (var i = 1; i < this.groupMembers.length; i++) {
      if (this.groupMembers[i].id == friend.id) {
        index = i;
      }
    }
    if (index > -1) {
      this.groupMembers.splice(index, 1);
    }
  }

  // Check if friend is already added to the group or not.
  inGroup(friend) {
    for (var i = 0; i < this.groupMembers.length; i++) {
      if (this.groupMembers[i].id == friend.id) {
        return true;
      }
    }
    return false;
  }

  // Toggle to add/remove friend from the group.
  addOrRemoveFromGroup(friend) {
    if (this.inGroup(friend)) {
      this.removeFromGroup(friend);
    } else {
      this.addToGroup(friend);
    }
  }

  // Set group photo.
  setGroupPhoto() {
    this.alert = this.alertCtrl.create({
      header: 'Set Group Photo',
      message: 'Do you want to take a photo or choose from your photo gallery?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Choose from Gallery',
          handler: () => {
            this.imageProvider.setGroupPhoto(this.group, this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Take Photo',
          handler: () => {
            this.imageProvider.setGroupPhoto(this.group, this.camera.PictureSourceType.CAMERA);
          }
        }
      ]
    }).then(r => r.present());
  }

}
