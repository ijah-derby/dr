(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-message-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"tool\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"messages\">\n        <ion-icon  style=\"color: #351010; font-size: 26px; margin-left: 0px;\"\n      icon=\"../../../../assets/icons/chevron-back.svg\" ></ion-icon>\n    </ion-back-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" style=\"--background: transparent;--padding-start: 0px;\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"avatar\" onError=\"this.src='./assets/images/default-dp.png'\" alt=\"\">\n      </ion-avatar>\n      <ion-label>\n        <h5 class=\"usertitle\">{{title}}</h5>\n      </ion-label>\n    </ion-item>\n    <ion-buttons slot=\"end\">\n      <img\n      id=\"hide\"\n      alt=\"appicon\"\n      height=\"22\"\n      class=\"ion-float-right\"\n      src=\"assets/images/logo1.png\"\n    />\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" #content>\n  <div class=\"messages\" #contentArea>\n    <p class=\"center\" *ngIf=\"startIndex > 0\"><span tappable (click)=\"loadPreviousMessages()\">Load previous\n        messages</span></p>\n    <div *ngFor=\"let message of messagesToShow; let i = index;\">\n      \n      <ion-item-sliding *ngIf=\"isSender(message)\" id=\"slidingItem{{message.id}}\" (ionDrag)=\"drag($event, message)\">\n        <ion-item-options side=\"start\">\n          <ion-item-option style=\"display: none;\">Reply</ion-item-option>\n        </ion-item-options>\n        <div class=\"chatbox right sender\"  style=\"margin-right: 0px; padding-right: 0px;\">\n          <ion-item style=\"border-radius: 20px; \"  lines=\"none\">\n            <ion-label style=\"padding: 10px 10px 5px 10px; border-radius: 10px; border: 0.5px solid rgb(185, 185, 185); box-shadow: 1px 1px 4px var(--ion-color-light-shade);\">\n              <div  *ngIf=\"message.type == 'text'\">\n                <div class=\"reply-view-header\" *ngIf=\"message.replyToMessage\" (click)=\"scrollTo('slidingItem' + getRepliedMessage(message.replyTo).id)\">\n                  <h5>{{getRepliedMessage(message.replyTo).displayName}}</h5>\n                  <p *ngIf=\"message.replyToMessageType === 'text'\" [innerHTML]=\"getMessage(message.replyToMessage)\"></p>\n                  <p *ngIf=\"message.replyToMessageType === 'location'\">Location Shared</p>\n                  <img *ngIf=\"message.replyToMessageType === 'image'\" [src]=\"message.replyToMessage\" alt=\"\">\n                  <video id=\"video-post\" *ngIf=\"message.replyToMessageType === 'video'\">\n                    <source src=\"{{message.replyToMessage}}\" type=\"video/mp4\">\n                  </video>\n                </div>\n                <p style=\"margin:0; float: left; text-align: left;  padding-left: 5px; padding-right: 5px;\" [innerHTML]=\"getMessage(message.message)\"></p>\n              </div>\n              <br>\n              <div  *ngIf=\"message.type == 'location'\"  [innerHtml]=\"message.message\"></div>\n              <div *ngIf=\"message.type == 'image'\">\n                <img tappable (click)=\"enlargeImage(message.message)\" src=\"{{message.message}}\" /></div>\n              <div *ngIf=\"message.type == 'video'\">\n                <video  id=\"video-post\" loop controls width=\"100%\">\n                  <source src=\"{{message.message}}\" type=\"video/mp4\">\n                </video>\n              </div>\n              <ion-icon style=\"margin-top: 3px; float: left; text-align: left;\" name=\"md-more\" (click)=\"openMsgOption(message.id, i)\"></ion-icon>\n              <span>{{message.date | DateFormat}}</span>\n            </ion-label>\n          </ion-item>\n        </div>\n      </ion-item-sliding>\n \n      <ion-item-sliding *ngIf=\"!isSender(message)\" id=\"slidingItem{{message.id}}\" (ionDrag)=\"drag($event, message)\">\n        <ion-item-options side=\"start\">\n          <ion-item-option style=\"display: none;\">Reply</ion-item-option>\n        </ion-item-options>\n\n        \n        <div class=\"chatbox left\" >\n          <ion-item style=\"border-radius: 20px; \"  lines=\"none\">\n            <ion-label style=\"padding: 10px 10px 5px 10px; border-radius: 10px; border: 0.5px solid rgb(185, 185, 185); box-shadow: 1px 1px 4px var(--ion-color-light-shade); \">\n              <div style=\"margin:0;\" *ngIf=\"message.type == 'text'\">\n                <div class=\"reply-view-header\" *ngIf=\"message.replyToMessage\" (click)=\"scrollTo('slidingItem' + getRepliedMessage(message.replyTo).id)\">\n                  <h5>{{getRepliedMessage(message.replyTo).displayName}}</h5>\n                  <p *ngIf=\"message.replyToMessageType === 'text'\" [innerHTML]=\"getMessage(message.replyToMessage)\"></p>\n                  <p *ngIf=\"message.replyToMessageType === 'location'\">Location Shared</p>\n                  <img *ngIf=\"message.replyToMessageType === 'image'\" [src]=\"message.replyToMessage\" alt=\"\">\n                  <video id=\"video-post\" *ngIf=\"message.replyToMessageType === 'video'\">\n                    <source src=\"{{message.replyToMessage}}\" type=\"video/mp4\">\n                  </video>\n                </div>\n                <p [innerHTML]=\"getMessage(message.message)\"></p>\n              </div>\n              <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\n              <div *ngIf=\"message.type == 'image'\">\n                <img tappable (click)=\"enlargeImage(message.message)\" src=\"{{message.message}}\" (load)=\"scrollBottom()\" />\n              </div>\n              <div *ngIf=\"message.type == 'video'\">\n                <video controls width=\"100%\">\n                  <source src=\"{{message.message}}\" type=\"video/mp4\">\n                </video>\n              </div>\n              <span>{{message.date | DateFormat}}</span>\n            </ion-label>\n          </ion-item>\n          \n        </div>\n      </ion-item-sliding>\n     \n    </div>\n\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button class=\"colr\" color=\"light\"  (click)=\"loadPreviousMessages()\">\n      <ion-icon class=\"colr\" name=\"ios-arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <br>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style=\"--background: #eeeeee7d;padding-top: 5px;\">\n    <ion-item lines=\"none\" style=\"--background: #f7f7f7;\" *ngIf=\"replyMessage.message\">\n      <ion-label class=\"reply\">\n        <h6>{{replyMessage.displayName}}</h6>\n        <p *ngIf=\"replyMessage.type === 'text'\">{{replyMessage.message}}</p>\n        <p *ngIf=\"replyMessage.type === 'location'\">Location Shared</p>\n        <img *ngIf=\"replyMessage.type === 'image'\" [src]=\"replyMessage.message\" class=\"reply-img\">\n        <video id=\"video-post\" *ngIf=\"replyMessage.type === 'video'\" class=\"reply-img\">\n          <source src=\"{{replyMessage.message}}\" type=\"video/mp4\">\n        </video>\n      </ion-label>\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"replyMessage.message = null;replyMessage.id = null;\"></ion-icon>\n    </ion-item>\n\n    <ion-button slot=\"start\" fill=\"clear\" (click)=\"attach()\">\n      <ion-icon src=\"../../../assets/icons/attach.svg\"></ion-icon>\n    </ion-button>\n    \n     \n\n    <textarea class=\"grow\"\n    autosize\n    maxrow=\"4\"\n    useImportant=\"true\"\n    [(ngModel)]=\"message\"      \n    #myInput\n    placeholder=\"{{ 'feed-comment-component.placeholder' | translate }}\"\n    ></textarea>\n    \n        <ion-buttons slot=\"end\">\n            <ion-button class=\"circle\" fill=\"clear\" color=\"primary\" (click)=\"send('text')\" [disabled]=\"!message\">\n                <ion-icon src=\"assets/icons/send.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n\n</ion-footer>\n\n<input\n  hidden\n  #fileInputButton\n  type=\"file\"\n  (change)=\"detectFiles($event)\"\n  multiple\n/>\n<input hidden #videoInputButton type=\"file\" (change)=\"detectVideo($event)\" />\n");

/***/ }),

