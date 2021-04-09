(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-members-add-members-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-members/add-members.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-members/add-members.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Memebers</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"done()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- All friends already in the group. -->\n  <div class=\"empty-list\" *ngIf=\"friends && friends.length == 0\">\n    <h1>\n      <ion-icon name=\"people-outline\"></ion-icon>\n    </h1>\n    <p>Uh-oh! Sorry but your friends are already a member of this group.</p>\n  </div>\n  <!-- Add/Cancel Add friends to the group. -->\n  <ion-list lines=\"none\" *ngIf=\"friends && friends.length > 0\">\n    <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\"\n      cancelButtonText=\"Done\"></ion-searchbar>\n      <ng-container *ngFor=\"let friend of friends | friendFilter:searchFriend\">\n        <ion-item *ngIf=\"friend.displayName\" (click)=\"addOrRemove(friend)\">\n\n          <ion-avatar slot=\"start\">\n            <img src=\"{{friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{friend.displayName}}</h2>\n            </ion-text>\n          </ion-label>\n          <ion-button size=\"small\" slot=\"end\" fill=\"outline\" (click)=\"add(friend); $event.stopPropagation();\"\n            *ngIf=\"!isAdded(friend)\">Add</ion-button>\n          <ion-button size=\"small\" slot=\"end\" fill=\"outline\" (click)=\"remove(friend); $event.stopPropagation();\"\n            *ngIf=\"isAdded(friend)\">Remove</ion-button>\n        </ion-item>\n      </ng-container>\n      \n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/add-members/add-members.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-members/add-members.module.ts ***!
  \*********************************************************/
/*! exports provided: AddMembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersPageModule", function() { return AddMembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-members.page */ "./src/app/pages/add-members/add-members.page.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _add_members_page__WEBPACK_IMPORTED_MODULE_6__["AddMembersPage"]
    }
];
var AddMembersPageModule = /** @class */ (function () {
    function AddMembersPageModule() {
    }
    AddMembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_members_page__WEBPACK_IMPORTED_MODULE_6__["AddMembersPage"]]
        })
    ], AddMembersPageModule);
    return AddMembersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-members/add-members.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-members/add-members.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1tZW1iZXJzL2FkZC1tZW1iZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/add-members/add-members.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-members/add-members.page.ts ***!
  \*******************************************************/
/*! exports provided: AddMembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersPage", function() { return AddMembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");







var AddMembersPage = /** @class */ (function () {
    // AddMemberPage
    // This is the page where the user can add their friends to an existing group.
    // The user can only add their friends to the group.
    function AddMembersPage(route, dataProvider, loadingProvider, alertCtrl, firestore) {
        var _this = this;
        this.route = route;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.firestore = firestore;
        this.route.queryParamMap.subscribe(function (params) {
            _this.groupId = params.get('id');
        });
    }
    AddMembersPage.prototype.ngOnInit = function () {
    };
    AddMembersPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.searchFriend = '';
        this.toAdd = [];
        this.loadingProvider.presentProcessingLoading();
        // Get user information for system message sent to the group when a member was added.
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.user = user;
        });
        // Get group information
        this.dataProvider.getGroup(this.groupId).subscribe(function (group) {
            _this.group = group;
            _this.groupMembers = null;
            // Get group members
            if (group.members) {
                group.members.forEach(function (memberId) {
                    _this.dataProvider.getUser(memberId).subscribe(function (member) {
                        _this.addOrUpdateMember(member);
                    });
                });
                // Get user's friends to add
                _this.dataProvider.getCurrentUser().subscribe(function (account) {
                    _this.firestore.doc$("friends/" + account.uid).subscribe(function (resp) {
                        if (resp.friendIds) {
                            for (var i = 0; i < resp.friendIds.length; i++) {
                                _this.dataProvider.getUser(resp.friendIds[i]).subscribe(function (friendRes) {
                                    // Only friends that are not yet a member of this group can be added.
                                    var friend = friendRes;
                                    console.log(friend);
                                    if (!_this.isMember(friend))
                                        _this.addOrUpdateFriend(friend);
                                });
                            }
                            _this.loadingProvider.dismissLoader();
                            if (!_this.friends) {
                                _this.friends = [];
                            }
                        }
                        else {
                            _this.friends = [];
                        }
                    });
                });
            }
            console.log(_this.friends);
            _this.loadingProvider.dismissLoader();
        });
    };
    // Check if friend is a member of the group or not.
    AddMembersPage.prototype.isMember = function (friend) {
        if (this.groupMembers) {
            for (var i = 0; i < this.groupMembers.length; i++) {
                if (this.groupMembers[i].uid == friend.uid) {
                    return true;
                }
            }
        }
        return false;
    };
    // Check if friend is already on the list of members to be added.
    AddMembersPage.prototype.isAdded = function (friend) {
        if (this.toAdd) {
            for (var i = 0; i < this.toAdd.length; i++) {
                if (this.toAdd[i].uid == friend.uid) {
                    return true;
                }
            }
        }
        return false;
    };
    // Toggle for adding/removing friend on the list of members to be added.
    AddMembersPage.prototype.addOrRemove = function (friend) {
        if (this.isAdded(friend)) {
            this.remove(friend);
        }
        else {
            this.add(friend);
        }
    };
    // Add or update friend information for real-time sync.
    AddMembersPage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].uid == friend.uid) {
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
    // Add or update member information for real-time sync.
    AddMembersPage.prototype.addOrUpdateMember = function (member) {
        if (!this.groupMembers) {
            this.groupMembers = [member];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.groupMembers.length; i++) {
                if (this.groupMembers[i].uid == member.uid) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groupMembers[index] = member;
            }
            else {
                this.groupMembers.push(member);
            }
        }
    };
    // Add friend to the list of to be added.
    AddMembersPage.prototype.add = function (friend) {
        this.toAdd.push(friend);
    };
    // Remove friend from the list of to be added.
    AddMembersPage.prototype.remove = function (friend) {
        this.toAdd.splice(this.toAdd.indexOf(friend), 1);
    };
    // Get names of the members to be added to the group.
    AddMembersPage.prototype.getNames = function () {
        var names = '';
        this.toAdd.forEach(function (friend) {
            names += friend.displayName + ', ';
        });
        return names.substring(0, names.length - 2);
    };
    // Confirm adding of new members, afterwards add the members.
    AddMembersPage.prototype.done = function () {
        var _this = this;
        this.alertCtrl.create({
            header: 'Add Members',
            message: 'Are you sure you want to add <b>' + this.getNames() + '</b> to the group?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        // Proceed
                        _this.loadingProvider.presentProcessingLoading();
                        _this.toAdd.forEach(function (friend) {
                            // Add groupInfo to each friend added to the group.
                            _this.firestore.set('users/' + friend.uid + '/groups/' + _this.groupId, {
                                id: _this.groupId,
                                messagesRead: 0
                            });
                            // Add friend as members of the group.
                            console.log(friend.uid);
                            console.log(_this.group.members);
                            _this.group.members.push(friend.uid);
                            // Add system message that the members are added to the group.
                        });
                        var msgID = _this.firestore.createId();
                        var msgObj = {
                            date: new Date().toString(),
                            sender: _this.user.uid,
                            type: 'system',
                            message: _this.user.displayName + ' has added ' + _this.getNames() + ' to the group.',
                            icon: 'people-outline',
                            id: msgID
                        };
                        // Update group data on the database.
                        _this.firestore.update('groups/' + _this.groupId, {
                            members: _this.group.members
                        }).then(function () {
                            // Back.
                            _this.loadingProvider.dismissLoader();
                        });
                        _this.firestore.set('groups/' + _this.groupId + '/messages/' + msgID, msgObj).then(function () {
                            // Back.
                            _this.loadingProvider.dismissLoader();
                        });
                    }
                }
            ]
        }).then(function (r) { return r.present(); });
    };
    AddMembersPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] }
    ]; };
    AddMembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-members',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-members.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-members/add-members.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-members.page.scss */ "./src/app/pages/add-members/add-members.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]])
    ], AddMembersPage);
    return AddMembersPage;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");







