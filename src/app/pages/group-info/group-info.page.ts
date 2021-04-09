import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ImageService } from 'src/app/services/image.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Camera } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase/app';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.page.html',
  styleUrls: ['./group-info.page.scss'],
})
export class GroupInfoPage implements OnInit {

  groupId: any;
  group: any;
  groupMembers: any;
  alert: any;
  user: any;
  subscription: any;
  // GroupInfoPage
  // This is the page where the user can view group information, change group information, add members, and leave/delete group.
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private dataProvider: DataService,
    private loadingProvider: LoaderService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private imageProvider: ImageService,
    private camera: Camera,
    private firestore: FirestoreService
  ) { 
    this.route.queryParamMap.subscribe(params => {
      this.groupId = params.get('id');
    })
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // Initialize

    // this.groupId = this.route.snapshot.params.id;
    console.log(this.groupId);

    // Get group details.
    this.subscription = this.dataProvider.getGroup(this.groupId).subscribe((groupRes: any) => {
      let group = groupRes;
      console.log(group);
      if (group != null) {
        // this.loadingProvider.presentProcessingLoading();
        this.group = group;
        if (group.members) {
          group.members.forEach((memberId) => {
            this.dataProvider.getUser(memberId).subscribe((member: any) => {
              if (member) {
                member = member;
                this.addUpdateOrRemoveMember(member);
              }
            });
          });
        }
        this.loadingProvider.dismissLoader();
      } else {
        this.navCtrl.navigateForward('messages');
      }
    });

    // Get user details.
    this.dataProvider.getCurrentUser().subscribe((user:any) => {
      this.user = user;
      console.log('current user',this.user.uid);
    });
  }

  // Delete subscription.
  // ionViewDidLeave() {
  //   if(this.deleteSubscription)
  //
  // }

  // Check if user exists in the group then add/update user.
  // If the user has already left the group, remove user from the list.
  addUpdateOrRemoveMember(member) {
    console.log(member);
    if (this.group) {
      if (this.group.members.indexOf(member.id) > -1) {
        // User exists in the group.
        if (!this.groupMembers) {
          this.groupMembers = [member];
        } else {
          var index = -1;
          for (var i = 0; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].id == member.id) {
              index = i;
            }
          }
          // Add/Update User.
          if (index > -1) {
            this.groupMembers[index] = member;
          } else {
            this.groupMembers.push(member);
          }
        }
      } else {
        // User already left the group, remove member from list.
        var index1 = -1;
        for (var j = 0; j < this.groupMembers.length; j++) {
          if (this.groupMembers[j].id == member.id) {
            index1 = j;
          }
        }
        if (index1 > -1) {
          this.groupMembers.splice(index1, 1);
        }
      }
    }
  }

  // View user info.
  viewUser(userId) {
    // if (firebase.auth().currentUser.uid != userId)
    //   this.router.navigateByUrl('/userinfo/' + userId);
  }

  // Enlarge group image.
  enlargeImage(img) {
    // let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
    // imageModal.present();
  }

  // Change group name.
  setName() {
    this.alert = this.alertCtrl.create({
      header: 'Change Group Name',
      message: "Please enter a new group name.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Group Name',
          value: this.group.name
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let name = data["name"];
            if (this.group.name != name) {
              this.loadingProvider.presentProcessingLoading();
              let msgID = this.firestore.createId();
              let msgObj = {
                date: new Date().toString(),
                sender: this.user.uid,
                type: 'system',
                message: this.user.displayName + ' has changed the group name to: ' + name + '.',
                icon: 'create-outline',
                id: msgID
              };
              // Add system message.
              this.firestore.set(`groups/${this.groupId}/messages/${msgID}`, msgObj);
              // Update group on database.
              this.firestore.update(`groups/${this.groupId}`,{
                name: name
              }).then((success) => {
                this.loadingProvider.dismissLoader();
                this.loadingProvider.showToast("Updated Succesfully");
              }).catch((error) => {
                this.loadingProvider.dismissLoader();
                this.loadingProvider.showToast("Something went wrong");
              });
            }
          }
        }
      ]
    }).then(r => r.present());
  }

  // Change group image, the user is asked if they want to take a photo or choose from gallery.
  setPhoto() {
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
            this.loadingProvider.presentProcessingLoading();
            // Upload photo and set to group photo, afterwards, return the group object as promise.
            this.imageProvider.setGroupPhotoPromise(this.group, this.camera.PictureSourceType.PHOTOLIBRARY).then((group) => {
              // Add system message.
              console.log('url', group);
              let msgID = this.firestore.createId();
              let msgObj = {
                date: new Date().toString(),
                sender: this.user.uid,
                type: 'system',
                message: this.user.displayName + ' has changed the group photo.',
                icon: 'camera-outline',
                id: msgID
              };
              this.firestore.set(`groups/${this.groupId}/messages/${msgID}`, msgObj);
              // Update group image on database.
              this.firestore.update(`groups/${this.groupId}`,{
                img: group
              }).then((success) => {
                this.loadingProvider.dismissLoader();
                this.loadingProvider.showToast("Updated Successfully");

              }).catch((error) => {
                this.loadingProvider.dismissLoader();
                this.loadingProvider.showToast("Something went wrong");
              });
            });
          }
        },
        {
          text: 'Take Photo',
          handler: () => {
            this.loadingProvider.presentProcessingLoading();
            // Upload photo and set to group photo, afterwwards, return the group object as promise.
            this.imageProvider.setGroupPhotoPromise(this.group, this.camera.PictureSourceType.CAMERA).then((group) => {
              // Add system message.
              let msgObj = {
                date: new Date().toString(),
                sender: this.user.uid,
                type: 'system',
                message: this.user.displayName + ' has changed the group photo.',
                icon: 'camera-outline',
                id: this.firestore.createId()
              };
              // Update group image on database.
              this.firestore.update(`groups/${this.groupId}`,{
                img: group.img
              }).then((success) => {
                this.loadingProvider.dismissLoader();
                this.firestore.set(`groups/${this.groupId}/messages/${msgObj.id}`, msgObj);
                this.loadingProvider.showToast("Updated Successfully")
              }).catch((error) => {
                this.loadingProvider.dismissLoader();
                this.loadingProvider.showToast("Something went wrong")

              });
            });
          }
        }
      ]
    }).then(r => r.present());
  }

  // Change group description.
  setDescription() {
    this.alert = this.alertCtrl.create({
      header: 'Change Group Description',
      message: "Please enter a new group description.",
      inputs: [
        {
          name: 'description',
          placeholder: 'Group Description',
          value: this.group.description
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let description = data["description"];
            if (this.group.description != description) {
              this.loadingProvider.presentProcessingLoading();
              const msgID = this.firestore.createId();
              let msgObj = {
                date: new Date().toString(),
                sender: this.user.uid,
                type: 'system',
                message: this.user.displayName + ' has changed the group description.',
                icon: 'clipboard-outline',
                id: msgID
              };
              this.firestore.set(`groups/${this.groupId}/messages/${msgID}`, msgObj);
              // Update group on database.
              this.firestore.update(`groups/${this.groupId}`,{
                description: description,
              }).then((success) => {
                this.loadingProvider.dismissLoader();
                this.loadingProvider.showToast("Updated Successfully")

              }).catch((error) => {
                this.loadingProvider.dismissLoader();
                this.loadingProvider.showToast("Something went wrong")
              });
            }
          }
        }
      ]
    }).then(r => r.present());
  }

  // Leave group.
  leaveGroup() {
    this.alert = this.alertCtrl.create({
      header: 'Confirm Leave',
      message: 'Are you sure you want to leave this group?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Leave',
          handler: data => {
            this.loadingProvider.presentProcessingLoading();
            // Remove member from group.
            this.group.members.splice(this.group.members.indexOf(this.user.uid), 1);
            // Add system message.
            let msgObj = {
              date: new Date().toString(),
              sender: this.user.uid,
              type: 'system',
              message: this.user.displayName + ' has left this group.',
              icon: 'log-out-outline',
              id: this.firestore.createId()
            }
            // Update group on database.
            this.firestore.update(`groups/${this.groupId}`,{
              members: this.group.members
            }).then((success) => {
              // Remove group from user's group list.
              this.firestore.set(`groups/${this.groupId}/messages/${msgObj.id}`, msgObj);
              this.firestore.delete('users/' + firebase.auth().currentUser.uid + '/groups/' + this.groupId).then(() => {
                // Pop this view because user already has left this group.
                this.group = null;
                setTimeout(() => {
                  this.loadingProvider.dismissLoader();
                  this.navCtrl.navigateForward('messages', {
                    queryParams: {
                      isRefresh: true
                    }
                  });
                }, 300);
              });
            }).catch((error) => {
              this.loadingProvider.showToast("Something went wrong")

            });
          }
        }
      ]
    }).then(r => r.present());
  }

  // Delete group.
  deleteGroup() {
    this.alert = this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this group?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: data => {
            let group = JSON.parse(JSON.stringify(this.group));
            console.log(group);
            // Delete all images of image messages.
            let msgs = [];
            this.firestore.col$(`groups/${this.group.id}/messages`).subscribe(resp => {
              msgs = resp;
            });
            msgs.forEach((message) => {
              if (message.type == 'image') {
                console.log("Delete: " + message.url + " of " + group.id);
                this.imageProvider.deleteGroupImageFile(group.id, message.url);
              }
            });

            this.groupMembers.forEach((member: any, index: number) => {
              this.firestore.delete('users/' + member + '/groups/' + group.id).then(() => {
                if(index === (group.members.length - 1)) {
                  this.firestore.delete('groups/' + group.id);
                }
              });
            });
            // Delete group image.
            console.log("Delete: " + group.img);
            this.imageProvider.deleteImageFile(group.img);
            // this.navCtrl.popToRoot();
            this.navCtrl.navigateRoot('messages');
          }
        }
      ]
    }).then(r => r.present());
  }

  // Add members.
  addMembers() {
    this.navCtrl.navigateForward('add-members', {
      queryParams: {
        id: this.groupId
      }
    });
  }

  async askRemove(member: any) {
    let alert = await this.alertCtrl.create({
      header: 'Remove ' + member.displayName,
      message: 'Do you want to remove ' + member.displayName  + ' from group?',
      buttons: [
        {
          text: 'Remove',
          handler: () => {
            this.removeMember(member);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

  removeMember(member: any) {
    this.loadingProvider.presentProcessingLoading();
    // Remove member from group.
    this.group.members.splice(this.group.members.indexOf(member.uid), 1);
    this.groupMembers.splice(this.groupMembers.indexOf(member), 1);

    // Add system message.
    let msg = {
      date: new Date().toString(),
      sender: this.user.uid,
      type: 'system',
      message: this.user.displayName + ' has removed ' + member.displayName + '. ',
      icon: 'log-out-outline',
      id: this.firestore.createId()
    };
    // Update group on database.
    this.firestore.update(`groups/${this.groupId}`,{
      members: this.group.members
    }).then((success) => {
      // Remove group from user's group list.

      this.firestore.set(`groups/${this.groupId}/messages/${msg.id}`, msg);

      this.firestore.delete('users/' + member.uid + '/groups/' + this.groupId).then(() => {
        // Pop this view because user already has left this group.
        this.loadingProvider.dismissLoader();
        // this.group = null;
        // setTimeout(() => {
        //   this.loadingProvider.dismissLoader();
        //   this.navCtrl.navigateForward('messages');
        // }, 300);
      });
    }).catch((error) => {
      this.loadingProvider.dismissLoader();
      this.loadingProvider.showToast("Something went wrong")
    });
  }

}
