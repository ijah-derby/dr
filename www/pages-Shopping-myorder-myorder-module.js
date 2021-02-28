(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-myorder-myorder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/myorder/myorder.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/myorder/myorder.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t<ion-back-button class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t<!-- <ion-icon style=\"color: black;font-size: 26px;margin-left: 4px;\" src=\"../../../assets/icons/chevron-back.svg\" (click)=\"goBack()\"></ion-icon> -->\n\t\t\t</ion-back-button>\n\t\t\t<ion-menu-button menu=\"shop\">\n\t\t\t</ion-menu-button>\n\t\t  </ion-buttons>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/search'\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon name=\"search\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/mycart'\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon name=\"cart\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>My Order</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class=\"bg-l1\">\n\t<br>\n\t<h2 class=\"uppercase\" *ngIf=\"list_orders_pending.length > 0\">Orders are waiting to be completed</h2>\n\t<br>\n\t<div class=\"\" *ngIf=\"list_orders_pending.length > 0\">\n\t\t<div *ngFor=\"let item of list_orders_pending\" class=\"item-order bg-white mgb-20 shadow-2\" padding>\n\t\t\t<div class=\"top\">\n\t\t\t\t<p class=\"txt-b1 fw-600\">Order #{{item.payload.doc.id}}</p>\n\t\t\t\t<p text-right class=\"txt-b3\">{{item.payload.doc.data().created.substring(4, 15)}}</p>\n\t\t\t</div>\n\t\t\t<p class=\"txt-b1 fw-600 mgt-0 txt-warning pd-2 bg-black-3 pdl-10\">\n\t\t\t\t<ion-icon class=\"mgr-5 txt-warning\" name=\"card\"></ion-icon>\n\t\t\t\tShipped pending\n\t\t\t</p>\n\t\t\t<hr/>\n\t\t\t<div class=\"-wrap-prd\">\n\t\t\t\t<div *ngFor=\"let elmt of item.lst_items\" class=\"elm-prd\" [routerLink]=\"['/detail', {id_item: elmt.id}]\">\n\t\t\t\t\t<h4 class=\"fs-14 mgb-0 name\">{{elmt.name}}</h4>\n\t\t\t\t\t<p class=\"txt-b3 quantity\">x {{elmt.quantity}}</p>\n\t\t\t\t\t<p class=\"txt-b3 price\" text-right>{{elmt.price}} {{(elmt.discount > 0)? '(-'+ elmt.discount +'%)' : null}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div class=\"bottom\">\n\t\t\t\t<p class=\"txt-b3\">\n\t\t\t\t\t<ion-icon name=\"ios-pin\"></ion-icon>\n\t\t\t\t\t{{item.payload.doc.data().address}}\n\t\t\t\t</p>\n\t\t\t\t<hr/>\n\t\t\t\t<p class=\"txt-b3 mg-0\">\n\t\t\t\t\tAfter Tax: \n\t\t\t\t\t<strong class=\"txt-b1 pull-right\" text-right>{{item.payload.doc.data().total_price}}</strong>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"txt-b3 mg-0\">\n\t\t\t\t\tTax ({{settings.tax_fee}}%): \n\t\t\t\t\t<strong class=\"txt-b1 pull-right\" text-right>{{item.payload.doc.data().tax_pay}}</strong>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"txt-b3 mg-0\">\n\t\t\t\t\tShip fee ({{settings.ship_fee}}/km): \n\t\t\t\t\t<strong class=\"txt-b1 pull-right\" text-right>{{item.payload.doc.data().shipfee_pay}}</strong>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"txt-b3 fs-18\">\n\t\t\t\t\tTotal: \n\t\t\t\t\t<strong class=\"txt-b1 pull-right\" text-right>{{item.payload.doc.data().total_pay}}</strong>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"\" text-right>\n\t\t\t\t<hr class=\"bg-light\">\n\t\t\t\t<p class=\"txt1 italic fw-600\" *ngIf=\"item.payload.doc.data().pay_method == 1\">Payment on delivery</p>\n\t\t\t\t<p class=\"txt1 italic fw-600\" *ngIf=\"item.payload.doc.data().pay_method == 2\">Payment by credit card</p>\n\t\t\t\t<p class=\"txt1 italic fw-600\" *ngIf=\"item.payload.doc.data().pay_method == 3\">Payment use Paypal</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<br>\n\t<h2 class=\"uppercase\" *ngIf=\"list_orders_success.length > 0\">10 most recent orders</h2>\n\t<br>\n\n\t<div class=\"\" *ngIf=\"list_orders_success.length > 0\">\n\t\t<div *ngFor=\"let item of list_orders_success\" class=\"item-order bg-white mgb-20 shadow-2\" padding>\n\t\t\t<div class=\"top\">\n\t\t\t\t<p class=\"txt-b1 fw-600\">Order #{{item.payload.doc.id}}</p>\n\t\t\t\t<p text-right class=\"txt-b3\">{{item.payload.doc.data().created.substring(4, 15)}}</p>\n\t\t\t</div>\n\t\t\t<p class=\"txt-b1 fw-600 mgt-0 txt-success pd-2 bg-black-3 pdl-10\">\n\t\t\t\t<ion-icon class=\"mgr-5 txt-success\" name=\"card\"></ion-icon>\n\t\t\t\tSuccessfully\n\t\t\t</p>\n\t\t\t<hr/>\n\t\t\t<div class=\"-wrap-prd\">\n\t\t\t\t<div *ngFor=\"let elmt of item.lst_items\" class=\"elm-prd\">\n\t\t\t\t\t<h4 class=\"fs-14 mgb-0 name\">{{elmt.name}}</h4>\n\t\t\t\t\t<p class=\"txt-b3 quantity\">x {{elmt.quantity}}</p>\n\t\t\t\t\t<p class=\"txt-b3 price\" text-right>{{elmt.price}}{{(elmt.discount > 0)? '(-'+ elmt.discount +'%)' : null}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div class=\"bottom\">\n\t\t\t\t<p class=\"txt-b3\">\n\t\t\t\t\t<ion-icon name=\"ios-pin\"></ion-icon>\n\t\t\t\t\t{{item.payload.doc.data().address}}\n\t\t\t\t</p>\n\t\t\t\t<hr/>\n\t\t\t\t<p class=\"txt-b3 mg-0\">\n\t\t\t\t\tAfter Tax: \n\t\t\t\t\t<strong class=\"txt-b1 pull-right\" text-right>{{item.payload.doc.data().total_price}}</strong>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"txt-b3 mg-0\">\n\t\t\t\t\tTax ({{settings.tax_fee}}%): \n\t\t\t\t\t<strong class=\"txt-b1 pull-right\" text-right>{{item.payload.doc.data().tax_fee}}</strong>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"txt-b3 mg-0\">\n\t\t\t\t\tShip fee ({{settings.ship_fee}}/km): \n\t\t\t\t\t<strong class=\"txt-b1 pull-right\" text-right>{{item.payload.doc.data().shipfee_pay}}</strong>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"txt-b3 fs-18\">\n\t\t\t\t\tTotal: \n\t\t\t\t\t<strong class=\"txt-b1 pull-right\" text-right>{{item.payload.doc.data().total_pay}}</strong>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"\" text-right>\n\t\t\t\t<hr class=\"bg-light\">\n\t\t\t\t<p class=\"txt1 italic fw-600\" *ngIf=\"item.payload.doc.data().pay_method == 1\">Payment on delivery</p>\n\t\t\t\t<p class=\"txt1 italic fw-600\" *ngIf=\"item.payload.doc.data().pay_method == 2\">Payment by credit card</p>\n\t\t\t\t<p class=\"txt1 italic fw-600\" *ngIf=\"item.payload.doc.data().pay_method == 3\">Payment use Paypal</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/myorder/myorder.module.ts":
/*!******************************************************!*\
  !*** ./src/pages/Shopping/myorder/myorder.module.ts ***!
  \******************************************************/
/*! exports provided: MyorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyorderPageModule", function() { return MyorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myorder.page */ "./src/pages/Shopping/myorder/myorder.page.ts");







