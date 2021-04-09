(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/progress-bar/progress-bar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/progress-bar/progress-bar.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p (click)=\"close()\">\n  progress-bar works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/feed/components/feed/feed.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/feed/components/feed/feed.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--&lt;!&ndash;<ion-toolbar>&ndash;&gt;-->\n<!--&lt;!&ndash;  <ion-buttons slot=\"start\">&ndash;&gt;-->\n<!--&lt;!&ndash;    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>&ndash;&gt;-->\n<!--&lt;!&ndash;  </ion-buttons>&ndash;&gt;-->\n<!--&lt;!&ndash;  <img alt=\"appicon\" height=\"22\" class=\"ion-float-right\" src=\"assets/images/logo1.png\"/>&ndash;&gt;-->\n\n<!--&lt;!&ndash;</ion-toolbar>&ndash;&gt;-->\n\n<!--<ion-toolbar color=\"favorite\">-->\n<!--  <ion-buttons slot=\"start\">-->\n<!--    <ion-menu-button color=\"medium\" size=\"small\" autoHide=\"true\"></ion-menu-button>-->\n\n<!--    <ion-button color=\"medium\" fill=\"clear\" (click)=\"addPost()\">-->\n<!--      <ion-icon mode=\"md\" class=\"iconSize\" name=\"add-circle\" style=\"width: 25px; height: 50px;\"></ion-icon>-->\n<!--    </ion-button>-->\n\n<!--    <ion-button color=\"medium\" fill=\"clear\" class=\"noti-icon\" (click)=\"goToMessages()\">-->\n<!--      <ion-icon name=\"ios-mail\" slot=\"end\" style=\"width: 25px; height: 50px;\"></ion-icon>-->\n<!--      <ion-badge  class=\"badgemsg\" color=\"green\">0</ion-badge>-->\n<!--    </ion-button>-->\n\n<!--    <ion-button color=\"medium\" fill=\"clear\" class=\"noti-messageicon\">-->\n<!--      <ion-icon name=\"ios-notifications\" slot=\"end\" size=\"small\" style=\"width: 25px; height: 25px; margin-top: 11px;margin-right: 10px;\"></ion-icon>-->\n<!--      <ion-badge style=\"right: 16%\" class=\"badge\" color=\"green\">0</ion-badge>-->\n<!--    </ion-button>-->\n<!--  </ion-buttons>-->\n<!--  <ion-buttons slot=\"end\">-->\n<!--    <img alt=\"appicon\" height=\"22\" class=\"ion-float-right\" src=\"assets/images/logo1.png\"/>-->\n<!--  </ion-buttons>-->\n<!--</ion-toolbar>-->\n\n\n<ion-toolbar class=\"tool\" color=\"favorite\">\n  <ion-buttons slot=\"start\">\n    <ion-icon\n    src=\"assets/icons/menu-outline.svg\"\n    color=\"danger\"\n      style=\"font-size: 25px; padding-left: 10px; color: black;\"\n      (click)=\"openMenu()\"\n    ></ion-icon>\n    <!-- <ion-menu-button color=\"medium\" size=\"small\" autoHide=\"true\"></ion-menu-button> -->\n    <!-- <ion-icon name=\"trash\" (click)=\"load()\"></ion-icon> -->\n    <!-- <ion-icon name=\"cart\" class=\"cart-icon\" (click)=\"goToShop()\"></ion-icon> -->\n    <ion-button\n    fill=\"clear\"\n   (click)=\"openShop()\">\n    <ion-icon src=\"assets/icons/cart-outline.svg\" color=\"medium\" class=\"cart\" mode=\"md\"></ion-icon>\n  </ion-button>\n\n  <ion-button\n  fill=\"clear\"\n  routerLink=\"/browser\" routerDirection=\"backward\">\n  <ion-icon src=\"assets/icons/book-outline.svg\" color=\"medium\" class=\"knowledge\" mode=\"md\"></ion-icon>\n</ion-button>\n\n<ion-button\n  fill=\"clear\"\n  (click)=\"openStream()\">\n  <ion-icon src=\"assets/icons/video.svg\" color=\"medium\" class=\"knowledge\" mode=\"md\"></ion-icon>\n</ion-button>\n\n  <ion-menu-button class=\"headphones\" menu=\"second\" autoHide=\"true\">\n    <ion-icon src=\"assets/icons/play-outline.svg\" color=\"medium\"></ion-icon>\n  </ion-menu-button>\n  \n  </ion-buttons>\n\n\n\n\n   \n  \n \n  <ion-buttons slot=\"end\">\n   \n    <img\n      id=\"hide\"\n      alt=\"appicon\"\n      height=\"22\"\n      class=\"ion-float-right\"\n      src=\"assets/images/logo1.png\"\n    />\n  </ion-buttons>\n</ion-toolbar>\n\n<app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar> \n\n  \n<ion-content>\n\n    <!-- fab placed in the center of the content with a list on each side -->\n  \n  \n  \n  \n  <ion-icon\n    class=\"down\"\n    name=\"md-arrow-dropdown\"\n    style=\"width: 28px; height: 20px;\"\n  ></ion-icon>\n\n  <ion-refresher\n    slot=\"fixed\"\n    pullFactor=\"0.5\"\n    pullMin=\"100\"\n    pullMax=\"200\"\n    (ionRefresh)=\"doRefreshTop($event)\"\n  >\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\"\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <app-spinner *ngIf=\"loading\"></app-spinner>\n  <div *ngFor=\"let item of feed; let i = index\">\n    <feed-minimal\n      *ngIf=\"item && item.user && item.user.displayName\"\n      [feed]=\"item\"\n      [itemIndex]=\"i\"\n      (event)=\"manage($event)\"\n    >\n    </feed-minimal>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreFeed($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n \n</ion-content>\n\n<ion-toolbar color=\"secondary\">\n  <ion-tabs>\n    <ion-tab-bar color=\"favorite\" slot=\"bottom\">\n      <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n        <ion-icon  src=\"assets/icons/person-outline.svg\" color=\"primary\" style=\"width: 30px; height: 50px;\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button routerLink=\"/people\" routerDirection=\"forward\">\n        <ion-icon\n        src=\"assets/icons/people-outline.svg\"\n        color=\"primary\"\n          style=\"width: 35px; height: 50px;\"\n        ></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"addPost()\">\n        <ion-icon\n        src=\"assets/icons/add-circle-outline.svg\"\n        color=\"primary\" \n          style=\"width: 30px; height: 50px;\"\n        ></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"goToMessages()\">\n        <ion-icon src=\"assets/icons/mail-outline.svg\" color=\"primary\" style=\"width: 30px; height: 50px;\"></ion-icon>\n        <ion-badge\n          *ngIf=\"messagesService.getUnreadMessagesCount() > 0 || messagesService.getUnreadGroupMessagesCount() > 0\"\n          class=\"badgemsg\"\n          style=\"margin-bottom: 7px;\"\n          color=\"green\"\n          >{{ messagesService.getUnreadMessagesCount() + messagesService.getUnreadGroupMessagesCount() }}</ion-badge>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"goToNotifications()\">\n        <ion-icon\n        color=\"primary\"\n        src=\"assets/icons/notifications-outline.svg\"\n          style=\"width: 30px; height: 50px;\"\n        ></ion-icon>\n        <ion-badge\n          *ngIf=\"notificationService.unreadCounter > 0\"\n          class=\"badge\"\n          style=\"right: 10%;\"\n          color=\"green\"\n          >{{ notificationService.unreadCounter }}</ion-badge\n        >\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar>\n\n<!--<ion-content>-->\n\n<!--  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefreshTop($event)\">-->\n<!--    <ion-refresher-content-->\n<!--            pullingIcon=\"arrow-dropdown\"-->\n<!--            pullingText=\"Pull to refresh\"-->\n<!--            refreshingSpinner=\"circles\"-->\n<!--            refreshingText=\"Refreshing...\">-->\n<!--    </ion-refresher-content>-->\n<!--  </ion-refresher>-->\n\n<!--  <app-spinner *ngIf=\"loading\"></app-spinner>-->\n<!--  <feed-minimal *ngFor=\"let item of feed; let i = index\"-->\n<!--                [feed]=\"item\"-->\n<!--                [itemIndex]=\"i\"-->\n<!--                (event)=\"manage($event)\">-->\n<!--  </feed-minimal>-->\n<!--  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreFeed($event)\">-->\n<!--    <ion-infinite-scroll-content-->\n<!--            loadingSpinner=\"bubbles\"-->\n<!--            loadingText=\"Loading more...\">-->\n<!--    </ion-infinite-scroll-content>-->\n<!--  </ion-infinite-scroll>-->\n\n<!--  <img alt=\"appicon\" class=\"pull\" src=\"assets/images/pull.png\"/>-->\n\n<!--&lt;!&ndash;  <div class=\"content-wrapper\">&ndash;&gt;-->\n<!--&lt;!&ndash;    <div class=\"header no-border has-toolbar\">&ndash;&gt;-->\n<!--&lt;!&ndash;      <div class=\"title\">&ndash;&gt;-->\n<!--&lt;!&ndash;        {{ 'feed-component.title' | translate }}&ndash;&gt;-->\n<!--&lt;!&ndash;      </div>&ndash;&gt;-->\n\n<!--&lt;!&ndash;      <div class=\"options\">&ndash;&gt;-->\n<!--&lt;!&ndash;        <div class=\"noti-icon\" (click)=\"goToMessages()\">&ndash;&gt;-->\n<!--&lt;!&ndash;          <ion-icon name=\"chatbubbles\" slot=\"end\" size=\"small\" style=\"width: 25px; height: 25px; margin-top: 11px;\"></ion-icon>&ndash;&gt;-->\n<!--&lt;!&ndash;          <ion-badge *ngIf=\"counter > 0\" color=\"green\">{{ counter }}</ion-badge>&ndash;&gt;-->\n<!--&lt;!&ndash;        </div>&ndash;&gt;-->\n<!--&lt;!&ndash;        <ion-button fill=\"clear\"  color=\"medium\" (click)=\"addPost()\">&ndash;&gt;-->\n<!--&lt;!&ndash;          <ion-icon mode=\"md\" class=\"iconSize\" name=\"add-circle\"></ion-icon>&ndash;&gt;-->\n<!--&lt;!&ndash;        </ion-button>&ndash;&gt;-->\n<!--&lt;!&ndash;      </div>&ndash;&gt;-->\n<!--&lt;!&ndash;    </div>&ndash;&gt;-->\n\n<!--&lt;!&ndash;    <app-tab-menu [tabs]=\"views\" (event)=\"view = $event\"></app-tab-menu>&ndash;&gt;-->\n<!--&lt;!&ndash;    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>&ndash;&gt;-->\n\n<!--&lt;!&ndash;    <div class=\"wrapper\">&ndash;&gt;-->\n<!--&lt;!&ndash;      <div class=\"content-scroll\" #content>&ndash;&gt;-->\n<!--&lt;!&ndash;        <ng-container [ngSwitch]=\"view\">&ndash;&gt;-->\n<!--&lt;!&ndash;          <ng-container *ngSwitchCase=\"1\">&ndash;&gt;-->\n<!--&lt;!&ndash;            <feed-modern *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-modern> &ndash;&gt;-->\n<!--&lt;!&ndash;          </ng-container>&ndash;&gt;-->\n<!--&lt;!&ndash;          <ng-container *ngSwitchCase=\"2\">&ndash;&gt;-->\n<!--&lt;!&ndash;           <iframe id=\"FrameContent\" style=\"width: 100%; height: 100vh; margin-top: -0px; visibility: visible;\" title=\"\" src=\"https://dontramp.com/upload\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe>&ndash;&gt;-->\n<!--&lt;!&ndash;          </ng-container>&ndash;&gt;-->\n<!--&lt;!&ndash;          <ng-container *ngSwitchCase=\"3\">&ndash;&gt;-->\n<!--&lt;!&ndash;            <iframe id=\"FrameContent\" style=\"width: 100%; height: 100vh; margin-top: -0px; visibility: visible;\" title=\"\" src=\"https://dontramp.com/videos\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe>&ndash;&gt;-->\n<!--&lt;!&ndash;          </ng-container>&ndash;&gt;-->\n<!--&lt;!&ndash;          <ng-container *ngSwitchCase=\"4\">&ndash;&gt;-->\n<!--&lt;!&ndash;           <iframe id=\"FrameContent\" style=\"width: 100%; height: 100vh; margin-top: -0px; visibility: visible;\" title=\"\" src=\"https://dontramp.com/main1\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe>&ndash;&gt;-->\n<!--&lt;!&ndash;          </ng-container>&ndash;&gt;-->\n<!--&lt;!&ndash;          <ng-container *ngSwitchDefault>&ndash;&gt;-->\n<!--&lt;!&ndash;            <feed-modern *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-modern>&ndash;&gt;-->\n<!--&lt;!&ndash;          </ng-container>&ndash;&gt;-->\n\n<!--&lt;!&ndash;        </ng-container>&ndash;&gt;-->\n<!--&lt;!&ndash;      </div>&ndash;&gt;-->\n<!--&lt;!&ndash;    </div>&ndash;&gt;-->\n<!--&lt;!&ndash;  </div>&ndash;&gt;-->\n<!--</ion-content>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/shared/card-views/modern/modern.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/card-views/modern/modern.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/shared/card-views/showcase/showcase.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/card-views/showcase/showcase.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"feed && me\">\n  <div class=\"image-content\" *ngIf=\"feed.images && feed.images.length > 0\" [image-loader]=\"feed.images[currentIndex]\">\n    <div class=\"left\" *ngIf=\"feed.images && feed.images.length > 1\">\n      <ion-icon mode=\"ios\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n    </div>\n    <div class=\"center\" (click)=\"clicked('detail')\"></div>\n    <div class=\"right\" *ngIf=\"feed.images && feed.images.length > 1\">\n      <ion-icon mode=\"ios\" name=\"arrow-forward\" (click)=\"forward()\"></ion-icon>\n    </div>\n  </div>\n\n  <div class=\"content\">\n    <div class=\"content-header\">\n      <div class=\"feed-info\">\n        <div class=\"subtitle\">{{ (feed.content | slice: 0:60) || ('feed-component.no-post-content' | translate) }}</div>\n      </div>\n      <div class=\"option\" *ngIf=\"feed.user.uid === me.uid\">\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('more')\">\n          <ion-icon name=\"more\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n\n    <div class=\"author\">\n      <div class=\"image\" [image-loader]=\"feed.user.photoURL\" (click)=\"clicked('profile')\"></div>\n      <div class=\"details\">\n        <div class=\"name\">{{ feed.user.displayName }}</div>\n        <div class=\"publish-date\">{{ feed?.createdAt?.toDate() | amTimeAgo }}</div>\n      </div>\n    </div>\n\n    <div class=\"actions\">\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('like')\">\n        <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'medium'\">\n        </ion-icon>\n        <small>{{ feed?.likes?.length > 0 ? feed.likes.length : '' }}</small>\n      </ion-button>\n\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('comment')\">\n        <ion-icon name=\"chatboxes\"></ion-icon>\n        <small>{{ feed?.comments?.length ? feed.comments.length : '' }}</small>\n      </ion-button>\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('share')\">\n        <ion-icon name=\"share-alt\"></ion-icon>\n        <small>{{ 'feed-component.share-button' | translate }}</small>\n      </ion-button>\n    </div>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/shared/card-views/timeline/timeline.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/card-views/timeline/timeline.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"feed && me\">\n  <!-- author section -->\n  <div class=\"author\">\n    <div class=\"image\" [image-loader]=\"feed.user.photoURL\" (click)=\"clicked('profile')\"></div>\n    <div class=\"details\">\n      <div class=\"name\">{{ feed.user.displayName }}</div>\n      <div class=\"publish-date\">{{ feed?.updatedAt?.toDate() | amTimeAgo }}</div>\n    </div>\n    <div class=\"option\" *ngIf=\"feed.user.uid === me.uid\">\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('more')\">\n        <ion-icon name=\"more\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n\n  <!-- content section -->\n  <div class=\"content\">\n    <div class=\"actions mt10\">\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('like')\">\n        <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'primary'\">\n        </ion-icon>\n        <small>{{ feed.likes.length > 0 ? feed.likes.length : '' }}</small>\n      </ion-button>\n\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('comment')\">\n        <ion-icon name=\"chatboxes\"></ion-icon>\n        <small>{{ feed.comments.length ? feed.comments.length : '' }}</small>\n      </ion-button>\n\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('share')\">\n        <ion-icon name=\"share-alt\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <div class=\"info-content\" (click)=\"clicked('detail')\">\n      <div *ngIf=\"feed.images && feed.images > 0\" class=\"image-content\" (click)=\"clicked('detail')\">\n        <div class=\"image-item\" [image-loader]=\"feed.images[0]\"></div>\n      </div>\n      <div class=\"title\">{{ feed.title || 'feed-component.no-post-title' | translate }}</div>\n      <div class=\"subtitle\">{{ (feed.content | slice: 0:70) || ('feed-component.no-post-content' | translate) }}</div>\n    </div>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ "./src/app/pages/feed/progress-bar/progress-bar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/feed/progress-bar/progress-bar.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/feed/progress-bar/progress-bar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/feed/progress-bar/progress-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ProgressBarComponent.prototype.ngOnInit = function () { };
    ProgressBarComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    ProgressBarComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress-bar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/progress-bar/progress-bar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/pages/feed/progress-bar/progress-bar.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ProgressBarComponent);
    return ProgressBarComponent;
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



