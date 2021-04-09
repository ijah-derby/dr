(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\t<div class=\"pst-wrap-form pdl-30 pdr-30\">\n\t\t<div class=\"wrapper-form pdl-30 pdr-30\">\n\t\t\t<div class=\"mgt-30 mgb-20\">\n\t\t\t\t<br>\n\t\t\t\t<!-- <h1 class=\"uppercase txt-light fw-900 spacing3 fs-30 spacing-3 mgb-0\">KIWI</h1> -->\n\t\t\t\t<img class=\"brand-logo\" src=\"../../../assets/imgs/logo.png\">\n\t\t\t\t<h3 class=\"uppercase txt-light fw-600 fs-20 spacing-2 mgl-20 pdt-0\">Login</h3>\n\t\t\t\t<p class=\"pdl-20 fs-12 txt-light\">You can create a new account or start with a Facebook account</p>\n\t\t\t</div>\n\t\t\t<div text-right class=\"mgr--10\">\n\t\t\t\t<ion-button size=\"small\" fill=\"clear\" shape=\"round\" (click)=\"login_fb()\" class=\"txt-light fs-16 capitalize\">\n\t\t\t\t\tJoin with\n\t\t\t\t\t<ion-icon slot=\"end\" name=\"logo-facebook\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</div>\n\n\t\t\t<br>\n\n\t\t\t<form [formGroup]=\"loginForm\" (submit)=\"loginUser()\" novalidate>\n\t\t\t\t<ion-label stacked class=\"mgb-5 fs-13 txt-light\">Email</ion-label>\n\t\t\t\t<ion-list class=\"ani-bottom-to-top mgb-0 mgt-5\">\n\t\t\t\t\t<ion-item class=\"white-opct bdra-30\">\n\t\t\t\t\t\t<ion-input #email formControlName=\"email\" type=\"email\" placeholder=\"Your email address\" [class.invalid]=\"!loginForm.controls.email.valid && loginForm.controls.email.dirty\" class=\"\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t\n\t\t\t\t<div class=\"error-message\" *ngIf=\"!loginForm.controls.email.valid  && loginForm.controls.email.dirty\">\n\t\t\t\t\t<p class=\"fs-11 mgt-5 txt-light\">Please enter a valid email.</p>\n\t\t\t\t</div>\n\n\t\t\t\t<br>\n\t\t\t\t\n\t\t\t\t<ion-label stacked class=\"mgb-5 fs-13 txt-light\">Password</ion-label>\n\t\t\t\t<ion-list class=\"ani-bottom-to-top mgb-0 mgt-5\">\n\t\t\t\t\t<ion-item class=\"white-opct bdra-30\">\n\t\t\t\t\t\t<ion-input #password formControlName=\"password\" type=\"password\" placeholder=\"Your password\" \n\t\t\t\t\t\t[class.invalid]=\"!loginForm.controls.password.valid && loginForm.controls.password.dirty\" class=\"\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\n\t\t\t\t<div class=\"error-message\" *ngIf=\"!loginForm.controls.password.valid && loginForm.controls.password.dirty\">\n\t\t\t\t\t<p class=\"fs-11 mgt-5 mgb-0 txt-light\">Your password needs more than 6 characters.</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div text-right class=\"mgb-10 ovfl-auto\">\n\t\t\t\t\t<ion-button fill=\"clear\" size=\"small\" class=\"capitalize txt-light fs-12 txt3 pull-right pdr-0 fw-300\" [routerLink]=\"'/forgot'\">\n\t\t\t\t\t\tForgot password\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\n\t\t\t\t<ion-button expand=\"block\" shape=\"round\" color=\"primary\" class=\"mgt-30 uppercase fw-600 spacing1 ani-bottom-to-top shadow-0\" type=\"submit\">\n\t\t\t\t\tLogin\n\t\t\t\t</ion-button>\n\n\t\t\t\t<br>\n\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<ion-button fill=\"clear\" expand=\"block\" text-center size=\"small\" class=\"fs-12 txt-light capitalize fw-300 mgt-0\" [routerLink]=\"'/signup'\">\n\t\t\t\t\t\tCreate a new account\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\n\t\t\t\t<br>\n\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<div class=\"img-bg flex-row flex-ali-center flex-jus-center\">\n\t\t<img src=\"../../../assets/imgs/bg-login.jpg\">\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/pages/Shopping/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pst-wrap-form {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  position: relative;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.brand-logo {\n  height: 40px;\n  -webkit-filter: contrast(0) brightness(200);\n          filter: contrast(0) brightness(200);\n}\n\n.img-bg {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.img-bg img {\n  height: 100%;\n  min-width: auto;\n  max-width: unset;\n}\n\nion-list {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL3BhZ2VzL1Nob3BwaW5nL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0NEOztBRENBO0VBQ0MsWUFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNFRDs7QURBQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0dEOztBREZDO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREFBO0VBQ0MsdUJBQUE7QUNHRCIsImZpbGUiOiJzcmMvcGFnZXMvU2hvcHBpbmcvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBzdC13cmFwLWZvcm17XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDEwMDtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xufVxuLmJyYW5kLWxvZ297XG5cdGhlaWdodDogNDBweDtcblx0ZmlsdGVyOiBjb250cmFzdCgwKSBicmlnaHRuZXNzKDIwMCk7XG59XG4uaW1nLWJne1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDEwO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGltZ3tcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0bWluLXdpZHRoOiBhdXRvO1xuXHRcdG1heC13aWR0aDogdW5zZXQ7XG5cdH1cbn1cblxuaW9uLWxpc3R7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSIsIi5wc3Qtd3JhcC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5icmFuZC1sb2dvIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmaWx0ZXI6IGNvbnRyYXN0KDApIGJyaWdodG5lc3MoMjAwKTtcbn1cblxuLmltZy1iZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5pbWctYmcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/pages/Shopping/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/pages/Shopping/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/email */ "./src/pages/Shopping/validators/email.ts");
/* harmony import */ var _providers_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/users */ "./src/pages/Shopping/providers/users.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");









