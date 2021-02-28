(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/upload-progress/upload-progress.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/upload-progress/upload-progress.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <ion-progress-bar [value]=\"percentage/100\"></ion-progress-bar>\n  <p>{{percentage}}% Uploaded</p>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group/group.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group/group.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"messages\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"groupInfo()\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"messages\" #content>\n    <p class=\"center\" *ngIf=\"startIndex > 0\"><span tappable (click)=\"loadPreviousMessages()\">Load previous\n        messages</span></p>\n    <div *ngFor=\"let message of messagesToShow\">\n      <!--  System Message -->\n      <div *ngIf=\"isSystemMessage(message)\" class=\"system-msg\">\n        <p>\n          <ion-icon name=\"{{message.icon}}\"></ion-icon>\n          {{message.message}} {{message.date | DateFormat}}\n        </p>\n      </div>\n      <!--  Message -->\n      <div *ngIf=\"isSender(message) && !isSystemMessage(message)\" class=\"chatbox right\">\n\n        <div *ngIf=\"isSender(message) && !isSystemMessage(message)\">\n          <div class=\"msg-header\" (click)=\"viewUser(message.sender)\">\n            <img *ngIf=\"!message.avatar\" src=\"../../../assets/images/default-group.png\" alt=\"\">\n            <img *ngIf=\"message.avatar\" [src]=\"message.avatar\" alt=\"\">\n            <h6 class=\"msg-name\">{{message.displayName ?  message.displayName : 'User Deleted'}}</h6>\n          </div>\n          <div *ngIf=\"message.type == 'text'\">\n            <p>{{message.message}}</p>\n            <span>{{message.date | DateFormat}}</span>\n          </div>\n          <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\n          <div *ngIf=\"message.type == 'image'\">\n            <img tappable (click)=\"enlargeImage(message.url)\" src=\"{{message.url}}\" (load)=\"scrollBottom()\"\n              onError=\"this.src='./assets/images/default-dp.png'\" />\n            <span>{{message.date | DateFormat}}</span>\n          </div>\n          <div *ngIf=\"message.type == 'video'\">\n            <video controls width=\"100%\">\n              <source src=\"{{message.url}}\" type=\"video/mp4\">\n            </video>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"!isSender(message) && !isSystemMessage(message)\" class=\"chatbox left\">\n        <div class=\"msg-header\" (click)=\"viewUser(message.sender)\">\n          <img *ngIf=\"!message.avatar\" src=\"../../../assets/images/default-group.png\" alt=\"\" tappable (load)=\"scrollBottom()\">\n          <img *ngIf=\"message.avatar\" [src]=\"message.avatar\" alt=\"\" tappable (load)=\"scrollBottom()\">\n          <h6 class=\"msg-name\">{{message.displayName ?  message.displayName : 'User Deleted'}}</h6>\n        </div>\n        <!-- <img src=\"{{message.avatar}}\" tappable (click)=\"viewUser(message.sender)\" (load)=\"scrollBottom()\"\n          onError=\"this.src='./assets/images/default-dp.png'\" style=\"height:30px; border-radius: 100%;float:left;\" /> -->\n        <div *ngIf=\"message.type == 'text'\">\n          <p>{{message.message}}</p>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\n        <div *ngIf=\"message.type == 'image'\">\n          <img tappable (click)=\"enlargeImage(message.url)\" src=\"{{message.url}}\"\n            onError=\"this.src='./assets/images/default-dp.png'\" (load)=\"scrollBottom()\" />\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div *ngIf=\"message.type == 'video'\">\n          <video controls width=\"100%\" #videoPlayer>\n            <source src=\"{{message.url}}\" type=\"video/mp4\">\n          </video>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n<!-- Message Box -->\n<ion-footer>\n  <ion-toolbar>\n    <ion-item lines=\"none\">\n      <ion-button slot=\"start\" fill=\"clear\" (click)=\"attach()\">\n        <ion-icon name=\"attach\"></ion-icon>\n      </ion-button>\n      <ion-textarea autoGrow=\"true\" style=\"height:100%\" (ionFocus)=\"scrollBottom()\" rows=\"1◊\"\n        placeholder=\"Type your message\" [(ngModel)]=\"message\">\n      </ion-textarea>\n      <ion-button slot=\"end\" color=\"primary\" fill=\"clear\" (click)=\"send('text')\" [disabled]=\"!message\">\n        <ion-icon name=\"send\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n\n<input\n  hidden\n  #fileInputButton\n  type=\"file\"\n  (change)=\"detectFiles($event)\"\n  multiple\n/>\n<input hidden #videoInputButton type=\"file\" (change)=\"detectVideo($event)\" />");

