(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/checkout/checkout.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/checkout/checkout.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button class=\"fs-24 txt1\" text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Checkout</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<ion-row padding>\n\t\t<h4>Complete the order</h4>\n\t\t<p>You need to fill in and complete the<br>information below</p>\n\t</ion-row>\n\t<ion-list>\n\t\t<ion-radio-group [(ngModel)]=\"pay_method\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>Payment on delivery</ion-label>\n\t\t\t\t<ion-radio checked=\"true\" value=\"1\"></ion-radio>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>Payment by credit card</ion-label>\n\t\t\t\t<ion-radio value=\"2\"></ion-radio>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>Pay use Paypal</ion-label>\n\t\t\t\t<ion-radio value=\"3\"></ion-radio>\n\t\t\t</ion-item>\n\t\t</ion-radio-group>\n\t</ion-list>\n\n\t<ion-list>\n\t\t<div *ngIf=\"pay_method==2\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label stacked>Card Number</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"card_info.number\" type=\"text\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label stacked>Exp Month</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"card_info.expMonth\" type=\"text\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label stacked>Exp Year</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"card_info.expYear\" type=\"text\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label stacked>CVC</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"card_info.cvc\" type=\"text\"></ion-input>\n\t\t\t</ion-item>\n\t\t</div>\n\n\n\t\t<!-- <div *ngIf=\"user_id == null\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label stacked>Full name</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"full_name\" type=\"text\"></ion-input>\n\t\t\t\t<p padding class=\"err\" *ngIf=\"full_name.length() < 5 || full_name.length() > 50\">* More than 5 and less than 50 characters, do not contain special characters.</p>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label stacked>Phone</ion-label>\n\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"phone\" type=\"text\"></ion-input>\n\t\t\t\t<p padding class=\"err\" *ngIf=\"phone.length() < 10 || phone.length() > 50\">* More than 10 and less than 50 digits.</p>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label stacked>Email</ion-label>\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"email\" type=\"text\"></ion-input>\n\t\t\t\t<p padding class=\"err\" *ngIf=\"email.length() < 10 || email.length() > 50\">* More than 10 and less than 50 digits.</p>\n\t\t\t</ion-item>\n\t\t</div> -->\n\t</ion-list>\n\n\t<form padding (ngSubmit)=\"order()\" [formGroup]=\"addressForm\" *ngIf=\"user_id || user_id != null\">\n\t\t<ion-list>\n\t\t\t<div padding>\n\t\t\t\t<ion-label class=\"txt3\">Receiving address</ion-label>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-input formControlName=\"address\" type=\"text\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<div text-right class=\"error-message\" *ngIf=\"!addressForm.controls.address.valid && addressForm.controls.address.dirty\">\n\t\t\t\t\t<p class=\"fs-14 mgt-5 txt-danger\">Please enter a valid address.</p>\n\t\t\t\t</div>\n\n\t\t\t\t<br>\n\n\t\t\t\t<ion-label class=\"txt3\">Message</ion-label>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-textarea formControlName=\"message\"></ion-textarea>\n\t\t\t\t</ion-item>\n\t\t\t</div>\n\t\t</ion-list>\n\n\t\t<div class=\"payment\" padding>\n\t\t\t<p class=\"fee total-pay flex-row flex-ali-end\">\n\t\t\t\t<span class=\"uppercase fs-15 fw-600\">Price:</span>\n\t\t\t\t<span class=\"mgl-20 fs-20 fw-600 spacing1 flex-1\" text-right *ngIf=\"currenciesProv\">{{total_price}}</span>\n\t\t\t</p>\n\t\t\t<p class=\"fee total-pay flex-row flex-ali-end\">\n\t\t\t\t<span class=\"uppercase fs-15 fw-600\">Tax:</span>\n\t\t\t\t<span class=\"mgl-20 fs-20 fw-600 spacing1 flex-1\" text-right *ngIf=\"currenciesProv\">{{tax_pay}}</span>\n\t\t\t</p>\n\t\t\t<p class=\"fee total-pay flex-row flex-ali-end\">\n\t\t\t\t<span class=\"uppercase fs-15 fw-600\">ship:</span>\n\t\t\t\t<span class=\"mgl-20 fs-20 fw-600 spacing1 flex-1\" text-right *ngIf=\"currenciesProv\">{{shipfee_pay}}</span>\n\t\t\t</p>\n\n\t\t\t<p class=\"fee total-pay flex-row flex-ali-end\">\n\t\t\t\t<span class=\"uppercase fs-20 fw-600\">Payment:</span>\n\t\t\t\t<span class=\"mgl-20 fs-28 fw-600 spacing1 flex-1\" text-right *ngIf=\"currenciesProv\">{{total_pay}}</span>\n\t\t\t</p>\n\n\t\t\t<div class=\"err_show\" *ngIf=\"!validate\">\n\t\t\t\t<p class=\"err txt-danger italic\">Error! You must fill in the information again.</p>\n\t\t\t</div>\n\n\t\t\t<br><br>\n\n\t\t\t<ion-button type=\"submit\" shape=\"round\" expand=\"block\">\n\t\t\t\t<ion-icon slot=\"start\" name=\"card\"></ion-icon>Complete the order\n\t\t\t</ion-button>\n\t\t\t\n\t\t\t<!-- <ion-button type=\"button\" class=\"mgt-15\" shape=\"round\" expand=\"block\" href=\"/mycart\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon slot=\"start\" name=\"close\"></ion-icon>Cancel\n\t\t\t</ion-button> -->\n\t\t</div>\n\t</form>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/checkout/checkout.module.ts":
/*!********************************************************!*\
  !*** ./src/pages/Shopping/checkout/checkout.module.ts ***!
  \********************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/pages/Shopping/checkout/checkout.page.ts");








var routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/checkout/checkout.page.scss":
/*!********************************************************!*\
  !*** ./src/pages/Shopping/checkout/checkout.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvU2hvcHBpbmcvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/pages/Shopping/checkout/checkout.page.ts":
/*!******************************************************!*\
  !*** ./src/pages/Shopping/checkout/checkout.page.ts ***!
  \******************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _providers_currencies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/currencies */ "./src/pages/Shopping/providers/currencies.ts");
