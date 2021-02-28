(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/about/about.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/about/about.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t<ion-back-button class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t<!-- <ion-icon style=\"color: black;font-size: 26px;margin-left: 4px;\" src=\"../../../assets/icons/chevron-back.svg\" (click)=\"goBack()\"></ion-icon> -->\n\t\t\t</ion-back-button>\n\t\t\t<ion-menu-button menu=\"shop\">\n\t\t\t</ion-menu-button>\n\t\t  </ion-buttons>\n\n\t\t<ion-title>About</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<br>\n\t<h2 class=\"uppercase fw-600 spacing2 pdr-50 txt1\">Beautiful and outstanding image about us</h2>\n\t<br>\n\t<div text-right *ngIf=\"about\" class=\"social flex-row flex-jus-end pdl-25 pdr-25\">\n\t\t<span *ngIf=\"about.facebook != null && about.facebook != '' \">\n\t\t\t<ion-button fill=\"clear\" (click)=\"social(about.facebook)\" class=\"flex-1 fs-16 txt3\">\n\t\t\t\t<ion-icon name=\"logo-facebook\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</span>\n\t\t<span *ngIf=\"about.twitter != null && about.twitter != '' \">\n\t\t\t<ion-button fill=\"clear\" (click)=\"social(about.twitter)\" class=\"flex-1 fs-16 txt4\">\n\t\t\t\t<ion-icon name=\"logo-twitter\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</span>\n\t\t<span *ngIf=\"about.google_plus != null && about.google_plus != '' \">\n\t\t\t<ion-button fill=\"clear\" (click)=\"social(about.google_plus)\" class=\"flex-1 fs-16 txt4\">\n\t\t\t\t<ion-icon name=\"logo-google\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</span>\n\t\t<span *ngIf=\"about.instagram != null && about.instagram != '' \">\n\t\t\t<ion-button fill=\"clear\" (click)=\"social(about.instagram)\" class=\"flex-1 fs-16 txt4\">\n\t\t\t\t<ion-icon name=\"logo-instagram\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</span>\n\t\t<span *ngIf=\"about.pinterest != null && about.pinterest != '' \">\n\t\t\t<ion-button fill=\"clear\" (click)=\"social(about.pinterest)\" class=\"flex-1 fs-16 txt4\">\n\t\t\t\t<ion-icon name=\"logo-pinterest\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</span>\n\t\t<span *ngIf=\"about.youtube != null && about.youtube != '' \">\n\t\t\t<ion-button fill=\"clear\" (click)=\"social(about.youtube)\" class=\"flex-1 fs-16 txt4\">\n\t\t\t\t<ion-icon name=\"logo-youtube\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</span>\n\t</div>\n\t<br>\n\t<br>\n\t<div class=\"wrap-top-slide\" *ngIf=\"preview.length > 0\">\n\t\t<ion-slides loop=\"true\">\n\t\t\t<ion-slide *ngFor=\"let item of preview\">\n\t\t\t\t<div text-left class=\"item-slide\">\n\t\t\t\t\t<div class=\"thumb flex-row flex-jus-center flex-ali-center ovfl-hidden\">\n\t\t\t\t\t\t<img src=\"{{item}}\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t</div>\n\n\t<br>\n\n\t<div padding class=\"\" *ngIf=\"about\">\n\t\t<h2 class=\"uppercase fs-16 fw-600 spacing2 txt1\">find us</h2>\n\t\t<br>\n\t\t<div class=\"mgt-20\">\n\t\t\t<h5 class=\"flex-row flex-ali-start\" *ngIf=\"about.email1 != null && about.email1 != '' \">\n\t\t\t\t<ion-icon class=\"mgr-15 fs-20 txt4\" name=\"md-mail\"></ion-icon>\n\t\t\t\t<span>\n\t\t\t\t\t<p class=\"fs-12 mg-0 txt3\">Email 1</p>\n\t\t\t\t\t<p class=\"fs-14 fw-600 mgt-5 mgb-0 txt1\">{{about.email1}}</p>\n\t\t\t\t</span>\n\t\t\t</h5>\n\t\t\t<h5 class=\"flex-row flex-ali-start\" *ngIf=\"about.email2 != null && about.email2 != '' \">\n\t\t\t\t<ion-icon class=\"mgr-15 fs-20 txt4\" name=\"md-mail\"></ion-icon>\n\t\t\t\t<span>\n\t\t\t\t\t<p class=\"fs-12 mg-0 txt3\">Email 2</p>\n\t\t\t\t\t<p class=\"fs-14 fw-600 mgt-5 mgb-0 txt1\">{{about.email2}}</p>\n\t\t\t\t</span>\n\t\t\t</h5>\n\t\t\t<h5 class=\"flex-row flex-ali-start\" *ngIf=\"about.phone1 != null && about.phone1 != '' \">\n\t\t\t\t<ion-icon class=\"mgr-15 fs-20 txt4\" name=\"md-call\"></ion-icon>\n\t\t\t\t<span class=\"flex-1\">\n\t\t\t\t\t<p class=\"fs-12 mg-0 txt3\">Phone 1</p>\n\t\t\t\t\t<p class=\"fs-14 fw-600 mgt-5 mgb-0 txt1\">{{about.phone1}}</p>\n\t\t\t\t</span>\n\t\t\t\t<ion-button size=\"small\" shape=\"round\" class=\"fs-12\" (click)=\"call(about.phone1)\">\n\t\t\t\t\t<ion-icon name=\"call\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</h5>\n\t\t\t<h5 class=\"flex-row flex-ali-start\" *ngIf=\"about.phone2 != null && about.phone2 != '' \">\n\t\t\t\t<ion-icon class=\"mgr-15 fs-20 txt4\" name=\"md-call\"></ion-icon>\n\t\t\t\t<span class=\"flex-1\">\n\t\t\t\t\t<p class=\"fs-12 mg-0 txt3\">Phone 2</p>\n\t\t\t\t\t<p class=\"fs-14 fw-600 mgt-5 mgb-0 txt1\">{{about.phone2}}</p>\n\t\t\t\t</span>\n\t\t\t\t<ion-button size=\"small\" shape=\"round\" class=\"fs-12\" (click)=\"call(about.phone2)\">\n\t\t\t\t\t<ion-icon name=\"call\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</h5>\n\t\t\t<h5 class=\"flex-row flex-ali-start\" *ngIf=\"about.address != null && about.address != '' \">\n\t\t\t\t<ion-icon class=\"mgr-15 fs-20 txt4\" name=\"md-pin\"></ion-icon>\n\t\t\t\t<span>\n\t\t\t\t\t<p class=\"fs-12 mg-0 txt3\">Address</p>\n\t\t\t\t\t<p class=\"fs-14 fw-600 mgt-5 mgb-0 txt1\">{{about.address}}</p>\n\t\t\t\t</span>\n\t\t\t</h5>\n\t\t\t<h5 class=\"flex-row flex-ali-start\" *ngIf=\"about.website != null && about.website != '' \">\n\t\t\t\t<ion-icon class=\"mgr-15 fs-20 txt4\" name=\"md-globe\"></ion-icon>\n\t\t\t\t<span>\n\t\t\t\t\t<p class=\"fs-12 mg-0 txt3\">Website</p>\n\t\t\t\t\t<p class=\"fs-14 fw-600 mgt-5 mgb-0 txt1\">{{about.website}}</p>\n\t\t\t\t</span>\n\t\t\t</h5>\n\t\t\t<h5 class=\"flex-row flex-ali-start\" *ngIf=\"about.time_work != null && about.time_work != '' \">\n\t\t\t\t<ion-icon class=\"mgr-15 fs-20 txt4\" name=\"md-time\"></ion-icon>\n\t\t\t\t<span>\n\t\t\t\t\t<p class=\"fs-12 mg-0 fs-14 txt3\">Time work</p>\n\t\t\t\t\t<p class=\"fw-600 mgt-5 txt1\">{{about.time_work}}</p>\n\t\t\t\t</span>\n\t\t\t</h5>\n\t\t</div>\n\t</div>\n\n\t<br>\n\t\n\t<div class=\"pdl-50\" *ngIf=\"about && about.map != null && about.map != '' \">\n\t\t<div [innerHtml]=\"about.map\"></div>\n\t</div>\n\n\t<br>\n\t<br>\n\n\t<div padding>\n\t\t<form (ngSubmit)=\"submitForm()\" [formGroup]=\"dataForm\">\n\t\t\t<label class=\"txt-3 fs-12 mgt-10\">Full name</label>\n\t\t\t<ion-item>\n\t\t\t\t<ion-input type=\"text\" class=\"form-control fs-14\" formControlName=\"fullname\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<p class=\"fs-12 mgt-5 txt-danger\" *ngIf=\"!dataForm.controls.fullname.valid && dataForm.controls.fullname.dirty\">\n\t\t\t\tPlease enter a valid fullname.\n\t\t\t</p>\n\n\n\t\t\t<br>\n\t\t\t<label class=\"txt-3 fs-12 mgt-10\">Email</label>\n\t\t\t<ion-item>\n\t\t\t\t<ion-input type=\"text\" class=\"form-control fs-14\" formControlName=\"email\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<p class=\"fs-12 mgt-5 txt-danger\" *ngIf=\"!dataForm.controls.email.valid && dataForm.controls.email.dirty\">\n\t\t\t\tPlease enter a valid email.\n\t\t\t</p>\n\n\t\t\t<br>\n\t\t\t<label class=\"txt-3 fs-12 mgt-10\">Message</label>\n\t\t\t<ion-item>\n\t\t\t\t<ion-input type=\"email\" class=\"form-control fs-14\" formControlName=\"message\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<p class=\"fs-12 mgt-5 txt-danger\" *ngIf=\"!dataForm.controls.message.valid && dataForm.controls.message.dirty\">\n\t\t\t\tPlease enter a valid message.\n\t\t\t</p>\n\n\t\t\t<div class=\"mgt-30\" text-right>\n\t\t\t\t<ion-button shape=\"round\" type=\"submit\" class=\"btn btn-sm mg-5 btn-success\">\n\t\t\t\t\t<ion-icon slot=\"start\" name=\"ios-send\"></ion-icon> Send\n\t\t\t\t</ion-button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n\t<br>\n\t<br>\n\n\t<div padding class=\"pdr-50\">\n\t\t<h2 class=\"uppercase fs-16 fw-600 spacing2\">provision</h2>\n\t\t<p class=\"fs-13 txt2 pdl-15 pdr-30\" *ngIf=\"about\">\n\t\t\t{{about.provision}}\n\t\t</p>\n\t</div>\n\t<br>\n\t<br>\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/about/about.module.ts":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/about/about.module.ts ***!
  \**************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/pages/Shopping/about/about.page.ts");








var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/about/about.page.scss":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/about/about.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap-top-slide .thumb {\n  height: 150px;\n}\n\n.social {\n  border-bottom: 1px solid #ebebeb;\n}\n\niframe {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic3JjL3BhZ2VzL1Nob3BwaW5nL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGFBQUE7QUNBRjs7QURHQTtFQUNDLGdDQUFBO0FDQUQ7O0FERUE7RUFDQyxXQUFBO0FDQ0QiLCJmaWxlIjoic3JjL3BhZ2VzL1Nob3BwaW5nL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwLXRvcC1zbGlkZXtcblx0LnRodW1ie1xuXHRcdGhlaWdodDogMTUwcHg7XG5cdH1cbn1cbi5zb2NpYWx7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xufVxuaWZyYW1le1xuXHR3aWR0aDogMTAwJTtcbn0iLCIud3JhcC10b3Atc2xpZGUgLnRodW1iIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnNvY2lhbCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xufVxuXG5pZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/Shopping/about/about.page.ts":
/*!************************************************!*\
  !*** ./src/pages/Shopping/about/about.page.ts ***!
  \************************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/about */ "./src/pages/Shopping/providers/about.ts");