var DataService = /** @class */ (function () {
    function DataService(afAuth, afdb, firestore) {
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.firestore = firestore;
    }
    // Get all users
    DataService.prototype.getUsers = function () {
        // return this.afdb.list('/accounts', ref => ref.orderByChild('name'));
    };
    DataService.prototype.searchUser = function (keyword) {
        // return this.firestore.list('/accounts', (ref: any) => ref.where('name', '>=',keyword).where('name','<=',keyword + "\uf8ff").orderBy('name'));
    };
    // Get user with username
    DataService.prototype.getUserWithUsername = function (username) {
        return this.firestore.col$('users', function (ref) { return ref.orderByChild('username').equalTo(username); });
    };
    // Get logged in user data
    DataService.prototype.getCurrentUser = function () {
        return this.firestore.doc$('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid);
    };
    // Get user by their userId
    DataService.prototype.getUser = function (userId) {
        return this.firestore.doc$('users/' + userId);
    };
    // Get requests given the userId.
    DataService.prototype.getRequests = function (userId) {
        return this.afdb.object('/requests/' + userId);
    };
    // Get friend requests given the userId.
    DataService.prototype.getFriendRequests = function (userId) {
        return this.afdb.list('/requests', function (ref) { return ref.orderByChild('receiver').equalTo(userId); });
    };
    // Get conversation given the conversationId.
    DataService.prototype.getConversation = function (conversationId) {
        return this.firestore.doc$('conversations/' + conversationId);
    };
    // Get conversations of the current logged in user.
    DataService.prototype.getConversations = function () {
        return this.firestore.colWithIds$('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid + '/conversations', function (ref) { return ref.orderBy('createdAt', 'desc'); });
    };
    // Get messages of the conversation given the Id.
    DataService.prototype.getConversationMessages = function (conversationId) {
        return this.firestore.colOnce$('conversations/' + conversationId + '/messages', function (ref) { return ref.orderBy('createdAt', 'desc'); });
    };
    // Get messages of the group given the Id.
    DataService.prototype.getGroupMessages = function (groupId, date) {
        return this.firestore.colOnce$('groups/' + groupId + '/messages', function (ref) { return ref.orderBy('createdAt').startAt(date); });
    };
    // Get groups of the logged in user.
    DataService.prototype.getGroups = function () {
        return this.firestore.col$('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid + '/groups');
    };
    // Get group info given the groupId.
    DataService.prototype.getGroup = function (groupId) {
        return this.firestore.doc$('groups/' + groupId);
    };
    DataService.prototype.getBlockedLists = function () {
        return this.firestore.col$('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid + '/conversations', function (ref) { return ref.orderByChild('blocked').equalTo(true); });
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-members-add-members-module.js.map