/***/ }),

/***/ "./src/pages/feed/components/feed/feed.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/feed/components/feed/feed.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .content-wrapper .title {\n  align-items: center;\n}\n:host .content-wrapper .title small {\n  font-size: 50%;\n  margin-left: 10px;\n}\n:host .content-wrapper .wrapper {\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 0px) !important;\n  width: 100%;\n}\n.ion-float-right {\n  margin-right: 15px;\n}\n.badge {\n  width: 20px;\n  height: 17px;\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n  font-size: 10px;\n  z-index: 999;\n}\n.badgemsg {\n  width: 20px;\n  height: 17px;\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n  font-size: 10px;\n  z-index: 999;\n}\nion-badge {\n  position: absolute;\n  right: 0;\n  bottom: 5px;\n  font-size: 10px;\n}\n.down {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n@media (min-width: 829px) {\n  img#hide {\n    display: none;\n  }\n}\n.cart {\n  color: black;\n  font-size: 23px;\n  margin-left: 8px;\n  margin-top: 1px;\n}\n.headphones {\n  color: black;\n  font-size: 23px;\n  margin-right: 8px;\n}\n.knowledge {\n  color: black;\n  font-size: 23px;\n  margin-top: 1px;\n  margin-left: 4px;\n}\n.tool {\n  box-shadow: 0px 0.2px 0px #a8a8a8 !important;\n}\nion-icon.big {\n  width: 50px;\n  height: 50px;\n}\nion-icon.bigger {\n  width: 100px;\n  height: 100px;\n}\nion-icon.red {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsbUJBQUE7QUNGTjtBRElNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDRlI7QURNSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDSk47QURNTTtFQUNFLG1DQUFBO0VBQ0EsV0FBQTtBQ0pSO0FEVUE7RUFDQSxrQkFBQTtBQ1BBO0FEV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1JKO0FEV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1JKO0FEZUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1pGO0FEaUJBO0VBQ0MsY0FBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDZEY7QURpQkE7RUFDRTtJQUNFLGFBQUE7RUNkRjtBQUNGO0FEaUJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNmRjtBRGtCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7QUNoQkY7QURtQkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLDRDQUFBO0FDaEJGO0FEb0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNqQko7QURvQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ2xCSjtBRHFCRTtFQUNFLFVBQUE7QUNuQkoiLCJmaWxlIjoic3JjL3BhZ2VzL2ZlZWQvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jb250ZW50LXdyYXBwZXIge1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHNtYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMHB4KSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmlvbi1mbG9hdC1yaWdodHtcbm1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuXG4uYmFkZ2Uge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMTdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiA4cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmJhZGdlbXNnIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cblxuXG5cblxuaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuXG5cbi5kb3due1xuIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo4MjlweCkge1xuICBpbWcjaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uY2FydCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyM3B4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5oZWFkcGhvbmVzIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIzcHg7XG4gXG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ua25vd2xlZGdlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnRvb2wge1xuICBib3gtc2hhZG93OiAwcHggMC4ycHggMHB4ICNhOGE4YTghaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiB7XG4gICYuYmlnIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICAmLmJpZ2dlciB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cblxuICAmLnJlZCB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufSIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnRpdGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnRpdGxlIHNtYWxsIHtcbiAgZm9udC1zaXplOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAwcHgpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW9uLWZsb2F0LXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYmFkZ2Uge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5iYWRnZW1zZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmRvd24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgyOXB4KSB7XG4gIGltZyNoaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uY2FydCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyM3B4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5oZWFkcGhvbmVzIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ua25vd2xlZGdlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnRvb2wge1xuICBib3gtc2hhZG93OiAwcHggMC4ycHggMHB4ICNhOGE4YTggIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24uYmlnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbmlvbi1pY29uLmJpZ2dlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbmlvbi1pY29uLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/pages/feed/components/feed/feed.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/feed/components/feed/feed.component.ts ***!
  \**********************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_notifications_service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/notifications/service/notification.service */ "./src/app/notifications/service/notification.service.ts");
