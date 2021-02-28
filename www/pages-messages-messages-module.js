(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/messages/components/message/message.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/messages/components/message/message.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"viewUser(userId)\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" #content>\n  <div class=\"messages\" #contentArea>\n    <p class=\"center\" *ngIf=\"startIndex > 0\"><span tappable (click)=\"loadPreviousMessages()\">Load previous\n        messages</span></p>\n    <div *ngFor=\"let message of messagesToShow\">\n      <div *ngIf=\"isSender(message)\" class=\"chatbox right sender\">\n        <div *ngIf=\"message.type == 'text'\">\n          <p style=\"margin:0\">{{message.message}}</p>\n        </div>\n        <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\n        <div *ngIf=\"message.type == 'image'\">\n          <img tappable (click)=\"enlargeImage(message.message)\" src=\"{{message.message}}\" (load)=\"scrollBottom()\" />\n        </div>\n        <div *ngIf=\"message.type == 'video'\">\n          <video controls width=\"100%\">\n            <source src=\"{{message.message}}\" type=\"video/mp4\">\n          </video>\n        </div>\n        <span>{{message.date | DateFormat}}</span>\n      </div>\n      <div *ngIf=\"!isSender(message)\" class=\"chatbox left\">\n        <div *ngIf=\"message.type == 'text'\">\n          <p style=\"margin:0\">{{message.message}}</p>\n        </div>\n        <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\n        <div *ngIf=\"message.type == 'image'\">\n          <img tappable (click)=\"enlargeImage(message.message)\" src=\"{{message.message}}\" (load)=\"scrollBottom()\" />\n        </div>\n        <div *ngIf=\"message.type == 'video'\">\n          <video controls width=\"100%\">\n            <source src=\"{{message.message}}\" type=\"video/mp4\">\n          </video>\n        </div>\n        <span>{{message.date | DateFormat}}</span>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item lines=\"none\">\n      <ion-button slot=\"start\" fill=\"clear\" (click)=\"attach()\">\n        <ion-icon name=\"attach-outline\"></ion-icon>\n      </ion-button>\n      <ion-textarea style=\"height: 100%;\" autoGrow=\"true\" rows=\"1\" placeholder=\"Type your message\"\n        [(ngModel)]=\"message\"></ion-textarea>\n      <ion-button slot=\"end\" color=\"primary\" fill=\"clear\" (click)=\"send('text')\" [disabled]=\"!message\">\n        send\n      </ion-button>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/messages/components/messages/messages.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/messages/components/messages/messages.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n      src=\"assets/icons/menu-outline.svg\"\n      color=\"danger\"\n        style=\"font-size: 25px; padding-left: 10px; color: black;\"\n        (click)=\"openMenu()\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Chats</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"createGroup()\">Create Group</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-segment [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"chat\">\n      <ion-label>Chats</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"group\">\n      <ion-label>Groups</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <ng-container *ngIf=\"tab === 'chat'\">\n    <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"search..\"></ion-searchbar>\n    <div class=\"empty-list\" *ngIf=\"messagesService.conversations && messagesService.conversations.length <= 0\">\n      <h1>\n        <ion-icon name=\"chatbubbles\"></ion-icon>\n      </h1>\n      <p>No new conversation yet.</p>\n    </div>\n    <!-- Show conversations -->\n  \n    <ion-list lines=\"none\" *ngIf=\"messagesService.isLoading\">\n      <ion-item *ngFor=\"let x of [].constructor(4)\">\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  \n    <ion-list lines=\"none\" *ngIf=\"messagesService.conversations && messagesService.conversations.length > 0\">\n  \n      <div *ngFor=\"let conversation of messagesService.conversations | conversationFilter:searchFriend\">\n        <ion-item *ngIf=\"conversation.blocked != true\" (click)=\"message(conversation.key)\">\n  \n          <ion-avatar slot=\"start\" *ngIf=\"conversation.friend\">\n            <img src=\"{{conversation.friend.photoURL}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n          </ion-avatar>\n          <div [ngClass]=hasUnreadMessages(conversation)>\n            <ion-label>\n              <ion-text>\n                <h2 *ngIf=\"conversation.friend\">{{conversation.friend.displayName}}</h2>\n              </ion-text>\n              <ion-text>\n                <p>{{conversation.message}}</p>\n              </ion-text>\n            </ion-label>\n          </div>\n          <div slot=\"end\" style=\"display: flex;flex-direction: column;align-items: flex-end;\">\n            <ion-badge color=\"danger\" *ngIf=\"conversation.unreadMessagesCount > 0\">\n              {{conversation.unreadMessagesCount}}\n            </ion-badge>\n            <ion-text style=\"color: #777;font-size: 12px;position: relative;\n            top: -10px;\">{{conversation.date | DateFormat}}</ion-text>\n          </div>\n        </ion-item>\n      </div>\n    </ion-list>\n  </ng-container>\n\n  <ng-container *ngIf=\"tab === 'group'\">\n    <div class=\"empty-list\" *ngIf=\"messagesService.groups && messagesService.groups.length <= 0\">\n      <h1>\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      </h1>\n      <p>No new groups yet.</p>\n    </div>\n    <ion-list lines=\"none\" *ngIf=\"messagesService.isLoading\">\n      <ion-item *ngFor=\"let x of [].constructor(4)\">\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <!-- Show groups -->\n    <div *ngIf=\"messagesService.groups && messagesService.groups.length > 0\">\n      <ion-searchbar [(ngModel)]=\"searchGroup\" placeholder=\"search\"></ion-searchbar>\n      <ion-list lines=\"none\">\n        <ng-container *ngFor=\"let group of messagesService.groups | groupFilter: searchGroup\">\n          <ion-item *ngIf=\"group.name\" (click)=\"viewGroup(group.id)\">\n            <ion-thumbnail slot=\"start\">\n              <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n            </ion-thumbnail>\n            <ion-label>\n              <ion-text>\n                <h2>{{group.name}}</h2>\n              </ion-text>\n              <ion-text>\n                <p>{{group.date | DateFormat}}</p>\n              </ion-text>\n            </ion-label>\n            <ion-badge slot=\"end\" color=\"danger\" *ngIf=\"group.unreadMessagesCount > 0\">{{group.unreadMessagesCount}}\n            </ion-badge>\n          </ion-item>\n        </ng-container>\n      </ion-list>\n    </div>\n  </ng-container>\n  \n</ion-content>\n\n<ion-toolbar color=\"secondary\">\n  <ion-tabs>\n    <ion-tab-bar color=\"favorite\" slot=\"bottom\">\n      <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n        <ion-icon  src=\"assets/icons/person-outline.svg\" color=\"primary\" style=\"width: 30px; height: 50px;\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button routerLink=\"/people\" routerDirection=\"forward\">\n        <ion-icon\n        src=\"assets/icons/people-outline.svg\"\n        color=\"primary\"\n          style=\"width: 35px; height: 50px;\"\n        ></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"addPost()\">\n        <ion-icon\n        src=\"assets/icons/add-circle-outline.svg\"\n        color=\"primary\" \n          style=\"width: 30px; height: 50px;\"\n        ></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"goToMessages()\">\n        <ion-icon src=\"assets/icons/mail-outline.svg\" color=\"primary\" style=\"width: 30px; height: 50px;\"></ion-icon>\n        <ion-badge\n          *ngIf=\"messagesService.getUnreadMessagesCount() > 0 || messagesService.getUnreadGroupMessagesCount() > 0\"\n          class=\"badgemsg\"\n          style=\"margin-bottom: 7px;\"\n          color=\"green\"\n          >{{ messagesService.getUnreadMessagesCount() + messagesService.getUnreadGroupMessagesCount() }}</ion-badge>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"goToNotifications()\">\n        <ion-icon\n        color=\"primary\"\n        src=\"assets/icons/notifications-outline.svg\"\n          style=\"width: 30px; height: 50px;\"\n        ></ion-icon>\n        <ion-badge\n          *ngIf=\"notificationService.unreadCounter > 0\"\n          class=\"badge\"\n          style=\"right: 10%;\"\n          color=\"green\"\n          >{{ notificationService.unreadCounter }}</ion-badge\n        >\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar>");

/***/ }),