var routes = [
    {
        path: '',
        component: _myorder_page__WEBPACK_IMPORTED_MODULE_6__["MyorderPage"]
    }
];
var MyorderPageModule = /** @class */ (function () {
    function MyorderPageModule() {
    }
    MyorderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_myorder_page__WEBPACK_IMPORTED_MODULE_6__["MyorderPage"]]
        })
    ], MyorderPageModule);
    return MyorderPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/myorder/myorder.page.scss":
/*!******************************************************!*\
  !*** ./src/pages/Shopping/myorder/myorder.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-order {\n  border-top: 12px dotted var(--ion-background-color);\n  border-bottom: 12px dotted var(--ion-background-color);\n}\n.item-order .top {\n  display: flex;\n  align-items: center;\n}\n.item-order .top p {\n  flex: 1;\n}\n.item-order .elm-prd {\n  display: flex;\n  align-items: center;\n}\n.item-order .elm-prd .name {\n  flex: 3;\n}\n.item-order .elm-prd .quantity {\n  flex: 1;\n}\n.item-order .elm-prd .price {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvbXlvcmRlci9teW9yZGVyLnBhZ2Uuc2NzcyIsInNyYy9wYWdlcy9TaG9wcGluZy9teW9yZGVyL215b3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbURBQUE7RUFDQSxzREFBQTtBQ0NEO0FEQUM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRERFO0VBQ0MsT0FBQTtBQ0dIO0FEQUM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRERFO0VBQ0MsT0FBQTtBQ0dIO0FEREU7RUFDQyxPQUFBO0FDR0g7QURERTtFQUNDLE9BQUE7QUNHSCIsImZpbGUiOiJzcmMvcGFnZXMvU2hvcHBpbmcvbXlvcmRlci9teW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLW9yZGVye1xuXHRib3JkZXItdG9wOiAxMnB4IGRvdHRlZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG5cdGJvcmRlci1ib3R0b206IDEycHggZG90dGVkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcblx0LnRvcHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0cHtcblx0XHRcdGZsZXg6IDE7XG5cdFx0fVxuXHR9XG5cdC5lbG0tcHJke1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHQubmFtZXtcblx0XHRcdGZsZXg6IDM7XG5cdFx0fVxuXHRcdC5xdWFudGl0eXtcblx0XHRcdGZsZXg6IDE7XG5cdFx0fVxuXHRcdC5wcmljZXtcblx0XHRcdGZsZXg6IDE7XG5cdFx0fVxuXHR9XG5cdC5ib3R0b217XG5cblx0fVxufSIsIi5pdGVtLW9yZGVyIHtcbiAgYm9yZGVyLXRvcDogMTJweCBkb3R0ZWQgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItYm90dG9tOiAxMnB4IGRvdHRlZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG4uaXRlbS1vcmRlciAudG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtLW9yZGVyIC50b3AgcCB7XG4gIGZsZXg6IDE7XG59XG4uaXRlbS1vcmRlciAuZWxtLXByZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbS1vcmRlciAuZWxtLXByZCAubmFtZSB7XG4gIGZsZXg6IDM7XG59XG4uaXRlbS1vcmRlciAuZWxtLXByZCAucXVhbnRpdHkge1xuICBmbGV4OiAxO1xufVxuLml0ZW0tb3JkZXIgLmVsbS1wcmQgLnByaWNlIHtcbiAgZmxleDogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/Shopping/myorder/myorder.page.ts":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/myorder/myorder.page.ts ***!
  \****************************************************/
