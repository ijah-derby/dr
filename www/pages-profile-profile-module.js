(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/components/profile/profile.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/components/profile/profile.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\" color=\"favorite\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back\"></ion-icon> -->\n      <ion-icon\n        style=\"color: #351010; font-size: 26px; margin-left: 12px;\"\n        icon=\"../../../../assets/icons/chevron-back.svg\"\n        (click)=\"goBack()\"\n      ></ion-icon>\n    </ion-buttons>\n\n    <ion-menu-button class=\"writer\" menu=\"second\" autoHide=\"true\">\n      <ion-icon src=\"assets/icons/play-outline.svg\" color=\"medium\" style=\" margin-right: 190px;\"></ion-icon>\n    </ion-menu-button>\n\n    <ion-buttons slot=\"end\">\n      <img\n        id=\"hide\"\n        alt=\"appicon\"\n        height=\"22\"\n        class=\"ion-float-right\"\n        src=\"assets/images/logo1.png\"\n      />\n    </ion-buttons>\n  </ion-toolbar>\n\n  \n</ion-header>\n\n<ion-content scrollX=\"false\" scrollY=\"false\">\n  <!-- <img src=\"../../../../assets/icons/chevron-back.svg\" alt=\"\"> -->\n  <div class=\"content-wrapper\">\n    <ng-container *ngIf=\"user\">\n      <div class=\"profile-header\">\n        <div\n        class=\"image\"\n        [image-loader]=\"user.photoURL\"\n        (click)=\"showProfilePhoto(user.photoURL)\"\n      ></div>\n       \n        <div class=\"detail\">\n          <div class=\"title\">{{ user.displayName }}</div>\n          <div class=\"status-msg\">\n            {{ (user.statusMessage | slice: 0:120) || \"I am a Dont Rampian\" }}\n          </div>\n          <div class=\"status-url\">\n            {{ companyURL }}\n          </div>\n          <div class=\"country\" *ngIf=\"user.country\">{{ user.country }}</div>\n          <ion-button \n            *ngIf=\"!loading && !isFriend() && otherUser\"\n            class=\"follow\"\n            (click)=\"manage()\"\n            >{{ \"person-component.follow\" | translate }}</ion-button\n          >\n          <!-- show if following -->\n          <ion-fab slot=\"fixed\" *ngIf=\"!loading && isFriend() && otherUser\">\n            <ion-fab-button class=\"colr\" color=\"light\" size=\"small\">\n              <ion-icon class=\"colr\" name=\"ios-menu\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-list side=\"bottom\">\n              <ion-fab-button>\n                <ion-icon\n                  (click)=\"call()\"\n                  src=\"assets/icons/phone-call.svg\"\n                ></ion-icon>\n              </ion-fab-button>\n              <ion-fab-button>\n                <ion-icon\n                  (click)=\"chat()\"\n                  src=\"assets/icons/message-square.svg\"\n                ></ion-icon>\n              </ion-fab-button>\n              <ion-fab-button>\n                <ion-icon\n                  (click)=\"share()\"\n                  src=\"assets/icons/share-2.svg\"\n                ></ion-icon>\n              </ion-fab-button>\n            </ion-fab-list>\n          </ion-fab>\n        </div>\n      </div>\n      <div class=\"profile-menu\">\n        <div\n          class=\"menu-item\"\n          [ngClass]=\"{ active: selectedView === item.id }\"\n          *ngFor=\"let item of views\"\n          (click)=\"selectedView = item.id\"\n        >\n          <strong>{{ item.value }}</strong>\n          <span>{{ item.name }}</span>\n        </div>\n        <ion-button\n          fill=\"clear\"\n          *ngIf=\"!otherUser\"\n          color=\"medium\"\n          (click)=\"more()\"\n        >\n          <ion-icon src=\"assets/icons/settings-outline.svg\" mode=\"md\"></ion-icon>\n        </ion-button>\n      </div>\n      <div class=\"profile-content\">\n        <ng-container [ngSwitch]=\"selectedView\">\n          <ng-container *ngSwitchCase=\"1\">\n            <app-user-people\n              [user]=\"user\"\n              (navigateEvent)=\"navRecieved($event)\"\n            ></app-user-people>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"2\">\n            <app-user-people\n              following=\"true\"\n              [user]=\"user\"\n              (navigateEvent)=\"navRecieved($event)\"\n            ></app-user-people>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <app-user-posts [uid]=\"uid\"></app-user-posts>\n          </ng-container>\n        </ng-container>\n      </div>\n    </ng-container>\n  </div>\n  <a\n    hidden\n    #callNumber\n    *ngIf=\"user\"\n    href=\"tel:+{{ user.mobile || user.phone }}\"\n  ></a>\n\n  <!-- <ion-menu-button class=\"writer\" menu=\"second\" autoHide=\"true\">\n  <img  alt=\"appicon\" src=\"assets/images/pull.png\"/>\n</ion-menu-button> -->\n</ion-content>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/components/user-people/user-people.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/components/user-people/user-people.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let item of friends\">\n  <app-simple-item *ngIf=\"item.displayName\">\n    <div class=\"img\" prefix [image-loader]=\"item.photoURL\" (click)=\"openProfile(item.uid)\"></div>\n    <div class=\"detail\" (click)=\"openProfile(item.uid)\">\n      <div class=\"name\">{{ item.displayName }}</div>\n      <div class=\"city\" *ngIf=\"item.town\">{{ item.town }}</div>\n      <div class=\"country\" *ngIf=\"item.country\">{{ item.country }}</div>\n    </div>\n  \n    <!-- show if not following -->\n    <!-- <ion-button suffix size=\"small\" *ngIf=\"following && !isFriend(item.uid)\" class=\"follow\" (click)=\"manage()\">{{\n      'person-component.follow' | translate\n    }}</ion-button> -->\n  \n    <!-- call user with hidden a tag -->\n    <a hidden #callNumber href=\"tel:+{{ item.mobile || item.phone }}\"></a>\n  </app-simple-item>\n\n  <app-simple-item *ngIf=\"!item.displayName\">\n    <div class=\"img\" prefix [image-loader]=\"\" (click)=\"showMsg()\"></div>\n    <div class=\"detail\" (click)=\"showMsg()\">\n      <div class=\"name\" style=\"color: red;\">Deleted User</div>\n      <div class=\"city\" *ngIf=\"item.town\"></div>\n      <div class=\"country\" *ngIf=\"item.country\"></div>\n    </div>\n  \n    <!-- show if not following -->\n    <!-- <ion-button suffix size=\"small\" *ngIf=\"following && !isFriend(item.uid)\" class=\"follow\" (click)=\"manage()\">{{\n      'person-component.follow' | translate\n    }}</ion-button> -->\n  \n    <!-- call user with hidden a tag -->\n    <a hidden #callNumber href=\"tel:+\"></a>\n  </app-simple-item>\n</div>\n<app-spinner *ngIf=\"loading\"></app-spinner>\n<app-no-data *ngIf=\"friends.length === 0\"></app-no-data>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/components/user-posts/user-posts.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/components/user-posts/user-posts.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-grid>\n    <ion-row>\n        <ion-col *ngFor=\"let post of posts\" size=\"12\">\n          <div class=\"image\" [image-loader]=\"post.images\" (click)=\"open(post.images)\" *ngIf=\"post.images!==''\"></div>\n          <iframe *ngIf=\"post.videoContent!==''\" style=\"width: 100%;\" [src]=\"post.videoContent | youtube\" frameborder=\"0\" allowfullscreen></iframe>\n        </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n<ion-content>\n  <div *ngFor=\"let item of feeds; let i = index\">\n    <feed-minimal\n      [feed]=\"item\"\n      [itemIndex]=\"i\"\n      (event)=\"manage($event)\"\n    ></feed-minimal>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadMoreFeed($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <app-spinner *ngIf=\"loading\"></app-spinner>\n  <app-no-data *ngIf=\"feeds && feeds.length === 0\"></app-no-data>\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/profile/components/profile/profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/profile/components/profile/profile.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .content-wrapper .profile-header {\n  display: flex;\n  padding: 10px 15px;\n}\n:host .content-wrapper .profile-header .image {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n}\n:host .content-wrapper .profile-header .detail {\n  margin-left: 15px;\n  flex: 1;\n}\n:host .content-wrapper .profile-header .detail .title {\n  font-size: 16px;\n  margin: 5px 0;\n  font-weight: 700;\n}\n:host .content-wrapper .profile-header .detail .status-msg,\n:host .content-wrapper .profile-header .detail .country {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin: 5px 0;\n}\n:host .content-wrapper .profile-menu {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px 0px;\n  margin: 5px 0;\n  border-top: 0px solid var(--ion-color-light-shade);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n:host .content-wrapper .profile-menu .menu-item {\n  display: flex;\n  flex-direction: column;\n}\n:host .content-wrapper .profile-menu .menu-item.active {\n  color: var(--ion-color-primary);\n  border-bottom: 2px solid var(--ion-color-facebook);\n  padding-bottom: 5px;\n}\n:host .content-wrapper .profile-menu .menu-item.active span {\n  color: var(--ion-color-primary);\n}\n:host .content-wrapper .profile-menu .menu-item strong {\n  font-size: 16px;\n}\n:host .content-wrapper .profile-menu .menu-item span {\n  color: var(--ion-color-medium);\n  font-size: 12px;\n}\n:host .content-wrapper .profile-content {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  height: calc(80% - 0px);\n}\n:host .content-wrapper .profile-content .title {\n  font-size: 16px;\n  font-weight: 700;\n}\n.ion-float-right {\n  margin-right: 19px;\n  Margin-top: 0px;\n}\n.header {\n  display: none;\n}\n.pad {\n  position: fixed;\n  Top: 3px;\n  Left: 120px;\n  z-index: 999;\n}\n@media (min-width: 829px) {\n  img#hide {\n    display: none;\n  }\n}\nion-fab {\n  background-color: transparent;\n  right: 10px;\n  top: -5px;\n}\n.colr {\n  --box-shadow:none;\n}\n.follow {\n  position: absolute;\n  right: 12px;\n  top: 10px;\n  font-size: 12px;\n  width: 55px;\n  font-size: 10px;\n  height: 26px;\n}\n.tool {\n  box-shadow: 0px 0.2px 0px #a8a8a8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDRE47QURFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdNO0VBQ0UsaUJBQUE7RUFDQSxPQUFBO0FDRFI7QURFUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBVjtBREVROztFQUVFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNBVjtBRElJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxxREFBQTtBQ0ZOO0FER007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNEUjtBREVRO0VBQ0UsK0JBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0FDQVY7QURDVTtFQUNFLCtCQUFBO0FDQ1o7QURFUTtFQUNFLGVBQUE7QUNBVjtBREVRO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FDQVY7QURJSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0ZOO0FER007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRFFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTEE7QURRQTtFQUNBLGFBQUE7QUNMQTtBRFdBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1JKO0FEYUE7RUFDRTtJQUNFLGFBQUE7RUNWRjtBQUNGO0FEYUE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDWEY7QURlQTtFQUNFLGlCQUFBO0FDWkY7QURlQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDWkY7QURlQTtFQUNFLDRDQUFBO0FDWkYiLCJmaWxlIjoic3JjL3BhZ2VzL3Byb2ZpbGUvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIC5wcm9maWxlLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgLmltYWdlIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICBcbiAgICAgIH1cbiAgICAgIC5kZXRhaWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0dXMtbXNnLFxuICAgICAgICAuY291bnRyeSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5wcm9maWxlLW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAwcHg7XG4gICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rKTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAucHJvZmlsZS1jb250ZW50IHtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBoZWlnaHQ6IGNhbGMoODAlIC0gMHB4KTtcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4uaW9uLWZsb2F0LXJpZ2h0e1xubWFyZ2luLXJpZ2h0OiAxOXB4O1xuTWFyZ2luLXRvcDogMHB4O1xufVxuXG4uaGVhZGVye1xuZGlzcGxheTogbm9uZTtcbn1cblxuXG5cblxuLnBhZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIFRvcDogM3B4O1xuICAgIExlZnQ6IDEyMHB4O1xuICAgIHotaW5kZXg6IDk5OTsgXG59XG5cblxuXG5AbWVkaWEgKG1pbi13aWR0aDo4MjlweCkge1xuICBpbWcjaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5pb24tZmFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IC01cHg7XG4gIFxufVxuXG4uY29scntcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5mb2xsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDU1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgaGVpZ2h0OiAyNnB4O1xufVxuXG4udG9vbCB7XG4gIGJveC1zaGFkb3c6IDBweCAwLjJweCAwcHggI2E4YThhOCFpbXBvcnRhbnQ7XG59IiwiOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAucHJvZmlsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5wcm9maWxlLWhlYWRlciAuaW1hZ2Uge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAucHJvZmlsZS1oZWFkZXIgLmRldGFpbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAucHJvZmlsZS1oZWFkZXIgLmRldGFpbCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5wcm9maWxlLWhlYWRlciAuZGV0YWlsIC5zdGF0dXMtbXNnLFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAucHJvZmlsZS1oZWFkZXIgLmRldGFpbCAuY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBtYXJnaW46IDVweCAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAucHJvZmlsZS1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMHB4O1xuICBtYXJnaW46IDVweCAwO1xuICBib3JkZXItdG9wOiAwcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5wcm9maWxlLW1lbnUgLm1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5wcm9maWxlLW1lbnUgLm1lbnUtaXRlbS5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rKTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtbWVudSAubWVudS1pdGVtLmFjdGl2ZSBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtbWVudSAubWVudS1pdGVtIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtbWVudSAubWVudS1pdGVtIHNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtY29udGVudCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGNhbGMoODAlIC0gMHB4KTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLnByb2ZpbGUtY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pb24tZmxvYXQtcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDE5cHg7XG4gIE1hcmdpbi10b3A6IDBweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wYWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIFRvcDogM3B4O1xuICBMZWZ0OiAxMjBweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODI5cHgpIHtcbiAgaW1nI2hpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmlvbi1mYWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogLTVweDtcbn1cblxuLmNvbHIge1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmZvbGxvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogNTVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBoZWlnaHQ6IDI2cHg7XG59XG5cbi50b29sIHtcbiAgYm94LXNoYWRvdzogMHB4IDAuMnB4IDBweCAjYThhOGE4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/pages/profile/components/profile/profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/profile/components/profile/profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _shared_modals_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/modals/edit-profile/edit-profile.component */ "./src/shared/modals/edit-profile/edit-profile.component.ts");
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var _feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../feed/services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var _people_services_people_people_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../people/services/people/people.service */ "./src/pages/people/services/people/people.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/pages/messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user-posts/user-posts.component */ "./src/pages/profile/components/user-posts/user-posts.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");














/**
 * view users details and their posts, followers and friends
 */
var ProfileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileComponent, _super);
    function ProfileComponent(injector, authService, feedService, peopleService, route, firestoreService, messageService, commonService, navCtrl, loaderCtrl, angularFire) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.feedService = feedService;
        _this.peopleService = peopleService;
        _this.route = route;
        _this.firestoreService = firestoreService;
        _this.messageService = messageService;
        _this.commonService = commonService;
        _this.navCtrl = navCtrl;
        _this.loaderCtrl = loaderCtrl;
        _this.angularFire = angularFire;
        _this.friends = [];
        _this.friendsCur = [];
        _this.followers = [];
        _this.selectedView = 0;
        _this.posts = [];
        _this.otherUser = false;
        _this.count = 0;
        return _this;
    }
    Object.defineProperty(ProfileComponent.prototype, "views", {
        /** set tab data  */
        get: function () {
            return [
                {
                    id: 0,
                    name: this.translate.instant("profile-component.post"),
                    value: this.posts.length,
                },
                {
                    id: 1,
                    name: this.translate.instant("profile-component.following"),
                    value: this.friends ? this.friends.length : 0,
                },
                {
                    id: 2,
                    name: this.translate.instant("profile-component.followers"),
                    value: this.followers.length,
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    /** get current user */
    ProfileComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.count = this.count + 1;
                return [2 /*return*/];
            });
        });
    };
    ProfileComponent.prototype.initFeed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.curUser = _b.sent();
                        this.route.queryParams.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!params.id) return [3 /*break*/, 1];
                                        this.otherUser = true;
                                        console.log("params id", params.id);
                                        this.uid = params.id;
                                        this.fillStats(params.id);
                                        this.loadingService.dismissLoader();
                                        return [3 /*break*/, 3];
                                    case 1:
                                        console.log("current user");
                                        this.fillStats(this.curUser.uid);
                                        _a = this;
                                        return [4 /*yield*/, this.authService.getUser()];
                                    case 2:
                                        _a.user = _b.sent();
                                        this.uid = this.user.uid;
                                        this.otherUser = false;
                                        this.loadingService.dismissLoader();
                                        if (this.count > 1) {
                                            // this.userPostComp.ionViewDidEnter();
                                        }
                                        else {
                                            this.count++;
                                        }
                                        _b.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }, function (err) {
                            _this.loadingService.dismissLoader();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.ionViewWillLeave = function () {
        console.log("leaving");
        this.userPostComp.reset();
    };
    ProfileComponent.prototype.fillStats = function (userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loaderCtrl.create({
                            duration: 5000,
                            message: "",
                        })];
                    case 1:
                        loading = _a.sent();
                        // loading.present();
                        return [4 /*yield*/, this.getUser(userId).subscribe(function (usr) {
                                _this.user = usr;
                                _this.uid = userId;
                                console.log(_this.user);
                                _this.feedService.getUserFeed(_this.user.uid).subscribe(function (posts) {
                                    _this.posts = posts;
                                    loading.dismiss();
                                    _this.loadingService.dismissLoader();
                                });
                                _this.peopleService.getFriendIds(_this.user.uid).subscribe(function (friends) {
                                    _this.friends = friends;
                                });
                                _this.peopleService
                                    .getFollowersIds(_this.user.uid)
                                    .subscribe(function (friends) { return (_this.followers = friends); });
                                loading.dismiss();
                                if (_this.isCurrentUser(_this.user.uid)) {
                                    _this.otherUser = false;
                                }
                                loading.dismiss();
                            })];
                    case 2:
                        // loading.present();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** get user and user details such as feed, friends and followers */
    ProfileComponent.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentUser;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Enter Profile page");
                        if (this.userPostComp) {
                            this.userPostComp.doReload();
                        }
                        this.initFeed();
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        currentUser = _a.sent();
                        this.peopleService.getFriendIds(currentUser.uid).subscribe(function (friends) {
                            _this.friendsCur = friends ? friends : [];
                        });
                        if (this.otherUser) {
                            if (this.userPostComp) {
                                this.userPostComp.ionViewDidEnter();
                            }
                            return [2 /*return*/];
                        }
                        this.subscriptions.push(this.authService.user.subscribe(function (user) {
                            if (user) {
                                _this.user = user;
                                _this.subscriptions.push(_this.feedService
                                    .getUserFeed(_this.user.uid)
                                    .subscribe(function (posts) { return (_this.posts = posts); }));
                                _this.subscriptions.push(_this.peopleService
                                    .getFriendIds(_this.user.uid)
                                    .subscribe(function (friends) { return (_this.friends = friends); }));
                                _this.subscriptions.push(_this.peopleService
                                    .getFollowersIds(_this.user.uid)
                                    .subscribe(function (friends) { return (_this.followers = friends); }));
                            }
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        console.log("page destroyed");
    };
    ProfileComponent.prototype.isCurrentUser = function (uid) {
        if (this.curUser.uid === uid) {
            return true;
        }
        return false;
    };
    ProfileComponent.prototype.getUser = function (uid) {
        return this.firestoreService.doc$("users/" + uid);
    };
    /** getter to check if user is a friend */
    ProfileComponent.prototype.isFriend = function () {
        return this.friendsCur.includes(this.user.uid);
    };
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    ProfileComponent.prototype.manage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingService.presentProcessingLoading();
                        if (!this.friendsCur.includes(this.user.uid)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.peopleService.unfollow(this.user.uid).then(function () { return _this.loadingService.dismissLoader(); }, function () { return _this.loadingService.dismissLoader(); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.peopleService.follow(this.user.uid).then(function () { return _this.loadingService.dismissLoader(); }, function () { return _this.loadingService.dismissLoader(); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /** call user */
    ProfileComponent.prototype.call = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.callUser(this.user.mobile || this.user.phone, this.callNumber)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** chat to user */
    ProfileComponent.prototype.chat = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.messageService.startChat(this.user);
                return [2 /*return*/];
            });
        });
    };
    /** share user */
    ProfileComponent.prototype.share = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "people?id=" + this.user.uid;
                        return [4 /*yield*/, this.commonService.share(this.user.displayName, this.user.email, this.user.photoURL, url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open more options in action sheet with options to edit, logout or close action sheet */
    ProfileComponent.prototype.more = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant("other.options"),
                            buttons: [
                                {
                                    text: this.translate.instant("setting-component.edit-account"),
                                    handler: function () { return _this.edit(); },
                                },
                                {
                                    text: this.translate.instant("setting-component.logout-button"),
                                    handler: function () {
                                        _this.authService.signOut().then(function () { return _this.goto(_this.routes.auth); });
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
    /** open profile edit modal */
    ProfileComponent.prototype.edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_shared_modals_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__["EditProfileComponent"], this.user)];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.goBack = function () {
        this.navCtrl.back();
        this.userPostComp.test();
        // this.initFeed();
    };
    ProfileComponent.prototype.navRecieved = function (event) {
        this.selectedView = this.views[0].id;
    };
    ProfileComponent.prototype.reset = function () {
        this.posts = [];
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] },
        { type: _people_services_people_people_service__WEBPACK_IMPORTED_MODULE_6__["PeopleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"] },
        { type: src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_9__["MessagesService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["LoadingController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("callNumber", null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfileComponent.prototype, "callNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_12__["UserPostsComponent"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_12__["UserPostsComponent"])
    ], ProfileComponent.prototype, "userPostComp", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/components/profile/profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/pages/profile/components/profile/profile.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"],
            _people_services_people_people_service__WEBPACK_IMPORTED_MODULE_6__["PeopleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"],
            src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_9__["MessagesService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["LoadingController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"]])
    ], ProfileComponent);
    return ProfileComponent;
}(_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/profile/components/user-people/user-people.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/pages/profile/components/user-people/user-people.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100%;\n}\n:host app-simple-item {\n  padding: 5px 10px;\n  margin: 10px 0;\n  align-items: center;\n}\n:host app-simple-item .img {\n  width: 60px;\n  height: 60px;\n  border-radius: 4px;\n  box-shadow: 1px 2px 12px var(--ion-color-light-shade);\n}\n:host app-simple-item .detail .name {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 0 4px 0;\n}\n:host app-simple-item .detail .job {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n  margin-bottom: 2px;\n}\n:host app-simple-item .detail .city,\n:host app-simple-item .detail .country {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host app-simple-item .detail .country {\n  color: var(--ion-color-primary-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3VzZXItcGVvcGxlL3VzZXItcGVvcGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL3Byb2ZpbGUvY29tcG9uZW50cy91c2VyLXBlb3BsZS91c2VyLXBlb3BsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FDR047QURBTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRVI7QURDTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVNOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDQVI7QURHTTtFQUNFLHFDQUFBO0FDRFIiLCJmaWxlIjoic3JjL3BhZ2VzL3Byb2ZpbGUvY29tcG9uZW50cy91c2VyLXBlb3BsZS91c2VyLXBlb3BsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhcHAtc2ltcGxlLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmltZyB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTJweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIH1cbiAgICAuZGV0YWlsIHtcbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5qb2Ige1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgfVxuXG4gICAgICAuY2l0eSxcbiAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICB9XG5cbiAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgYXBwLXNpbXBsZS1pdGVtIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgYXBwLXNpbXBsZS1pdGVtIC5pbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMTJweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuOmhvc3QgYXBwLXNpbXBsZS1pdGVtIC5kZXRhaWwgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAgMCA0cHggMDtcbn1cbjpob3N0IGFwcC1zaW1wbGUtaXRlbSAuZGV0YWlsIC5qb2Ige1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuOmhvc3QgYXBwLXNpbXBsZS1pdGVtIC5kZXRhaWwgLmNpdHksXG46aG9zdCBhcHAtc2ltcGxlLWl0ZW0gLmRldGFpbCAuY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgYXBwLXNpbXBsZS1pdGVtIC5kZXRhaWwgLmNvdW50cnkge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/profile/components/user-people/user-people.component.ts":
/*!***************************************************************************!*\
  !*** ./src/pages/profile/components/user-people/user-people.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserPeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPeopleComponent", function() { return UserPeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var _messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var _people_services_people_people_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../people/services/people/people.service */ "./src/pages/people/services/people/people.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









/**
 * toggle to get either users followers or friends by toggling following input property
 * list users
 */
var UserPeopleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserPeopleComponent, _super);
    function UserPeopleComponent(injector, authService, commonService, messageService, peopleService, navCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.commonService = commonService;
        _this.messageService = messageService;
        _this.peopleService = peopleService;
        _this.navCtrl = navCtrl;
        _this.friends = [];
        _this.following = false;
        _this.navigateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    /** get current user, if following input property is true, get current users followers
     * if false, get current users friends
     */
    UserPeopleComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // this.user = await this.authService.getUser();
                console.log("user input", this.user);
                this.loadingService.presentProcessingLoading();
                if (!this.following) {
                    this.subscriptions.push(this.peopleService.getFriends(this.user.uid).subscribe(function (friends) {
                        _this.loadingService.dismissLoader();
                        _this.friends = friends;
                    }));
                }
                else {
                    this.subscriptions.push(this.peopleService.getFollowers(this.user.uid).subscribe(function (friends) {
                        _this.loadingService.dismissLoader();
                        _this.friends = friends;
                    }));
                }
                this.subscriptions.push(this.peopleService
                    .getFriendIds(this.user.uid)
                    .subscribe(function (data) { return (_this.friendsIds = data); }));
                this.loadingService.dismissLoader();
                return [2 /*return*/];
            });
        });
    };
    /** call user */
    UserPeopleComponent.prototype.call = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.callUser(this.user.mobile || this.user.phone, this.callNumber)];
                    case 1:
                        _a.sent();
                        this.closeModal();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** start chat with user */
    UserPeopleComponent.prototype.chat = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.messageService.startChat(this.user);
                this.closeModal();
                return [2 /*return*/];
            });
        });
    };
    /** share user */
    UserPeopleComponent.prototype.share = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "people?id=" + this.user.uid;
                        return [4 /*yield*/, this.commonService.share(this.user.displayName, this.user.email, this.user.photoURL, url)];
                    case 1:
                        _a.sent();
                        this.closeModal();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** check if user is a friends  */
    UserPeopleComponent.prototype.isFriend = function (fid) {
        return Object(util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(this.friends) && this.friendsIds.includes(fid);
    };
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    UserPeopleComponent.prototype.manage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.peopleService.friends.includes(this.user.uid)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.peopleService.unfollow(this.user.uid)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.peopleService.follow(this.user.uid)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserPeopleComponent.prototype.openProfile = function (uid) {
        var extras = {
            queryParams: {
                id: uid,
            },
        };
        this.navigateEvent.emit("clicked bro");
        this.navCtrl.navigateForward("profile", extras);
    };
    UserPeopleComponent.prototype.showMsg = function () {
        this.toast("This User has been deleted");
    };
    UserPeopleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] },
        { type: _people_services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserPeopleComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], UserPeopleComponent.prototype, "following", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("callNumber", null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserPeopleComponent.prototype, "callNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserPeopleComponent.prototype, "navigateEvent", void 0);
    UserPeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-people",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-people.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/components/user-people/user-people.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-people.component.scss */ "./src/pages/profile/components/user-people/user-people.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"],
            _people_services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]])
    ], UserPeopleComponent);
    return UserPeopleComponent;
}(_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/pages/profile/components/user-posts/user-posts.component.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/profile/components/user-posts/user-posts.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100%;\n}\n:host .wrapper {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-gap: 10px;\n}\n:host .image {\n  background-color: var(--ion-color-medium);\n  border-radius: 5px;\n  padding: 20px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3VzZXItcG9zdHMvdXNlci1wb3N0cy5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvdXNlci1wb3N0cy91c2VyLXBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FDRUo7QURDRTtFQUNFLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvdXNlci1wb3N0cy91c2VyLXBvc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLndyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBncmlkLWdhcDogMTBweDtcbn1cbjpob3N0IC5pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/pages/profile/components/user-posts/user-posts.component.ts":
/*!*************************************************************************!*\
  !*** ./src/pages/profile/components/user-posts/user-posts.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostsComponent", function() { return UserPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/modals/image-preview/image-preview.component */ "./src/shared/modals/image-preview/image-preview.component.ts");
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var _feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../feed/services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var src_pages_feed_components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pages/feed/components/feed-detail/feed-detail.component */ "./src/pages/feed/components/feed-detail/feed-detail.component.ts");
/* harmony import */ var src_pages_feed_components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pages/feed/components/feed-comment/feed-comment.component */ "./src/pages/feed/components/feed-comment/feed-comment.component.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");