/* harmony import */ var _shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var _feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../feed-add/feed-add.component */ "./src/pages/feed/components/feed-add/feed-add.component.ts");
/* harmony import */ var _feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../feed-comment/feed-comment.component */ "./src/pages/feed/components/feed-comment/feed-comment.component.ts");
/* harmony import */ var _feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../feed-detail/feed-detail.component */ "./src/pages/feed/components/feed-detail/feed-detail.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");
/* harmony import */ var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/messages.service */ "./src/app/services/messages.service.ts");

















/**
 * get feed from the app, displays 4 design versions, search feed, like and open comment for feed.
 * open feed detail and add new feed can all be accessed from feed component
 */
var FeedComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeedComponent, _super);
    function FeedComponent(injector, themeableBrowser, iab, spinnerDialog, authService, feedService, commonService, angularFire, notificationService, navCtrl, manuCtrl, firestoreService, messagesService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.themeableBrowser = themeableBrowser;
        _this.iab = iab;
        _this.spinnerDialog = spinnerDialog;
        _this.authService = authService;
        _this.feedService = feedService;
        _this.commonService = commonService;
        _this.angularFire = angularFire;
        _this.notificationService = notificationService;
        _this.navCtrl = navCtrl;
        _this.manuCtrl = manuCtrl;
        _this.firestoreService = firestoreService;
        _this.messagesService = messagesService;
        _this.openSearch = false;
        _this.messages = [];
        _this.notificationCounter = 0;
        _this.views = _this.feedService.views;
        return _this;
    }
    /** get current user, get feed
     * handle openPostFromUrl method
     */
    // public async ngOnInit() {
    //   this.feed = [];
    //   this.loading = true;
    //   this.user = await this.authService.getUser();
    //   this.openPostFromUrl();
    //   this.getFilteredMessages();
    //   console.log('user', this.user.uid);
    //   // const cursor = this.getCursor(true);
    //   console.log('call in ngOnInit()');
    //   // this.feedService.getFeedPrevious(this.user.uid, cursor).pipe(take(1)).subscribe(
    //   //     (feed: any) => {
    //   //       // if (event) {
    //   //       //   event.target.complete();
    //   //       // }
    //   //       this.loading = false;
    //   //       if (feed.length > 0) {
    //   //         for (let i = feed.length ; i >= 0; i--) {
    //   //           this.feed.unshift(feed[i]);
    //   //         }
    //   //       }
    //   //     },
    //   //     (err) => {
    //   //       this.loading = false;
    //   //       this.toast(err);
    //   //     }
    //   // )
    //   // this.loadPosts();
    //   console.log('counter', this.messageService.unreadCounter);
    // }
    FeedComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // this.loading = true;
                        this.manuCtrl.enable(false, "shop");
                        this.manuCtrl.enable(true, "first");
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        this.openPostFromUrl();
                        this.getFilteredMessages();
                        this.loadPosts();
                        this.messagesService.initConversation();
                        this.messagesService.initGroups();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedComponent.prototype.loadPosts = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        this.loadingService.presentProcessingLoading();
                        this.angularFire
                            .collection("feed", function (ref) {
                            return ref.orderBy("createdAt", "desc").limit(10);
                        })
                            .get()
                            .subscribe(function (resp) {
                            var feedArr = [];
                            console.log(resp);
                            resp.docs.forEach(function (item) {
                                var feed = item.data();
                                feed.doc = item;
                                // console.log(feed);
                                _this.firestoreService
                                    .doc$("users/" + feed.uid)
                                    .subscribe(function (user) {
                                    feed.user = user;
                                    feed.userLiked =
                                        feed.likes && Array.isArray(feed.likes)
                                            ? feed.likes.includes(_this.user.uid)
                                            : false;
                                    feedArr.push(feed);
                                    _this.feed = feedArr;
                                    console.log(feedArr);
                                    _this.loadingService.dismissLoader();
                                    if (event) {
                                        event.target.complete();
                                    }
                                    console.log("sorting");
                                    feedArr.sort(function (a, b) {
                                        return b.createdAt.seconds - a.createdAt.seconds;
                                    });
                                    _this.loadingService.dismissLoader();
                                });
                            });
                        }, function (err) { return _this.loadingService.dismissLoader(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedComponent.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        this.notificationService.getNotifications(this.user.uid).then(function (not) {
                            console.log("page-not", not);
                            _this.notificationCounter = _this.notificationService.unreadCounter;
                            console.log("not unread counter", _this.notificationCounter);
                            console.log("not unread counter 2", _this.notificationService.unreadCounter);
                            _this.notificationService.getUnreadCount(_this.notificationService.notifications, _this.user.uid);
                            _this.notificationCounter = _this.notificationService.unreadCounter;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedComponent.prototype.doRefreshTop = function (event) {
        console.log("call in dorefresh", event);
        this.loadPosts(event);
        // this.feedService
        //   .getFeedPrevious(this.user.uid, cursor)
        //   .pipe(take(1))
        //   .subscribe(
        //     (feed: any) => {
        //       if (event) {
        //         event.target.complete();
        //       }
        //       if (feed.length > 0) {
        //         for (let i = feed.length; i >= 0; i--) {
        //           this.feed.unshift(feed[i]);
        //         }
        //       }
        //     },
        //     (err) => {
        //       this.loading = false;
        //       this.toast(err);
        //     }
        //   );
    };
    FeedComponent.prototype.loadMoreFeed = function (event) {
        var _this = this;
        var cursor = this.getCursor(false);
        console.log("cursor", this.getCursor(false));
        this.angularFire
            .collection("feed", function (ref) {
            return ref.orderBy("createdAt", "desc").limit(10).startAfter(cursor);
        })
            .get()
            .subscribe(function (resp) {
            var feedArr = [];
            console.log(resp);
            resp.docs.forEach(function (item) {
                var feed = item.data();
                feed.doc = item;
                // console.log(feed);
                _this.firestoreService
                    .doc$("users/" + feed.uid)
                    .subscribe(function (user) {
                    feed.user = user;
                    feed.userLiked =
                        feed.likes && Array.isArray(feed.likes)
                            ? feed.likes.includes(_this.user.uid)
                            : false;
                    _this.feed.push(feed);
                    console.log(_this.feed);
                    event.target.complete();
                });
            });
        });
        // this.feedService.getFeedNext(this.user.uid, cursor).subscribe(
        //   (feed: any) => {
        //     event.target.complete();
        //     if (feed.length === 0) {
        //       event.target.disabled = true;
        //       return false;
        //     } else {
        //       feed.forEach((value, index) => {
        //         this.feed.push(value);
        //       });
        //     }
        //   },
        //   (err) => {
        //     this.loading = false;
        //     this.toast(err);
        //   }
        // );
    };
    /** if url has query param, navigate to view and id in param (used for share links when you click the share button) */
    FeedComponent.prototype.openPostFromUrl = function () {
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe(function (param) {
            if (param && param.id) {
                // this.viewPost({ id: param.id });
            }
        }));
    };
    /** search friends feed */
    FeedComponent.prototype.onSearch = function (val) {
        this.feed = this.feedService.searchFeed(val);
    };
    /** manage feed actions such as likes, comments etc */
    FeedComponent.prototype.manage = function (_event) {
        var _this = this;
        if (_event.type === "like") {
            this.feedService.like(_event.data).then(function (_) {
                _this.feedService
                    .getUpdateSpecificDoc(_event.data)
                    .subscribe(function (updatedFeed) {
                    console.log(_event.data.userLiked);
                    Object.assign(_this.feed[_event.index], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, updatedFeed, { userLiked: _event.data.userLiked }));
                });
            });
        }
        else if (_event.type === "comment") {
            this.comment(_event.data, _event.index);
        }
        else if (_event.type === "profile") {
            this.profile(_event.data);
        }
        else if (_event.type === "share") {
            this.share(_event.data);
        }
        else if (_event.type === "detail") {
            this.viewPost(_event.data, _event.index);
        }
        else if (_event.type === "more") {
            this.more(_event.data, _event.index);
        }
    };
    /** delete a post */
    FeedComponent.prototype.delete = function (post, index) {
        var _this = this;
        this.feedService.delete(post).then(function (_) {
            if (index === 0) {
                _this.feed.splice(index, 1);
            }
            else if (index === _this.feed.length - 1) {
                _this.feed.splice(index, 1);
            }
            else {
                _this.feed.splice(index, 1);
            }
        });
    };
    /** go to post author's profile page */
    FeedComponent.prototype.profile = function (post) {
        this.goto(this.routes.people + "/" + post.user.uid);
    };
    /** open add post modal, add to array of feed after completed */
    FeedComponent.prototype.addPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_8__["FeedAddComponent"], null, "custom-modal")];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        modal.onWillDismiss().then(function (modalData) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (modalData.data === "save") {
                                    this.doRefreshTop();
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open post details modal, update array of feed if any change is made */
    FeedComponent.prototype.viewPost = function (post, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_10__["FeedDetailComponent"], post.id)];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        modal.onWillDismiss().then(function (modalData) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                console.log(modalData);
                                if (modalData.data === "delete") {
                                    this.delete(post, index);
                                }
                                if (modalData.data === "edit") {
                                    modal.onWillDismiss().then(function (_) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            this.feedService
                                                .getUpdateSpecificDoc(post)
                                                .subscribe(function (updatedFeed) {
                                                Object.assign(_this.feed[index], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, updatedFeed, { likes: post.likes, userLiked: post.userLiked, doc: post.doc }));
                                            });
                                            return [2 /*return*/];
                                        });
                                    }); });
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open feed's comments */
    FeedComponent.prototype.comment = function (feed, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_9__["FeedCommentComponent"], feed)];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        modal.onWillDismiss().then(function (_) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.feedService
                                    .getUpdateSpecificDoc(feed)
                                    .subscribe(function (updatedFeed) {
                                    Object.assign(_this.feed[index], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, updatedFeed, { likes: feed.likes, userLiked: feed.userLiked, doc: feed.doc }));
                                });
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open actionsheet for more options */
    FeedComponent.prototype.more = function (data, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant("feed-component.more-header"),
                            buttons: [
                                {
                                    text: this.translate.instant("feed-component.more-option-open"),
                                    handler: function () {
                                        _this.viewPost(data, index);
                                    },
                                },
                                {
                                    text: this.translate.instant("feed-component.more-option-delete"),
                                    handler: function () {
                                        _this.delete(data, index);
                                    },
                                },
                                {
                                    text: this.translate.instant("other.close"),
                                    role: "cancel",
                                },
                            ],
                        })];
                    case 1:
                        actionSheetCtrl = _a.sent();
                        return [4 /*yield*/, actionSheetCtrl.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** share feed to other apps */
    FeedComponent.prototype.share = function (post) {
        var url = 'feed?id=${post.id}';
        this.commonService.share(post.content, post.title, post.images, url);
    };
    FeedComponent.prototype.getAllMessages = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.angularFire.collection("messages").valueChanges()];
            });
        });
    };
    /**
     * Filtering all messages
     */
    FeedComponent.prototype.getFilteredMessages = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllMessages()];
                    case 1:
                        (_a.sent()).subscribe(function (data) {
                            _this.messages = data;
                            _this.messageCounter = 0;
                            _this.messages.forEach(function (msg) {
                                if (msg.participantsId.indexOf(_this.user.uid) !== -1 &&
                                    msg.last_sender !== _this.user.uid) {
                                    _this.messageCounter = _this.messageCounter + msg.unread_count;
                                    console.log("unread", msg.unread_count, _this.messageCounter);
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedComponent.prototype.openShop = function () {
        var _this = this;
        // https://ionicframework.com/docs/native/themeable-browser/
        var options = {
            statusbar: {
                color: '#ffffff'
            },
            toolbar: {
                height: 50,
                color: '#ffffff'
            },
            title: {
                color: '#003264ff',
                showPageTitle: false
            },
            backButton: {
                wwwImage: 'assets/imgs/back.png',
                align: 'left',
                event: 'backPressed'
            },
            closeButton: {
                wwwImage: 'assets/imgs/stop.png',
                align: 'left',
                event: 'closePressed'
            },
            customButtons: [
                {
                    wwwImage: 'assets/images/logo1br.png',
                    imagePressed: 'share_pressed',
                    align: 'right',
                    event: 'sharePressed'
                }
            ],
        };
        var browser = this.themeableBrowser.create('https://dontramp.com/hq/businesses', '_self', options);
        browser.on('closePressed').subscribe(function (data) {
            browser.close();
        });
        browser.on('loadstart').subscribe(function (eve) {
            _this.spinnerDialog.show(null, null, true);
        }, function (err) {
            _this.spinnerDialog.hide();
        });
        browser.on('loadstop').subscribe(function () {
            _this.spinnerDialog.hide();
        }, function (err) {
            _this.spinnerDialog.hide();
        });
        browser.on('loaderror').subscribe(function () {
            _this.spinnerDialog.hide();
        }, function (err) {
            _this.spinnerDialog.hide();
        });
        browser.on('exit').subscribe(function () {
            _this.spinnerDialog.hide();
        }, function (err) {
            _this.spinnerDialog.hide();
        });
    };
    FeedComponent.prototype.openKnowledge = function () {
        var _this = this;
        // https://ionicframework.com/docs/native/themeable-browser/
        var options = {
            statusbar: {
                color: '#ffffff'
            },
            toolbar: {
                height: 50,
                color: '#ffffff'
            },
            title: {
                color: '#003264ff',
                showPageTitle: false
            },
            backButton: {
                wwwImage: 'assets/imgs/back.png',
                align: 'left',
                event: 'backPressed'
            },
            closeButton: {
                wwwImage: 'assets/imgs/stop.png',
                align: 'left',
                event: 'closePressed'
            },
            customButtons: [
                {
                    wwwImage: 'assets/images/logo1br.png',
                    imagePressed: 'share_pressed',
                    align: 'right',
                    event: 'sharePressed'
                }
            ],
        };
        var browser = this.themeableBrowser.create('https://dontramp.com/hq/knowledge', '_self', options);
        browser.on('closePressed').subscribe(function (data) {
            browser.close();
        });
        browser.on('loadstart').subscribe(function (eve) {
            _this.spinnerDialog.show(null, null, true);
        }, function (err) {
            _this.spinnerDialog.hide();
        });
        browser.on('loadstop').subscribe(function () {
            _this.spinnerDialog.hide();
        }, function (err) {
            _this.spinnerDialog.hide();
        });
        browser.on('loaderror').subscribe(function () {
            _this.spinnerDialog.hide();
        }, function (err) {
            _this.spinnerDialog.hide();
        });
        browser.on('exit').subscribe(function () {
            _this.spinnerDialog.hide();
        }, function (err) {
            _this.spinnerDialog.hide();
        });
    };
    FeedComponent.prototype.goToMessages = function () {
        this.goto(this.routes.messages);
    };
    FeedComponent.prototype.goToNotifications = function () {
        this.goto(this.routes.notifications);
    };
    FeedComponent.prototype.getCursor = function (prePend) {
        console.log("length", this.feed.length);
        if (this.feed.length) {
            return prePend ? this.feed[0].doc : this.feed[this.feed.length - 1].doc;
        }
        return null;
    };
    FeedComponent.prototype.goToShop = function () {
        this.navCtrl.navigateForward("home");
    };
    FeedComponent.prototype.openMenu = function () {
        this.manuCtrl.enable(true, "first");
        this.manuCtrl.toggle("first");
    };
    FeedComponent.prototype.openStream = function () {
        window.open('https://dontramp.com/stream/stream-list', '_system', 'location=yes');
    };
    FeedComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["ThemeableBrowser"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"] },
        { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_14__["SpinnerDialog"] },
        { type: _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_7__["FeedService"] },
        { type: _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _app_notifications_service_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_12__["FirestoreService"] },
        { type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_16__["MessagesService"] }
    ]; };
    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-feed",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/feed/components/feed/feed.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.component.scss */ "./src/pages/feed/components/feed/feed.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["ThemeableBrowser"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"],
            _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_14__["SpinnerDialog"],
            _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_7__["FeedService"],
            _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _app_notifications_service_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_12__["FirestoreService"],
            src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_16__["MessagesService"]])
    ], FeedComponent);
    return FeedComponent;
}(_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/feed/feed.module.ts":
/*!***************************************!*\
  !*** ./src/pages/feed/feed.module.ts ***!
  \***************************************/
/*! exports provided: FeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedModule", function() { return FeedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_card_views_card_views_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/card-views/card-views.module */ "./src/shared/card-views/card-views.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/feed/feed.component */ "./src/pages/feed/components/feed/feed.component.ts");
/* harmony import */ var src_app_pages_feed_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/feed/progress-bar/progress-bar.component */ "./src/app/pages/feed/progress-bar/progress-bar.component.ts");








