(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-setting-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/setting/setting.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/setting/setting.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button>\n                <ion-icon class=\"fs-24 txt1\" name=\"ios-arrow-round-forward\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n\n        <ion-title>Settings</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding fullscreen common-parallax [scrollEvents]=\"true\">\n\n    <h2 class=\"txt1 uppercase fs-14 fw-600\">What color do you love?</h2>\n    <p class=\"txt3 fs-12 pdr-50\">Select the color you like, the color will change over the global.</p>\n    <hr/>\n    <hr/>\n    <ion-button color=\"primary\" (click)=\"changeTheme('')\">Default</ion-button>\n    <ion-button *ngFor=\"let item of list_theme\" color=\"primary\" (click)=\"changeTheme(item)\">{{item.name}}</ion-button>\n    <hr>\n    <hr>\n    <h3 class=\"txt3 uppercase fs-12\">Button color theme</h3>\n    <hr>\n    <ion-button color=\"primary\">Primary</ion-button>\n    <ion-button color=\"secondary\">Secondary</ion-button>\n    <ion-button color=\"tertiary\">Tertiary</ion-button>\n    <ion-button color=\"medium\">Medium</ion-button>\n    <ion-button color=\"dark\">Dark</ion-button>\n    <ion-button color=\"light\">light</ion-button>\n    <ion-button color=\"info\">info</ion-button>\n    <ion-button color=\"success\">success</ion-button>\n    <ion-button color=\"warning\">warning</ion-button>\n    <ion-button color=\"danger\">danger</ion-button>\n    <hr>\n    <hr>\n    <h3 class=\"txt3 uppercase fs-12\">Checkbox color theme</h3>\n    <hr>\n    <ion-checkbox margin-end color=\"primary\" checked></ion-checkbox>\n    <ion-checkbox margin-end color=\"secondary\"></ion-checkbox>\n    <ion-checkbox margin-end color=\"tertiary\" checked></ion-checkbox>\n    <ion-checkbox margin-end color=\"dark\" checked></ion-checkbox>\n    <ion-checkbox margin-end color=\"light\" checked></ion-checkbox>\n    <ion-checkbox margin-end color=\"medium\" checked></ion-checkbox>\n    <hr>\n    <ion-checkbox margin-end color=\"success\" checked></ion-checkbox>\n    <ion-checkbox margin-end color=\"warning\" checked></ion-checkbox>\n    <ion-checkbox color=\"danger\" checked></ion-checkbox>\n    <hr>\n    <hr>\n    <hr>\n    <hr>\n    <hr>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/setting/setting.module.ts":
/*!******************************************************!*\
  !*** ./src/pages/Shopping/setting/setting.module.ts ***!
  \******************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/pages/Shopping/setting/setting.page.ts");







var routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
    }
];
var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
        })
    ], SettingPageModule);
    return SettingPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/setting/setting.page.scss":
/*!******************************************************!*\
  !*** ./src/pages/Shopping/setting/setting.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvU2hvcHBpbmcvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/pages/Shopping/setting/setting.page.ts":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/setting/setting.page.ts ***!
  \****************************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/theme */ "./src/pages/Shopping/providers/theme.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");


// import { environment } from '';


var SettingPage = /** @class */ (function () {
    function SettingPage(themeProvider) {
        this.themeProvider = themeProvider;
        this.list_theme = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].themes;
    }
    SettingPage.prototype.changeTheme = function (name) {
        this.themeProvider.setTheme(name);
    };
    SettingPage.ctorParameters = function () { return [
        { type: _providers_theme__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"] }
    ]; };
    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/setting/setting.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.page.scss */ "./src/pages/Shopping/setting/setting.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_theme__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"]])
    ], SettingPage);
    return SettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-setting-setting-module.js.map