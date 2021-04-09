(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/signup/signup.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/signup/signup.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button class=\"fs-24 txt1\" text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>Forgot</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<div class=\"wrapp-pst\" padding>\n\t\t<div padding class=\"mgt-50\">\n\t\t\t<h1 class=\"uppercase fw-900 fs-30 spacing-3 mgb-0\">KIWI</h1>\n\t\t\t<h3 class=\"uppercase fw-600 fs-20 spacing-2 mgl-20 pdt-0\">Create a new account</h3>\n\t\t\t<p class=\"pdl-20 fs-12\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n\t\t</div>\n\n\t\t<br><br><br>\n\t\t<br><br>\n\n\t\t<div class=\"wrapp-form mgt--50\" padding>\n\t\t\t<form [formGroup]=\"signupForm\" (submit)=\"signupUser()\" novalidate>\n\t\t\t\t<br>\n\t\t\t\t<ion-label stacked class=\"mgb-5\">Full name</ion-label>\n\t\t\t\t<ion-list class=\"ani-bottom-to-top mgb-0\">\n\t\t\t\t\t<ion-item class=\"white-opct bdra-30\">\n\t\t\t\t\t\t<ion-input #email formControlName=\"fullname\" type=\"text\" placeholder=\"Your name\" [class.invalid]=\"!signupForm.controls.fullname.valid && signupForm.controls.fullname.dirty\" class=\"\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t\n\t\t\t\t<div class=\"error-message\" *ngIf=\"!signupForm.controls.fullname.valid && signupForm.controls.fullname.dirty\">\n\t\t\t\t\t<p class=\"fs-11 mgt-5\">Please enter a valid fullname.</p>\n\t\t\t\t</div>\n\n\t\t\t\t<br>\n\t\t\t\t<ion-label stacked class=\"mgb-5\">Email</ion-label>\n\t\t\t\t<ion-list class=\"ani-bottom-to-top mgb-0\">\n\t\t\t\t\t<ion-item class=\"white-opct bdra-30\">\n\t\t\t\t\t\t<ion-input #email formControlName=\"email\" type=\"email\" placeholder=\"Your email address\" [class.invalid]=\"!signupForm.controls.email.valid && signupForm.controls.email.dirty\" class=\"\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t\n\t\t\t\t<div class=\"error-message\" *ngIf=\"!signupForm.controls.email.valid && signupForm.controls.email.dirty\">\n\t\t\t\t\t<p class=\"fs-11 mgt-5\">Please enter a valid email.</p>\n\t\t\t\t</div>\n\n\t\t\t\t<br>\n\t\t\t\t<ion-label stacked class=\"mgb-5\">Phone</ion-label>\n\t\t\t\t<ion-list class=\"ani-bottom-to-top mgb-0\">\n\t\t\t\t\t<ion-item class=\"white-opct bdra-30\">\n\t\t\t\t\t\t<ion-input #email formControlName=\"phone\" type=\"number\" placeholder=\"Your phone address\" [class.invalid]=\"!signupForm.controls.phone.valid && signupForm.controls.phone.dirty\" class=\"\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t\n\t\t\t\t<div class=\"error-message\" *ngIf=\"!signupForm.controls.phone.valid && signupForm.controls.phone.dirty\">\n\t\t\t\t\t<p class=\"fs-11 mgt-5\">Please enter a valid phone.</p>\n\t\t\t\t</div>\n\n\n\t\t\t\t<br>\n\t\t\t\t<ion-label stacked class=\"mgb-5\">Address</ion-label>\n\t\t\t\t<ion-list class=\"ani-bottom-to-top mgb-0\">\n\t\t\t\t\t<ion-item class=\"white-opct bdra-30\">\n\t\t\t\t\t\t<ion-input #email formControlName=\"address\" type=\"text\" placeholder=\"Your address\" [class.invalid]=\"!signupForm.controls.address.valid && signupForm.controls.address.dirty\" class=\"\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t\n\t\t\t\t<div class=\"error-message\" *ngIf=\"!signupForm.controls.address.valid && signupForm.controls.address.dirty\">\n\t\t\t\t\t<p class=\"fs-11 mgt-5\">Please enter a valid address.</p>\n\t\t\t\t</div>\n\n\n\n\t\t\t\t<br>\n\t\t\t\t<ion-label stacked class=\"mgt-15 mgb-5\">Password</ion-label>\n\t\t\t\t<ion-list class=\"ani-bottom-to-top mgb-0\">\n\t\t\t\t\t<ion-item class=\"white-opct bdra-30\">\n\t\t\t\t\t\t<ion-input #password formControlName=\"password\" type=\"password\" placeholder=\"Your password\" [class.invalid]=\"!signupForm.controls.password.valid && signupForm.controls.password.dirty\" class=\"\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t\n\t\t\t\t<div class=\"error-message\" *ngIf=\"!signupForm.controls.password.valid && signupForm.controls.password.dirty\">\n\t\t\t\t\t<p class=\"fs-11 mgt-5\">Your password needs more than 6 characters.</p>\n\t\t\t\t</div>\n\n\t\t\t\t<br>\n\n\t\t\t\t<ion-button expand=\"block\" shape=\"round\" class=\"mgt-30\" type=\"submit\">\n\t\t\t\t\tCreate an Account\n\t\t\t\t</ion-button>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/pages/Shopping/signup/signup.module.ts":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/signup/signup.module.ts ***!
  \****************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/pages/Shopping/signup/signup.page.ts");








var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/signup/signup.page.scss":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/signup/signup.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzcmMvcGFnZXMvU2hvcHBpbmcvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQ0FBQTtBQ0NEIiwiZmlsZSI6InNyYy9wYWdlcy9TaG9wcGluZy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXJ7XG5cdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/Shopping/signup/signup.page.ts":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/signup/signup.page.ts ***!
  \**************************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/email */ "./src/pages/Shopping/validators/email.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/users */ "./src/pages/Shopping/providers/users.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SignupPage = /** @class */ (function () {
    function SignupPage(events, storage, loadingCtrl, alertCtrl, usersProv, formBuilder, router) {
        this.events = events;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.usersProv = usersProv;
        this.formBuilder = formBuilder;
        this.router = router;
        this.signupForm = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _validators_email__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"].isValid])],
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.presentLoading();
            this.usersProv.signupUser(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.fullname, this.signupForm.value.phone, this.signupForm.value.address).then(function (authData) {
                console.log(authData);
                _this.usersProv.getUser(authData.user.uid).then(function (data) {
                    _this.loading.dismiss().then(function () {
                        var user = {
                            avt: data[0].payload.doc.data().avt,
                            username: data[0].payload.doc.data().username,
                            fullname: data[0].payload.doc.data().fullname,
                            email: data[0].payload.doc.data().email,
                            address: data[0].payload.doc.data().address,
                            phone: data[0].payload.doc.data().phone,
                            id: data[0].payload.doc.id,
                            id_auth: data[0].payload.doc.data().id_auth
                        };
                        _this.storage.set('user', user);
                        _this.events.publish('user: change', user);
                        console.log(data);
                        _this.router.navigateByUrl('/home');
                    });
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    _this.presentAlertErr(error);
                });
            });
        }
    };
    SignupPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'waiting',
                                duration: 2000
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    SignupPage.prototype.presentAlertErr = function (err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: err.message,
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
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _providers_users__WEBPACK_IMPORTED_MODULE_6__["UsersProvider"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/signup/signup.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/pages/Shopping/signup/signup.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_users__WEBPACK_IMPORTED_MODULE_6__["UsersProvider"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-signup-signup-module.js.map