var FeedModule = /** @class */ (function () {
    function FeedModule() {
    }
    FeedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"], src_app_pages_feed_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__["ProgressBarComponent"]],
            entryComponents: [src_app_pages_feed_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__["ProgressBarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _shared_card_views_card_views_module__WEBPACK_IMPORTED_MODULE_4__["CardViewsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"] }
                ]),
            ],
        })
    ], FeedModule);
    return FeedModule;
}());



/***/ }),

/***/ "./src/shared/card-views/card-views.module.ts":
/*!****************************************************!*\
  !*** ./src/shared/card-views/card-views.module.ts ***!
  \****************************************************/
/*! exports provided: CardViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewsModule", function() { return CardViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _modern_modern_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modern/modern.component */ "./src/shared/card-views/modern/modern.component.ts");
/* harmony import */ var _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showcase/showcase.component */ "./src/shared/card-views/showcase/showcase.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/shared/card-views/timeline/timeline.component.ts");







var CardViewsModule = /** @class */ (function () {
    function CardViewsModule() {
    }
    CardViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_modern_modern_component__WEBPACK_IMPORTED_MODULE_4__["ModernComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"], _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            exports: [_modern_modern_component__WEBPACK_IMPORTED_MODULE_4__["ModernComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"], _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseComponent"]],
            providers: [],
        })
    ], CardViewsModule);
    return CardViewsModule;
}());