/***/ "./src/pages/messages/components/message/message.component.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/messages/components/message/message.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .title-img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-size: contain !important;\n  background-color: var(--ion-color-light-shade);\n  margin-right: 10px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n:host .clear {\n  clear: both;\n}\n:host .content-wrapper {\n  height: 100%;\n}\n:host .content-wrapper .from-me,\n:host .content-wrapper .from-them {\n  position: relative;\n  border-radius: 1em;\n  margin: 10px 0;\n  overflow: hidden;\n}\n:host .content-wrapper .from-me .image,\n:host .content-wrapper .from-them .image {\n  width: 200px;\n  height: 200px;\n}\n:host .content-wrapper .from-me .image-group,\n:host .content-wrapper .from-them .image-group {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-rows: auto;\n  grid-gap: 0.5rem;\n  padding: 10px 10px 5px;\n  border-top-left-radius: 1em;\n}\n:host .content-wrapper .from-me .image-group .image-group-image,\n:host .content-wrapper .from-them .image-group .image-group-image {\n  height: 100px;\n  width: 100px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 1em;\n}\n:host .content-wrapper .from-me .text,\n:host .content-wrapper .from-them .text {\n  padding: 10px 20px;\n  margin: 0;\n}\n:host .content-wrapper .from-me .text ::ng-deep p,\n:host .content-wrapper .from-them .text ::ng-deep p {\n  margin: 0;\n}\n:host .content-wrapper .from-me .text ::ng-deep a,\n:host .content-wrapper .from-them .text ::ng-deep a {\n  color: var(--ion-color-primary);\n}\n:host .content-wrapper .from-me {\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light-shade);\n  border-top-right-radius: 0px;\n  float: right;\n}\n:host .content-wrapper .from-them {\n  background: var(--ion-color-gradient);\n  border-top-left-radius: 0px;\n  color: var(--ion-color-light);\n  float: left;\n}\n:host ion-footer textarea {\n  padding: 5px 10px;\n  overflow: hidden;\n  height: 40px !important;\n  width: calc(100% - 20px);\n  border: 1px solid var(--ion-color-medium);\n  outline: none;\n  resize: none;\n  margin: 5px 10px 0px;\n  border-radius: 20px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUNBSjtBREVFO0VBQ0UsV0FBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0FDREo7QURHSTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRE47QURHTTs7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0FSO0FER007O0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNBUjtBREVROztFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQ0NWO0FER007O0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQVI7QURHVTs7RUFDRSxTQUFBO0FDQVo7QURHVTs7RUFDRSwrQkFBQTtBQ0FaO0FETUk7RUFDRSw0QkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDSk47QURPSTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNMTjtBRFlJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNFLFlBQUE7QUNWUiIsImZpbGUiOiJzcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC50aXRsZS1pbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgfVxuICAuY2xlYXIge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmZyb20tbWUsXG4gICAgLmZyb20tdGhlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIC5pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIH1cblxuICAgICAgLmltYWdlLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gICAgICAgIGdyaWQtZ2FwOiAwLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCA1cHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFlbTtcblxuICAgICAgICAuaW1hZ2UtZ3JvdXAtaW1hZ2Uge1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5mcm9tLW1lIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG5cbiAgICAuZnJvbS10aGVtIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudCk7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gXG5cbiAgaW9uLWZvb3RlciB7XG4gICAgdGV4dGFyZWEge1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgICBtYXJnaW46IDVweCAxMHB4IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICBcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC50aXRsZS1pbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG46aG9zdCAuY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lLFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIG1hcmdpbjogMTBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAuaW1hZ2UsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0gLmltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAuaW1hZ2UtZ3JvdXAsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0gLmltYWdlLWdyb3VwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIGdyaWQtZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFlbTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUgLmltYWdlLWdyb3VwIC5pbWFnZS1ncm91cC1pbWFnZSxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAuaW1hZ2UtZ3JvdXAgLmltYWdlLWdyb3VwLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAudGV4dCxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAudGV4dCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAudGV4dCA6Om5nLWRlZXAgcCxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAudGV4dCA6Om5nLWRlZXAgcCB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUgLnRleHQgOjpuZy1kZWVwIGEsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0gLnRleHQgOjpuZy1kZWVwIGEge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudCk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuOmhvc3QgaW9uLWZvb3RlciB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBtYXJnaW46IDVweCAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/messages/components/message/message.component.ts":
/*!********************************************************************!*\
  !*** ./src/pages/messages/components/message/message.component.ts ***!
  \********************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");















/**
 * send messages between users. as a user, you can deactivate autoreply in setting page.
 * or remove autoreply method and all calls to it.
 * sending a message updates messages.message property with the latest message.
 * a function in firebase cloud functions checks every message update and sends a push notification to the device
 * check readme for info on cloud functions
 */
var MessageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageComponent, _super);
    // MessagePage
    // This is the page where the user can chat with a friend.
    function MessageComponent(
    // public navCtrl: NavController,
    // public navParams: NavParams,
    injector, route, dataProvider, angularfire, loadingProvider, imageProvider, camera, actionSheet, geolocation, authService, firestore) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.route = route;
        _this.dataProvider = dataProvider;
        _this.angularfire = angularfire;
        _this.loadingProvider = loadingProvider;
        _this.imageProvider = imageProvider;
        _this.camera = camera;
        _this.actionSheet = actionSheet;
        _this.geolocation = geolocation;
        _this.authService = authService;
        _this.firestore = firestore;
        _this.startIndex = -1;
        // Set number of messages to show.
        _this.numberOfMessages = 10;
        _this.route.paramMap.subscribe(function (params) {
            _this.userId = params.get("id");
        });
        return _this;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, that;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loggedInUserId = firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        // Get friend details.
                        this.dataProvider.getUser(this.userId).subscribe(function (user) {
                            _this.title = user.displayName;
                        });
                        // Get conversationInfo with friend.
                        this.firestore.doc$('users/' + this.loggedInUserId + '/conversations/' + this.userId).subscribe(function (conversation) {
                            if (conversation) {
                                // User already have conversation with this friend, get conversation
                                _this.conversationId = conversation.conversationId;
                                // Get conversation
                                _this.dataProvider.getConversationMessages(_this.conversationId).subscribe(function (messagesRes) {
                                    var messages = messagesRes;
                                    if (messages == null)
                                        messages = [];
                                    if (_this.messages) {
                                        // Just append newly added messages to the bottom of the view.
                                        if (messages.length > _this.messages.length) {
                                            var message_1 = messages[messages.length - 1];
                                            _this.dataProvider.getUser(message_1.sender).subscribe(function (user) {
                                                message_1.avatar = user.photoURL;
                                            });
                                            _this.messages.push(message_1);
                                            _this.messagesToShow.push(message_1);
                                        }
                                    }
                                    else {
                                        // Get all messages, this will be used as reference object for messagesToShow.
                                        _this.messages = [];
                                        messages.forEach(function (message) {
                                            _this.dataProvider.getUser(message.sender).subscribe(function (user) {
                                                message.avatar = user.photoURL;
                                            });
                                            _this.messages.push(message);
                                        });
                                        // Load messages in relation to numOfMessages.
                                        if (_this.startIndex == -1) {
                                            // Get initial index for numberOfMessages to show.
                                            if ((_this.messages.length - _this.numberOfMessages) > 0) {
                                                _this.startIndex = _this.messages.length - _this.numberOfMessages;
                                            }
                                            else {
                                                _this.startIndex = 0;
                                            }
                                        }
                                        if (!_this.messagesToShow) {
                                            _this.messagesToShow = [];
                                        }
                                        // Set messagesToShow
                                        for (var i = _this.startIndex; i < _this.messages.length; i++) {
                                            _this.messagesToShow.push(_this.messages[i]);
                                        }
                                        _this.loadingProvider.presentProcessingLoading();
                                    }
                                });
                            }
                        });
                        that = this;
                        if (!that.updateDateTime) {
                            that.updateDateTime = setInterval(function () {
                                if (that.messages) {
                                    that.messages.forEach(function (message) {
                                        var date = message.date;
                                        message.date = new Date(date);
                                    });
                                }
                            }, 60000);
                        }
                        setTimeout(function () { return _this.scrollBottom(); }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    // Load previous messages in relation to numberOfMessages.
    MessageComponent.prototype.loadPreviousMessages = function () {
        var that = this;
        // Show loading.
        this.loadingProvider.presentProcessingLoading();
        setTimeout(function () {
            // Set startIndex to load more messages.
            if ((that.startIndex - that.numberOfMessages) > -1) {
                that.startIndex -= that.numberOfMessages;
            }
            else {
                that.startIndex = 0;
            }
            // Refresh our messages list.
            that.messages = null;
            that.messagesToShow = null;
            that.scrollTop();
            // Populate list again.
            that.ionViewDidEnter();
        }, 1000);
    };
    // Update messagesRead when user lefts this page.
    MessageComponent.prototype.ionViewWillLeave = function () {
        this.setMessagesRead();
    };
    // Check if currentPage is active, then update user's messagesRead.
    MessageComponent.prototype.setMessagesRead = function () {
        var _this = this;
        this.firestore.col$('conversations/' + this.conversationId + '/messages').subscribe(function (snap) {
            if (snap != null) {
                _this.firestore.update('users/' + _this.loggedInUserId + '/conversations/' + _this.userId, { messagesRead: snap.length });
            }
        });
    };
    MessageComponent.prototype.scrollBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.contentArea.scrollToBottom) {
                _this.contentArea.scrollToBottom();
            }
        }, 500);
        this.setMessagesRead();
    };
    MessageComponent.prototype.scrollTop = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.contentArea.scrollToTop) {
                _this.contentArea.scrollToTop();
            }
        }, 500);
    };
    // Check if the user is the sender of the message.
    MessageComponent.prototype.isSender = function (message) {
        if (message.sender == this.loggedInUserId) {
            return true;
        }
        else {
            return false;
        }
    };
    // Send message, if there's no conversation yet, create a new conversation.
    MessageComponent.prototype.send = function (type) {
        var _this = this;
        if (this.message) {
            // User entered a text on messagebox
            if (this.conversationId) {
                var messages_1 = JSON.parse(JSON.stringify(this.messages));
                messages_1.push({
                    date: new Date().toString(),
                    sender: this.loggedInUserId,
                    type: type,
                    message: this.message
                });
                // Update conversation on database.
                this.firestore.update('conversations/' + this.conversationId, {
                    messages: messages_1
                });
                // Clear messagebox.
                this.message = '';
                this.scrollBottom();
            }
            else {
                // New Conversation with friend.
                var messages = [];
                messages.push({
                    date: new Date().toString(),
                    sender: this.loggedInUserId,
                    type: type,
                    message: this.message
                });
                var users = [];
                users.push(this.loggedInUserId);
                users.push(this.userId);
                // Add conversation.
                var cid_1 = this.firestore.createId();
                this.firestore.set('conversations/' + cid_1, {
                    dateCreated: new Date().toString(),
                    messages: messages,
                    users: users
                }).then(function (success) {
                    var conversationId = cid_1;
                    _this.message = '';
                    // Add conversation reference to the users.
                    _this.firestore.update('users/' + _this.loggedInUserId + '/conversations/' + _this.userId, {
                        conversationId: conversationId,
                        messagesRead: 1
                    });
                    _this.firestore.update('users/' + _this.userId + '/conversations/' + _this.loggedInUserId, {
                        conversationId: conversationId,
                        messagesRead: 0
                    });
                });
                this.scrollBottom();
            }
        }
    };
    MessageComponent.prototype.viewUser = function (userId) {
        this.router.navigateByUrl('userinfo/' + userId);
    };
    MessageComponent.prototype.attach = function () {
        var _this = this;
        this.actionSheet.create({
            header: 'Choose attachments',
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        _this.imageProvider.uploadPhotoMessage(_this.conversationId, _this.camera.PictureSourceType.CAMERA).then(function (url) {
                            _this.message = url;
                            _this.send("image");
                        });
                    }
                }, {
                    text: 'Photo Library',
                    handler: function () {
                        _this.imageProvider.uploadPhotoMessage(_this.conversationId, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                            _this.message = url;
                            _this.send("image");
                        });
                    }
                },
                {
                    text: 'Video',
                    handler: function () {
                        _this.imageProvider.uploadVideoMessage(_this.conversationId).then(function (url) {
                            _this.message = url;
                            _this.send("video");
                        });
                    }
                },
                {
                    text: 'Location',
                    handler: function () {
                        _this.geolocation.getCurrentPosition({
                            timeout: 5000
                        }).then(function (res) {
                            var locationMessage = "Location:<br> lat:" + res.coords.latitude + "<br> lng:" + res.coords.longitude;
                            var mapUrl = "<a href='https://www.google.com/maps/search/" + res.coords.latitude + "," + res.coords.longitude + "'>View on Map</a>";
                            var confirm = _this.alertCtrl.create({
                                header: 'Your Location',
                                message: locationMessage,
                                buttons: [{
                                        text: 'cancel',
                                        handler: function () {
                                            console.log("canceled");
                                        }
                                    }, {
                                        text: 'Share',
                                        handler: function () {
                                            _this.message = locationMessage + "<br>" + mapUrl;
                                            _this.send("location");
                                        }
                                    }]
                            }).then(function (r) { return r.present(); });
                        }, function (locationErr) {
                            console.log("Location Error" + JSON.stringify(locationErr));
                        });
                    }
                }, {
                    text: 'cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancelled");
                    }
                }]
        }).then(function (r) { return r.present(); });
    };
    // Enlarge image messages.
    MessageComponent.prototype.enlargeImage = function (img) {
        // this.modalCtrl.create({
        //   component: ImagemodalPage,
        //   componentProps: {
        //     img: img
        //   }
        // }).then(res => res.present())
    };
    MessageComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
        { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] },
        { type: src_app_services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_14__["FirestoreService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], MessageComponent.prototype, "contentArea", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-message",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/messages/components/message/message.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.scss */ "./src/pages/messages/components/message/message.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
            src_app_services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_14__["FirestoreService"]])
    ], MessageComponent);
    return MessageComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_12__["Extender"]));



