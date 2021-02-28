(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-message-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"messages\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"viewUser(userId)\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" #content>\n  <div class=\"messages\" #contentArea>\n    <p class=\"center\" *ngIf=\"startIndex > 0\"><span tappable (click)=\"loadPreviousMessages()\">Load previous\n        messages</span></p>\n    <div *ngFor=\"let message of messagesToShow\">\n      <div *ngIf=\"isSender(message)\" class=\"chatbox right sender\">\n        <div *ngIf=\"message.type == 'text'\">\n          <p style=\"margin:0\">{{message.message}}</p>\n        </div>\n        <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\n        <div *ngIf=\"message.type == 'image'\">\n          <img tappable (click)=\"enlargeImage(message.message)\" src=\"{{message.message}}\" (load)=\"scrollBottom()\" />\n        </div>\n        <div *ngIf=\"message.type == 'video'\">\n          <video controls width=\"100%\">\n            <source src=\"{{message.message}}\" type=\"video/mp4\">\n          </video>\n        </div>\n        <span>{{message.date | DateFormat}}</span>\n      </div>\n      <div *ngIf=\"!isSender(message)\" class=\"chatbox left\">\n        <div *ngIf=\"message.type == 'text'\">\n          <p style=\"margin:0\">{{message.message}}</p>\n        </div>\n        <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\n        <div *ngIf=\"message.type == 'image'\">\n          <img tappable (click)=\"enlargeImage(message.message)\" src=\"{{message.message}}\" (load)=\"scrollBottom()\" />\n        </div>\n        <div *ngIf=\"message.type == 'video'\">\n          <video controls width=\"100%\">\n            <source src=\"{{message.message}}\" type=\"video/mp4\">\n          </video>\n        </div>\n        <span>{{message.date | DateFormat}}</span>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item lines=\"none\">\n      <ion-button slot=\"start\" fill=\"clear\" (click)=\"attach()\">\n        <ion-icon src=\"../../../assets/icons/attach.svg\"></ion-icon>\n      </ion-button>\n      <ion-textarea style=\"height: 100%;\" autoGrow=\"true\" rows=\"1\" placeholder=\"Type your message\"\n        [(ngModel)]=\"message\"></ion-textarea>\n      <ion-button slot=\"end\" color=\"primary\" fill=\"clear\" (click)=\"send('text')\" [disabled]=\"!message\">\n        send\n      </ion-button>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n<input\n  hidden\n  #fileInputButton\n  type=\"file\"\n  (change)=\"detectFiles($event)\"\n  multiple\n/>\n<input hidden #videoInputButton type=\"file\" (change)=\"detectVideo($event)\" />");

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
/* harmony default export */ __webpack_exports__["default"] = (":host .title-img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-size: contain !important;\n  background-color: var(--ion-color-light-shade);\n  margin-right: 10px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n:host .clear {\n  clear: both;\n}\n:host .content-wrapper {\n  height: 100%;\n}\n:host .content-wrapper .from-me,\n:host .content-wrapper .from-them {\n  position: relative;\n  border-radius: 1em;\n  margin: 10px 0;\n  overflow: hidden;\n}\n:host .content-wrapper .from-me .image,\n:host .content-wrapper .from-them .image {\n  width: 200px;\n  height: 200px;\n}\n:host .content-wrapper .from-me .image-group,\n:host .content-wrapper .from-them .image-group {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-rows: auto;\n  grid-gap: 0.5rem;\n  padding: 10px 10px 5px;\n  border-top-left-radius: 1em;\n}\n:host .content-wrapper .from-me .image-group .image-group-image,\n:host .content-wrapper .from-them .image-group .image-group-image {\n  height: 100px;\n  width: 100px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 1em;\n}\n:host .content-wrapper .from-me .text,\n:host .content-wrapper .from-them .text {\n  padding: 10px 20px;\n  margin: 0;\n}\n:host .content-wrapper .from-me .text ::ng-deep p,\n:host .content-wrapper .from-them .text ::ng-deep p {\n  margin: 0;\n}\n:host .content-wrapper .from-me .text ::ng-deep a,\n:host .content-wrapper .from-them .text ::ng-deep a {\n  color: var(--ion-color-primary);\n}\n:host .content-wrapper .from-me {\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light-shade);\n  border-top-right-radius: 0px;\n  float: right;\n}\n:host .content-wrapper .from-them {\n  background: var(--ion-color-gradient);\n  border-top-left-radius: 0px;\n  color: var(--ion-color-light);\n  float: left;\n}\n:host ion-footer textarea {\n  padding: 5px 10px;\n  overflow: hidden;\n  height: 40px !important;\n  width: calc(100% - 20px);\n  border: 1px solid var(--ion-color-medium);\n  outline: none;\n  resize: none;\n  margin: 5px 10px 0px;\n  border-radius: 20px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL3BhZ2VzL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUNBTjtBREVJO0VBQ0UsV0FBQTtBQ0FOO0FER0k7RUFDRSxZQUFBO0FDRE47QURHTTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRFI7QURHUTs7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0FWO0FER1E7O0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNBVjtBREVVOztFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQ0NaO0FER1E7O0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQVY7QURHWTs7RUFDRSxTQUFBO0FDQWQ7QURHWTs7RUFDRSwrQkFBQTtBQ0FkO0FETU07RUFDRSw0QkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDSlI7QURPTTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNMUjtBRFlNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNFLFlBQUE7QUNWViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLnRpdGxlLWltZyB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgfVxuICAgIC5jbGVhciB7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICB9XG4gIFxuICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICBcbiAgICAgIC5mcm9tLW1lLFxuICAgICAgLmZyb20tdGhlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5pbWFnZS1ncm91cCB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICAgICAgICAgIGdyaWQtZ2FwOiAwLjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxZW07XG4gIFxuICAgICAgICAgIC5pbWFnZS1ncm91cC1pbWFnZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgXG4gICAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLmZyb20tbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gIFxuICAgICAgLmZyb20tdGhlbSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudCk7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICBcbiAgXG4gICAgaW9uLWZvb3RlciB7XG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAxMHB4IDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIiwiOmhvc3QgLnRpdGxlLWltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IC5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIC5pbWFnZSxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAuaW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIC5pbWFnZS1ncm91cCxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAuaW1hZ2UtZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMWVtO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAuaW1hZ2UtZ3JvdXAgLmltYWdlLWdyb3VwLWltYWdlLFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIC5pbWFnZS1ncm91cCAuaW1hZ2UtZ3JvdXAtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIC50ZXh0LFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIC50ZXh0IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIC50ZXh0IDo6bmctZGVlcCBwLFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIC50ZXh0IDo6bmctZGVlcCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAudGV4dCA6Om5nLWRlZXAgYSxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAudGV4dCA6Om5nLWRlZXAgYSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG46aG9zdCBpb24tZm9vdGVyIHRleHRhcmVhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIG1hcmdpbjogNXB4IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

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
        _this.startIndex = -1;
        // Set number of messages to show.
        _this.numberOfMessages = 10;
        _this.route.queryParamMap.subscribe(function (params) {
            _this.userId = params.get("id");
        });
        return _this;
    }
    MessagePage.prototype.ngOnInit = function () {
    };
    MessagePage.prototype.ionViewDidEnter = function () {
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
                                console.log("conv fetched in chatWith", conversation);
                                // Get conversation
                                _this.dataProvider.getConversationMessages(_this.conversationId).subscribe(function (messagesRes) {
                                    var messages = messagesRes;
                                    console.log('messages', messages);
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
    MessagePage.prototype.loadPreviousMessages = function () {
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
    MessagePage.prototype.ionViewWillLeave = function () {
        this.setMessagesRead();
    };
    // Check if currentPage is active, then update user's messagesRead.
    MessagePage.prototype.setMessagesRead = function () {
        var _this = this;
        this.firestore.col$('conversations/' + this.conversationId + '/messages').subscribe(function (snap) {
            if (snap.length > 0) {
                _this.firestore.update('users/' + _this.loggedInUserId + '/conversations/' + _this.userId, { messagesRead: snap.length });
            }
            _this.loadingProvider.dismissLoader();
        });
    };
    MessagePage.prototype.scrollBottom = function () {
        var _this = this;
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
                id: msgID
            };
            if (this.conversationId) {
                var messages = JSON.parse(JSON.stringify(this.messages));
                // Update conversation on database.
                this.firestore.set('conversations/' + this.conversationId + '/messages/' + msgID, msg_1);
                // Clear messagebox.
                this.message = '';
                this.scrollBottom();
            }
            else {
                console.log("else");
                var messages = [];
                messages.push(msg_1);
                // New Conversation with friend.
                var users = [];
                users.push(this.loggedInUserId);
                users.push(this.userId);
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
                    });
                    _this.firestore.set('users/' + _this.userId + '/conversations/' + _this.loggedInUserId, {
                        conversationId: conversationId,
                        messagesRead: 0
                    });
                });
                this.scrollBottom();
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
                            _this.imageProvider.uploadPhotoMessage(_this.conversationId, _this.camera.PictureSourceType.CAMERA).then(function (url) {
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
                            _this.imageProvider.uploadPhotoMessage(_this.conversationId, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
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
    MessagePage.prototype.enlargeImage = function (img) {
        // this.modalCtrl.create({
        //   component: ImagemodalPage,
        //   componentProps: {
        //     img: img
        //   }
        // }).then(res => res.present())
    };
    MessagePage.prototype.detectFiles = function (event) {
        var _this = this;
        this.loadingProvider.presentProcessingLoading();
        this.commonService.getImagesFromFiles(event).then(function (images) {
            console.log('images', images);
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