/**
 * get users posts images and list them in a gallery format
 */
var UserPostsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserPostsComponent, _super);
    function UserPostsComponent(injector, authService, feedService, commonService, loaderCtrl, angularFire, firestoreservice) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.feedService = feedService;
        _this.commonService = commonService;
        _this.loaderCtrl = loaderCtrl;
        _this.angularFire = angularFire;
        _this.firestoreservice = firestoreservice;
        _this.posts = [];
        _this.tempFeeds = [];
        return _this;
    }
    /** get user feed and extract images into one array */
    UserPostsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.uid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        user = _a.sent();
                        this.uid = user.uid;
                        _a.label = 2;
                    case 2:
                        this.doReload();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPostsComponent.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.uid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        user = _a.sent();
                        this.uid = user.uid;
                        _a.label = 2;
                    case 2:
                        this.feeds = [];
                        this.posts = [];
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPostsComponent.prototype.reset = function () {
        this.posts = [];
        this.feeds = [];
        this.tempFeeds = [];
    };
    UserPostsComponent.prototype.test = function () {
        var _this = this;
        setTimeout(function () {
            _this.doReload();
        }, 700);
    };
    UserPostsComponent.prototype.doReload = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loaderCtrl.create({
                            message: "",
                        })];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        // this.loadingService.presentProcessingLoading();
                        this.reset();
                        console.log("poster uid", this.uid);
                        this.angularFire
                            .collection("feed", function (ref) {
                            return ref.where("uid", "==", _this.uid).orderBy("createdAt", "desc").limit(4);
                        })
                            .get()
                            .subscribe(function (resp) {
                            if (resp.docs.length === 0) {
                                loader.dismiss();
                            }
                            resp.docs.forEach(function (item) {
                                var feed = item.data();
                                feed.doc = item;
                                // console.log(feed);
                                _this.firestoreservice
                                    .doc$("users/" + feed.uid)
                                    .subscribe(function (user) {
                                    feed.user = user;
                                    feed.userLiked =
                                        feed.likes && Array.isArray(feed.likes)
                                            ? feed.likes.includes(_this.uid)
                                            : false;
                                    _this.feeds.push(feed);
                                    console.log(_this.feeds);
                                    loader.dismiss();
                                    // event.target.complete();
                                });
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPostsComponent.prototype.ionViewDidLeave = function () {
        this.loadingService.dismissLoader();
    };
    /** open image preview */
    UserPostsComponent.prototype.open = function (image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_3__["ImagePreviewComponent"], image, "custom-modal")];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPostsComponent.prototype.manage = function (_event) {
        var _this = this;
        if (_event.type === "like") {
            this.feedService.like(_event.data).then(function (_) {
                _this.feedService
                    .getUpdateSpecificDoc(_event.data)
                    .subscribe(function (updatedFeed) {
                    console.log(_event.data.userLiked);
                    Object.assign(_this.feeds[_event.index], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, updatedFeed, { userLiked: _event.data.userLiked }));
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
    UserPostsComponent.prototype.delete = function (post, index) {
        var _this = this;
        this.feedService.delete(post).then(function (_) {
            if (index === 0) {
                _this.feeds.splice(index, 1);
            }
            else if (index === _this.feeds.length - 1) {
                _this.feeds.splice(index, 1);
            }
            else {
                _this.feeds.splice(index, 1);
            }
        });
    };
    /** go to post author's profile page */
    UserPostsComponent.prototype.profile = function (post) {
        this.goto(this.routes.people + "/" + post.user.uid);
    };
    /** open post details modal, update array of feed if any change is made */
    UserPostsComponent.prototype.viewPost = function (post, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(src_pages_feed_components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_6__["FeedDetailComponent"], post.id)];
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
                                                Object.assign(_this.feeds[index], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, updatedFeed, { likes: post.likes, userLiked: post.userLiked, doc: post.doc }));
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
    UserPostsComponent.prototype.comment = function (feed, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(src_pages_feed_components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__["FeedCommentComponent"], feed)];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        modal.onWillDismiss().then(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                console.log(resp);
                                if (resp.data) {
                                    this.doReload();
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open actionsheet for more options */
    UserPostsComponent.prototype.more = function (data, index) {
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
    UserPostsComponent.prototype.share = function (post) {
        var url = "feed?id=" + post.id;
        this.commonService.share(post.content, post.title, post.images, url);
    };
    /** load more posts */
    UserPostsComponent.prototype.loadMoreFeed = function (event) {
        var _this = this;
        console.log("loading more feeds");
        var cursor = this.getCursor(false);
        console.log("cursor", this.getCursor(false));
        this.angularFire
            .collection("feed", function (ref) {
            return ref
                .where("uid", "==", _this.uid)
                .orderBy("createdAt", "desc")
                .limit(4)
                .startAfter(cursor);
        })
            .get()
            .subscribe(function (resp) {
            var feedArr = [];
            console.log(resp);
            if (resp.docs.length === 0) {
                event.target.complete();
            }
            resp.docs.forEach(function (item) {
                var feed = item.data();
                feed.doc = item;
                // console.log(feed);
                _this.firestoreservice
                    .doc$("users/" + feed.uid)
                    .subscribe(function (user) {
                    feed.user = user;
                    feed.userLiked =
                        feed.likes && Array.isArray(feed.likes)
                            ? feed.likes.includes(_this.uid)
                            : false;
                    _this.feeds.push(feed);
                    console.log(_this.feeds);
                    event.target.complete();
                });
            });
        });
    };
    /** get curser of current feed */
    UserPostsComponent.prototype.getCursor = function (prePend) {
        console.log("length", this.feeds.length);
        if (this.feeds.length) {
            return prePend
                ? this.feeds[0].doc
                : this.feeds[this.feeds.length - 1].doc;
        }
        return null;
    };
    UserPostsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UserPostsComponent.prototype, "feeds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserPostsComponent.prototype, "uid", void 0);
    UserPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-posts",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/profile/components/user-posts/user-posts.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-posts.component.scss */ "./src/pages/profile/components/user-posts/user-posts.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreService"]])
    ], UserPostsComponent);
    return UserPostsComponent;
}(_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/profile/profile.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/profile/profile.module.ts ***!
  \*********************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/pages/profile/components/profile/profile.component.ts");
/* harmony import */ var _components_user_people_user_people_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-people/user-people.component */ "./src/pages/profile/components/user-people/user-people.component.ts");
/* harmony import */ var _components_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-posts/user-posts.component */ "./src/pages/profile/components/user-posts/user-posts.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/shared/shared.module.ts");








var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _components_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_6__["UserPostsComponent"], _components_user_people_user_people_component__WEBPACK_IMPORTED_MODULE_5__["UserPeopleComponent"]],
            entryComponents: [_components_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_6__["UserPostsComponent"]],
            providers: [_components_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_6__["UserPostsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: "",
                        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                    },
                ]),
            ],
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map