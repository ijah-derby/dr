(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browser-browser-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/browser/browser.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/browser/browser.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar class=\"tool\" color=\"favorite\">\n  <ion-buttons slot=\"start\">\n    <!-- <ion-menu-button menu=\"first\" color=\"medium\" size=\"small\" autoHide=\"true\"></ion-menu-button> -->\n    <ion-icon\n    style=\"color: #351010; font-size: 26px; margin-left: 12px;\"\n    icon=\"../../../../assets/icons/chevron-back.svg\"\n    (click)=\"goBack()\"\n  ></ion-icon>\n  </ion-buttons>\n    <ion-buttons slot=\"end\">\n    <img\n      id=\"hide\"\n      alt=\"appicon\"\n      height=\"22\"\n      class=\"ion-float-right\"\n      src=\"assets/images/logo1.png\"\n    />\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content>\n  <iframe style=\"width: 100%; height: 100vh; position: relative; left: 0px; margin: 0; padding: 0; z-index: 999;\" src=\"https://dontramp.com/hq/knowledge\" allow=\"fullscreen\" scrolling=\"yes\" frameborder=\"0\"></iframe>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/browser/browser.module.ts":
/*!*******************************************!*\
  !*** ./src/app/browser/browser.module.ts ***!
  \*******************************************/
/*! exports provided: BrowserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPageModule", function() { return BrowserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _browser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browser.page */ "./src/app/browser/browser.page.ts");







var routes = [
    {
        path: '',
        component: _browser_page__WEBPACK_IMPORTED_MODULE_6__["BrowserPage"]
    }
];
var BrowserPageModule = /** @class */ (function () {
    function BrowserPageModule() {
    }
    BrowserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_browser_page__WEBPACK_IMPORTED_MODULE_6__["BrowserPage"]]
        })
    ], BrowserPageModule);
    return BrowserPageModule;
}());



/***/ }),

/***/ "./src/app/browser/browser.page.scss":
/*!*******************************************!*\
  !*** ./src/app/browser/browser.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-float-right {\n  margin-right: 15px;\n}\n\n.tool {\n  box-shadow: 0px 0.2px 0px #a8a8a8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL2Jyb3dzZXIvYnJvd3Nlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2Jyb3dzZXIvYnJvd3Nlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVJO0VBQ0ksNENBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2Jyb3dzZXIvYnJvd3Nlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWZsb2F0LXJpZ2h0e1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG5cbiAgICAudG9vbCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwLjJweCAwcHggI2E4YThhOCFpbXBvcnRhbnQ7XG4gICAgICB9IiwiLmlvbi1mbG9hdC1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnRvb2wge1xuICBib3gtc2hhZG93OiAwcHggMC4ycHggMHB4ICNhOGE4YTggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/browser/browser.page.ts":
/*!*****************************************!*\
  !*** ./src/app/browser/browser.page.ts ***!
  \*****************************************/
/*! exports provided: BrowserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPage", function() { return BrowserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var BrowserPage = /** @class */ (function () {
    function BrowserPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BrowserPage.prototype.ngOnInit = function () {
    };
    BrowserPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    BrowserPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    BrowserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browser',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./browser.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/browser/browser.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./browser.page.scss */ "./src/app/browser/browser.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], BrowserPage);
    return BrowserPage;
}());



/***/ })

}]);
//# sourceMappingURL=browser-browser-module.js.map