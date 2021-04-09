(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group/group.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group/group.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"messages\">\n        <ion-icon  style=\"color: #351010; font-size: 26px; margin-left: 0px;\"\n      icon=\"../../../../assets/icons/chevron-back.svg\" ></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" style=\"--background: transparent;--padding-start: 0px;\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"avatar\" onError=\"this.src='./assets/images/default-group.png'\" alt=\"\">\n      </ion-avatar>\n      <ion-label>\n        <h5 class=\"usertitle\">{{title}}</h5>\n      </ion-label>\n    </ion-item>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"groupInfo()\">\n        <ion-icon name=\"md-list\"></ion-icon> \n      </ion-button>\n      <img\n      id=\"hide\"\n      alt=\"appicon\"\n      height=\"22\"\n      class=\"ion-float-right\"\n      src=\"assets/images/logo1.png\"\n    />\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"messages\" #content>\n    <p class=\"center\" *ngIf=\"startIndex > 0\"><span tappable (click)=\"loadPreviousMessages()\">Load previous\n        messages</span></p>\n    <div *ngFor=\"let message of messagesToShow; let i = index;\">\n      <!--  System Message -->\n      <div *ngIf=\"isSystemMessage(message)\" class=\"chatbox right system\" style=\"background: transparent !important;\">\n        <p class=\"system-message\">\n          <ion-icon name=\"{{message.icon}}\"></ion-icon>\n          {{message.message}} {{message.date | DateFormat}}\n        </p>\n      </div>\n\n\n      <ion-item-sliding *ngIf=\"isSender(message) && !isSystemMessage(message)\" id=\"slidingItem{{message.id}}\" (ionDrag)=\"drag($event, message)\">\n        <ion-item-options side=\"start\">\n          <ion-item-option style=\"display: none;\">Reply</ion-item-option>\n        </ion-item-options>\n\n        <div *ngIf=\"isSender(message) && !isSystemMessage(message)\" class=\"right\">\n\n          <ion-item *ngIf=\"isSender(message) && !isSystemMessage(message)\" lines=\"none\" style=\"--padding-start: 12px;\">\n            <ion-list>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <div class=\"msg-header\" *ngIf=\"message.sender != currentUser.uid\">\n                    <img *ngIf=\"!message.avatar\" src=\"../../../assets/images/default-group.png\" alt=\"\">\n                    <img (click)=\"viewUser(message.sender)\" *ngIf=\"message.avatar\" [src]=\"message.avatar\" alt=\"\">\n                    <h6 class=\"msg-name\" (click)=\"viewUser(message.sender)\">{{message.displayName ?  message.displayName : 'User Deleted'}}</h6>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <div class=\"reply-view-header\" *ngIf=\"message.replyToMessage\" (click)=\"scrollTo('slidingItem' + getRepliedMessage(message.replyTo).id)\">\n                    <h5>{{getRepliedMessage(message.replyTo).displayName}}</h5>\n                    <p *ngIf=\"message.replyToMessageType === 'text'\" [innerHTML]=\"getMessage(message.replyToMessage)\"></p>\n                    <p *ngIf=\"message.replyToMessageType === 'location'\">Location Shared</p>\n                    <img *ngIf=\"message.replyToMessageType === 'image'\" [src]=\"message.replyToMessage\" alt=\"\">\n                    <video id=\"video-post\" *ngIf=\"message.replyToMessageType === 'video'\">\n                      <source src=\"{{message.replyToMessage}}\" type=\"video/mp4\">\n                    </video>\n                  </div>\n                  <div *ngIf=\"message.type == 'text'\">\n                    <p  style=\"margin:0; float: left; text-align: left; padding-left: 5px; padding-right: 5px; padding-bottom: 5px;\" [innerHTML]=\"getMessage(message.message)\"></p>\n                  </div>\n                  <div *ngIf=\"message.type == 'location'\" (click)=\"openMsgOption(messag.id, i)\" [innerHtml]=\"message.message\"></div>\n                  <div *ngIf=\"message.type == 'image'\">\n                    <img tappable (click)=\"enlargeImage(message.url)\" src=\"{{message.url}}\" \n                      onError=\"this.src='./assets/images/default-dp.png'\"/>\n                  </div>\n                  <div (click)=\"openMsgOption(message.id, i)\"></div>\n                  <div *ngIf=\"message.type == 'video'\">\n                    <video auto controls width=\"100%\">\n                      <source src=\"{{message.url}}\" type=\"video/mp4\">\n                    </video>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\" class=\"ion-no-padding ion-no-margin\">\n                  <div class=\"msg-footer\">\n                    <span style=\"font-size: 11px;\">{{message.date | DateFormat}}</span>\n                    <ion-icon style=\"margin-top: 5px; margin-left: 5px; float: left; text-align: left;\" name=\"md-more\" (click)=\"openMsgOption(message.id, i)\"></ion-icon>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-item>\n        </div>\n      </ion-item-sliding>\n\n      <!--  Message -->\n\n      <ion-item-sliding *ngIf=\"!isSender(message) && !isSystemMessage(message)\" id=\"slidingItem{{message.id}}\" (ionDrag)=\"drag($event, message)\">\n        <ion-item-options side=\"start\">\n          <ion-item-option style=\"display: none;\">Reply</ion-item-option>\n        </ion-item-options>\n\n        <div *ngIf=\"!isSender(message) && !isSystemMessage(message)\" class=\"chatbox left\">\n\n          <ion-item *ngIf=\"!isSender(message) && !isSystemMessage(message)\" class=\"rec-item\" lines=\"none\">\n            <ion-list>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <div class=\"msg-header\" *ngIf=\"message.sender != currentUser.uid\">\n                    <img *ngIf=\"!message.avatar\" src=\"../../../assets/images/default-group.png\" alt=\"\">\n                    <img (click)=\"viewUser(message.sender)\" *ngIf=\"message.avatar\" [src]=\"message.avatar\" alt=\"\">\n                    <h6 class=\"msg-name\" (click)=\"viewUser(message.sender)\">{{message.displayName ?  message.displayName : 'User Deleted'}}</h6>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <div class=\"reply-view-header\" *ngIf=\"message.replyToMessage\" (click)=\"scrollTo('slidingItem' + getRepliedMessage(message.replyTo).id)\">\n                    <h5>{{getRepliedMessage(message.replyTo).displayName}}</h5>\n                    <p *ngIf=\"message.replyToMessageType === 'text'\" [innerHTML]=\"getMessage(message.replyToMessage)\"></p>\n                    <p *ngIf=\"message.replyToMessageType === 'location'\">Location Shared</p>\n                    <img *ngIf=\"message.replyToMessageType === 'image'\" [src]=\"message.replyToMessage\" alt=\"\">\n                    <video id=\"video-post\" *ngIf=\"message.replyToMessageType === 'video'\">\n                      <source src=\"{{message.replyToMessage}}\" type=\"video/mp4\">\n                    </video>\n                  </div>\n                  <div *ngIf=\"message.type == 'text'\">\n                    <p  style=\"margin:0; float: left; text-align: left; padding-left: 5px; padding-right: 5px; padding-bottom: 5px;\" [innerHTML]=\"getMessage(message.message)\"></p>\n                  </div>\n                  <div *ngIf=\"message.type == 'location'\" (click)=\"openMsgOption(messag.id, i)\" [innerHtml]=\"message.message\"></div>\n                  <div *ngIf=\"message.type == 'image'\">\n                    <img tappable (click)=\"enlargeImage(message.url)\" src=\"{{message.url}}\" \n                      onError=\"this.src='./assets/images/default-dp.png'\"/>\n                  </div>\n                  <div (click)=\"openMsgOption(message.id, i)\"></div>\n                  <div *ngIf=\"message.type == 'video'\">\n                    <video auto controls width=\"100%\">\n                      <source src=\"{{message.url}}\" type=\"video/mp4\">\n                    </video>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\" class=\"ion-no-padding ion-no-margin\">\n                  <div class=\"msg-footer\">\n                    <span>{{message.date | DateFormat}}</span>\n                    <!-- <ion-icon style=\"margin-top: 5px; margin-left: 5px; float: left; text-align: left;\" name=\"md-more\" (click)=\"openMsgOption(message.id, i)\"></ion-icon> -->\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-item>\n        </div>\n      </ion-item-sliding>\n      \n\n      <!-- <div *ngIf=\"!isSender(message) && !isSystemMessage(message)\" class=\"chatbox left\" style=\"padding: 10px 10px 5px 10px; border-radius: 10px; border: 0.5px solid rgb(185, 185, 185); box-shadow: 1px 1px 4px var(--ion-color-light-shade);\">\n        <div class=\"msg-header\">\n          <img *ngIf=\"!message.avatar\" src=\"../../../assets/images/default-group.png\" (click)=\"viewUser(message.sender)\" alt=\"\" tappable (load)=\"scrollBottom()\">\n          <div>  <img (click)=\"viewUser(message.sender)\" *ngIf=\"message.avatar\" [src]=\"message.avatar\" alt=\"\" tappable (load)=\"scrollBottom()\"></div>\n          <h6 class=\"msg-name\" (click)=\"viewUser(message.sender)\">{{message.displayName ?  message.displayName : 'User Deleted'}}</h6>\n        </div>\n        <div *ngIf=\"message.type == 'text'\">\n          <p [innerHTML]=\"getMessage(message.message)\"></p>\n          <div class=\"msg-footer\">\n            <br>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n      </div>\n      \n  \n  \n\n        <div class=\"bottom\" *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\n        <div *ngIf=\"message.type == 'image'\">\n          <img tappable (click)=\"enlargeImage(message.url)\" src=\"{{message.url}}\"\n            onError=\"this.src='./assets/images/default-dp.png'\" (load)=\"scrollBottom()\" />\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div *ngIf=\"message.type == 'video'\">\n          <video controls width=\"100%\" #videoPlayer>\n            <source src=\"{{message.url}}\" type=\"video/mp4\">\n          </video>\n        </div>\n      </div> -->\n\n    </div>\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button class=\"colr\" color=\"light\"  (click)=\"loadPreviousMessages()\">\n      <ion-icon class=\"colr\"  name=\"ios-arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n</ion-content>\n<!-- Message Box -->\n\n\n\n<ion-footer>\n  <ion-toolbar style=\"--background: #eeeeee7d;padding-top: 5px;\">\n    \n    <ion-item lines=\"none\" style=\"--background: #f7f7f7;\" *ngIf=\"replyMessage.message\">\n      <ion-label class=\"reply\">\n        <h6>{{replyMessage.displayName}}</h6>\n        <p *ngIf=\"replyMessage.type === 'text'\">{{replyMessage.message}}</p>\n        <p *ngIf=\"replyMessage.type === 'location'\">Location Shared</p>\n        <img *ngIf=\"replyMessage.type === 'image'\" [src]=\"replyMessage.message\" class=\"reply-img\">\n        <video id=\"video-post\" *ngIf=\"replyMessage.type === 'video'\" class=\"reply-img\">\n          <source src=\"{{replyMessage.message}}\" type=\"video/mp4\">\n        </video>\n      </ion-label>\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"replyMessage.message = null;replyMessage.id = null;\"></ion-icon>\n    </ion-item>\n\n    <ion-button slot=\"start\" fill=\"clear\" (click)=\"attach()\">\n      <ion-icon src=\"../../../assets/icons/attach.svg\"></ion-icon>\n    </ion-button>\n\n    <textarea class=\"grow\"\n    autosize\n    maxrow=\"4\"\n    useImportant=\"true\"\n    [(ngModel)]=\"message\"\n    #myInput\n    placeholder=\"{{ 'feed-comment-component.placeholder' | translate }}\"\n    ></textarea>\n    \n        <ion-buttons slot=\"end\">\n            <ion-button class=\"circle\" fill=\"clear\" color=\"primary\" (click)=\"send('text')\" [disabled]=\"!message\">\n                <ion-icon src=\"assets/icons/send.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n\n</ion-footer>\n<input\n  hidden\n  #fileInputButton\n  type=\"file\"\n  (change)=\"detectFiles($event)\"\n  multiple\n/>\n<input hidden #videoInputButton type=\"file\" (change)=\"detectVideo($event)\" />");