/***/ }),

/***/ "./src/pages/messages/components/messages/messages.component.scss":
/*!************************************************************************!*\
  !*** ./src/pages/messages/components/messages/messages.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content .content-wrapper .content-scroll {\n  padding: 0 20px;\n}\n:host ion-content .content-wrapper .content-scroll .messages {\n  display: flex;\n  align-items: center;\n  margin: 20px 0;\n}\n:host ion-content .content-wrapper .content-scroll .messages .image {\n  height: 60px;\n  width: 60px;\n  border-radius: 3px;\n  box-shadow: 1px 1px 12px var(--ion-color-light-shade);\n}\n:host ion-content .content-wrapper .content-scroll .messages .detail {\n  margin-left: 15px;\n  flex: 1;\n}\n:host ion-content .content-wrapper .content-scroll .messages .detail .name {\n  font-weight: 500;\n  font-size: 16px;\n}\n:host ion-content .content-wrapper .content-scroll .messages .detail .msg {\n  font-size: 14px;\n  color: var(--ion-color-medium-shade);\n  white-space: nowrap;\n  width: 150px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .content-scroll .messages .date {\n  width: 63px;\n  display: flex;\n  flex-direction: column;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  overflow: hidden;\n  white-space: nowrap;\n}\n:host ion-content .content-wrapper .content-scroll .messages .action {\n  margin-right: 15px;\n}\n:host ion-footer .buttons {\n  margin: 5px 0 5px 15px;\n  display: flex;\n  align-items: center;\n}\n:host ion-footer .buttons ion-button {\n  width: 100%;\n}\n:host ion-footer .buttons ion-button.right {\n  float: right;\n}\n.ion-float-right {\n  Padding-right: 15px;\n}\n@media (min-width: 829px) {\n  img#hide {\n    display: none;\n  }\n}\n.writer {\n  position: fixed;\n  Top: 55px;\n  right: -8px;\n  z-index: 999;\n}\n.options {\n  margin-right: 110px;\n}\n.tool {\n  box-shadow: 0px 0.2px 0px #a8a8a8 !important;\n}\n.badgemsg {\n  width: 20px;\n  height: 17px;\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n  font-size: 10px;\n  z-index: 999;\n}\n.badge {\n  width: 20px;\n  height: 17px;\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n  font-size: 10px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9tZXNzYWdlcy9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UsZUFBQTtBQ0ZSO0FESVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRlY7QURJVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtBQ0ZaO0FES1U7RUFDRSxpQkFBQTtFQUNBLE9BQUE7QUNIWjtBREtZO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDSGQ7QURNWTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNKZDtBRFFVO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOWjtBRFFVO0VBQ0Usa0JBQUE7QUNOWjtBRGFJO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNYTjtBRFlNO0VBQ0UsV0FBQTtBQ1ZSO0FEV1E7RUFDRSxZQUFBO0FDVFY7QURnQkE7RUFDQSxtQkFBQTtBQ2JBO0FEZ0JBO0VBQ0U7SUFDRSxhQUFBO0VDYkY7QUFDRjtBRGdCQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNkSjtBRGlCQTtFQUNBLG1CQUFBO0FDZEE7QURrQkE7RUFDRSw0Q0FBQTtBQ2ZGO0FEa0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNmRjtBRG1CQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDaEJGIiwiZmlsZSI6InNyYy9wYWdlcy9tZXNzYWdlcy9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAuY29udGVudC1zY3JvbGwge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgICAgICAgLm1lc3NhZ2VzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG5cbiAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGV0YWlsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tc2cge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICB3aWR0aDogNjNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tZm9vdGVyIHtcbiAgICAuYnV0dG9ucyB7XG4gICAgICBtYXJnaW46IDVweCAwIDVweCAxNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICYucmlnaHQge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaW9uLWZsb2F0LXJpZ2h0e1xuUGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ODI5cHgpIHtcbiAgaW1nI2hpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLndyaXRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIFRvcDogNTVweDtcbiAgICByaWdodDogLThweDtcbiAgICB6LWluZGV4OiA5OTk7IFxufVxuXG4ub3B0aW9uc3tcbm1hcmdpbi1yaWdodDogMTEwcHg7XG5cbn1cblxuLnRvb2wge1xuICBib3gtc2hhZG93OiAwcHggMC4ycHggMHB4ICNhOGE4YTghaW1wb3J0YW50O1xufVxuXG4uYmFkZ2Vtc2cge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cblxuLmJhZGdlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgei1pbmRleDogOTk5O1xufSIsIjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY29udGVudC1zY3JvbGwgLm1lc3NhZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubWVzc2FnZXMgLmltYWdlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5tZXNzYWdlcyAuZGV0YWlsIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubWVzc2FnZXMgLmRldGFpbCAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5tZXNzYWdlcyAuZGV0YWlsIC5tc2cge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDE1MHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5tZXNzYWdlcyAuZGF0ZSB7XG4gIHdpZHRoOiA2M3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5tZXNzYWdlcyAuYWN0aW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuOmhvc3QgaW9uLWZvb3RlciAuYnV0dG9ucyB7XG4gIG1hcmdpbjogNXB4IDAgNXB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBpb24tZm9vdGVyIC5idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IGlvbi1mb290ZXIgLmJ1dHRvbnMgaW9uLWJ1dHRvbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmlvbi1mbG9hdC1yaWdodCB7XG4gIFBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MjlweCkge1xuICBpbWcjaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLndyaXRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgVG9wOiA1NXB4O1xuICByaWdodDogLThweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ub3B0aW9ucyB7XG4gIG1hcmdpbi1yaWdodDogMTEwcHg7XG59XG5cbi50b29sIHtcbiAgYm94LXNoYWRvdzogMHB4IDAuMnB4IDBweCAjYThhOGE4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZW1zZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmJhZGdlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgei1pbmRleDogOTk5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/messages/components/messages/messages.component.ts":
/*!**********************************************************************!*\
  !*** ./src/pages/messages/components/messages/messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_app_notifications_service_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/notifications/service/notification.service */ "./src/app/notifications/service/notification.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_pages_feed_components_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/pages/feed/components/feed-add/feed-add.component */ "./src/pages/feed/components/feed-add/feed-add.component.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/messages.service */ "./src/app/services/messages.service.ts");