/* harmony import */ var _providers_orders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/orders */ "./src/pages/Shopping/providers/orders.ts");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");












var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(route, router, payPal, storage, toastCtrl, stripe, events, formBuilder, currenciesProv, ordersProv, loadingCtrl, alertCtrl, authService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.payPal = payPal;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.stripe = stripe;
        this.events = events;
        this.formBuilder = formBuilder;
        this.currenciesProv = currenciesProv;
        this.ordersProv = ordersProv;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.fullname = '';
        this.phone = '';
        this.address = '';
        this.validate = true;
        this.pay_method = 1;
        this.email = '';
        this.user_id = '';
        /*this card info just for test, pls set it to empty string when your app go online */
        this.card_info = {
            number: '4242424242424242',
            expMonth: '12',
            expYear: '2030',
            cvc: '200'
        };
        this.carts = '';
        this.settings = '';
        this.route.params.subscribe(function (params) {
            _this.total_price = params.total_price;
            _this.tax_pay = params.tax_pay;
            _this.shipfee_pay = params.shipfee_pay;
            _this.total_pay = params.total_pay;
            console.log(_this.total_pay);
        });
        this.pay_method = 1;
        console.log(this.pay_method);
        this.storage.ready().then(function () {
            _this.storage.get('cart_list').then(function (data) {
                _this.carts = data;
            });
            _this.storage.get('setting').then(function (data) {
                _this.settings = data;
            });
        });
        this.addressForm = this.formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            message: ['']
        });
        this.events.subscribe('user: change', function () {
            _this.ionViewWillEnter();
        });
        console.log(this.pay_method);
    }
    CheckoutPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentUser;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pay_method = 1;
                        console.log(this.pay_method);
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        currentUser = _a.sent();
                        console.log(currentUser);
                        console.log(this.pay_method);
                        if (currentUser == null) {
                            this.user_id = null;
                            console.log(this.pay_method);
                        }
                        else {
                            this.user_id = currentUser.uid;
                            this.fullname = currentUser.displayName;
                            this.phone = currentUser.phone;
                            this.email = currentUser.email;
                            this.pay_method = 1;
                            console.log(this.pay_method);
                        }
                        this.pay_method = 1;
                        console.log(this.pay_method);
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.pay_method = 1;
                console.log(this.pay_method);
                return [2 /*return*/];
            });
        });
    };
    CheckoutPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'added success',
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
    CheckoutPage.prototype.presentLoading = function () {
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
    CheckoutPage.prototype.presentAlertErr = function (err) {
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
    CheckoutPage.prototype.order = function () {
        this.pay_method = 1;
        console.log(this.pay_method);
        if (!this.addressForm.valid) {
            this.validate = false;
            console.log(this.addressForm.value);
        }
        else {
            this.validate = true;
            var data = {
                pay_method: parseInt(this.pay_method),
                email: this.email,
                total_price: this.total_price,
                tax_pay: parseFloat(this.tax_pay),
                shipfee_pay: parseFloat(this.shipfee_pay),
                total_pay: parseFloat(this.total_pay),
                fullname: this.fullname,
                id_user: this.user_id,
                phone: this.phone,
                address: this.addressForm.value.address,
                message: this.addressForm.value.message,
                items: JSON.stringify(this.carts)
            };
            if (!data.phone) {
                data.phone = '';
            }
            console.log(data);
            if (this.pay_method == 1) {
                this.order_on_delivery(data);
            }
            if (this.pay_method == 2) {
                this.order_card(data);
            }
            if (this.pay_method == 3) {
                this.order_on_paypal(data);
            }
        }
    };
    CheckoutPage.prototype.order_on_delivery = function (data) {
        var _this = this;
        console.log('data', data);
        this.ordersProv.addOrders(data).then(function (val) {
            _this.storage.remove('cart_list').then(function () {
                _this.presentAlertErr('Order successfully!').then(function () {
                    _this.router.navigateByUrl('/home');
                });
            });
        });
    };
    CheckoutPage.prototype.order_card = function (data) {
        var _this = this;
        this.stripe.setPublishableKey(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].stripe_publish_key);
        this.stripe.createCardToken(this.card_info).then(function (token) {
            _this.ordersProv.addOrders(data).then(function (val) {
                _this.storage.remove('cart_list').then(function () {
                    _this.presentAlertErr('Order successfully!').then(function () {
                        _this.router.navigateByUrl('/home');
                    });
                });
            });
        }).catch(function (error) {
            _this.presentAlertErr(error);
        });
    };
    CheckoutPage.prototype.order_on_paypal = function (data) {
        var _this = this;
        this.payPal.init({
            PayPalEnvironmentProduction: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].paypal_live_client_id,
            PayPalEnvironmentSandbox: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].paypal_sandbox_client_id
        }).then(function () {
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_10__["PayPalConfiguration"]({})).then(function () {
                var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_10__["PayPalPayment"](_this.total_pay, _this.settings.currency_code, 'Buy Pizza', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
                    _this.ordersProv.addOrders(data).then(function (val) {
                        _this.storage.remove('cart_list').then(function () {
                            _this.presentAlertErr('Order successfully!').then(function () {
                                _this.router.navigateByUrl('/home');
                            });
                        });
                    });
                }, function () {
                });
            }, function () {
            });
        }, function () {
        });
    };
    CheckoutPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_10__["PayPal"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_7__["Stripe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _providers_currencies__WEBPACK_IMPORTED_MODULE_8__["CurrenciesProvider"] },
        { type: _providers_orders__WEBPACK_IMPORTED_MODULE_9__["OrdersProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }
    ]; };
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-checkout',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/checkout/checkout.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.page.scss */ "./src/pages/Shopping/checkout/checkout.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_10__["PayPal"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_7__["Stripe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _providers_currencies__WEBPACK_IMPORTED_MODULE_8__["CurrenciesProvider"],
            _providers_orders__WEBPACK_IMPORTED_MODULE_9__["OrdersProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-checkout-checkout-module.js.map