/***/ }),

/***/ "./src/app/pages/group/group.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/group/group.module.ts ***!
  \*********************************************/
/*! exports provided: GroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPageModule", function() { return GroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group.page */ "./src/app/pages/group/group.page.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]
    }
];
var GroupPageModule = /** @class */ (function () {
    function GroupPageModule() {
    }
    GroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]],
            entryComponents: []
        })
    ], GroupPageModule);
    return GroupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/group/group.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/group/group.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".system-msg {\n  text-align: center;\n  color: #ccc;\n  font-size: 14px;\n}\n\nion-footer .grow {\n  padding: 5px 10px;\n  overflow: hidden;\n  height: 35px !important;\n  width: calc(100% - 20px);\n  border: 0.1px solid lightgray;\n  outline: none;\n  resize: none;\n  margin: 5px 10px 0px;\n  border-radius: 20px;\n}\n\n.center {\n  border-bottom: 0px solid lightgray;\n}\n\n.tool {\n  box-shadow: 0px 0.2px 0px #c0c0c0 !important;\n}\n\n.msg-footer {\n  text-align: right;\n  padding-bottom: 2px;\n  padding-right: 2px;\n  border-top: 0px solid lightgray;\n}\n\n.msg-header {\n  text-align: left;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 14px;\n}\n\n.msg-header img {\n  width: 30px;\n  height: 30px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  float: left;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.msg-header .msg-name {\n  margin: 0;\n  display: inline;\n  font-weight: 600;\n  position: relative;\n  top: 2px;\n  font-size: 13px;\n}\n\n.system {\n  width: 100% !important;\n  text-align: center !important;\n  font-size: 12px !important;\n  color: gray !important;\n  max-width: 100% !important;\n  margin: 0 !important;\n  border: 0 !important;\n}\n\n.chatbox.left {\n  color: black;\n  margin-bottom: 10px;\n}\n\n.chatbox.left p {\n  color: black;\n  font-size: 15px;\n  margin: 0;\n  white-space: break-spaces;\n}\n\nion-label {\n  background-color: white;\n  margin: 0px;\n}\n\n.chatbox.right {\n  background: #c0d9ff98;\n  color: black;\n}\n\nion-content {\n  --ion-background-color:#ebebeb;\n}\n\n.ion-float-right {\n  margin-right: 15px;\n}\n\np {\n  border-bottom: 0px solid lightgray;\n}\n\n.colr {\n  margin-left: -4px;\n  margin-bottom: -3px;\n  font-size: 20px;\n  --box-shadow:none;\n  outline: none;\n}\n\n.ion-color-light {\n  --ion-color-base: #f4f5f800 !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: #000 !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.usertitle {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.system-message {\n  background: whitesmoke;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: 0 auto;\n  padding: 5px;\n  border-radius: 20px;\n  color: gray;\n  font-size: 12px;\n}\n\n.reply {\n  border-left: 2px solid orangered;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.reply-view-header {\n  background: #3880ff30;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: left;\n  border-left: 2px solid blue;\n  margin-bottom: 7px;\n}\n\n.reply-view-header h5 {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.reply-view-header p {\n  font-size: 13px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin: 0;\n  margin-top: 3px;\n}\n\n.reply-view-header img {\n  width: 30px;\n  height: 30px;\n  margin-top: 9px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.reply-view-header video {\n  width: 30px;\n  height: 30px;\n  margin-top: 9px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-item {\n  --background: #c0d9ff98;\n  border-radius: 10px;\n}\n\n.blur {\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  /* IE 10+, Fx 29+ */\n}\n\n@-webkit-keyframes blink {\n  0%, 49% {\n    background-color: #ddd;\n  }\n  50%, 100% {\n    background-color: transparent;\n  }\n}\n\n@keyframes blink {\n  0%, 49% {\n    background-color: #ddd;\n  }\n  50%, 100% {\n    background-color: transparent;\n  }\n}\n\n.right {\n  margin-right: 5px !important;\n  max-width: 70%;\n  margin-bottom: 10px;\n}\n\nion-list {\n  --background: transparent;\n  background: transparent;\n  width: 100%;\n}\n\n.chatbox {\n  min-width: 0px !important;\n  margin: 0px !important;\n  padding-left: 10px;\n  padding-top: 7px;\n  padding-bottom: 8px;\n}\n\n.rec-item {\n  --background: white !important;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n}\n\n.reply-img {\n  width: 30px;\n  height: 30px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL3BhZ2VzL2dyb3VwL2dyb3VwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3JvdXAvZ3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREtJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0ZOOztBREtDO0VBQ0csa0NBQUE7QUNGSjs7QURLRTtFQUNFLDRDQUFBO0FDRko7O0FES0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FDSEo7O0FETUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0pSOztBRE1JO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNKUjs7QURRQTtFQUNJLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0QsbUJBQUE7QUNMSDs7QURTSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FDTlI7O0FEVUk7RUFDSSx1QkFBQTtFQUNELFdBQUE7QUNQUDs7QURVSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ1BSOztBRFlRO0VBRUksOEJBQUE7QUNWWjs7QURlSTtFQUNBLGtCQUFBO0FDWko7O0FEaUJJO0VBQ0ksa0NBQUE7QUNkUjs7QURrQkE7RUFHSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ2pCSjs7QURvQkU7RUFDRSxzQ0FBQTtFQUNBLDBFQUFBO0VBQ0EscUNBQUE7RUFDQSxpRkFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUNqQko7O0FEb0JBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDakJKOztBRG9CRTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNqQko7O0FEb0JFO0VBQ0UsZ0NBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDakJOOztBRG9CRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDakJKOztBRGtCSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNoQk47O0FEa0JJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDaEJOOztBRGtCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNoQk47O0FEbUJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ2pCTjs7QURxQkU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FDbEJKOztBRHFCRTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7RUFBc0IsbUJBQUE7QUNqQjFCOztBRG9CRTtFQUNFO0lBQ0Usc0JBQUE7RUNqQko7RURtQkU7SUFDRSw2QkFBQTtFQ2pCSjtBQUNGOztBRFdFO0VBQ0U7SUFDRSxzQkFBQTtFQ2pCSjtFRG1CRTtJQUNFLDZCQUFBO0VDakJKO0FBQ0Y7O0FEb0JFO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNsQko7O0FEcUJFO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNsQko7O0FEcUJFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2xCSjs7QURxQkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDbEJKOztBRHFCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ2xCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwL2dyb3VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnN5c3RlbS1tc2d7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgY29sb3I6I2NjYztcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1mb290ZXIge1xuICAgXG4gICAgLmdyb3cge1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICBib3JkZXI6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JheTsgIFxuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgIG1hcmdpbjogNXB4IDEwcHggMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gIH1cbiAuY2VudGVye1xuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBsaWdodGdyYXk7ICAgIFxuIH0gXG4gIFxuICAudG9vbCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDAuMnB4IDBweCAjYzBjMGMwIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tc2ctZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgbGlnaHRncmF5O1xufVxuXG5cbi5tc2ctaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XG5cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5tc2ctbmFtZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMnB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxufVxuXG4uc3lzdGVtIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jaGF0Ym94LmxlZnQgIHtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuXG4gICAgLmNoYXRib3gubGVmdCBwIHtcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG4gICAgICB9XG5cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICBtYXJnaW46IDBweFxuICAgICAgfVxuXG4gICAgLmNoYXRib3gucmlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYzBkOWZmOTg7XG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgXG5cbiAgICAgICAgaW9uLWNvbnRlbnR7XG5cbiAgICAgICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ViZWJlYjtcbiAgICAgICAgfVxuICAgICAgICBcblxuXG4gICAgLmlvbi1mbG9hdC1yaWdodHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIFxuICAgXG5cbiAgICBwe1xuICAgICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgbGlnaHRncmF5O1xuICAgIH1cbiAgIFxuXG4uY29scntcbiAgXG5cbiAgICBtYXJnaW4tbGVmdDogLTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLmlvbi1jb2xvci1saWdodCB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogI2Y0ZjVmODAwICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwgMjQ1LCAyNDgpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6ICMwMDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCwgI2Y1ZjZmOSkgIWltcG9ydGFudDtcbn1cbiAgXG4udXNlcnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5zeXN0ZW0tbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5yZXBseSB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBvcmFuZ2VyZWQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAucmVwbHktdmlldy1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMzODgwZmYzMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICBoNSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgXG4gICAgdmlkZW8ge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6ICNjMGQ5ZmY5ODtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICAuYmx1ciB7XG4gICAgYW5pbWF0aW9uOiBibGluayAxczsgIC8qIElFIDEwKywgRnggMjkrICovXG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDAlLCA0OSUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICB9XG4gICAgNTAlLCAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIC5yaWdodCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY2hhdGJveCB7XG4gICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIH1cblxuICAucmVjLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICAucmVwbHktaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH0iLCIuc3lzdGVtLW1zZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNjY2M7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWZvb3RlciAuZ3JvdyB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBib3JkZXI6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBtYXJnaW46IDVweCAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNlbnRlciB7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi50b29sIHtcbiAgYm94LXNoYWRvdzogMHB4IDAuMnB4IDBweCAjYzBjMGMwICFpbXBvcnRhbnQ7XG59XG5cbi5tc2ctZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLm1zZy1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5tc2ctaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubXNnLWhlYWRlciAubXNnLW5hbWUge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc3lzdGVtIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4uY2hhdGJveC5sZWZ0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2hhdGJveC5sZWZ0IHAge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuXG5pb24tbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5jaGF0Ym94LnJpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2MwZDlmZjk4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWJlYmViO1xufVxuXG4uaW9uLWZsb2F0LXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5wIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmNvbHIge1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlvbi1jb2xvci1saWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmNGY1ZjgwMCAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LCAyNDUsIDI0OCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6ICMwMDAgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCwgI2Y1ZjZmOSkgIWltcG9ydGFudDtcbn1cblxuLnVzZXJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnN5c3RlbS1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJlcGx5IHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBvcmFuZ2VyZWQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnJlcGx5LXZpZXctaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjMwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4ucmVwbHktdmlldy1oZWFkZXIgaDUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZXBseS12aWV3LWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4ucmVwbHktdmlldy1oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5yZXBseS12aWV3LWhlYWRlciB2aWRlbyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYzBkOWZmOTg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5ibHVyIHtcbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgLyogSUUgMTArLCBGeCAyOSsgKi9cbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDAlLCA0OSUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuLnJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hhdGJveCB7XG4gIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLnJlYy1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG59XG5cbi5yZXBseS1pbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/group/group.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/group/group.page.ts ***!
  \*******************************************/