/*! exports provided: MyorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyorderPage", function() { return MyorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/orders */ "./src/pages/Shopping/providers/orders.ts");
/* harmony import */ var _providers_currencies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/currencies */ "./src/pages/Shopping/providers/currencies.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src123_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src123/pages/auth/services/auth/auth.service */ "./src123/pages/auth/services/auth/auth.service.ts");







var MyorderPage = /** @class */ (function () {
    function MyorderPage(currenciesProv, ordersProv, storage, loadingCtrl, navCtrl, authService) {
        var _this = this;
        this.currenciesProv = currenciesProv;
        this.ordersProv = ordersProv;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.list_orders_success = [];
        this.list_orders_pending = [];
        this.presentLoading();
        this.storage.get("setting").then(function (data) {
            _this.settings = data;
        });
        this.storage.get("user").then(function (obj) {
            console.log(obj);
        });
    }
    MyorderPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "waiting",
                                duration: 2000,
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    MyorderPage.prototype.ionViewWillEnter = function () { };
    MyorderPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MyorderPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    MyorderPage.ctorParameters = function () { return [
        { type: _providers_currencies__WEBPACK_IMPORTED_MODULE_4__["CurrenciesProvider"] },
        { type: _providers_orders__WEBPACK_IMPORTED_MODULE_3__["OrdersProvider"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src123_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    MyorderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-myorder",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myorder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/myorder/myorder.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myorder.page.scss */ "./src/pages/Shopping/myorder/myorder.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_currencies__WEBPACK_IMPORTED_MODULE_4__["CurrenciesProvider"],
            _providers_orders__WEBPACK_IMPORTED_MODULE_3__["OrdersProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src123_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], MyorderPage);
    return MyorderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-myorder-myorder-module.js.map