var LoginPage = /** @class */ (function () {
    function LoginPage(events, storage, loadingCtrl, usersProv, alertCtrl, formBuilder, router, fb) {
        this.events = events;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.usersProv = usersProv;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.fb = fb;
        this.loginForm = formBuilder.group({
            email: ['demo@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _validators_email__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"].isValid])],
            password: ['123456', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    LoginPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
                            message: 'This is an alert message.',
                            buttons: ['OK']
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
    LoginPage.prototype.presentAlertErr = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'login failed!',
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
    LoginPage.prototype.presentLoading = function () {
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
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.usersProv.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(function (authData) {
                console.log(authData);
                _this.usersProv.getUser(authData.user.uid).then(function (data) {
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
                    console.log(user);
                    _this.storage.set('user', user).then(function () {
                        _this.loading.dismiss().then(function () {
                            _this.events.publish('user: change', user);
                            _this.router.navigateByUrl('home');
                        });
                    });
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    _this.presentAlertErr();
                });
            });
            this.presentLoading();
        }
    };
    LoginPage.prototype.login_fb = function () {
        var _this = this;
        this.usersProv.facebookLogin().then(function (authData) {
            console.log(authData);
            _this.usersProv.getUser(authData.uid).then(function (data) {
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
                _this.storage.set('user', user).then(function () {
                    _this.loading.dismiss().then(function () {
                        _this.events.publish('user: change', user);
                        _this.router.navigateByUrl('home');
                    });
                });
            });
        }, function (error) {
            _this.loading.dismiss().then(function () {
                _this.presentAlertErr();
            });
        });
        this.presentLoading();
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers_users__WEBPACK_IMPORTED_MODULE_5__["UsersProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/pages/Shopping/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_users__WEBPACK_IMPORTED_MODULE_5__["UsersProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-login-login-module.js.map