/*! exports provided: GroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPage", function() { return GroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_app_components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/image-modal/image-modal.component */ "./src/app/components/image-modal/image-modal.component.ts");















var GroupPage = /** @class */ (function () {
    // GroupPage
    // This is the page where the user can chat with other group members and view group info.
    function GroupPage(dataProvider, modalCtrl, angularfire, alertCtrl, imageProvider, loadingProvider, camera, actionSheet, geolocation, route, navCtrl, firestore, commonService, authService) {
        var _this = this;
        this.dataProvider = dataProvider;
        this.modalCtrl = modalCtrl;
        this.angularfire = angularfire;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.actionSheet = actionSheet;
        this.geolocation = geolocation;
        this.route = route;
        this.navCtrl = navCtrl;
        this.firestore = firestore;
        this.commonService = commonService;
        this.authService = authService;
        this.startIndex = -1;
        // Set number of messages to show.
        this.numberOfMessages = 10;
        this.replyMessage = {
            id: null,
            message: null,
            displayName: null,
            type: null
        };
        this.isSingleMessage = 0;
        this.route.queryParamMap.subscribe(function (params) {
            _this.groupId = params.get('groupId');
        });
    }
    GroupPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        setTimeout(function () {
                            _this.scrollBottom();
                        }, 5000);
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, that;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Get group details
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        // Get group details
                        _a.currentUser = _b.sent();
                        this.subscription = this.dataProvider.getGroup(this.groupId).subscribe(function (group) {
                            if (group) {
                                _this.title = group.name;
                                _this.avatar = group.img;
                                // Get group messages
                                _this.firestore.docOnce$("users/" + _this.currentUser.uid + "/groups/" + group.id).subscribe(function (resp) {
                                    _this.firestore.col$('groups/' + group.id + '/messages', function (ref) { return ref.orderBy('createdAt', 'desc').limit(1); }).subscribe(function (resp) {
                                        if (_this.isSingleMessage >= 1) {
                                            console.log('recent message', resp);
                                            var index = _this.messages.findIndex(function (item) { return item.id === resp[0].id; });
                                            console.log('index', index);
                                            if (index === -1) {
                                                // this.messages.push(resp[0]);
                                                _this.displayMessages(resp);
                                            }
                                        }
                                    });
                                    _this.dataProvider.getGroupMessages(group.id, resp.createdAt).subscribe(function (messagesRes) {
                                        var messages = messagesRes;
                                        _this.displayMessages(messages);
                                        if (_this.isSingleMessage === 0)
                                            _this.isSingleMessage = 1;
                                    });
                                });
                            }
                        });
                        that = this;
                        if (!that.updateDateTime) {
                            that.updateDateTime = setInterval(function () {
                                if (that.messages) {
                                    that.messages.forEach(function (message) {
                                        message.date = new Date(message.date);
                                    });
                                }
                            }, 60000);
                        }
                        setTimeout(function () {
                            setTimeout(function () {
                                if (_this.contentArea.scrollToBottom) {
                                    _this.contentArea.scrollToBottom();
                                }
                            }, 500);
                        }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupPage.prototype.displayMessages = function (messages) {
        var _this = this;
        if (this.messages != null && this.messages != undefined) {
            var message_1 = messages[messages.length - 1];
            this.dataProvider.getUser(message_1.sender).subscribe(function (user) {
                message_1.avatar = user.photoURL;
                message_1.displayName = user.displayName;
            });
            if (message_1.replyTo) {
                var index = this.messages.findIndex(function (item) { return item.id === message_1.replyTo; });
                message_1.replyToMessageType = this.messages[index] ? this.messages[index].type : 'text';
                if (message_1.replyToMessageType === 'text') {
                    message_1.replyToMessage = this.messages[index] ? this.messages[index].message : '<i>Message not found</i>';
                }
                else if (message_1.replyToMessageType === 'image' || message_1.replyToMessageType === 'video') {
                    message_1.replyToMessage = this.messages[index] ? this.messages[index].url : '<i>Message not found</i>';
                }
            }
            this.messages.push(message_1);
            // Also append to messagesToShow.
            this.messagesToShow.push(message_1);
            setTimeout(function () {
                if (_this.contentArea.scrollToBottom) {
                    _this.contentArea.scrollToBottom();
                }
            }, 500);
        }
        else {
            // Get all messages, this will be used as reference object for messagesToShow.
            this.messages = [];
            messages.forEach(function (message) {
                _this.dataProvider.getUser(message.sender).subscribe(function (user) {
                    if (user.id != null) {
                        message.avatar = user.photoURL;
                        message.displayName = user.displayName;
                    }
                });
                if (message.replyTo) {
                    var index = _this.messages.findIndex(function (item) { return item.id === message.replyTo; });
                    message.replyToMessageType = _this.messages[index] ? _this.messages[index].type : 'text';
                    if (message.replyToMessageType === 'text') {
                        message.replyToMessage = _this.messages[index] ? _this.messages[index].message : '<i>Message not found</i>';
                    }
                    else if (message.replyToMessageType === 'image' || message.replyToMessageType === 'video') {
                        message.replyToMessage = _this.messages[index] ? _this.messages[index].url : '<i>Message not found</i>';
                    }
                }
                _this.messages.push(message);
            });
            // Load messages in relation to numOfMessages.
            if (this.startIndex == -1) {
                // Get initial index for numberOfMessages to show.
                if ((this.messages.length - this.numberOfMessages) > 0) {
                    this.startIndex = this.messages.length - this.numberOfMessages;
                }
                else {
                    this.startIndex = 0;
                }
            }
            if (!this.messagesToShow) {
                this.messagesToShow = [];
            }
            // Set messagesToShow
            for (var i = this.startIndex; i < this.messages.length; i++) {
                this.messagesToShow.push(this.messages[i]);
            }
            this.loadingProvider.dismissLoader();
        }
    };
    // Load previous messages in relation to numberOfMessages.
    GroupPage.prototype.loadPreviousMessages = function () {
        var that = this;
        // Show loading.
        this.loadingProvider.presentProcessingLoading();
        setTimeout(function () {
            // Set startIndex to load more messages.
            if (that.startIndex - that.numberOfMessages > -1) {
                that.startIndex -= that.numberOfMessages;
            }
            else {
                that.startIndex = 0;
            }
            // Refresh our messages list.
            that.messages = null;
            that.messagesToShow = null;
            // Set scroll direction to top.
            // Populate list again.
            that.ionViewDidEnter();
        }, 1000);
    };
    // Update messagesRead when user lefts this page.
    GroupPage.prototype.ionViewWillLeave = function () {
        if (this.messages)
            this.setMessagesRead(this.messages);
    };
    // Check if currentPage is active, then update user's messagesRead.
    GroupPage.prototype.setMessagesRead = function (messages) {
        this.firestore.update('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid + '/groups/' + this.groupId, {
            messagesRead: this.messages ? this.messages.length : 0
        });
    };
    GroupPage.prototype.scrollBottom = function () {
        var _this = this;
        console.log("Calling Sb");
        setTimeout(function () {
            if (_this.contentArea.scrollToBottom) {
                _this.contentArea.scrollToBottom();
            }
        }, 500);
        this.setMessagesRead(this.messages);
    };
    GroupPage.prototype.scrollTop = function () {
        var _this = this;
        console.log("Calling St");
        setTimeout(function () {
            if (_this.contentArea.scrollToTop) {
                _this.contentArea.scrollToTop();
            }
        }, 500);
    };
    // Check if the user is the sender of the message.
    GroupPage.prototype.isSender = function (message) {
        return message.sender == firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid ? true : false;
    };
    // Check if the message is a system message.
    GroupPage.prototype.isSystemMessage = function (message) {
        return message.type == 'system' ? true : false;
    };
    // View user info
    GroupPage.prototype.viewUser = function (userId) {
        this.navCtrl.navigateForward('profile', {
            queryParams: {
                id: userId
            }
        });
    };
    // Send text message to the group.
    GroupPage.prototype.send = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var obj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {
                            date: new Date().toString(),
                            sender: firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
                            type: type,
                            message: this.message,
                            id: this.firestore.createId(),
                            replyTo: this.replyMessage.id || null
                        };
                        this.messages.push(obj);
                        this.displayMessages(this.messages);
                        // Update group messages.
                        return [4 /*yield*/, this.firestore.set("groups/" + this.groupId + "/messages/" + obj.id, obj)];
                    case 1:
                        // Update group messages.
                        _a.sent();
                        // this.dataProvider.getGroup(this.groupId).update({ messages: messages });
                        // Clear messagebox
                        this.message = '';
                        this.scrollBottom();
                        this.replyMessage.id = null;
                        this.replyMessage.displayName = null;
                        this.replyMessage.message = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupPage.prototype.enlargeImage = function (img) {
        this.modalCtrl.create({
            component: src_app_components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_14__["ImageModalComponent"],
            componentProps: {
                img: img
            }
        }).then(function (res) { return res.present(); });
    };
    GroupPage.prototype.attach = function () {
        var _this = this;
        this.actionSheet.create({
            header: 'Choose attachments',
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        console.log("take photo");
                        if (window.cordova) {
                            _this.imageProvider.uploadGroupPhotoMessage(_this.groupId, _this.camera.PictureSourceType.CAMERA).then(function (url) {
                                // Process image message.
                                _this.sendPhotoMessage(url);
                            });
                        }
                        else {
                            _this.fileInputButton.nativeElement.click();
                        }
                    }
                }, {
                    text: 'Photo Library',
                    handler: function () {
                        console.log("Access gallery");
                        if (window.cordova) {
                            _this.imageProvider.uploadGroupPhotoMessage(_this.groupId, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                                // Process image message.
                                _this.sendPhotoMessage(url);
                            });
                        }
                        else {
                            _this.fileInputButton.nativeElement.click();
                        }
                    }
                }, {
                    text: 'Video',
                    handler: function () {
                        console.log("Video");
                        if (window.cordova) {
                            // this.loadingProvider.presentProcessingLoading();
                            _this.imageProvider.uploadVideoMessage(_this.groupId).then(function (url) {
                                _this.sendVideoMessage(url);
                            }, function (err) {
                                _this.loadingProvider.dismissLoader();
                            });
                        }
                        else {
                            _this.videoInputButton.nativeElement.click();
                        }
                    }
                }, {
                    text: 'Location',
                    handler: function () {
                        console.log("Location");
                        _this.geolocation.getCurrentPosition({
                            timeout: 2000
                        }).then(function (res) {
                            var locationMessage = "current location: lat:" + res.coords.latitude + " lng:" + res.coords.longitude;
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
                                            console.log("share");
                                            _this.message = locationMessage + "<br>" + mapUrl;
                                            _this.send('location');
                                        }
                                    }]
                            }).then(function (r) { return r.present(); });
                        }, function (locationErr) {
                            console.log("Location Error" + JSON.stringify(locationErr));
                        });
                    }
                },
                {
                    text: 'cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancelled");
                    }
                }]
        }).then(function (r) { return r.present(); });
    };
    GroupPage.prototype.takePhoto = function () {
        var _this = this;
        this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then(function (url) {
            // Process image message.
            _this.sendPhotoMessage(url);
        });
    };
    // Process photoMessage on database.
    GroupPage.prototype.sendPhotoMessage = function (url) {
        // let messages = JSON.parse(JSON.stringify(this.messages));
        var obj = {
            date: new Date().toString(),
            sender: firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
            type: 'image',
            url: url,
            id: this.firestore.createId()
        };
        this.messages.push(obj);
        this.displayMessages(this.messages);
        this.firestore.set("groups/" + this.groupId + "/messages/" + obj.id, obj);
        this.scrollBottom();
        // this.dataProvider.getGroup(this.groupId).update({
        //   messages: messages
        // });
        this.message = '';
    };
    GroupPage.prototype.sendVideoMessage = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var obj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {
                            date: new Date().toString(),
                            sender: firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
                            type: 'video',
                            url: url,
                            id: this.firestore.createId()
                        };
                        this.messages.push(obj);
                        this.displayMessages(this.messages);
                        this.firestore.set("groups/" + this.groupId + "/messages/" + obj.id, obj);
                        this.scrollBottom();
                        return [4 /*yield*/, this.loadingProvider.closeProgress()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadingProvider.dismissLoader()];
                    case 2:
                        _a.sent();
                        // this.dataProvider.getGroup(this.groupId).update({
                        //   messages: messages
                        // });
                        this.message = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    // View group info.
    GroupPage.prototype.groupInfo = function () {
        // this.router.navigateByUrl('/groupinfo/' + this.groupId);
        this.navCtrl.navigateForward('group-info', {
            queryParams: {
                id: this.groupId
            }
        });
    };
    GroupPage.prototype.detectFiles = function (event) {
        var _this = this;
        this.loadingProvider.presentProcessingLoading();
        this.commonService.getImagesFromFiles(event).then(function (images) {
            console.log('images', images);
            _this.fileInputButton.nativeElement.value = null;
            images.forEach(function (imageData) {
                _this.firestore.uploadImage(imageData, new Date().getTime().toString() + '.png', 'chat-images').then(function (resp) {
                    _this.sendPhotoMessage(resp);
                    _this.loadingProvider.dismissLoader();
                });
            }, function (err) {
                _this.loadingProvider.dismissLoader();
            });
        }, function (err) {
            _this.loadingProvider.dismissLoader();
        });
    };
    /** used for browser image uploads, hooked up to input file type on change event */
    GroupPage.prototype.detectVideo = function (event) {
        var _this = this;
        // this.loadingProvider.presentProcessingLoading();
        this.commonService.getVideoFile(event).then(function (url) {
            _this.firestore.progressVal.subscribe(function (val) {
                console.log('group page %', val);
            });
            _this.loadingProvider.displayProgress();
            _this.firestore
                .uploadVideoString(url, Date.now() + "-" + _this.currentUser.uid)
                .then(function (link) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.sendVideoMessage(link);
                            return [4 /*yield*/, this.loadingProvider.dismissLoader()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                _this.loadingProvider.dismissLoader();
            });
        }, function (err) {
            _this.loadingProvider.dismissLoader();
        });
    };
    GroupPage.prototype.test = function () {
        alert('loaded');
    };
    GroupPage.prototype.openMsgOption = function (msgId, index) {
        var _this = this;
        this.actionSheet.create({
            header: 'Options',
            buttons: [{
                    text: 'Delete',
                    handler: function () {
                        _this.delete(msgId, index);
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
    GroupPage.prototype.delete = function (msgID, index) {
        var _this = this;
        this.loadingProvider.presentProcessingLoading();
        console.log('groupId', this.groupId);
        console.log('msgID', msgID);
        this.firestore.delete("groups/" + this.groupId + "/messages/" + msgID).then(function () {
            _this.loadingProvider.dismissLoader();
            _this.messagesToShow.splice(index, 1);
        }, function (err) {
            _this.loadingProvider.dismissLoader();
        });
    };
    GroupPage.prototype.filterMessage = function (msg) {
        var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        return msg.replace(urlRegex, function (url) {
            return '<span class="url" (click)="openUrl(' + url + ')">' + url + '</span>';
        });
    };
    GroupPage.prototype.getMessage = function (msg) {
        var exp = /(https?:\/\/[^\s]+)/g;
        var text = msg.replace(exp, "<a href='$1' class='url' target='_blank'>$1</a>");
        return text;
    };
    GroupPage.prototype.openUrl = function (url) {
        console.log('url clicked');
        window.open(url, '_system');
    };
    GroupPage.prototype.drag = function (event, msg) {
        var _this = this;
        var slidingItem = document.getElementById('slidingItem' + msg.id);
        setTimeout(function () {
            slidingItem.close();
            _this.replyMessage.id = msg.id;
            _this.replyMessage.message = msg.message || msg.url;
            _this.replyMessage.displayName = msg.displayName;
            _this.replyMessage.type = msg.type;
        }, 100);
    };
    GroupPage.prototype.getRepliedMessage = function (msgID) {
        var index = this.messages.findIndex(function (item) { return item.id === msgID; });
        if (index > -1) {
            return this.messages[index];
        }
        else {
            return {
                displayName: null
            };
        }
    };
    GroupPage.prototype.scrollTo = function (elementId) {
        if (!document.getElementById(elementId))
            return;
        var y = document.getElementById(elementId).offsetTop;
        document.getElementById(elementId).classList.add('blur');
        this.content.scrollToPoint(0, y - 100);
        setTimeout(function () {
            document.getElementById(elementId).classList.remove('blur');
        }, 1000);
    };
    GroupPage.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"] },
        { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__["FirestoreService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], GroupPage.prototype, "contentArea", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileInputButton", null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GroupPage.prototype, "fileInputButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoInputButton", null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GroupPage.prototype, "videoInputButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPlayer', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GroupPage.prototype, "videoPlayer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GroupPage.prototype, "myInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], GroupPage.prototype, "content", void 0);
    GroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group/group.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group.page.scss */ "./src/app/pages/group/group.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__["FirestoreService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]])
    ], GroupPage);
    return GroupPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-group-module.js.map