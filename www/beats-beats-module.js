(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["beats-beats-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/beats/beats.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/beats/beats.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"favorite\">\n    <ion-title>\n <img id=\"hide\" alt=\"appicon\" height=\"22\" style=\"margin-right: 0px;\" class=\"ion-float-right\" src=\"assets/images/logo1.png\"/>\n    </ion-title>\n     <ion-button fill=\"clear\" class=\"writer\" menu=\"second\" autoHide=\"true\" routerLink=\"/feed\" routerDirection=\"backward\">\n    <ion-icon style=\"color: #351010; font-size: 26px; margin-left: 0px;\"\n    icon=\"../../../../assets/icons/chevron-back.svg\"></ion-icon>\n  </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t\n\n<iframe src=\"https://dontramp.com/hq/beats\" frameborder=\"0\" allowtransparency=\"yes\" scrolling=\"yes\" style=\"width:100%;  height: 100vh; margin-top: 0px;\" ></iframe>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/beats/beats.module.ts":
/*!***************************************!*\
  !*** ./src/app/beats/beats.module.ts ***!
  \***************************************/
/*! exports provided: BeatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeatsPageModule", function() { return BeatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _beats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./beats.page */ "./src/app/beats/beats.page.ts");







var routes = [
    {
        path: '',
        component: _beats_page__WEBPACK_IMPORTED_MODULE_6__["BeatsPage"]
    }
];
var BeatsPageModule = /** @class */ (function () {
    function BeatsPageModule() {
    }
    BeatsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_beats_page__WEBPACK_IMPORTED_MODULE_6__["BeatsPage"]]
        })
    ], BeatsPageModule);
    return BeatsPageModule;
}());



/***/ }),

/***/ "./src/app/beats/beats.page.scss":
/*!***************************************!*\
  !*** ./src/app/beats/beats.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-float-right {\n  Margin-top: -1px;\n}\n\n.writer {\n  position: fixed;\n  Top: 5px;\n  Left: 5px;\n  z-index: 999;\n}\n\n@media (min-width: 829px) {\n  img#hide {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL2JlYXRzL2JlYXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYmVhdHMvYmVhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iZWF0cy9iZWF0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWZsb2F0LXJpZ2h0e1xuICAgXG4gICAgTWFyZ2luLXRvcDogLTFweDtcbn1cblxuLndyaXRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBUb3A6IDVweDtcclxuICAgIExlZnQ6IDVweDtcclxuICAgIHotaW5kZXg6IDk5OTsgXHJcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ODI5cHgpIHtcbiAgaW1nI2hpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iLCIuaW9uLWZsb2F0LXJpZ2h0IHtcbiAgTWFyZ2luLXRvcDogLTFweDtcbn1cblxuLndyaXRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgVG9wOiA1cHg7XG4gIExlZnQ6IDVweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODI5cHgpIHtcbiAgaW1nI2hpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/beats/beats.page.ts":
/*!*************************************!*\
  !*** ./src/app/beats/beats.page.ts ***!
  \*************************************/
/*! exports provided: BeatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeatsPage", function() { return BeatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BeatsPage = /** @class */ (function () {
    function BeatsPage() {
    }
    BeatsPage.prototype.ngOnInit = function () {
    };
    BeatsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-beats',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beats.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/beats/beats.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beats.page.scss */ "./src/app/beats/beats.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BeatsPage);
    return BeatsPage;
}());



/***/ })

}]);
//# sourceMappingURL=beats-beats-module.js.map