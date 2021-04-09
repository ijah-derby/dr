(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar class=\"tool\" color=\"favorite\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-icon\r\n    src=\"assets/icons/menu-outline.svg\"\r\n    color=\"danger\"\r\n      style=\"font-size: 25px; padding-left: 10px; color: black;\"\r\n      (click)=\"openMenu()\"\r\n    ></ion-icon>\r\n    <ion-menu-button class=\"headphones\" menu=\"second\" autoHide=\"true\">\r\n      <ion-icon src=\"assets/icons/play-outline.svg\" color=\"medium\"></ion-icon>\r\n    </ion-menu-button>\r\n    <ion-icon\r\n    src=\"assets/icons/trash-outline.svg\"\r\n    color=\"primary\"\r\n      (click)=\"deleteAllConfirm()\"\r\n      style=\"color: gray; font-size: 19px;\"\r\n    ></ion-icon>\r\n  </ion-buttons>\r\n  <img\r\n    id=\"hide\"\r\n    alt=\"appicon\"\r\n    height=\"22\"\r\n    style=\"margin-right: 10px;\"\r\n    class=\"ion-float-right\"\r\n    src=\"assets/images/logo1.png\"\r\n  />\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3><b>Notifications</b></h3>\r\n      </ion-col>\r\n      <!-- <ion-col style=\"text-align: right;\">\r\n        <ion-icon name=\"search\" size=\"large\" (click)=\"search = !search\"></ion-icon>\r\n      </ion-col> -->\r\n    </ion-row>\r\n    <!--    <ion-row>-->\r\n    <!--      <ion-col>-->\r\n    <!--        <ion-searchbar animated=\"true\" showCancelButton=\"focus\" value=\"Search here...\" *ngIf=\"search\"></ion-searchbar>-->\r\n    <!--      </ion-col>-->\r\n    <!--    </ion-row>-->\r\n  </ion-grid>\r\n\r\n  <ion-list lines=\"none\">\r\n    <ion-item-sliding *ngFor=\"let item of notifications; let i = index;\">\r\n      <!-- *ngIf=\"(item.by != currentUser.uid && item.type == 2) || (item.by == currentUser.uid && item.type != 2)\" -->\r\n      <ion-item\r\n        class=\"ion-no-margin ion-no-padding\"\r\n        *ngIf=\"!item.deletedBy || !item.deletedBy.includes(currentUser.uid)\"\r\n      >\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"2\" (click)=\"goToPage(item)\">\r\n              <div class=\"image\" [image-loader]=\"item.photoURL\"></div>\r\n              <!--              <img [src]=\"item.photoURL\" width=\"50px\" height=\"50px\" style=\"border-radius: 50%;\" alt=\"\">-->\r\n            </ion-col>\r\n            <ion-col [size]=\"getSize(item)\">\r\n              <div (click)=\"goToPage(item)\">\r\n                <label *ngIf=\"!isSeen(item)\"><b>{{ item.body }}</b></label>\r\n                <label *ngIf=\"isSeen(item)\">{{ item.body }}</label>\r\n                <br />\r\n              </div>\r\n              <label\r\n                class=\"ion-no-margin ion-no-padding\"\r\n                style=\"font-size: small; color: gray;\"\r\n                >{{ item.timestamp?.toDate() | amTimeAgo }}\r\n              </label>\r\n              <ion-icon\r\n              src=\"assets/icons/trash-outline.svg\"\r\n                style=\"color: gray; position: relative; top: 4px; left: 5px;\"\r\n                (click)=\"deleteNotification(item)\"\r\n              ></ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"2\" *ngIf=\"item.postPhoto\">\r\n              <img\r\n                [src]=\"item.postPhoto\"\r\n                style=\"border: 1px solid lightgray; border-radius: 5px;\"\r\n              />\r\n            </ion-col>\r\n            <ion-col size=\"2\" *ngIf=\"item.type==0 && item.photoURL\">\r\n              <div\r\n                style=\"\r\n                  border: 1px solid lightgray;\r\n                  border-radius: 5px;\r\n                  width: 100%;\r\n                  height: 100%;\r\n                \"\r\n                [image-loader]=\"item.photoURL\"\r\n              ></div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\">\r\n          <ion-icon\r\n            style=\"width: 30px; height: 30px;\"\r\n            name=\"trash\"\r\n            (click)=\"deleteNotification(item.id)\"\r\n          ></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  \r\n  <div *ngIf=\"notificationsFound.length === 0\" class=\"not-found\">\r\n    <p>No Notification Found</p>\r\n  </div>\r\n\r\n  <app-spinner *ngIf=\"loading\"></app-spinner>\r\n</ion-content>\r\n<ion-toolbar>\r\n  <ion-tabs>\r\n    <ion-tab-bar color=\"favorite\" slot=\"bottom\">\r\n      <ion-tab-button routerLink=\"/feed\" routerDirection=\"forward\">\r\n        <ion-icon src=\"assets/icons/home-outline.svg\" color=\"primary\" style=\"width: 30px; height: 50px;\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\r\n        <ion-icon src=\"assets/icons/person-outline.svg\" color=\"primary\" style=\"width: 28px; height: 50px;\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button routerLink=\"/people\" routerDirection=\"forward\">\r\n        <ion-icon\r\n        src=\"assets/icons/people-outline.svg\"\r\n        color=\"primary\"\r\n          style=\"width: 35px; height: 50px;\"\r\n        ></ion-icon>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-toolbar>\r\n");

