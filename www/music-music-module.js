(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\r\n  <img\r\n    id=\"hide\"\r\n    alt=\"appicon\"\r\n    height=\"22\"\r\n    class=\"ion-float-right\"\r\n    src=\"assets/images/logo1.png\"\r\n  />\r\n\r\n  <br />\r\n\r\n  <ion-button\r\n    fill=\"clear\"\r\n    class=\"writer\"\r\n    menu=\"second\"\r\n    autoHide=\"true\"\r\n    (click)=\"goBack()\"\r\n  >\r\n    <ion-icon name=\"md-close\"></ion-icon>\r\n  </ion-button>\r\n\r\n  <ion-menu-button class=\"play\" menu=\"second\" autoHide=\"true\">\r\n    <ion-icon name=\"md-play\"></ion-icon>\r\n  </ion-menu-button>\r\n\r\n  <iframe\r\n    src=\"https://dontramp.com/writer/sticky_note_demo.html\"\r\n    frameborder=\"0\"\r\n    allowtransparency=\"yes\"\r\n    scrolling=\"yes\"\r\n    style=\"width: 100%; height: 100vh; margin-top: 40px;\"\r\n  ></iframe>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/music/music.module.ts":
/*!***************************************!*\
  !*** ./src/app/music/music.module.ts ***!
  \***************************************/
/*! exports provided: MusicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPageModule", function() { return MusicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _music_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music.page */ "./src/app/music/music.page.ts");







var routes = [
    {
        path: '',
        component: _music_page__WEBPACK_IMPORTED_MODULE_6__["MusicPage"]
    }
];
var MusicPageModule = /** @class */ (function () {
    function MusicPageModule() {
    }
    MusicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_music_page__WEBPACK_IMPORTED_MODULE_6__["MusicPage"]]
        })
    ], MusicPageModule);
    return MusicPageModule;
}());



/***/ }),

/***/ "./src/app/music/music.page.scss":
/*!***************************************!*\
  !*** ./src/app/music/music.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-float-right {\n  margin-right: 15px;\n}\n\n.writer {\n  position: fixed;\n  Top: 5px;\n  Left: 5px;\n  z-index: 999;\n}\n\n.play {\n  position: fixed;\n  Top: 2px;\n  Left: 70px;\n  z-index: 999;\n}\n\n@media (min-width: 829px) {\n  img#hide {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL211c2ljL211c2ljLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXVzaWMvbXVzaWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esa0JBQUE7QUNDQTs7QURHQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBSjs7QURJQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tdXNpYy9tdXNpYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWZsb2F0LXJpZ2h0e1xubWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG59XG5cbi53cml0ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgVG9wOiA1cHg7XHJcbiAgICBMZWZ0OiA1cHg7XHJcbiAgICB6LWluZGV4OiA5OTk7IFxyXG59XG5cbi5wbGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIFRvcDogMnB4O1xyXG4gICAgTGVmdDogNzBweDtcclxuICAgIHotaW5kZXg6IDk5OTsgXHJcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDo4MjlweCkge1xuICBpbWcjaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIi5pb24tZmxvYXQtcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi53cml0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIFRvcDogNXB4O1xuICBMZWZ0OiA1cHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnBsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIFRvcDogMnB4O1xuICBMZWZ0OiA3MHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MjlweCkge1xuICBpbWcjaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/music/music.page.ts":
/*!*************************************!*\
  !*** ./src/app/music/music.page.ts ***!
  \*************************************/
/*! exports provided: MusicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPage", function() { return MusicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MusicPage = /** @class */ (function () {
    function MusicPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MusicPage.prototype.ngOnInit = function () { };
    MusicPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    MusicPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    MusicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-music",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music.page.scss */ "./src/app/music/music.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], MusicPage);
    return MusicPage;
}());



/***/ })

}]);
//# sourceMappingURL=music-music-module.js.map