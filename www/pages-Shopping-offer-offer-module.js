(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-offer-offer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/offer/offer.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/offer/offer.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" class=\"ion-no-padding ion-no-margin\">\n      <ion-back-button class=\"ion-no-padding ion-no-margin\">\n          <!-- <ion-icon style=\"color: black;font-size: 26px;margin-left: 4px;\" src=\"../../../assets/icons/chevron-back.svg\" (click)=\"goBack()\"></ion-icon> -->\n      </ion-back-button>\n      <ion-menu-button menu=\"shop\">\n      </ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/search'\" routerDirection=\"forward\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/mycart'\" routerDirection=\"forward\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 class=\"uppercase pdr-50 fw-600 spacing-1 txt1\">Products under our special promotional program.</h2>\n\n  <div class=\"mgt-20\">\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of list_offer\">\n        <div class=\"item-prd mgb-30\">\n          <div class=\"thumb\">\n            <div class=\"discount fs-12 fw-600 pdt-5\">- {{item.payload.doc.data().discount}}%</div>\n            <img src=\"{{item.payload.doc.data().thumb}}\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\" routerDirection=\"forward\">\n            <ion-button size=\"small\" color=\"primary\" class=\"favo-btn bdra-0\" *ngIf=\"favo_str.search(item.payload.doc.id) > -1\" (click)=\"favorites(item)\">\n              <ion-icon name=\"ios-heart\"></ion-icon>\n            </ion-button>\n            <ion-button size=\"small\" color=\"dark\" class=\"favo-btn bdra-0\" *ngIf=\"favo_str.search(item.payload.doc.id) < 0\" (click)=\"favorites(item)\">\n              <ion-icon name=\"ios-heart\"></ion-icon>\n            </ion-button>\n          </div>\n          <div class=\"ovfl-hidden\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\" routerDirection=\"forward\">\n            <h4 class=\"fs-16 fw-600 ellipsis mgb-0 mgt-10\">{{item.payload.doc.data().name}}</h4>\n            <p class=\"mgt-5 mgb-0\">\n              <span class=\"ellipsis fs-14 txt3 mg-0 line-through mgr-10 fw-600\" *ngIf=\"currenciesProv\">\n                <i *ngIf=\"currenciesProv\">\n                  {{currenciesProv.formatMoney(item.payload.doc.data().price)}}\n                </i>\n              </span>\n              <span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n                {{currenciesProv.formatMoney(item.payload.doc.data().price - item.payload.doc.data().price*item.payload.doc.data().discount/100)}}\n              </span>\n            </p>\n          </div>\n          <div class=\"mgt-10\">\n            <ion-button size=\"small\" icon-left (click)=\"addCart(item)\" class=\"uppercase fs-11 bdra-0 fw-600\">\n              <ion-icon name=\"ios-cart\"></ion-icon>\n              Add to cart\n            </ion-button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <br>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/pages/Shopping/offer/offer.module.ts":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/offer/offer.module.ts ***!
  \**************************************************/
/*! exports provided: OfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPageModule", function() { return OfferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer.page */ "./src/pages/Shopping/offer/offer.page.ts");







var routes = [
    {
        path: '',
        component: _offer_page__WEBPACK_IMPORTED_MODULE_6__["OfferPage"]
    }
];
var OfferPageModule = /** @class */ (function () {
    function OfferPageModule() {
    }
    OfferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_offer_page__WEBPACK_IMPORTED_MODULE_6__["OfferPage"]]
        })
    ], OfferPageModule);
    return OfferPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/offer/offer.page.scss":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/offer/offer.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-prd .thumb {\n  position: relative;\n  height: 150px;\n}\n.item-prd .thumb img {\n  height: 100%;\n  min-width: 100%;\n}\n.item-prd .thumb .discount {\n  z-index: 100;\n  position: absolute;\n  top: 10px;\n  left: 0px;\n  height: 25px;\n  width: 80px;\n  overflow: hidden;\n}\n.item-prd .thumb .discount:before {\n  content: \"\";\n  background: var(--ion-background-color);\n  display: block;\n  height: 200%;\n  width: 180%;\n  margin-left: -100px;\n  transform: rotate(-15deg);\n  position: absolute;\n  z-index: -1;\n}\n.item-prd .thumb .favo-btn {\n  z-index: 10;\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvb2ZmZXIvb2ZmZXIucGFnZS5zY3NzIiwic3JjL3BhZ2VzL1Nob3BwaW5nL29mZmVyL29mZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGtCQUFBO0VBQ0EsYUFBQTtBQ0FGO0FEQ0U7RUFDQyxZQUFBO0VBQ0EsZUFBQTtBQ0NIO0FEQ0U7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSDtBREFHO0VBQ0MsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQ0U7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NIIiwiZmlsZSI6InNyYy9wYWdlcy9TaG9wcGluZy9vZmZlci9vZmZlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1wcmR7XG5cdC50aHVtYntcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRpbWd7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0fVxuXHRcdC5kaXNjb3VudHtcblx0XHRcdHotaW5kZXg6IDEwMDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMTBweDtcblx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdGhlaWdodDogMjVweDtcblx0XHRcdHdpZHRoOiA4MHB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdCY6YmVmb3Jle1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRoZWlnaHQ6IDIwMCU7XG5cdFx0XHRcdHdpZHRoOiAxODAlO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogLTEwMHB4O1xuXHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuZmF2by1idG57XG5cdFx0XHR6LWluZGV4OiAxMDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHJpZ2h0OiAxMHB4O1xuXHRcdFx0Ym90dG9tOiA1cHg7XG5cdFx0fVxuXHR9XG59IiwiLml0ZW0tcHJkIC50aHVtYiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5pdGVtLXByZCAudGh1bWIgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uaXRlbS1wcmQgLnRodW1iIC5kaXNjb3VudCB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtLXByZCAudGh1bWIgLmRpc2NvdW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjAwJTtcbiAgd2lkdGg6IDE4MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG4uaXRlbS1wcmQgLnRodW1iIC5mYXZvLWJ0biB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/Shopping/offer/offer.page.ts":
