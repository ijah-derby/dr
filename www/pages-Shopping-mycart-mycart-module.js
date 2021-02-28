(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-mycart-mycart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/mycart/mycart.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/mycart/mycart.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t<ion-back-button class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t<!-- <ion-icon style=\"color: black;font-size: 26px;margin-left: 4px;\" src=\"../../../assets/icons/chevron-back.svg\"></ion-icon> -->\n\t\t\t</ion-back-button>\n\t\t\t<ion-menu-button menu=\"shop\">\n\t\t\t</ion-menu-button>\n\t\t  </ion-buttons>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/search'\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon name=\"search\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>Mycart</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"pdl-15 pdr-15\">\n\t<br>\n\t<div padding class=\"\" *ngIf=\"!list_cart || list_cart.length == 0 || list_cart == null\">\n\t\t<h3 class=\"txt1\">You have not selected any products for yourself</h3>\n\t</div>\n\t<div class=\"\" *ngIf=\"list_cart && list_cart.length > 0 && list_cart != null\">\n\t\t<div class=\"\">\n\t\t\t<div class=\"item-cart pdb-15 pdt-15\" *ngFor=\"let item of list_cart, let i = index\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<ion-button class=\"shadow-0 txt3\" fill=\"clear\" (click)=\"removeItem(i)\">\n\t\t\t\t\t\t<ion-icon name=\"ios-close-circle\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"thumb ovfl-hidden flex-row flex-ali-center flex-jus-center\" [routerLink]=\"['/detail', {id_item: item.id}]\">\n\t\t\t\t\t<img [src]=\"item.thumb2\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"description pdl-10 pdr-15 ovfl-hidden\" [routerLink]=\"['/detail', {id_item: item.id}]\">\n\t\t\t\t\t<h4 class=\"fs-16 mg-0 ellipsis\">{{item.name}}</h4>\n\t\t\t\t\t<p class=\"mg-0 txt3 fw-600 ellipsis\" *ngIf=\"currenciesProv\">\n\t\t\t\t\t\t<span class=\"ellipsis fs-14 txt3 mg-0 line-through mgr-10 fw-600\" *ngIf=\"item.discount > 0\">\n\t\t\t\t\t\t\t<i>{{item.price}}</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"item.discount > 0\">\n\t\t\t\t\t\t\t{{item.price - item.price*item.discount/100}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"item.discount == 0\">\n\t\t\t\t\t\t\t{{item.price}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"quantity\">\n\t\t\t\t\t<ion-button fill=\"clear\" size=\"small\" class=\"txt3 shadow-0 fs-18 mg-0\" (click)=\"quantity(i, 1)\">\n\t\t\t\t\t\t<ion-icon name=\"ios-add\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t\t<ion-input type=\"number\" text-center value=\"{{item.quantity}}\" (ionChange)=\"enterQuantity(i, $event.target.value)\" min=\"1\" max=\"99\" minlength=\"1\" maxlength=\"2\"></ion-input>\n\t\t\t\t\t<ion-button fill=\"clear\" size=\"small\" class=\"txt3 shadow-0 fs-18 mg-0\" (click)=\"quantity(i, -1)\">\n\t\t\t\t\t\t<ion-icon name=\"ios-remove\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"white mgt-15\">\n\t\t\t<div class=\"transaction-fee flex-row flex-ali-center pdl-20 pdr-20 pdb-5\">\n\t\t\t\t<p class=\"txt3\">Total Price</p>\n\t\t\t\t<p class=\"fw-600 flex-1\" text-right *ngIf=\"total_price\">+ {{total_price}}</p>\n\t\t\t</div>\n\t\t\t<hr class=\"bg-light\">\n\t\t\t<div class=\"transaction-fee flex-row flex-ali-center pdl-20 pdr-20 pdb-5\">\n\t\t\t\t<p class=\"txt3\">Tax({{tax}}%)</p>\n\t\t\t\t<p class=\"fw-600 flex-1\" text-right *ngIf=\"tax_pay\">+ {{tax_pay}}</p>\n\t\t\t</div>\n\t\t\t<hr class=\"bg-light\">\n\t\t\t<div class=\"transaction-fee flex-row flex-ali-center pdl-20 pdr-20 pdb-5\">\n\t\t\t\t<p class=\"txt3\">Transaction Fee({{shipfee}}/km)</p>\n\t\t\t\t<p class=\"fw-600 flex-1\" text-right *ngIf=\"shipfee_pay\">+ {{shipfee_pay}}</p>\n\t\t\t</div>\n\t\t\t<hr class=\"bg-light\">\n\t\t\t<div class=\"total-pay mgt-30\" text-center>\n\t\t\t\t<p class=\"txt4 mgb-5\">Total your pay</p>\n\t\t\t\t<h2 class=\"fw-900 spacing-3 fs-40 mgt-0\" *ngIf=\"total_pay\">{{total_pay}}</h2>\n\t\t\t</div>\n\t\t\t<br class=\"bg-light\">\n\t\t\t<div class=\"\" text-center>\n\t\t\t\t<ion-button size=\"large\" shape=\"round\" color=\"primary\" class=\"bdra-30 uppercase fw-600 bg-base\" [routerLink]=\"['/checkout', {total_price: total_price, tax_pay: tax_pay, shipfee_pay: shipfee_pay, total_pay: total_pay}]\" routerDirection=\"forward\">\n\t\t\t\t\tPay & Order\n\t\t\t\t\t<ion-icon slot=\"end\" name=\"md-play\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<br>\n\t\t\t<br>\n\t\t\t<br>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/mycart/mycart.module.ts":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/mycart/mycart.module.ts ***!
  \****************************************************/
/*! exports provided: MycartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycartPageModule", function() { return MycartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mycart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mycart.page */ "./src/pages/Shopping/mycart/mycart.page.ts");