/***/ }),

/***/ "./src/shared/card-views/modern/modern.component.scss":
/*!************************************************************!*\
  !*** ./src/shared/card-views/modern/modern.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  margin: 10px;\n  padding: 15px;\n  border-radius: 12px;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light);\n}\n:host .start,\n:host .end {\n  display: flex;\n  flex: 1;\n}\n:host .start {\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n:host .start .title {\n  font-size: 16px;\n  font-weight: 600;\n}\n:host .start .content {\n  font-size: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n:host .start .author {\n  display: flex;\n  margin: 10px 0;\n  flex-direction: column;\n}\n:host .start .author .name {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n:host .start .author .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .start .actions {\n  display: flex;\n  align-items: center;\n}\n:host .start .actions ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n:host .start .actions small {\n  padding-left: 5px;\n}\n:host .end .image {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  width: 100%;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n}\n:host .end .image .left,\n:host .end .image .right {\n  display: flex;\n  align-items: center;\n  background: rgba(var(--ion-color-medium-rgb), 0.4);\n  padding: 2px 0;\n  color: var(--ion-color-light);\n  justify-content: center;\n}\n:host .end .image .center {\n  display: flex;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvc2hhcmVkL2NhcmQtdmlld3MvbW9kZXJuL21vZGVybi5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvY2FyZC12aWV3cy9tb2Rlcm4vbW9kZXJuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtFQUNBLGtDQUFBO0FDQ0Y7QURDRTs7RUFFRSxhQUFBO0VBQ0EsT0FBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQU47QURHSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUNETjtBRElJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0ZSO0FES007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0hSO0FET0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNMTjtBRE9NO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0xSO0FEUU07RUFDRSxpQkFBQTtBQ05SO0FEWUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtBQ1ZOO0FEV007O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQ1RSO0FEWU07RUFDRSxhQUFBO0VBQ0EsT0FBQTtBQ1ZSIiwiZmlsZSI6InNyYy9zaGFyZWQvY2FyZC12aWV3cy9tb2Rlcm4vbW9kZXJuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgLnN0YXJ0LFxuICAuZW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAuc3RhcnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICB9XG5cbiAgICAuYXV0aG9yIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuXG4gICAgICAucHVibGlzaC1kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICB9XG5cbiAgICAgIHNtYWxsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmVuZCB7XG4gICAgLmltYWdlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAubGVmdCxcbiAgICAgIC5yaWdodCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjQpO1xuICAgICAgICBwYWRkaW5nOiAycHggMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuY2VudGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgLnN0YXJ0LFxuOmhvc3QgLmVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuc3RhcnQge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG46aG9zdCAuc3RhcnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgLnN0YXJ0IC5jb250ZW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuOmhvc3QgLnN0YXJ0IC5hdXRob3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5zdGFydCAuYXV0aG9yIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgLnN0YXJ0IC5hdXRob3IgLnB1Ymxpc2gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgLnN0YXJ0IC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5zdGFydCAuYWN0aW9ucyBpb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xufVxuOmhvc3QgLnN0YXJ0IC5hY3Rpb25zIHNtYWxsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG46aG9zdCAuZW5kIC5pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG46aG9zdCAuZW5kIC5pbWFnZSAubGVmdCxcbjpob3N0IC5lbmQgLmltYWdlIC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjQpO1xuICBwYWRkaW5nOiAycHggMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLmVuZCAuaW1hZ2UgLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/shared/card-views/modern/modern.component.ts":
/*!**********************************************************!*\
  !*** ./src/shared/card-views/modern/modern.component.ts ***!
  \**********************************************************/
