(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-newgroup-newgroup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newgroup/newgroup.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newgroup/newgroup.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <h4>Create New Group</h4>\n      <p *ngIf=\"groupMembers\">{{groupMembers.length}} memebers</p>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"outline\" (click)=\"done()\">Create</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"group\">\n    <ion-row>\n      <ion-col size=\"3\" style=\"text-align:center;padding:1em\">\n        <img src=\"{{group.img}}\" *ngIf=\"group.img != ''\" tappable (click)=\"setGroupPhoto()\"\n          onError=\"this.src='../../../assets/images/default-group.png'\" />\n        <img style=\"border-radius: 100%; width: 100px; height: 100px;\" src=\"{{group.img}}\"\n          onError=\"this.src='../../../assets/images/default-group.png'\" *ngIf=\"group.img == ''\" tappable\n          (click)=\"setGroupPhoto()\" />\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-list style=\"margin:0;\" lines=\"none\">\n          <ion-item>\n            <ion-label position=\"stacked\">Group Name</ion-label>\n            <ion-input style=\"margin-top: 10px;\" [(ngModel)]=\"name\" placeholder=\"Name of Group\">\n            </ion-input>\n            <!-- <div *ngFor=\"let validation of errorMessages.groupName\">\n              <p class=\"error\"\n                *ngIf=\"myForm.get('groupName').hasError(validation.type) && (myForm.get('groupName').dirty || myForm.get('groupName').touched || submitAttempt) \">\n                {{validation.message}}\n              </p>\n            </div> -->\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Description</ion-label>\n            <ion-textarea [(ngModel)]=\"description\"\n              placeholder=\"Describe this Group\"></ion-textarea>\n            <!-- <div *ngFor=\"let validation of errorMessages.groupDescription\">\n              <p class=\"error\"\n                *ngIf=\"myForm.get('groupDescription').hasError(validation.type) && (myForm.get('groupDescription').dirty || myForm.get('groupDescription').touched || submitAttempt) \">\n                {{validation.message}}\n              </p>\n            </div> -->\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <!-- <div *ngIf=\"groupMembers\">\n      <ion-list-header>\n        Group Members\n      </ion-list-header>\n      <ion-list lines=\"none\">\n        <ion-item  *ngFor=\"let member of groupMembers\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{member.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>{{member.username}}</p>\n            </ion-text>\n          </ion-label>\n          <ion-button slot=\"end\" fill=\"outline\" (click)=\"removeFromGroup(member)\">Remove</ion-button>\n        </ion-item>\n      </ion-list>\n    </div> -->\n\n\n    <ion-list-header>\n      Add New Members\n    </ion-list-header>\n    <div class=\"form\">\n      <!-- No friends to create a group. -->\n      <div class=\"empty\" *ngIf=\"friends && friends.length == 0\">\n        <p>You have no friends right now to start a group conversation.</p>\n      </div>\n      <!-- Show friends to add/remove to group. -->\n      <ion-list lines=\"none\" *ngIf=\"friends && friends.length > 0\">\n        <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\"\n          cancelButtonText=\"Done\"></ion-searchbar>\n          <ng-container *ngFor=\"let friend of friends | friendFilter:searchFriend\">\n            <ion-item *ngIf=\"friend.displayName\" (click)=\"addOrRemoveFromGroup(friend)\">\n              <ion-avatar slot=\"start\">\n                <img src=\"{{friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n              </ion-avatar>\n              <ion-label>\n                <ion-text>\n                  <h2>{{friend.displayName}}</h2>\n                </ion-text>\n                <ion-text>\n                  <!-- <p>@{{friend.username}}</p> -->\n                </ion-text>\n              </ion-label>\n              <ion-button slot=\"end\" color=\"light\" (click)=\"addToGroup(friend); $event.stopPropagation();\"\n                *ngIf=\"!inGroup(friend)\">Add</ion-button>\n              <ion-button slot=\"end\" color=\"light\" (click)=\"removeFromGroup(friend); $event.stopPropagation();\"\n                *ngIf=\"inGroup(friend)\">Remove</ion-button>\n            </ion-item>\n          </ng-container>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/newgroup/newgroup.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/newgroup/newgroup.module.ts ***!
  \***************************************************/
/*! exports provided: NewgroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgroupPageModule", function() { return NewgroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newgroup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newgroup.page */ "./src/app/pages/newgroup/newgroup.page.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _newgroup_page__WEBPACK_IMPORTED_MODULE_6__["NewgroupPage"]
    }
];
var NewgroupPageModule = /** @class */ (function () {
    function NewgroupPageModule() {
    }
    NewgroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_newgroup_page__WEBPACK_IMPORTED_MODULE_6__["NewgroupPage"]]
        })
    ], NewgroupPageModule);
    return NewgroupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/newgroup/newgroup.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/newgroup/newgroup.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input, ion-textarea {\n  border-radius: 4px;\n  border: 2px solid #eee;\n  padding: 2px 8px !important;\n}\n\nion-title h4 {\n  margin: 0;\n  text-align: left;\n  font-size: 12px;\n}\n\nion-title p {\n  margin: 0;\n  text-align: left;\n  font-size: 12px;\n  color: #777777;\n}\n\nion-textarea {\n  border-radius: 20px;\n  border: 2px solid #eee;\n  padding: 2px 8px !important;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 0;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL3BhZ2VzL25ld2dyb3VwL25ld2dyb3VwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmV3Z3JvdXAvbmV3Z3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FER0k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQVI7O0FERUk7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FSOztBRElDO0VBQ0csbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3Z3JvdXAvbmV3Z3JvdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0LCBpb24tdGV4dGFyZWF7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG4gICAgcGFkZGluZzogMnB4IDhweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGV7XG4gICAgaDR7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzc3Nzc3NztcbiAgICB9XG59XG5cbiBpb24tdGV4dGFyZWF7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuICAgIHBhZGRpbmc6IDJweCA4cHggIWltcG9ydGFudDtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufSIsImlvbi1pbnB1dCwgaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiAycHggOHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSBoNCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLXRpdGxlIHAge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDJweCA4cHggIWltcG9ydGFudDtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/newgroup/newgroup.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/newgroup/newgroup.page.ts ***!
  \*************************************************/
/*! exports provided: NewgroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgroupPage", function() { return NewgroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_environments_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/validator */ "./src/environments/validator.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");