var routes = [
    {
        path: '',
        component: _mycart_page__WEBPACK_IMPORTED_MODULE_6__["MycartPage"]
    }
];
var MycartPageModule = /** @class */ (function () {
    function MycartPageModule() {
    }
    MycartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mycart_page__WEBPACK_IMPORTED_MODULE_6__["MycartPage"]]
        })
    ], MycartPageModule);
    return MycartPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/mycart/mycart.page.scss":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/mycart/mycart.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-cart {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ebebeb;\n}\n.item-cart .thumb {\n  width: 60px;\n  height: 70px;\n}\n.item-cart .thumb img {\n  height: 100%;\n  min-width: 100%;\n}\n.item-cart .description {\n  flex: 10;\n}\n.item-cart .quantity {\n  flex: 1;\n}\n.item-cart .quantity input {\n  width: 30px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.transaction-fee {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvbXljYXJ0L215Y2FydC5wYWdlLnNjc3MiLCJzcmMvcGFnZXMvU2hvcHBpbmcvbXljYXJ0L215Y2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0NEO0FEQUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEREU7RUFDQyxZQUFBO0VBQ0EsZUFBQTtBQ0dIO0FEQUM7RUFDQyxRQUFBO0FDRUY7QURBQztFQUNDLE9BQUE7QUNFRjtBRERFO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0dIO0FEQ0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUNFRCIsImZpbGUiOiJzcmMvcGFnZXMvU2hvcHBpbmcvbXljYXJ0L215Y2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jYXJ0e1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcblx0LnRodW1ie1xuXHRcdHdpZHRoOiA2MHB4O1xuXHRcdGhlaWdodDogNzBweDtcblx0XHRpbWd7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0fVxuXHR9XG5cdC5kZXNjcmlwdGlvbntcblx0XHRmbGV4OiAxMDtcblx0fVxuXHQucXVhbnRpdHl7XG5cdFx0ZmxleDogMTtcblx0XHRpbnB1dHtcblx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0bWFyZ2luLXRvcDogNnB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogNnB4O1xuXHRcdH1cblx0fVxufVxuLnRyYW5zYWN0aW9uLWZlZXtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCIuaXRlbS1jYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG59XG4uaXRlbS1jYXJ0IC50aHVtYiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uaXRlbS1jYXJ0IC50aHVtYiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5pdGVtLWNhcnQgLmRlc2NyaXB0aW9uIHtcbiAgZmxleDogMTA7XG59XG4uaXRlbS1jYXJ0IC5xdWFudGl0eSB7XG4gIGZsZXg6IDE7XG59XG4uaXRlbS1jYXJ0IC5xdWFudGl0eSBpbnB1dCB7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnRyYW5zYWN0aW9uLWZlZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/pages/Shopping/mycart/mycart.page.ts":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/mycart/mycart.page.ts ***!
  \**************************************************/