/*! exports provided: ModernComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernComponent", function() { return ModernComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var _helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/extender */ "./src/shared/helpers/extender.ts");




var ModernComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ModernComponent, _super);
    /**
     * @constructor
     * @param injector {Injector}
     */
    function ModernComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        /**
         * @description holds current index of image
         * @property currentIndex
         * @type number
         * @public
         * @default 0
         */
        _this.currentIndex = 0;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        _this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ModernComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.me = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    ModernComponent.prototype.clicked = function (name) {
        this.event.emit({ type: name, data: this.feed });
    };
    /**
     * @description navigate to the next image
     * @method forward
     * @public
     * @returns void
     */
    ModernComponent.prototype.forward = function () {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    };
    /**
     * @description navigate to the previous image
     * @method back
     * @public
     * @returns void
     */
    ModernComponent.prototype.back = function () {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    };
    ModernComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModernComponent.prototype, "feed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ModernComponent.prototype, "event", void 0);
    ModernComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feed-modern',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modern.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/shared/card-views/modern/modern.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modern.component.scss */ "./src/shared/card-views/modern/modern.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ModernComponent);
    return ModernComponent;
}(_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/shared/card-views/showcase/showcase.component.scss":
/*!****************************************************************!*\
  !*** ./src/shared/card-views/showcase/showcase.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  margin: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light);\n}\n:host .image-content {\n  display: flex;\n  height: 200px;\n  width: 100%;\n}\n:host .image-content .left,\n:host .image-content .right {\n  display: flex;\n  align-items: center;\n  background: rgba(var(--ion-color-medium-rgb), 0.6);\n  padding: 0 15px;\n  color: var(--ion-color-light);\n}\n:host .image-content .center {\n  display: flex;\n  flex: 1;\n}\n:host .image-content .right {\n  justify-content: flex-end;\n}\n:host .content {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px;\n}\n:host .content .content-header {\n  display: flex;\n}\n:host .content .content-header .feed-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n:host .content .content-header .feed-info .title {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n:host .content .content-header .feed-info .subtitle {\n  padding: 10px 0;\n  font-size: 13px;\n  font-weight: 400;\n}\n:host .content .author {\n  display: flex;\n  padding: 10px 0;\n}\n:host .content .author .image {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n}\n:host .content .author .details {\n  padding: 0 10px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n:host .content .author .details .name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n:host .content .author .details .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content .actions {\n  display: flex;\n  align-items: center;\n  border-top: 1px solid var(--ion-color-light-shade);\n}\n:host .content .actions small {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvc2hhcmVkL2NhcmQtdmlld3Mvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL2NhcmQtdmlld3Mvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLGtDQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0k7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNDTjtBREVJO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUNBTjtBREdJO0VBQ0UseUJBQUE7QUNETjtBREtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNISjtBREtJO0VBQ0UsYUFBQTtBQ0hOO0FES007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FDSFI7QURLUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDSFY7QURNUTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKVjtBRFNJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNQTjtBRFNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEVU07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQ1JSO0FEVVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ1JWO0FEV1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ1RWO0FEY0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtBQ1pOO0FEY007RUFDRSxpQkFBQTtBQ1pSIiwiZmlsZSI6InNyYy9zaGFyZWQvY2FyZC12aWV3cy9zaG93Y2FzZS9zaG93Y2FzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gIC5pbWFnZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubGVmdCxcbiAgICAucmlnaHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC42KTtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cblxuICAgIC5jZW50ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLnJpZ2h0IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG5cbiAgICAuY29udGVudC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgLmZlZWQtaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYXV0aG9yIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG5cbiAgICAgIC5pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIH1cblxuICAgICAgLmRldGFpbHMge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAucHVibGlzaC1kYXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgICBzbWFsbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQgLmxlZnQsXG46aG9zdCAuaW1hZ2UtY29udGVudCAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC42KTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IC5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQgLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbjpob3N0IC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuOmhvc3QgLmNvbnRlbnQgLmNvbnRlbnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IC5jb250ZW50IC5jb250ZW50LWhlYWRlciAuZmVlZC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5jb250ZW50IC5jb250ZW50LWhlYWRlciAuZmVlZC1pbmZvIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5jb250ZW50IC5jb250ZW50LWhlYWRlciAuZmVlZC1pbmZvIC5zdWJ0aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLmNvbnRlbnQgLmF1dGhvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjpob3N0IC5jb250ZW50IC5hdXRob3IgLmltYWdlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuOmhvc3QgLmNvbnRlbnQgLmF1dGhvciAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5jb250ZW50IC5hdXRob3IgLmRldGFpbHMgLm5hbWUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCAuY29udGVudCAuYXV0aG9yIC5kZXRhaWxzIC5wdWJsaXNoLWRhdGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbjpob3N0IC5jb250ZW50IC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudCAuYWN0aW9ucyBzbWFsbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/shared/card-views/showcase/showcase.component.ts":
/*!**************************************************************!*\
  !*** ./src/shared/card-views/showcase/showcase.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var _helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/extender */ "./src/shared/helpers/extender.ts");




var ShowcaseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseComponent, _super);
    /**
     * @constructor
     * @param injector {Injector}
     */
    function ShowcaseComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        /**
         * @description holds current index of image
         * @property currentIndex
         * @type number
         * @public
         * @default 0
         */
        _this.currentIndex = 0;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        _this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ShowcaseComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.me = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    ShowcaseComponent.prototype.clicked = function (name) {
        this.event.emit({ type: name, data: this.feed });
    };
    /**
     * @description navigate to the next image
     * @method forward
     * @public
     * @returns void
     */
    ShowcaseComponent.prototype.forward = function () {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    };
    /**
     * @description navigate to the previous image
     * @method back
     * @public
     * @returns void
     */
    ShowcaseComponent.prototype.back = function () {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    };
    ShowcaseComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShowcaseComponent.prototype, "feed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ShowcaseComponent.prototype, "event", void 0);
    ShowcaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feed-showcase',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./showcase.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/shared/card-views/showcase/showcase.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./showcase.component.scss */ "./src/shared/card-views/showcase/showcase.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}(_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/shared/card-views/timeline/timeline.component.scss":
/*!****************************************************************!*\
  !*** ./src/shared/card-views/timeline/timeline.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  margin: 25px 20px;\n}\n:host .author {\n  display: flex;\n}\n:host .author .image {\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n}\n:host .author .details {\n  padding: 0 10px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n:host .author .details .name {\n  font-size: 14px;\n  font-weight: 500;\n}\n:host .author .details .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content {\n  display: flex;\n}\n:host .content .info-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: var(--ion-color-light);\n  margin-left: 10px;\n  padding: 10px;\n}\n:host .content .info-content .image-content {\n  display: flex;\n  width: 100%;\n}\n:host .content .info-content .image-content .image-item {\n  display: flex;\n  width: 100%;\n  height: 80px;\n  border-radius: 6px;\n  margin: 10px 2px;\n}\n:host .content .info-content .title {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 0;\n}\n:host .content .info-content .subtitle {\n  font-size: 13px;\n  font-weight: 400;\n}\n:host .actions {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: -5px;\n}\n:host .actions small {\n  padding-left: 3px;\n}\n:host .actions .start {\n  display: flex;\n  flex: 1;\n}\n:host .actions .end {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvc2hhcmVkL2NhcmQtdmlld3MvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL2NhcmQtdmlld3MvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ047QURFSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FDQU47QURFTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0RSO0FETUU7RUFDRSxhQUFBO0FDSko7QURNSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0pOO0FES007RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0hSO0FESVE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRlY7QURNTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKUjtBRE9NO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTFI7QURVRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFNJO0VBQ0UsaUJBQUE7QUNQTjtBRFVJO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUNSTjtBRFdJO0VBQ0UsYUFBQTtBQ1ROIiwiZmlsZSI6InNyYy9zaGFyZWQvY2FyZC12aWV3cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMjVweCAyMHB4O1xuXG4gIC5hdXRob3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuaW1hZ2Uge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIH1cblxuICAgIC5kZXRhaWxzIHtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMTtcblxuICAgICAgLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG5cbiAgICAgIC5wdWJsaXNoLWRhdGUge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5pbmZvLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4OiAxO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIC5pbWFnZS1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5pbWFnZS1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIH1cblxuICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBzbWFsbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICB9XG5cbiAgICAuc3RhcnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmVuZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyNXB4IDIwcHg7XG59XG46aG9zdCAuYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IC5hdXRob3IgLmltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbjpob3N0IC5hdXRob3IgLmRldGFpbHMge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuYXV0aG9yIC5kZXRhaWxzIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOmhvc3QgLmF1dGhvciAuZGV0YWlscyAucHVibGlzaC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuY29udGVudCAuaW5mby1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46aG9zdCAuY29udGVudCAuaW5mby1jb250ZW50IC5pbWFnZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY29udGVudCAuaW5mby1jb250ZW50IC5pbWFnZS1jb250ZW50IC5pbWFnZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDEwcHggMnB4O1xufVxuOmhvc3QgLmNvbnRlbnQgLmluZm8tY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjpob3N0IC5jb250ZW50IC5pbmZvLWNvbnRlbnQgLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cbjpob3N0IC5hY3Rpb25zIHNtYWxsIHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG46aG9zdCAuYWN0aW9ucyAuc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmFjdGlvbnMgLmVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */");

/***/ }),

/***/ "./src/shared/card-views/timeline/timeline.component.ts":
/*!**************************************************************!*\
  !*** ./src/shared/card-views/timeline/timeline.component.ts ***!
  \**************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var _helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/extender */ "./src/shared/helpers/extender.ts");




var TimelineComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimelineComponent, _super);
    /**
     * @constructor
     * @param injector {Injector}
     */
    function TimelineComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        _this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    TimelineComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.me = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    TimelineComponent.prototype.clicked = function (name) {
        this.event.emit({ type: name, data: this.feed });
    };
    TimelineComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimelineComponent.prototype, "feed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimelineComponent.prototype, "event", void 0);
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feed-timeline',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timeline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/shared/card-views/timeline/timeline.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timeline.component.scss */ "./src/shared/card-views/timeline/timeline.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TimelineComponent);
    return TimelineComponent;
}(_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module.js.map