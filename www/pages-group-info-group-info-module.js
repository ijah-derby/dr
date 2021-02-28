(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-info-group-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-info/group-info.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-info/group-info.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"group\">{{group.name}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"danger\" (click)=\"leaveGroup()\" *ngIf=\"groupMembers && groupMembers.length > 1\">Leave\n      </ion-button>\n      <ion-button color=\"danger\" (click)=\"deleteGroup()\" *ngIf=\"groupMembers && groupMembers.length <= 1\">Delete\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"group\">\n    <ion-row style=\"background:#f3f3f3\" padding>\n      <ion-col size=\"8\">\n        <h4 tappable (click)=\"setName()\">{{group.name}} <ion-icon name=\"create\"></ion-icon>\n        </h4>\n        <p tappable style=\"color:#aaa\" (click)=\"setDescription()\">{{group.description}} <ion-icon name=\"create\">\n          </ion-icon>\n        </p>\n        <p style=\"color:#aaa;margin:0\">Started {{group.dateCreated | DateFormat}}</p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <img src=\"{{group.img}}\" style=\"border-radius: 100%; width: 80px; height: 80px;\" tappable (click)=\"setPhoto()\"\n          onError=\"this.src='./assets/images/default-group.png'\">\n      </ion-col>\n    </ion-row>\n    <ion-list *ngIf=\"groupMembers\" lines=\"none\">\n      <ion-item>\n        <ion-label>\n          <ion-text>\n            Group Members ({{groupMembers.length}})\n          </ion-text>\n        </ion-label>\n        <!-- <ion-button slot=\"end\" (click)=\"addMembers()\" fill=\"outline\">Add</ion-button> -->\n      </ion-item>\n      <ion-item *ngFor=\"let member of groupMembers\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\n        </ion-avatar>\n        <ion-label>\n          <ion-text>\n            <h2>{{member.displayName}}</h2>\n          </ion-text>\n          <ion-text>\n            <!-- <p>{{member.description}}</p> -->\n          </ion-text>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/group-info/group-info.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/group-info/group-info.module.ts ***!
  \*******************************************************/
/*! exports provided: GroupInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInfoPageModule", function() { return GroupInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-info.page */ "./src/app/pages/group-info/group-info.page.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _group_info_page__WEBPACK_IMPORTED_MODULE_6__["GroupInfoPage"]
    }
];
var GroupInfoPageModule = /** @class */ (function () {
    function GroupInfoPageModule() {
    }
    GroupInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_group_info_page__WEBPACK_IMPORTED_MODULE_6__["GroupInfoPage"]]
        })
    ], GroupInfoPageModule);
    return GroupInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-info/group-info.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/group-info/group-info.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLWluZm8vZ3JvdXAtaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/group-info/group-info.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/group-info/group-info.page.ts ***!
  \*****************************************************/