/***/ "./src/app/pages/message/message.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/message/message.module.ts ***!
  \*************************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "./src/app/pages/message/message.page.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]
    }
];
var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
    MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]],
            entryComponents: [],
            providers: []
        })
    ], MessagePageModule);
    return MessagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/message/message.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/message/message.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .title-img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-size: contain !important;\n  background-color: var(--ion-color-light-shade);\n  margin-right: 10px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n:host .clear {\n  clear: both;\n}\n:host .content-wrapper {\n  height: 100%;\n}\n:host .content-wrapper .from-me,\n:host .content-wrapper .from-them {\n  position: relative;\n  border-radius: 1em;\n  margin: 10px 0;\n  overflow: hidden;\n}\n:host .content-wrapper .from-me .image,\n:host .content-wrapper .from-them .image {\n  width: 200px;\n  height: 200px;\n}\n:host .content-wrapper .from-me .image-group,\n:host .content-wrapper .from-them .image-group {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-rows: auto;\n  grid-gap: 0.5rem;\n  padding: 10px 10px 5px;\n  border-top-left-radius: 1em;\n}\n:host .content-wrapper .from-me .image-group .image-group-image,\n:host .content-wrapper .from-them .image-group .image-group-image {\n  height: 100px;\n  width: 100px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 1em;\n}\n:host .content-wrapper .from-me .text,\n:host .content-wrapper .from-them .text {\n  padding: 10px 20px;\n  margin: 0;\n}\n:host .content-wrapper .from-me .text ::ng-deep p,\n:host .content-wrapper .from-them .text ::ng-deep p {\n  margin: 0;\n}\n:host .content-wrapper .from-me .text ::ng-deep a,\n:host .content-wrapper .from-them .text ::ng-deep a {\n  color: var(--ion-color-success);\n}\n:host .content-wrapper .from-me {\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light-shade);\n  border-top-right-radius: 0px;\n  float: right;\n}\n:host .content-wrapper .from-them {\n  background: var(--ion-color-gradient);\n  border-top-left-radius: 0px;\n  color: var(--ion-color-light);\n  float: left;\n}\n:host ion-label {\n  background-color: white;\n  margin: 0px;\n}\n:host ion-content {\n  --ion-background-color:#ebebeb;\n}\n:host .chatbox span {\n  float: right;\n  padding-top: 5px;\n  font-size: 12px;\n}\n:host .chatbox.left p {\n  color: black;\n  font-size: 17px;\n  margin: 0;\n  white-space: break-spaces;\n}\n:host .chatbox a {\n  background-color: #dedee0;\n}\n:host .chatbox.left {\n  margin-left: -10px;\n  color: white;\n}\n:host .chatbox.right.sender {\n  color: black;\n}\n:host .ion-float-right {\n  margin-right: 15px;\n}\n:host ion-footer .grow {\n  padding: 5px 10px;\n  overflow: hidden;\n  height: 35px !important;\n  width: calc(100% - 20px);\n  border: 0.1px solid lightgray;\n  outline: none;\n  resize: none;\n  margin: 5px 10px 0px;\n  border-radius: 20px;\n}\n.tool {\n  box-shadow: 0px 0.2px 0px #a8a8a8 !important;\n}\n.colr {\n  margin-left: -4px;\n  margin-bottom: -3px;\n  font-size: 20px;\n  --box-shadow:none;\n  outline: none;\n}\n.ion-color-light {\n  --ion-color-base: #f4f5f800 !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: #000 !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.usertitle {\n  font-weight: 600;\n  font-size: 14px;\n}\n.reply {\n  border-left: 2px solid orangered;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.reply-view-header {\n  background: #3880ff30;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: left;\n  border-left: 2px solid blue;\n  margin-bottom: 7px;\n}\n.reply-view-header h5 {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 600;\n}\n.reply-view-header p {\n  font-size: 13px;\n  white-space: nowrap !important;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.reply-view-header img {\n  width: 30px;\n  height: 30px;\n  margin-top: 9px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.reply-view-header video {\n  width: 30px;\n  height: 30px;\n  margin-top: 9px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-item {\n  --background: transparent;\n}\n.blur {\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  /* IE 10+, Fx 29+ */\n}\n@-webkit-keyframes blink {\n  0%, 49% {\n    background-color: #ddd;\n  }\n  50%, 100% {\n    background-color: transparent;\n  }\n}\n@keyframes blink {\n  0%, 49% {\n    background-color: #ddd;\n  }\n  50%, 100% {\n    background-color: transparent;\n  }\n}\n.reply-img {\n  width: 30px;\n  height: 30px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL3BhZ2VzL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUNBSjtBREVFO0VBQ0UsV0FBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0FDREo7QURJSTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRk47QURJTTs7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0RSO0FESU07O0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNEUjtBREdROztFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQ0FWO0FESU07O0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDRFI7QURJVTs7RUFDRSxTQUFBO0FDRFo7QURJVTs7RUFDRSwrQkFBQTtBQ0RaO0FET0k7RUFDRSw0QkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTE47QURTSTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNQTjtBRGNFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FDWko7QURjRTtFQUVFLDhCQUFBO0FDYko7QURnQkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZEY7QURpQkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ2ZGO0FEa0JBO0VBQ0MseUJBQUE7QUNoQkQ7QURvQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNsQkY7QURzQkE7RUFFQSxZQUFBO0FDckJBO0FEeUJBO0VBQ0Esa0JBQUE7QUN2QkE7QUQ0QkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDMUJKO0FEK0JBO0VBQ0UsNENBQUE7QUM1QkY7QUQrQkM7RUFHRyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQzlCSjtBRGlDRTtFQUNFLHNDQUFBO0VBQ0EsMEVBQUE7RUFDQSxxQ0FBQTtFQUNBLGlGQUFBO0VBQ0EsbUVBQUE7RUFDQSxpRUFBQTtBQzlCSjtBRGlDQTtFQUNFLGdCQUFBO0VBQ0UsZUFBQTtBQzlCSjtBRGlDQTtFQUNFLGdDQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQzlCSjtBRGlDQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDOUJGO0FEK0JFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzdCSjtBRCtCRTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUM3Qko7QURnQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDOUJKO0FEaUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQy9CSjtBRG1DQTtFQUNFLHlCQUFBO0FDaENGO0FEbUNBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtFQUFzQixtQkFBQTtBQy9CeEI7QURrQ0E7RUFDRTtJQUNFLHNCQUFBO0VDL0JGO0VEaUNBO0lBQ0UsNkJBQUE7RUMvQkY7QUFDRjtBRHlCQTtFQUNFO0lBQ0Usc0JBQUE7RUMvQkY7RURpQ0E7SUFDRSw2QkFBQTtFQy9CRjtBQUNGO0FEa0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDaENGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVzc2FnZS9tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnRpdGxlLWltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICB9XG4gIC5jbGVhciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cblxuICAuY29udGVudC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICBcblxuICAgIC5mcm9tLW1lLFxuICAgIC5mcm9tLXRoZW0ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAuaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5pbWFnZS1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICAgICAgICBncmlkLWdhcDogMC41cmVtO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxZW07XG5cbiAgICAgICAgLmltYWdlLWdyb3VwLWltYWdlIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZnJvbS1tZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBcbiAgICB9XG5cbiAgICAuZnJvbS10aGVtIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudCk7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICBcbiAgICB9XG4gIH1cblxuIFxuICBcbiAgaW9uLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgbWFyZ2luOiAgMHB4O1xuICB9XG4gIGlvbi1jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWJlYmViO1xufVxuXG4uY2hhdGJveCBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jaGF0Ym94LmxlZnQgcCB7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuXG4uY2hhdGJveCBhIHtcbiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyNCk7XG59XG5cblxuLmNoYXRib3gubGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgXG4gIH1cblxuLmNoYXRib3gucmlnaHQuc2VuZGVyIHtcbi8vIGJhY2tncm91bmQ6ICNjMGQ5ZmY5ODtcbmNvbG9yOiByZ2IoMCwgMCwgMCk7XG5cbn1cblxuLmlvbi1mbG9hdC1yaWdodHtcbm1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuXG5pb24tZm9vdGVyIHtcbiAgLmdyb3cge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIGJvcmRlcjogMC4xcHggc29saWQgbGlnaHRncmF5OyBcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBtYXJnaW46IDVweCAxMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG59XG59XG5cbi50b29sIHtcbiAgYm94LXNoYWRvdzogMHB4IDAuMnB4IDBweCAjYThhOGE4IWltcG9ydGFudDtcbn1cblxuIC5jb2xye1xuICBcblxuICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuaW9uLWNvbG9yLWxpZ2h0IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZjRmNWY4MDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LCAyNDUsIDI0OCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogIzAwMCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50O1xufVxuXG4udXNlcnRpdGxle1xuICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlcGx5IHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBvcmFuZ2VyZWQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5yZXBseS12aWV3LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMzODgwZmYzMDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmx1ZTtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBoNSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIHZpZGVvIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmJsdXIge1xuICBhbmltYXRpb246IGJsaW5rIDFzOyAgLyogSUUgMTArLCBGeCAyOSsgKi9cbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDAlLCA0OSUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4ucmVwbHktaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59IiwiOmhvc3QgLnRpdGxlLWltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IC5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIC5pbWFnZSxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAuaW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIC5pbWFnZS1ncm91cCxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAuaW1hZ2UtZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMWVtO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAuaW1hZ2UtZ3JvdXAgLmltYWdlLWdyb3VwLWltYWdlLFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIC5pbWFnZS1ncm91cCAuaW1hZ2UtZ3JvdXAtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIC50ZXh0LFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIC50ZXh0IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIC50ZXh0IDo6bmctZGVlcCBwLFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIC50ZXh0IDo6bmctZGVlcCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAudGV4dCA6Om5nLWRlZXAgYSxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAudGV4dCA6Om5nLWRlZXAgYSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHg7XG59XG46aG9zdCBpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ViZWJlYjtcbn1cbjpob3N0IC5jaGF0Ym94IHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0IC5jaGF0Ym94LmxlZnQgcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IDA7XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG59XG46aG9zdCAuY2hhdGJveCBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVlMDtcbn1cbjpob3N0IC5jaGF0Ym94LmxlZnQge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC5jaGF0Ym94LnJpZ2h0LnNlbmRlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cbjpob3N0IC5pb24tZmxvYXQtcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG46aG9zdCBpb24tZm9vdGVyIC5ncm93IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJvcmRlcjogMC4xcHggc29saWQgbGlnaHRncmF5O1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIG1hcmdpbjogNXB4IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4udG9vbCB7XG4gIGJveC1zaGFkb3c6IDBweCAwLjJweCAwcHggI2E4YThhOCAhaW1wb3J0YW50O1xufVxuXG4uY29sciB7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW9uLWNvbG9yLWxpZ2h0IHtcbiAgLS1pb24tY29sb3ItYmFzZTogI2Y0ZjVmODAwICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAyNDQsIDI0NSwgMjQ4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogIzAwMCAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50O1xufVxuXG4udXNlcnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmVwbHkge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ucmVwbHktdmlldy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMzg4MGZmMzA7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsdWU7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbi5yZXBseS12aWV3LWhlYWRlciBoNSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlcGx5LXZpZXctaGVhZGVyIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmVwbHktdmlldy1oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5yZXBseS12aWV3LWhlYWRlciB2aWRlbyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmJsdXIge1xuICBhbmltYXRpb246IGJsaW5rIDFzO1xuICAvKiBJRSAxMCssIEZ4IDI5KyAqL1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUsIDQ5JSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG4ucmVwbHktaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/message/message.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/message/message.page.ts ***!
  \***********************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
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
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var src_app_components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/components/image-modal/image-modal.component */ "./src/app/components/image-modal/image-modal.component.ts");

















var MessagePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessagePage, _super);
    // MessagePage
    // This is the page where the user can chat with a friend.
    function MessagePage(
    // public navCtrl: NavController,
    // public navParams: NavParams,
    injector, route, dataProvider, angularfire, loadingProvider, imageProvider, camera, actionSheet, geolocation, authService, firestore, commonService) {
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
        _this.commonService = commonService;
        _this.messagesToShow = [];
        _this.startIndex = -1;
        // Set number of messages to show.
        _this.numberOfMessages = 10;
        _this.replyMessage = {
            id: null,
            message: null,
            displayName: null,
            type: null
        };
        _this.allMessages = [];
        _this.isSingleMessage = 0;
        _this.route.queryParamMap.subscribe(function (params) {
            _this.userId = params.get("id");
            _this.title = params.get("name");
            _this.avatar = params.get("img");
        });
        return _this;
    }
    MessagePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MessagePage.prototype.ionViewDidEnter = function (isLoad) {
        if (isLoad === void 0) { isLoad = false; }
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
                        // this.dataProvider.getUser(this.userId).subscribe((user: any) => {
                        //   this.title = user.displayName;
                        // });
                        // Get conversationInfo with friend.
                        this.firestore.docOnce$('users/' + this.loggedInUserId + '/conversations/' + this.userId).subscribe(function (conversation) {
                            if (conversation) {
                                // User already have conversation with this friend, get conversation
                                _this.conversationId = conversation.conversationId;
                                console.log('conv id', _this.conversationId);
                                _this.firestore.col$('conversations/' + _this.conversationId + '/messages', function (ref) { return ref.orderBy('createdAt', 'desc').limit(1); }).subscribe(function (resp) {
                                    if (_this.isSingleMessage >= 1) {
                                        console.log('recent message', resp);
                                        var index = _this.allMessages.findIndex(function (item) { return item.id === resp[0].id; });
                                        console.log('index', 1);
                                        if (index === -1) {
                                            _this.allMessages.push(resp[0]);
                                            _this.displayMessages(_this.allMessages);
                                        }
                                    }
                                });
                                // Get conversation
                                _this.dataProvider.getConversationMessages(_this.conversationId).subscribe(function (messagesRes) {
                                    var messages = messagesRes.reverse();
                                    console.log('allMessage', messages.reverse());
                                    _this.allMessages = messagesRes.reverse();
                                    _this.displayMessages(messages);
                                    if (_this.isSingleMessage === 0)
                                        _this.isSingleMessage = 1;
                                    // this.scrollBottom();
                                    // console.log("SCROLL TO BOTTOM CALLED");
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
                        // if(!isLoad)
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
    MessagePage.prototype.displayMessages = function (messages) {
        var _this = this;
        this.contentArea.scrollToBottom();
        console.log("scrolled to bottom");
        if (messages == null)
            messages = [];
        if (this.messages) {
            // Just append newly added messages to the bottom of the view.
            if (messages.length > this.messages.length) {
                var message_1 = messages[messages.length - 1];
                this.dataProvider.getUser(message_1.sender).subscribe(function (user) {
                    message_1.avatar = user.photoURL;
                    message_1.displayName = user.displayName;
                });
                if (message_1.replyTo) {
                    var index = messages.findIndex(function (item) { return item.id === message_1.replyTo; });
                    message_1.replyToMessage = messages[index] ? messages[index].message : 'Message Deleted';
                    message_1.replyToMessageType = messages[index] ? messages[index].type : 'text';
                }
                this.messages.push(message_1);
                this.messagesToShow.push(message_1);
                console.log('new message received');
                setTimeout(function () {
                    if (_this.contentArea.scrollToBottom) {
                        _this.contentArea.scrollToBottom();
                    }
                }, 500);
                // if(!isLoad) {
                //   console.log('isLoad', isLoad);
                //   setTimeout(() => {
                //     if (this.contentArea.scrollToBottom) {
                //       this.contentArea.scrollToBottom();
                //     }
                //   }, 500);
                // }
            }
        }
        else {
            // Get all messages, this will be used as reference object for messagesToShow.
            this.messages = [];
            messages.forEach(function (message) {
                _this.dataProvider.getUser(message.sender).subscribe(function (user) {
                    message.avatar = user.photoURL;
                    message.displayName = user.displayName;
                });
                if (message.replyTo) {
                    var index = messages.findIndex(function (item) { return item.id === message.replyTo; });
                    message.replyToMessage = messages[index] ? messages[index].message : 'Message Deleted';
                    message.replyToMessageType = messages[index] ? messages[index].type : 'Message Deleted';
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
    MessagePage.prototype.loadPreviousMessages = function () {
        var that = this;
        var cursor = this.messagesToShow[0].doc;
        // this.firestore.colWithIds$('conversations/' + this.conversationId + '/messages', ref => ref.orderBy('createdAt').limit(10).startAfter(cursor)).subscribe(resp => {
        //   this.allMessages = this.allMessages.concat(resp);
        //   console.log('messagesToShow', this.messagesToShow);
        //   that.scrollTop();
        // })
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
            that.ionViewDidEnter(true);
        }, 1000);
    };
    // Update messagesRead when user lefts this page.
    MessagePage.prototype.ionViewWillLeave = function () {
        this.setMessagesRead();
    };
    // Check if currentPage is active, then update user's messagesRead.
    MessagePage.prototype.setMessagesRead = function () {
        var _this = this;
        console.log('setMessagesRead');
        this.firestore.update('users/' + this.currentUser.uid + '/conversations/' + this.userId, { messagesRead: this.allMessages ? this.allMessages.length : 0 }).then(function () { }).catch(function () {
            _this.firestore.set('users/' + _this.currentUser.uid + '/conversations/' + _this.userId, { messagesRead: _this.allMessages ? _this.allMessages.length : 0 });
        });
        this.loadingProvider.dismissLoader();
    };
    MessagePage.prototype.scrollBottom = function (justScroll) {
        var _this = this;
        if (justScroll === void 0) { justScroll = false; }
        setTimeout(function () {
            if (_this.contentArea.scrollToBottom) {
                _this.contentArea.scrollToBottom();
            }
        }, 500);
        this.setMessagesRead();
    };
    MessagePage.prototype.scrollTop = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.contentArea.scrollToTop) {
                _this.contentArea.scrollToTop();
            }
        }, 500);
    };
    // Check if the user is the sender of the message.
    MessagePage.prototype.isSender = function (message) {
        if (message.sender == this.loggedInUserId) {
            return true;
        }
        else {
            return false;
        }
    };
    // Send message, if there's no conversation yet, create a new conversation.
    MessagePage.prototype.send = function (type) {
        var _this = this;
        if (this.message) {
            // User entered a text on messagebox
            var msgID = this.firestore.createId();
            var msg_1 = {
                date: new Date().toString(),
                sender: this.loggedInUserId,
                type: type,
                message: this.message,
                id: msgID,
                replyTo: this.replyMessage.id || null
            };
            if (this.conversationId) {
                // let messages = JSON.parse(JSON.stringify(this.messages));
                // Update conversation on database.
                this.firestore.set('conversations/' + this.conversationId + '/messages/' + msgID, msg_1);
                // this.firestore.set('users/' + this.loggedInUserId + '/conversations/' + this.userId, {
                //   conversationId: this.conversationId,
                //   messagesRead: 1
                // }).then(() => {
                // });
                // this.firestore.set('users/' + this.userId + '/conversations/' + this.loggedInUserId, {
                //   conversationId: this.conversationId,
                //   messagesRead: 0
                // });
                // Clear messagebox.
                this.message = '';
                this.scrollBottom();
                console.log("message just send");
                this.replyMessage.id = null;
                this.replyMessage.displayName = null;
                this.replyMessage.message = null;
            }
            else {
                var messages = [];
                messages.push(msg_1);
                // New Conversation with friend.
                var users = [];
                users.push(this.loggedInUserId);
                users.push(this.userId);
                console.log('new conversation');
                // Add conversation.
                var cid_1 = this.firestore.createId();
                this.firestore.set('conversations/' + cid_1, {
                    dateCreated: new Date().toString(),
                    users: users
                }).then(function (success) {
                    var conversationId = cid_1;
                    _this.message = '';
                    // Add conversation reference to the users.
                    _this.firestore.set('conversations/' + cid_1 + '/messages/' + msg_1.id, msg_1);
                    _this.firestore.set('users/' + _this.loggedInUserId + '/conversations/' + _this.userId, {
                        conversationId: conversationId,
                        messagesRead: 1
                    }).then(function () {
                        _this.replyMessage.id = null;
                        _this.replyMessage.displayName = null;
                        _this.replyMessage.message = null;
                    });
                    _this.firestore.set('users/' + _this.userId + '/conversations/' + _this.loggedInUserId, {
                        conversationId: conversationId,
                        messagesRead: 0
                    });
                });
                this.scrollBottom(true);
            }
        }
    };
    MessagePage.prototype.viewUser = function (userId) {
        this.router.navigateByUrl('userinfo/' + userId);
    };
    MessagePage.prototype.attach = function () {
        var _this = this;
        this.actionSheet.create({
            header: 'Choose attachments',
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        if (window.cordova) {
                            _this.imageProvider.uploadGroupPhotoMessage(_this.conversationId, _this.camera.PictureSourceType.CAMERA).then(function (url) {
                                _this.message = url;
                                _this.send("image");
                            }, function (err) {
                            });
                        }
                        else {
                            _this.fileInputButton.nativeElement.click();
                        }
                    }
                }, {
                    text: 'Photo Library',
                    handler: function () {
                        if (window.cordova) {
                            _this.imageProvider.uploadGroupPhotoMessage(_this.conversationId, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                                _this.message = url;
                                _this.send("image");
                            }, function (err) {
                            });
                        }
                        else {
                            _this.fileInputButton.nativeElement.click();
                        }
                    }
                },
                {
                    text: 'Video',
                    handler: function () {
                        if (window.cordova) {
                            _this.imageProvider.uploadVideoMessage(_this.conversationId).then(function (url) {
                                _this.message = url;
                                _this.send("video");
                            });
                        }
                        else {
                            _this.videoInputButton.nativeElement.click();
                        }
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
    MessagePage.prototype.enlargeImage = function (img) {
        this.modalCtrl.create({
            component: src_app_components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_16__["ImageModalComponent"],
            componentProps: {
                img: img
            }
        }).then(function (res) { return res.present(); });
    };
    MessagePage.prototype.detectFiles = function (event) {
        var _this = this;
        this.loadingProvider.presentProcessingLoading();
        this.commonService.getImagesFromFiles(event).then(function (images) {
            _this.fileInputButton.nativeElement.value = null;
            images.forEach(function (imageData) {
                _this.firestore.uploadImage(imageData, new Date().getTime().toString() + '.png', 'chat-images').then(function (resp) {
                    _this.message = resp;
                    _this.send("image");
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
    MessagePage.prototype.detectVideo = function (event) {
        var _this = this;
        this.loadingProvider.presentProcessingLoading();
        this.commonService.getVideoFile(event).then(function (url) {
            _this.firestore
                .uploadVideoString(url, Date.now() + "-" + _this.currentUser.uid)
                .then(function (link) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.message = link;
                    this.send("video");
                    this.loadingService.dismissLoader();
                    return [2 /*return*/];
                });
            }); }, function (err) {
                _this.loadingProvider.dismissLoader();
                _this.toast("Error in uploading video");
            });
        }, function (err) {
            _this.loadingProvider.dismissLoader();
        });
    };
    MessagePage.prototype.openMsgOption = function (msgId, index) {
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
    MessagePage.prototype.delete = function (msgID, index) {
        var _this = this;
        this.loadingProvider.presentProcessingLoading();
        this.firestore.delete("conversations/" + this.conversationId + "/messages/" + msgID).then(function () {
            _this.loadingProvider.dismissLoader();
            _this.messagesToShow.splice(index, 1);
        }, function (err) {
            _this.loadingProvider.dismissLoader();
        });
    };
    MessagePage.prototype.drag = function (event, msg) {
        var _this = this;
        var slidingItem = document.getElementById('slidingItem' + msg.id);
        setTimeout(function () {
            slidingItem.close();
            _this.replyMessage.id = msg.id;
            _this.replyMessage.message = msg.message;
            _this.replyMessage.displayName = msg.displayName;
            _this.replyMessage.type = msg.type;
        }, 100);
    };
    MessagePage.prototype.getMessage = function (msg) {
        var exp = /(https?:\/\/[^\s]+)/g;
        var text = msg.replace(exp, "<a href='$1' class='url' target='_blank'>$1</a>");
        return text;
    };
    MessagePage.prototype.getRepliedMessage = function (msgID) {
        var index = this.messages.findIndex(function (item) { return item.id === msgID; });
        return this.messages[index];
    };
    MessagePage.prototype.scrollTo = function (elementId) {
        console.log('elementID', elementId);
        var y = document.getElementById(elementId).offsetTop;
        document.getElementById(elementId).classList.add('blur');
        this.content.scrollToPoint(0, y - 100);
        setTimeout(function () {
            document.getElementById(elementId).classList.remove('blur');
        }, 1000);
    };
    MessagePage.ctorParameters = function () { return [
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
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_14__["FirestoreService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_15__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], MessagePage.prototype, "contentArea", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileInputButton", null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MessagePage.prototype, "fileInputButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoInputButton", null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MessagePage.prototype, "videoInputButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessagePage.prototype, "myInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], MessagePage.prototype, "content", void 0);
    MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.page.scss */ "./src/app/pages/message/message.page.scss")).default]
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
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_14__["FirestoreService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_15__["CommonService"]])
    ], MessagePage);
    return MessagePage;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_12__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=pages-message-message-module.js.map