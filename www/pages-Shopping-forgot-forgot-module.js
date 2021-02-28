(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/forgot/forgot.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/forgot/forgot.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button class=\"fs-24 txt1\" text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>Forgot</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<div class=\"wrapp-pst\" padding>\n\t\t<div padding class=\"mgt-70\">\n\t\t\t<h1 class=\"uppercase fw-900 fs-30 spacing-3 mgb-0\">Kiwi</h1>\n\t\t\t<h3 class=\"uppercase fw-600 fs-20 spacing-2 mgl-20 pdt-0\">Forgot Password</h3>\n\t\t\t<p class=\"pdl-20 fs-12\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n\t\t</div>\n\n\n\t\t<div class=\"wrapp-form mgt-50\" padding>\n\t\t\t<form [formGroup]=\"resetPasswordForm\" (submit)=\"resetPassword()\" novalidate>\n\t\t\t\t<ion-label stacked class=\"mgb-5 pdl-10\">Email</ion-label>\n\t\t\t\t<ion-list class=\"ani-bottom-to-top mgb-0\">\n\t\t\t\t\t<ion-item class=\"white-opct bdra-30\">\n\t\t\t\t\t\t<ion-input #email formControlName=\"email\" type=\"email\" placeholder=\"Your email address\" [class.invalid]=\"!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty\" class=\"\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\n\t\t\t\t<div class=\"error-message\" *ngIf=\"!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty\">\n\t\t\t\t\t<p class=\"fs-11 mgt-5\">Please enter a valid email.</p>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div padding class=\"\">\n\t\t\t\t\t<ion-button expand=\"block\" shape=\"round\" class=\"mgt-20 uppercase fw-600 spacing1 ani-bottom-to-top\" type=\"submit\">\n\t\t\t\t\t\tReset your Password\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/pages/Shopping/forgot/forgot.module.ts":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/forgot/forgot.module.ts ***!
  \****************************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/pages/Shopping/forgot/forgot.page.ts");








var routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]
    }
];
var ForgotPageModule = /** @class */ (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/forgot/forgot.page.scss":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/forgot/forgot.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzcmMvcGFnZXMvU2hvcHBpbmcvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQ0FBQTtBQ0NEIiwiZmlsZSI6InNyYy9wYWdlcy9TaG9wcGluZy9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXJ7XG5cdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/Shopping/forgot/forgot.page.ts":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/forgot/forgot.page.ts ***!
  \**************************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/email */ "./src/pages/Shopping/validators/email.ts");
/* harmony import */ var _providers_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/users */ "./src/pages/Shopping/providers/users.ts");






var ForgotPage = /** @class */ (function () {
    function ForgotPage(usersProv, alertCtrl, formBuilder) {
        this.usersProv = usersProv;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.resetPasswordForm = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _validators_email__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"].isValid])],
        });
    }
    ForgotPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.usersProv.resetPassword(this.resetPasswordForm.value.email).then(function (user) {
                _this.presentAlertErr('We just sent you a reset link to your email!');
            }, function (error) {
                _this.presentAlertErr(error.message);
            });
        }
    };
    ForgotPage.prototype.presentAlertErr = function (err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: err,
                            buttons: [{
                                    text: "Ok",
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPage.prototype.ngOnInit = function () {
    };
    ForgotPage.ctorParameters = function () { return [
        { type: _providers_users__WEBPACK_IMPORTED_MODULE_5__["UsersProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/forgot/forgot.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot.page.scss */ "./src/pages/Shopping/forgot/forgot.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_users__WEBPACK_IMPORTED_MODULE_5__["UsersProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ForgotPage);
    return ForgotPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-forgot-forgot-module.js.map