/*! exports provided: MycartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycartPage", function() { return MycartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_currencies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/currencies */ "./src/pages/Shopping/providers/currencies.ts");





var MycartPage = /** @class */ (function () {
    function MycartPage(events, currenciesProv, storage, navCtrl) {
        var _this = this;
        this.events = events;
        this.currenciesProv = currenciesProv;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.total_price = 0;
        this.total_pay = 0;
        this.storage.get('cart_list').then(function (val) {
            if (!val || val == null) {
                _this.list_cart = new Array();
            }
            else {
                _this.list_cart = val;
            }
            console.log(_this.list_cart);
        });
        this.events.subscribe('cart_list: change', function (lst) {
            _this.list_cart = lst;
        });
        this.storage.get('setting').then(function (val) {
            _this.tax = val.tax_fee;
            _this.shipfee = val.ship_fee;
            _this.price_calc();
        });
    }
    MycartPage.prototype.ionViewWillEnter = function () {
    };
    MycartPage.prototype.price_calc = function () {
        var _this = this;
        this.total_price = 0;
        this.list_cart.forEach(function (val) {
            var item_tmp = 0;
            if (val.discount > 0) {
                item_tmp = (parseFloat(val.price) - parseFloat(val.price) / 100 * parseFloat(val.discount)) * parseInt(val.quantity);
            }
            else {
                item_tmp = parseFloat(val.price) * parseInt(val.quantity);
            }
            _this.total_price = _this.total_price + item_tmp;
        });
        this.shipfee_calc();
        this.tax_calc();
        this.total_pay_calc();
    };
    MycartPage.prototype.shipfee_calc = function () {
        this.shipfee_pay = parseFloat(this.total_price) / 100 * this.shipfee;
    };
    MycartPage.prototype.tax_calc = function () {
        this.tax_pay = parseFloat(this.total_price) / 100 * this.tax;
    };
    MycartPage.prototype.total_pay_calc = function () {
        this.total_pay = this.shipfee_pay + this.tax_pay + this.total_price;
    };
    MycartPage.prototype.quantity = function (i, qtt) {
        this.list_cart[i].quantity = parseFloat(this.list_cart[i].quantity) + parseFloat(qtt);
        if (this.list_cart[i].quantity > 99) {
            this.list_cart[i].quantity = 99;
        }
        if (this.list_cart[i].quantity < 1) {
            this.list_cart[i].quantity = 1;
        }
        this.events.publish('cart_list: change', this.list_cart);
        this.storage.set('cart_list', this.list_cart);
        this.price_calc();
    };
    MycartPage.prototype.enterQuantity = function (i, qtt) {
        this.list_cart[i].quantity = parseFloat(qtt);
        if (this.list_cart[i].quantity > 99) {
            this.list_cart[i].quantity = 99;
        }
        if (this.list_cart[i].quantity < 1) {
            this.list_cart[i].quantity = 1;
        }
        this.events.publish('cart_list: change', this.list_cart);
        this.storage.set('cart_list', this.list_cart);
        this.price_calc();
    };
    MycartPage.prototype.removeItem = function (i) {
        this.list_cart.splice(i, 1);
        this.events.publish('cart_list: change', this.list_cart);
        this.storage.set('cart_list', this.list_cart);
    };
    MycartPage.prototype.ngOnInit = function () {
    };
    MycartPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    MycartPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _providers_currencies__WEBPACK_IMPORTED_MODULE_4__["CurrenciesProvider"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    MycartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mycart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mycart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/mycart/mycart.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mycart.page.scss */ "./src/pages/Shopping/mycart/mycart.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _providers_currencies__WEBPACK_IMPORTED_MODULE_4__["CurrenciesProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], MycartPage);
    return MycartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-mycart-mycart-module.js.map