/*! exports provided: GroupInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInfoPage", function() { return GroupInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");










var GroupInfoPage = /** @class */ (function () {
    // GroupInfoPage
    // This is the page where the user can view group information, change group information, add members, and leave/delete group.
    function GroupInfoPage(navCtrl, route, dataProvider, loadingProvider, modalCtrl, alertCtrl, imageProvider, camera, firestore) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.route = route;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.camera = camera;
        this.firestore = firestore;
        this.route.queryParamMap.subscribe(function (params) {
            _this.groupId = params.get('id');
        });
    }
    GroupInfoPage.prototype.ngOnInit = function () {
    };
    GroupInfoPage.prototype.ionViewDidEnter = function () {
        // Initialize
        var _this = this;
        // this.groupId = this.route.snapshot.params.id;
        console.log(this.groupId);
        // Get group details.
        this.subscription = this.dataProvider.getGroup(this.groupId).subscribe(function (groupRes) {
            var group = groupRes;
            console.log(group);
            if (group != null) {
                // this.loadingProvider.presentProcessingLoading();
                _this.group = group;
                if (group.members) {
                    group.members.forEach(function (memberId) {
                        _this.dataProvider.getUser(memberId).subscribe(function (member) {
                            if (member) {
                                member = member;
                                _this.addUpdateOrRemoveMember(member);
                            }
                        });
                    });
                }
                _this.loadingProvider.dismissLoader();
            }
            else {
                _this.navCtrl.navigateForward('messages');
            }
        });
        // Get user details.
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.user = user;
        });
    };
    // Delete subscription.
    // ionViewDidLeave() {
    //   if(this.deleteSubscription)
    //
    // }
    // Check if user exists in the group then add/update user.
    // If the user has already left the group, remove user from the list.
    GroupInfoPage.prototype.addUpdateOrRemoveMember = function (member) {
        console.log(member);
        if (this.group) {
            if (this.group.members.indexOf(member.id) > -1) {
                // User exists in the group.
                if (!this.groupMembers) {
                    this.groupMembers = [member];
                }
                else {
                    var index = -1;
                    for (var i = 0; i < this.groupMembers.length; i++) {
                        if (this.groupMembers[i].id == member.id) {
                            index = i;
                        }
                    }
                    // Add/Update User.
                    if (index > -1) {
                        this.groupMembers[index] = member;
                    }
                    else {
                        this.groupMembers.push(member);
                    }
                }
            }
            else {
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
    };
    // View user info.
    GroupInfoPage.prototype.viewUser = function (userId) {
        // if (firebase.auth().currentUser.uid != userId)
        //   this.router.navigateByUrl('/userinfo/' + userId);
    };
    // Enlarge group image.
    GroupInfoPage.prototype.enlargeImage = function (img) {
        // let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
        // imageModal.present();
    };
    // Change group name.
    GroupInfoPage.prototype.setName = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var name = data["name"];
                        if (_this.group.name != name) {
                            _this.loadingProvider.presentProcessingLoading();
                            var msgID = _this.firestore.createId();
                            var msgObj = {
                                date: new Date().toString(),
                                sender: _this.user.uid,
                                type: 'system',
                                message: _this.user.displayName + ' has changed the group name to: ' + name + '.',
                                icon: 'create-outline',
                                id: msgID
                            };
                            // Add system message.
                            _this.firestore.set("groups/" + _this.groupId + "/messages/" + msgID, msgObj);
                            // Update group on database.
                            _this.firestore.update("groups/" + _this.groupId, {
                                name: name
                            }).then(function (success) {
                                _this.loadingProvider.dismissLoader();
                                _this.loadingProvider.showToast("Updated Succesfully");
                            }).catch(function (error) {
                                _this.loadingProvider.dismissLoader();
                                _this.loadingProvider.showToast("Something went wrong");
                            });
                        }
                    }
                }
            ]
        }).then(function (r) { return r.present(); });
    };
    // Change group image, the user is asked if they want to take a photo or choose from gallery.
    GroupInfoPage.prototype.setPhoto = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            header: 'Set Group Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        _this.loadingProvider.presentProcessingLoading();
                        // Upload photo and set to group photo, afterwards, return the group object as promise.
                        _this.imageProvider.setGroupPhotoPromise(_this.group, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (group) {
                            // Add system message.
                            console.log('url', group);
                            var msgID = _this.firestore.createId();
                            var msgObj = {
                                date: new Date().toString(),
                                sender: _this.user.uid,
                                type: 'system',
                                message: _this.user.displayName + ' has changed the group photo.',
                                icon: 'camera-outline',
                                id: msgID
                            };
                            _this.firestore.set("groups/" + _this.groupId + "/messages/" + msgID, msgObj);
                            // Update group image on database.
                            _this.firestore.update("groups/" + _this.groupId, {
                                img: group
                            }).then(function (success) {
                                _this.loadingProvider.dismissLoader();
                                _this.loadingProvider.showToast("Updated Successfully");
                            }).catch(function (error) {
                                _this.loadingProvider.dismissLoader();
                                _this.loadingProvider.showToast("Something went wrong");
                            });
                        });
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        _this.loadingProvider.presentProcessingLoading();
                        // Upload photo and set to group photo, afterwwards, return the group object as promise.
                        _this.imageProvider.setGroupPhotoPromise(_this.group, _this.camera.PictureSourceType.CAMERA).then(function (group) {
                            // Add system message.
                            _this.group.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.uid,
                                type: 'system',
                                message: _this.user.displayName + ' has changed the group photo.',
                                icon: 'camera-outline'
                            });
                            // Update group image on database.
                            _this.firestore.update("groups/" + _this.groupId, {
                                img: group.img,
                                messages: _this.group.messages
                            }).then(function (success) {
                                _this.loadingProvider.dismissLoader();
                                _this.loadingProvider.showToast("Updated Successfully");
                            }).catch(function (error) {
                                _this.loadingProvider.dismissLoader();
                                _this.loadingProvider.showToast("Something went wrong");
                            });
                        });
                    }
                }
            ]
        }).then(function (r) { return r.present(); });
    };
    // Change group description.
    GroupInfoPage.prototype.setDescription = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var description = data["description"];
                        if (_this.group.description != description) {
                            _this.loadingProvider.presentProcessingLoading();
                            var msgID = _this.firestore.createId();
                            var msgObj = {
                                date: new Date().toString(),
                                sender: _this.user.uid,
                                type: 'system',
                                message: _this.user.displayName + ' has changed the group description.',
                                icon: 'clipboard-outline',
                                id: msgID
                            };
                            _this.firestore.set("groups/" + _this.groupId + "/messages/" + msgID, msgObj);
                            // Update group on database.
                            _this.firestore.update("groups/" + _this.groupId, {
                                description: description,
                            }).then(function (success) {
                                _this.loadingProvider.dismissLoader();
                                _this.loadingProvider.showToast("Updated Successfully");
                            }).catch(function (error) {
                                _this.loadingProvider.dismissLoader();
                                _this.loadingProvider.showToast("Something went wrong");
                            });
                        }
                    }
                }
            ]
        }).then(function (r) { return r.present(); });
    };
    // Leave group.
    GroupInfoPage.prototype.leaveGroup = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            header: 'Confirm Leave',
            message: 'Are you sure you want to leave this group?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Leave',
                    handler: function (data) {
                        _this.loadingProvider.presentProcessingLoading();
                        // Remove member from group.
                        _this.group.members.splice(_this.group.members.indexOf(_this.user.uid), 1);
                        // Add system message.
                        _this.group.messages.push({
                            date: new Date().toString(),
                            sender: _this.user.uid,
                            type: 'system',
                            message: _this.user.displayName + ' has left this group.',
                            icon: 'log-out-outline'
                        });
                        // Update group on database.
                        _this.firestore.update("groups/" + _this.groupId, {
                            members: _this.group.members,
                            messages: _this.group.messages
                        }).then(function (success) {
                            // Remove group from user's group list.
                            _this.firestore.delete('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid + '/groups/' + _this.groupId).then(function () {
                                // Pop this view because user already has left this group.
                                _this.group = null;
                                setTimeout(function () {
                                    _this.loadingProvider.dismissLoader();
                                    _this.navCtrl.navigateForward('messages');
                                }, 300);
                            });
                        }).catch(function (error) {
                            _this.loadingProvider.showToast("Something went wrong");
                        });
                    }
                }
            ]
        }).then(function (r) { return r.present(); });
    };
    // Delete group.
    GroupInfoPage.prototype.deleteGroup = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            header: 'Confirm Delete',
            message: 'Are you sure you want to delete this group?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Delete',
                    handler: function (data) {
                        var group = JSON.parse(JSON.stringify(_this.group));
                        console.log(group);
                        // Delete all images of image messages.
                        group.messages.forEach(function (message) {
                            if (message.type == 'image') {
                                console.log("Delete: " + message.url + " of " + group.id);
                                _this.imageProvider.deleteGroupImageFile(group.id, message.url);
                            }
                        });
                        _this.firestore.delete('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid + '/groups/' + group.id).then(function () {
                            _this.firestore.delete('groups/' + group.id);
                        });
                        // Delete group image.
                        console.log("Delete: " + group.img);
                        _this.imageProvider.deleteImageFile(group.img);
                        // this.navCtrl.popToRoot();
                        _this.navCtrl.navigateRoot('messages');
                    }
                }
            ]
        }).then(function (r) { return r.present(); });
    };
    // Add members.
    GroupInfoPage.prototype.addMembers = function () {
        // this.router.navigateByUrl('/addmembers/' + this.groupId);
    };
    GroupInfoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"] }
    ]; };
    GroupInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-info',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-info/group-info.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-info.page.scss */ "./src/app/pages/group-info/group-info.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"]])
    ], GroupInfoPage);
    return GroupInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-info-group-info-module.js.map