var AboutPage = /** @class */ (function () {
    function AboutPage(toastCtrl, loadingCtrl, aboutProv, callNumber, iab, formBuilder, navCtrl) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.aboutProv = aboutProv;
        this.callNumber = callNumber;
        this.iab = iab;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.preview = [];
        this.numbThumb = Array(5);
        this.presentLoading();
        this.dataForm = this.formBuilder.group({
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(300), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
        });
        this.aboutProv.getAbout().then(function (data) {
            _this.loading.dismiss().then(function () {
                _this.about = data[0];
                console.log(_this.about);
                for (var i = 0; i < _this.numbThumb.length; ++i) {
                    var check = data[0][(i != 0) ? 'thumb' + i : 'thumb'];
                    if (check && check != null && check != '' && check != undefined) {
                        _this.preview.push(check);
                    }
                }
            });
        });
    }
    AboutPage.prototype.presentLoading = function () {
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
    AboutPage.prototype.submitForm = function () {
        var _this = this;
        if (!this.dataForm.valid) {
            console.log(this.dataForm.value);
            this.presentToast('Send contact failed!');
        }
        else {
            this.dataForm.value.created = Date();
            this.dataForm.value.active = true;
            this.dataForm.value.subject = 'CONTACT KIWI APP';
            this.aboutProv.sendContact(this.dataForm.value).then(function (data) {
                _this.presentToast('Send contact successfully!');
            });
        }
    };
    AboutPage.prototype.presentToast = function (mess) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: mess,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage.prototype.social = function (link) {
        this.iab.create(link);
    };
    AboutPage.prototype.call = function (numb) {
        this.callNumber.callNumber(numb, true);
    };
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    AboutPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers_about__WEBPACK_IMPORTED_MODULE_6__["AboutProvider"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/about/about.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.page.scss */ "./src/pages/Shopping/about/about.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_about__WEBPACK_IMPORTED_MODULE_6__["AboutProvider"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-about-about-module.js.map