/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");






var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]],
            entryComponents: []
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list,\nion-item {\n  padding-left: 3px;\n  background: transparent;\n  --background: transparent;\n}\n\n.unseen {\n  --background: rgb(233, 229, 229) !important;\n}\n\nh3 {\n  padding-left: 8px;\n}\n\n.image {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n}\n\n@media (min-width: 829px) {\n  img#hide {\n    display: none;\n  }\n}\n\n.writer {\n  position: fixed;\n  top: 55px;\n  right: -8px;\n  z-index: 999;\n}\n\n.not-found {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  /* position: absolute; */\n  /* left: 0; */\n  margin: 0 auto;\n  /* display: block; */\n  margin-top: 50%;\n  color: dimgray;\n}\n\n.tool {\n  box-shadow: 0px 0.3px 0px #a8a8a8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwyQ0FBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0UsYUFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsNENBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCxcclxuaW9uLWl0ZW0ge1xyXG4gIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnVuc2VlbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMzLCAyMjksIDIyOSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDMge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODI5cHgpIHtcclxuICBpbWcjaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLndyaXRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTVweDtcclxuICByaWdodDogLThweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5ub3QtZm91bmQge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgLyogbGVmdDogMDsgKi9cclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgY29sb3I6IGRpbWdyYXk7XHJcbn1cclxuXHJcbi50b29sIHtcclxuICBib3gtc2hhZG93OiAwcHggMC4zcHggMHB4ICNhOGE4YTghaW1wb3J0YW50O1xyXG59IiwiaW9uLWxpc3QsXG5pb24taXRlbSB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnVuc2VlbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzMywgMjI5LCAyMjkpICFpbXBvcnRhbnQ7XG59XG5cbmgzIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MjlweCkge1xuICBpbWcjaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLndyaXRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1NXB4O1xuICByaWdodDogLThweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ubm90LWZvdW5kIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIC8qIGxlZnQ6IDA7ICovXG4gIG1hcmdpbjogMCBhdXRvO1xuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cbiAgbWFyZ2luLXRvcDogNTAlO1xuICBjb2xvcjogZGltZ3JheTtcbn1cblxuLnRvb2wge1xuICBib3gtc2hhZG93OiAwcHggMC4zcHggMHB4ICNhOGE4YTggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var _pages_feed_components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/feed/components/feed-comment/feed-comment.component */ "./src/pages/feed/components/feed-comment/feed-comment.component.ts");
/* harmony import */ var _pages_feed_components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/feed/components/feed-detail/feed-detail.component */ "./src/pages/feed/components/feed-detail/feed-detail.component.ts");
/* harmony import */ var _pages_people_components_person_person_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/people/components/person/person.component */ "./src/pages/people/components/person/person.component.ts");
/* harmony import */ var _shared_helpers_extender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/notification.service */ "./src/app/notifications/service/notification.service.ts");
/* harmony import */ var src_pages_feed_components_feed_reply_feed_reply_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/pages/feed/components/feed-reply/feed-reply.component */ "./src/pages/feed/components/feed-reply/feed-reply.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");














var NotificationsPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotificationsPage, _super);
    function NotificationsPage(firestore, authService, notificationService, firestoreService, injector, navCtrl, menuCtrl, loaderService) {
        var _this = _super.call(this, injector) || this;
        _this.firestore = firestore;
        _this.authService = authService;
        _this.notificationService = notificationService;
        _this.firestoreService = firestoreService;
        _this.injector = injector;
        _this.navCtrl = navCtrl;
        _this.menuCtrl = menuCtrl;
        _this.loaderService = loaderService;
        _this.notifications = [];
        _this.photoURLs = [];
        _this.isFound = true;
        _this.notificationsFound = [];
        _this.notificationCounter = 0;
        return _this;
    }
    NotificationsPage.prototype.getSpecificFeed = function (id) {
        return this.firestore
            .doc("feed/" + id)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (doc) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: doc.payload.id }, doc.payload.data());
        }));
    };
    NotificationsPage.prototype.getSpecificComment = function (fid, cid) {
        return this.firestore
            .doc("feed/" + fid + "/comments/" + cid)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (doc) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: doc.payload.id }, doc.payload.data());
        }));
    };
    NotificationsPage.prototype.getSpecificUser = function (uid) {
        return this.firestore
            .doc("users/" + uid)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (doc) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ uid: doc.payload.id }, doc.payload.data());
        }));
    };
    NotificationsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    NotificationsPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("onInit()");
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        console.log('currentUser', this.currentUser);
                        if (!this.currentUser.uid) {
                            this.navCtrl.navigateRoot('auth/login');
                            return [2 /*return*/];
                        }
                        this.loadingService.presentProcessingLoading();
                        this.notificationService
                            .getNotifications(this.currentUser.uid)
                            .then(function (not) {
                            _this.loaderService.dismissLoader();
                            console.log(not);
                            _this.notifications = not.slice();
                            _this.notificationCounter = _this.notificationService.unreadCounter;
                            _this.notificationsFound = not.filter(function (item) { return !item.deletedBy.includes(_this.currentUser.uid); });
                            if (_this.notificationsFound.length === 0) {
                                _this.loaderService.dismissLoader();
                            }
                            _this.notificationService.getUnreadCount(_this.notificationService.notifications, _this.currentUser.uid);
                            _this.notificationCounter = _this.notificationService.unreadCounter;
                            // setTimeout(() => {
                            //   this.loaderService.dismissLoader();
                            // }, 3000);
                        })
                            .catch(function (err) {
                            _this.loaderService.dismissLoader();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open post details modal, update array of feed if any change is made */
    NotificationsPage.prototype.viewPost = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_pages_feed_components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_6__["FeedDetailComponent"], id)];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open feed's comments */
    NotificationsPage.prototype.comment = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getSpecificFeed(id).subscribe(function (feed) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var modal;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.openModal(_pages_feed_components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_5__["FeedCommentComponent"], feed)];
                            case 1:
                                modal = _a.sent();
                                modal.present();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /** open feed's comment's reply */
    NotificationsPage.prototype.reply = function (fid, cid, rid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getSpecificFeed(fid).subscribe(function (feed) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.getSpecificComment(fid, cid).subscribe(function (comment) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.getSpecificUser(comment.uid).subscribe(function (user) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var modal;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                comment.user = user;
                                                return [4 /*yield*/, this.openModal(src_pages_feed_components_feed_reply_feed_reply_component__WEBPACK_IMPORTED_MODULE_11__["FeedReplyComponent"], {
                                                        feed: feed,
                                                        comment: comment,
                                                        type: 1,
                                                        replyID: rid,
                                                    })];
                                            case 1:
                                                modal = _a.sent();
                                                modal.present();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    NotificationsPage.prototype.open = function (uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_pages_people_components_person_person_component__WEBPACK_IMPORTED_MODULE_7__["PersonComponent"], uid, "custom-modal")];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.deleteNotification = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("not id", item.id);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Delete Notification",
                                message: "Do you want to delete this notification?",
                                buttons: [
                                    {
                                        text: "Delete",
                                        handler: function () {
                                            // this.firestoreService.delete(`notifications/${id}`);
                                            if (item.deletedBy) {
                                                item.deletedBy.push(_this.currentUser.uid);
                                            }
                                            else {
                                                var arr = [];
                                                arr.push(_this.currentUser.uid);
                                                item.deletedBy = arr;
                                            }
                                            _this.firestoreService.update("notifications/" + item.id, {
                                                deletedBy: item.deletedBy,
                                            });
                                        },
                                    },
                                    {
                                        text: "Cancel",
                                    },
                                ],
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.goToPage = function (not) {
        console.log(not);
        if (not.type === 1 || not.type === 4) {
            not.type === 1 ? not.seenBy.push(this.currentUser.uid) : (not.seen = 1);
            this.viewPost(not.postId);
        }
        else if (not.type === 2) {
            not.seen = 1;
            this.comment(not.postId);
        }
        else if (not.type === 3) {
            not.seen = 1;
            this.reply(not.postId, not.commentID, not.replyID);
        }
        else if (not.type === 0) {
            not.seen = 1;
            this.openProfile(not.by);
        }
        else {
            not.seen = 1;
        }
        this.seenNotification(not);
    };
    NotificationsPage.prototype.seenNotification = function (not) {
        if (not.type === 2 || not.type === 3) {
            this.firestoreService.updateCounter("notifications/" + not.id, {
                seen: 1,
            });
        }
        else if (not.type === 1) {
            var arr = not.seenBy;
            arr.push(this.currentUser.uid);
            this.firestoreService.updateCounter("notifications/" + not.id, {
                seenBy: arr,
            });
        }
        else {
            this.firestoreService.updateCounter("notifications/" + not.id, {
                seen: 1,
            });
        }
    };
    NotificationsPage.prototype.isSeen = function (not) {
        if (not.seen == 1) {
            return true;
        }
        if ((not.type === 3 || not.type == 1) &&
            not.seenBy.indexOf(this.currentUser.uid) > -1) {
            return true;
        }
        return false;
    };
    NotificationsPage.prototype.openProfile = function (uid) {
        var extras = {
            queryParams: {
                id: uid,
            },
        };
        this.navCtrl.navigateForward("profile", extras);
    };
    NotificationsPage.prototype.getSize = function (item) {
        if (item.postPhoto || (item.type === 0 && item.photoURL)) {
            return "8";
        }
        else {
            return "10";
        }
    };
    NotificationsPage.prototype.deleteAllConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Delete All",
                            message: "Do you want to delete all notifications?",
                            buttons: [
                                {
                                    text: "Delete All",
                                    handler: function () {
                                        _this.deleteAll();
                                    },
                                },
                                {
                                    text: "Cancel",
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.deleteAll = function () {
        var _this = this;
        this.notificationService.deleteAll(this.notifications, this.currentUser).then(function (resp) {
            if (resp) {
                console.log('empty notifications');
                _this.notifications = [];
                _this.notificationsFound = [];
                console.log('notifications', _this.notifications);
            }
            _this.loaderService.dismissLoader();
        }, function (err) {
            _this.loaderService.dismissLoader();
            _this.toast("Error in deleting some notifications");
        });
    };
    NotificationsPage.prototype.openMenu = function () {
        this.menuCtrl.enable(true, "first");
        this.menuCtrl.toggle("first");
    };
    NotificationsPage.prototype.loadData = function (event) {
        var _this = this;
        var id = this.notifications[this.notifications.length - 1].doc;
        this.firestoreService.colWithIds$("notifications", function (ref) { return ref.where('to', 'array-contains-any', [_this.currentUser.uid]).orderBy("timestamp", "desc").limit(10).startAfter(id); }).subscribe(function (resp) {
            var _a;
            (_a = _this.notifications).push.apply(_a, resp);
            event.target.complete();
        }, function (err) {
            console.log('err', err);
            event.target.complete();
        });
    };
    NotificationsPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _service_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
        { type: _shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["MenuController"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"] }
    ]; };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-notifications",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _service_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"],
            _shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["MenuController"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"]])
    ], NotificationsPage);
    return NotificationsPage;
}(_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_8__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map