/***/ }),

/***/ "./src/app/component/upload-progress/upload-progress.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/upload-progress/upload-progress.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 30px;\n}\n\np {\n  margin: 0;\n  text-align: center;\n  margin-top: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL2NvbXBvbmVudC91cGxvYWQtcHJvZ3Jlc3MvdXBsb2FkLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvdXBsb2FkLXByb2dyZXNzL3VwbG9hZC1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91cGxvYWQtcHJvZ3Jlc3MvdXBsb2FkLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogOXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/upload-progress/upload-progress.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/upload-progress/upload-progress.component.ts ***!
  \************************************************************************/
/*! exports provided: UploadProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadProgressComponent", function() { return UploadProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");




var UploadProgressComponent = /** @class */ (function () {
    function UploadProgressComponent(firestore, modalCtrl) {
        var _this = this;
        this.firestore = firestore;
        this.modalCtrl = modalCtrl;
        this.percentage = 0;
        this.firestore.progressVal.subscribe(function (val) {
            _this.percentage = val;
            if (_this.percentage === 100) {
                _this.modalCtrl.dismiss();
            }
        });
    }
    UploadProgressComponent.prototype.ngOnInit = function () { };
    UploadProgressComponent.ctorParameters = function () { return [
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    UploadProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-progress',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-progress.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/upload-progress/upload-progress.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-progress.component.scss */ "./src/app/component/upload-progress/upload-progress.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], UploadProgressComponent);
    return UploadProgressComponent;
}());



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
/* harmony import */ var src_app_component_upload_progress_upload_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/upload-progress/upload-progress.component */ "./src/app/component/upload-progress/upload-progress.component.ts");









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
            declarations: [_group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"], src_app_component_upload_progress_upload_progress_component__WEBPACK_IMPORTED_MODULE_8__["UploadProgressComponent"]],
            entryComponents: [src_app_component_upload_progress_upload_progress_component__WEBPACK_IMPORTED_MODULE_8__["UploadProgressComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".system-msg {\n  text-align: center;\n  color: #ccc;\n  font-size: 14px;\n}\n\nion-textarea {\n  font-size: 14px;\n  resize: both;\n  border-radius: 4px;\n  border: 2px solid #eee;\n  padding: 0px 8px;\n}\n\n.msg-header {\n  text-align: left;\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 12px;\n}\n\n.msg-header img {\n  width: 30px;\n  height: 30px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  float: left;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.msg-header .msg-name {\n  margin: 0;\n  display: inline;\n  font-weight: 600;\n  position: relative;\n  top: 2px;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL3BhZ2VzL2dyb3VwL2dyb3VwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3JvdXAvZ3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFSTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncm91cC9ncm91cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zeXN0ZW0tbXNne1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGNvbG9yOiNjY2M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tdGV4dGFyZWF7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHJlc2l6ZTogYm90aDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xufVxuXG4ubXNnLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5tc2ctbmFtZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMnB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxufSIsIi5zeXN0ZW0tbXNnIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHJlc2l6ZTogYm90aDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiAwcHggOHB4O1xufVxuXG4ubXNnLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cbi5tc2ctaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubXNnLWhlYWRlciAubXNnLW5hbWUge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */");

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
/* harmony import */ var src_app_component_upload_progress_upload_progress_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/component/upload-progress/upload-progress.component */ "./src/app/component/upload-progress/upload-progress.component.ts");















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
        // Get group details
        var _this = this;
        this.subscription = this.dataProvider.getGroup(this.groupId).subscribe(function (group) {
            if (group) {
                _this.title = group.name;
                // Get group messages
                _this.dataProvider.getGroupMessages(group.id).subscribe(function (messagesRes) {
                    var messages = messagesRes;
                    if (messages == null || messages == undefined)
                        messages = [];
                    if (_this.messages != null && _this.messages != undefined) {
                        // Just append newly added messages to the bottom of the view.
                        if (messages.length > _this.messages.length) {
                            var message_1 = messages[messages.length - 1];
                            _this.dataProvider.getUser(message_1.sender).subscribe(function (user) {
                                message_1.avatar = user.photoURL;
                                message_1.displayName = user.displayName;
                            });
                            _this.messages.push(message_1);
                            // Also append to messagesToShow.
                            _this.messagesToShow.push(message_1);
                            console.log('msgs', _this.messagesToShow);
                        }
                    }
                    else {
                        // Get all messages, this will be used as reference object for messagesToShow.
                        _this.messages = [];
                        messages.forEach(function (message) {
                            _this.dataProvider.getUser(message.sender).subscribe(function (user) {
                                if (user.id != null) {
                                    message.avatar = user.photoURL;
                                    message.displayName = user.displayName;
                                }
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
                        _this.loadingProvider.dismissLoader();
                    }
                });
            }
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.messages) {
                    that.messages.forEach(function (message) {
                        message.date = new Date(message.date);
                    });
                }
            }, 60000);
        }
        setTimeout(function () { return _this.scrollBottom(); }, 1000);
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
        // Clone an instance of messages object so it will not directly be updated.
        // The messages object should be updated by our observer declared on ionViewDidLoad.
        var messages = JSON.parse(JSON.stringify(this.messages));
        var obj = {
            date: new Date().toString(),
            sender: firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
            type: type,
            message: this.message,
            id: this.firestore.createId()
        };
        // Update group messages.
        this.firestore.set("groups/" + this.groupId + "/messages/" + obj.id, obj);
        // this.dataProvider.getGroup(this.groupId).update({ messages: messages });
        // Clear messagebox.
        this.message = '';
        this.scrollBottom();
    };
    GroupPage.prototype.enlargeImage = function (img) {
        // this.modalCtrl.create({
        //   component: ImagemodalPage,
        //   componentProps: {
        //     img: img
        //   }
        // }).then(res => res.present())
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
                            _this.imageProvider.uploadGroupVideoMessage(_this.groupId).then(function (url) {
                                _this.displayProgress();
                                _this.firestore.uploadVideoString(url, Date.now() + "-" + _this.currentUser.uid).then(function (link) {
                                    // this.loadingProvider.dismissLoader();
                                    _this.sendVideoMessage(url);
                                });
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
        var messages = JSON.parse(JSON.stringify(this.messages));
        var obj = {
            date: new Date().toString(),
            sender: firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
            type: 'image',
            url: url,
            id: this.firestore.createId()
        };
        this.firestore.set("groups/" + this.groupId + "/messages/" + obj.id, obj);
        // this.dataProvider.getGroup(this.groupId).update({
        //   messages: messages
        // });
        this.message = '';
    };
    GroupPage.prototype.sendVideoMessage = function (url) {
        var messages = JSON.parse(JSON.stringify(this.messages));
        var obj = {
            date: new Date().toString(),
            sender: firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
            type: 'video',
            url: url,
            id: this.firestore.createId()
        };
        this.firestore.set("groups/" + this.groupId + "/messages/" + obj.id, obj);
        this.scrollBottom();
        // this.dataProvider.getGroup(this.groupId).update({
        //   messages: messages
        // });
        this.message = '';
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
            _this.displayProgress();
            _this.firestore
                .uploadVideoString(url, Date.now() + "-" + _this.currentUser.uid)
                .then(function (link) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.sendVideoMessage(link);
                    this.loadingProvider.dismissLoader();
                    return [2 /*return*/];
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
    GroupPage.prototype.displayProgress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_component_upload_progress_upload_progress_component__WEBPACK_IMPORTED_MODULE_14__["UploadProgressComponent"],
                            cssClass: 'upload-modal',
                            backdropDismiss: false
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
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