var NewgroupPage = /** @class */ (function () {
    function NewgroupPage(navCtrl, imageProvider, dataProvider, alertCtrl, afAuth, loadingProvider, camera, firestore) {
        this.navCtrl = navCtrl;
        this.imageProvider = imageProvider;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.firestore = firestore;
        this.submitAttempt = false;
        this.errorMessages = [];
        this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_7__["Validator"].errorMessages;
    }
    NewgroupPage.prototype.ngOnInit = function () {
        // this.myForm = this.formBuilder.group({
        //   groupName: Validator.groupNameValidator,
        //   groupDescription: Validator.groupDescriptionValidator,
        // })
    };
    NewgroupPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Initialize
        this.group = {
            img: './assets/images/default-group.png'
        };
        this.searchFriend = '';
        // Get user's friends to add to the group.
        this.dataProvider.getCurrentUser().subscribe(function (accountRes) {
            var account = accountRes;
            if (!_this.groupMembers) {
                _this.groupMembers = [account];
            }
            _this.firestore.doc$("friends/" + accountRes.id).subscribe(function (resp) {
                account.friends = resp.friendIds;
                console.log('account', account);
                if (account.friends) {
                    for (var i = 0; i < account.friends.length; i++) {
                        _this.dataProvider.getUser(account.friends[i]).subscribe(function (friendRes) {
                            if (friendRes.id != null) {
                                var friend = friendRes;
                                _this.addOrUpdateFriend(friend);
                            }
                        });
                    }
                }
                else {
                    _this.friends = [];
                }
            });
        });
    };
    // Add or update friend for real-time sync.
    NewgroupPage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].id == friend.id) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    // Proceed with group creation.
    NewgroupPage.prototype.done = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.name && this.description) {
            this.loadingProvider.presentProcessingLoading();
            // Add system message that group is created.
            var msgId_1 = this.firestore.createId();
            var msgObj_1 = {
                date: new Date().toString(),
                sender: firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
                type: 'system',
                message: 'This group has been created.',
                icon: 'chatbubbles-outline',
                id: msgId_1
            };
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
            this.group.admin = firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid;
            // Add group to database.
            this.firestore.set("groups/" + this.group.id, this.group).then(function () {
                var groupId = _this.group.id;
                _this.firestore.set("groups/" + _this.group.id + "/messages/" + msgId_1, msgObj_1).then(function () {
                    // Add group reference to users.
                    _this.firestore.set('users/' + _this.groupMembers[0].id + '/groups/' + groupId, { messagesRead: 1, id: groupId });
                    for (var i = 1; i < _this.groupMembers.length; i++) {
                        _this.firestore.set('users/' + _this.groupMembers[i].id + '/groups/' + groupId, { messagesRead: 0, id: groupId });
                    }
                    _this.navCtrl.navigateRoot('group', {
                        queryParams: {
                            groupId: groupId
                        }
                    });
                });
            });
        }
    };
    // Add friend to members of group.
    NewgroupPage.prototype.addToGroup = function (friend) {
        this.groupMembers.push(friend);
    };
    // Remove friend from members of group.
    NewgroupPage.prototype.removeFromGroup = function (friend) {
        var index = -1;
        for (var i = 1; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].id == friend.id) {
                index = i;
            }
        }
        if (index > -1) {
            this.groupMembers.splice(index, 1);
        }
    };
    // Check if friend is already added to the group or not.
    NewgroupPage.prototype.inGroup = function (friend) {
        for (var i = 0; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].id == friend.id) {
                return true;
            }
        }
        return false;
    };
    // Toggle to add/remove friend from the group.
    NewgroupPage.prototype.addOrRemoveFromGroup = function (friend) {
        if (this.inGroup(friend)) {
            this.removeFromGroup(friend);
        }
        else {
            this.addToGroup(friend);
        }
    };
    // Set group photo.
    NewgroupPage.prototype.setGroupPhoto = function () {
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
                        _this.imageProvider.setGroupPhoto(_this.group, _this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        _this.imageProvider.setGroupPhoto(_this.group, _this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).then(function (r) { return r.present(); });
    };
    NewgroupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreService"] }
    ]; };
    NewgroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newgroup',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newgroup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newgroup/newgroup.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./newgroup.page.scss */ "./src/app/pages/newgroup/newgroup.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreService"]])
    ], NewgroupPage);
    return NewgroupPage;
}());



/***/ }),

/***/ "./src/environments/validator.ts":
/*!***************************************!*\
  !*** ./src/environments/validator.ts ***!
  \***************************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var Validator;
(function (Validator) {
    Validator.emailValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ]
    ];
    Validator.passwordValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
        ]];
    Validator.nameValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]];
    Validator.usernameValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
        ]];
    Validator.bioValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]];
    Validator.groupNameValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]];
    Validator.groupDescriptionValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]];
    Validator.errorMessages = {
        email: [
            { type: 'required', message: 'Email is required' },
            { type: 'pattern', message: 'Email looks like invalid' },
        ],
        password: [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Password must be 6 char' },
        ],
        name: [
            { type: 'required', message: 'Name is required' },
        ],
        username: [
            { type: 'required', message: 'Username is required' },
            { type: 'minlength', message: 'Username must be 5 char' },
        ],
        bio: [
            { type: 'required', message: 'Bio is required' },
        ],
        groupName: [
            { type: 'required', message: 'Group Name is required' },
        ],
        groupDescription: [
            { type: 'required', message: 'Group Description is required' },
        ],
    };
})(Validator || (Validator = {}));


/***/ })

}]);
//# sourceMappingURL=pages-newgroup-newgroup-module.js.map