/*!************************************************!*\
  !*** ./src/pages/Shopping/offer/offer.page.ts ***!
  \************************************************/
/*! exports provided: OfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPage", function() { return OfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/products */ "./src/pages/Shopping/providers/products.ts");
/* harmony import */ var _providers_favorites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/favorites */ "./src/pages/Shopping/providers/favorites.ts");
/* harmony import */ var _providers_currencies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/currencies */ "./src/pages/Shopping/providers/currencies.ts");
/* harmony import */ var src123_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src123/pages/auth/services/auth/auth.service */ "./src123/pages/auth/services/auth/auth.service.ts");








var OfferPage = /** @class */ (function () {
    function OfferPage(events, toastCtrl, loadingCtrl, productsProv, storage, favoritesProv, currenciesProv, navCtrl, authService) {
        var _this = this;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.productsProv = productsProv;
        this.storage = storage;
        this.favoritesProv = favoritesProv;
        this.currenciesProv = currenciesProv;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.favo_str = "";
        this.presentLoading();
        this.productsProv.getProductByOffer(null, 4).then(function (data) {
            _this.loading.dismiss().then(function () {
                _this.list_offer = data;
                if (data && data.length > 0) {
                    _this.start = data[data.length - 1].payload.doc.data().discount;
                    console.log(_this.list_offer);
                }
            });
        }, function (error) { });
        this.storage.get("cart_list").then(function (val) {
            if (!val || val == null) {
                _this.list_cart = new Array();
            }
            else {
                _this.list_cart = val;
            }
            console.log(_this.list_cart);
        });
        this.events.subscribe("cart_list: change", function (lst) {
            _this.list_cart = lst;
        });
    }
    OfferPage.prototype.ionViewWillEnter = function () { };
    OfferPage.prototype.loadMore = function (event) {
        var _this = this;
        this.productsProv.getProductByOffer(this.start, 2).then(function (data) {
            _this.list_offer = _this.list_offer.concat(data);
            console.log(data);
            if (data.length > 0) {
                _this.start = data[data.length - 1].payload.doc.data().discount;
            }
            console.log(_this.list_offer);
            setTimeout(function () {
                event.target.disabled = true;
            }, 1500);
        }, function (error) {
            setTimeout(function () {
                event.target.disabled = true;
            }, 1500);
        });
    };
    OfferPage.prototype.favorites = function (item) {
        var _this = this;
        console.log(item.payload.doc.id);
        var check = this.favo_str.indexOf(item.payload.doc.id);
        if (check == -1) {
            this.favo_str = this.favo_str + item.payload.doc.id + " ";
        }
        else {
            this.favo_str = this.favo_str.replace(item.payload.doc.id + " ", "");
        }
        this.favoritesProv
            .favoritesAdd(this.favo_str, this.id_user, this.id_favo_str)
            .then(function (data) {
            if (!_this.id_favo_str || _this.id_favo_str == null) {
                _this.favoritesProv.getByUserId(_this.id_user).then(function (newFavo) {
                    _this.id_favo_str = newFavo[0].payload.doc.id;
                });
            }
        });
    };
    OfferPage.prototype.addCart = function (item) {
        console.log(item);
        var itemCv = {
            id: item.payload.doc.id,
            name: item.payload.doc.data().name,
            price: item.payload.doc.data().price,
            discount: item.payload.doc.data().discount,
            description: item.payload.doc.data().description,
            vote: item.payload.doc.data().vote,
            created: item.payload.doc.data().created,
            id_cat: item.payload.doc.data().id_cat,
            tag: item.payload.doc.data().tag,
            thumb: item.payload.doc.data().thumb,
            thumb1: item.payload.doc.data().thumb1,
            thumb2: item.payload.doc.data().thumb2,
            thumb3: item.payload.doc.data().thumb3,
            thumb4: item.payload.doc.data().thumb4,
            quantity: 1,
        };
        var temp = this.list_cart.filter(function (element) {
            if (element.id == itemCv.id) {
                element.quantity = 1 + element.quantity;
                return true;
            }
        });
        console.log(temp);
        if (temp.length == 0) {
            this.list_cart = this.list_cart.concat(itemCv);
        }
        this.presentToast();
        // this.list_cart = new Array();
        this.events.publish("cart_list: change", this.list_cart);
        this.storage.set("cart_list", this.list_cart);
        console.log(this.list_cart);
    };
    OfferPage.prototype.presentLoading = function () {
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
    OfferPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: "added success",
                            duration: 2000,
                            position: "top",
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfferPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    OfferPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    OfferPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers_products__WEBPACK_IMPORTED_MODULE_4__["ProductsProvider"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _providers_favorites__WEBPACK_IMPORTED_MODULE_5__["FavoritesProvider"] },
        { type: _providers_currencies__WEBPACK_IMPORTED_MODULE_6__["CurrenciesProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src123_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
    ]; };
    OfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-offer",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/offer/offer.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offer.page.scss */ "./src/pages/Shopping/offer/offer.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_products__WEBPACK_IMPORTED_MODULE_4__["ProductsProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_favorites__WEBPACK_IMPORTED_MODULE_5__["FavoritesProvider"],
            _providers_currencies__WEBPACK_IMPORTED_MODULE_6__["CurrenciesProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src123_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], OfferPage);
    return OfferPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-offer-offer-module.js.map