/**
 * view users messages, manage messages.
 */
var MessagesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessagesComponent, _super);
    function MessagesComponent(injector, loadingProvider, dataProvider, authService, notificationService, menuCtrl, navCtrl, firestore, messagesService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.loadingProvider = loadingProvider;
        _this.dataProvider = dataProvider;
        _this.authService = authService;
        _this.notificationService = notificationService;
        _this.menuCtrl = menuCtrl;
        _this.navCtrl = navCtrl;
        _this.firestore = firestore;
        _this.messagesService = messagesService;
        _this.tab = "chat";
        _this.searchFriend = '';
        _this.unreadMessagesCount = 0;
        _this.unreadGroupMessagesCount = 0;
        _this.conversationsInfo = [];
        _this.groupsInfo = [];
        return _this;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.searchGroup = '';
        this.messagesService.initGroups();
        // Get groups
    };
    MessagesComponent.prototype.segmentChanged = function (event) {
    };
    // Open Group Chat.
    MessagesComponent.prototype.viewGroup = function (groupId) {
        this.navCtrl.navigateForward('group', {
            queryParams: {
                groupId: groupId
            }
        });
    };
    // Return class based if group has unreadMessages or not.
    MessagesComponent.prototype.hasGroupUnreadMessages = function (group) {
        if (group.unreadMessagesCount > 0) {
            return 'group bold';
        }
        else
            return 'group';
    };
    MessagesComponent.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.messagesService.initConversation();
                return [2 /*return*/];
            });
        });
    };
    // Add or update conversation for real-time sync based on our observer, sort by active date.
    // Open chat with friend.
    MessagesComponent.prototype.message = function (userId) {
        this.navCtrl.navigateForward('message', {
            queryParams: {
                id: userId
            }
        });
        // this.app.getRootNav().push(MessagePage, { userId: userId });
    };
    // Return class based if conversation has unreadMessages or not.
    MessagesComponent.prototype.hasUnreadMessages = function (conversation) {
        if (conversation.unreadMessagesCount > 0) {
            return 'bold';
        }
        else
            return '';
    };
    MessagesComponent.prototype.openMenu = function () {
        this.menuCtrl.enable(true, "first");
        this.menuCtrl.toggle("first");
    };
    MessagesComponent.prototype.goToMessages = function () {
        this.goto(this.routes.messages);
    };
    MessagesComponent.prototype.goToNotifications = function () {
        this.goto(this.routes.notifications);
    };
    /** open add post modal, add to array of feed after completed */
    MessagesComponent.prototype.addPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(src_pages_feed_components_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_9__["FeedAddComponent"], null, "custom-modal")];
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
    MessagesComponent.prototype.doRefreshTop = function (event) {
        console.log("call in dorefresh", event);
        // this.loadPosts(event);
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
    MessagesComponent.prototype.createGroup = function () {
        this.navCtrl.navigateForward('newgroup');
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_notifications_service_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__["FirestoreService"] },
        { type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_11__["MessagesService"] }
    ]; };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-messages",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/messages/components/messages/messages.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.scss */ "./src/pages/messages/components/messages/messages.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_notifications_service_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__["FirestoreService"],
            src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_11__["MessagesService"]])
    ], MessagesComponent);
    return MessagesComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_8__["Extender"]));



/***/ }),

/***/ "./src/pages/messages/messages.module.ts":
/*!***********************************************!*\
  !*** ./src/pages/messages/messages.module.ts ***!
  \***********************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/message/message.component */ "./src/pages/messages/components/message/message.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/pages/messages/components/messages/messages.component.ts");







var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"]],
            entryComponents: [_components_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"]
                    },
                    {
                        path: ':id',
                        component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"]
                    }
                ])
            ]
        })
    ], MessagesModule);
    return MessagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-messages-messages-module.js.map