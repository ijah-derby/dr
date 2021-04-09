(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-favorites-favorites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/favorites/favorites.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/favorites/favorites.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t<ion-back-button class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t<!-- <ion-icon style=\"color: black;font-size: 26px;margin-left: 4px;\" src=\"../../../assets/icons/chevron-back.svg\" (click)=\"goBack()\"></ion-icon> -->\n\t\t\t</ion-back-button>\n\t\t\t<ion-menu-button menu=\"shop\">\n\t\t\t</ion-menu-button>\n\t\t  </ion-buttons>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/search'\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon name=\"search\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/mycart'\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon name=\"cart\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>Favorites</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<div padding class=\"pdr-50\">\n\t\t<h2 class=\"uppercase pdr-50\">the products you love</h2>\n\t</div>\n\n\t<div class=\"\" *ngIf=\"list_favo_product == null || list_favo_product.length == 0 || !list_favo_product\">\n\t\t<h5 class=\"pdl-15 pdr-50 uppercase spacing-1 fs-14\">You have not loved any product</h5>\n\t</div>\n\t<div class=\"\" *ngIf=\"list_favo_product && list_favo_product.length > 0\">\n\t\t<div class=\"wrap-top-slide\">\n\t\t\t<ion-slides>\n\t\t\t\t<ion-slide *ngFor=\"let item of list_favo_product_slide\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n\t\t\t\t\t<div text-left class=\"item-slide\">\n\t\t\t\t\t\t<div class=\"thumb flex-row flex-jus-center flex-ali-center\">\n\t\t\t\t\t\t\t<img src=\"{{item.payload.doc.data().thumb}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t</div>\n\n\t\t<br>\n\t\t<br>\n\n\t\t<h5 class=\"pdl-15 pdr-50 uppercase spacing-1 fs-14\">loved in the nearest order</h5>\n\t\t\n\t\t<br>\n\n\t\t<div class=\"list-prd-list\" *ngIf=\"list_favo_product.length > 0\">\n\t\t\t<div class=\"item-prd mgb-20 pdb-15\" *ngFor=\"let item of list_favo_product, let i = imdex\">\n\t\t\t\t<div class=\"thumb mgr-10\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n\t\t\t\t\t<img src=\"{{item.payload.doc.data().thumb}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<div class=\"ovfl-hidden\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n\t\t\t\t\t\t<h4 class=\"fs-16 fw-600 ellipsis mg-0\">{{item.payload.doc.data().name}}</h4>\n\t\t\t\t\t\t<p class=\"mg-0\">\n\t\t\t\t\t\t\t<span class=\"ellipsis fs-14 txt3 mg-0 line-through mgr-10 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n\t\t\t\t\t\t\t\t<i *ngIf=\"currenciesProv\">\n\t\t\t\t\t\t\t\t\t{{currenciesProv.formatMoney(item.payload.doc.data().price)}}\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n\t\t\t\t\t\t\t\t{{currenciesProv.formatMoney(item.payload.doc.data().price - item.payload.doc.data().price*item.payload.doc.data().discount/100)}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount == 0\">\n\t\t\t\t\t\t\t\t{{currenciesProv.formatMoney(item.payload.doc.data().price)}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mgt-5\">\n\t\t\t\t\t\t<ion-button size=\"small\" (click)=\"addCart(item)\" class=\"fs-11 bdra-0 fw-600\">\n\t\t\t\t\t\t\t<ion-icon name=\"ios-cart\"></ion-icon>\n\t\t\t\t\t\t\tAdd cart\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t<ion-button size=\"small\" color=\"primary\" class=\"fs-11 bdra-0\" *ngIf=\"favo_str.search(item.payload.doc.id) > -1\" (click)=\"favorites(item)\">\n\t\t\t\t\t\t\t<ion-icon name=\"ios-heart\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\" class=\"fs-11 bdra-0\" *ngIf=\"favo_str.search(item.payload.doc.id) < 0\" (click)=\"favorites(item)\">\n\t\t\t\t\t\t\t<ion-icon name=\"ios-heart\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<ion-infinite-scroll (ionInfinite)=\"loadMore($event)\">\n\t\t<ion-infinite-scroll-content></ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/favorites/favorites.module.ts":
/*!**********************************************************!*\
  !*** ./src/pages/Shopping/favorites/favorites.module.ts ***!
  \**********************************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites.page */ "./src/pages/Shopping/favorites/favorites.page.ts");







var routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]
    }
];
var FavoritesPageModule = /** @class */ (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/favorites/favorites.page.scss":
/*!**********************************************************!*\
  !*** ./src/pages/Shopping/favorites/favorites.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap-top-slide {\n  width: 130%;\n}\n.wrap-top-slide .thumb {\n  height: 100px;\n}\n.list-prd-list .item-prd {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ebebeb;\n}\n.list-prd-list .item-prd .thumb {\n  height: 80px;\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiLCJzcmMvcGFnZXMvU2hvcHBpbmcvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FDQ0Q7QURBQztFQUNDLGFBQUE7QUNFRjtBREVDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBREFFO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUNFSCIsImZpbGUiOiJzcmMvcGFnZXMvU2hvcHBpbmcvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcC10b3Atc2xpZGV7XG5cdHdpZHRoOiAxMzAlO1xuXHQudGh1bWJ7XG5cdFx0aGVpZ2h0OiAxMDBweDtcblx0fVxufVxuLmxpc3QtcHJkLWxpc3R7XG5cdC5pdGVtLXByZHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG5cdFx0LnRodW1ie1xuXHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0d2lkdGg6IDkwcHg7XG5cdFx0fVxuXHR9XG59IiwiLndyYXAtdG9wLXNsaWRlIHtcbiAgd2lkdGg6IDEzMCU7XG59XG4ud3JhcC10b3Atc2xpZGUgLnRodW1iIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmxpc3QtcHJkLWxpc3QgLml0ZW0tcHJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG59XG4ubGlzdC1wcmQtbGlzdCAuaXRlbS1wcmQgLnRodW1iIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogOTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/Shopping/favorites/favorites.page.ts":
/*!********************************************************!*\
  !*** ./src/pages/Shopping/favorites/favorites.page.ts ***!
  \********************************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/products */ "./src/pages/Shopping/providers/products.ts");
/* harmony import */ var _providers_favorites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/favorites */ "./src/pages/Shopping/providers/favorites.ts");
/* harmony import */ var _providers_currencies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/currencies */ "./src/pages/Shopping/providers/currencies.ts");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");








var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(events, toastCtrl, loadingCtrl, productsProv, storage, favoritesProv, currenciesProv, navCtrl, authService) {
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
        this.list_favo_product = [];
        this.list_favo_product_slide = [];
        this.limit = 4;
        this.start = 0;
        this.favo_str = '';
        this.presentLoading();
        // this.storage.get('user').then((val) => {
        // 	this.id_user = val.id_auth;
        // });
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
    }
    FavoritesPage.prototype.presentLoading = function () {
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
    FavoritesPage.prototype.ionViewWillEnter = function () {
    };
    FavoritesPage.prototype.loadMore = function (event) {
        var _this = this;
        var count = this.start;
        for (var i = this.start; i < this.favo_id_arr.length; i++) {
            if (this.start - count < this.limit) {
                this.favoritesProv.getFavoByIdPd(this.favo_id_arr[i]).then(function (data) {
                    if (data.length > 0) {
                        _this.list_favo_product = _this.list_favo_product.concat(data);
                        _this.start = _this.start + 1;
                    }
                    else {
                        setTimeout(function () {
                            event.target.disabled = true;
                        }, 1500);
                    }
                }, function (error) {
                    setTimeout(function () {
                        event.target.disabled = true;
                    }, 1500);
                });
            }
            else {
                setTimeout(function () {
                    event.target.disabled = true;
                }, 1500);
                break;
            }
        }
    };
    FavoritesPage.prototype.favorites = function (item, i) {
        var _this = this;
        console.log(item.payload.doc.id);
        this.favo_str = this.favo_str.replace(item.payload.doc.id + ' ', '');
        this.favoritesProv.favoritesAdd(this.favo_str, this.id_user, this.id_favo_str).then(function (data) {
            _this.list_favo_product.splice(i, 1);
            console.log(_this.list_favo_product);
        });
    };
    FavoritesPage.prototype.addCart = function (item) {
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
            quantity: 1
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
        this.events.publish('cart_list: change', this.list_cart);
        this.storage.set('cart_list', this.list_cart);
        console.log(this.list_cart);
    };
    FavoritesPage.prototype.presentToast = function () {
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
    FavoritesPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currenUser;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        currenUser = _a.sent();
                        this.id_user = currenUser.uid;
                        this.favoritesProv.getByUserId(currenUser.uid).then(function (data) {
                            if (data.length > 0) {
                                _this.favo_str = data[0].payload.doc.data().id_product;
                                _this.id_favo_str = data[0].payload.doc.id;
                                _this.favo_id_arr = _this.favo_str.split(' ');
                                console.log(data);
                                for (var i = _this.start; i < _this.limit && i < _this.favo_id_arr.length; i++) {
                                    _this.favoritesProv.getFavoByIdPd(_this.favo_id_arr[i]).then(function (dataProduct) {
                                        _this.loading.dismiss().then(function () {
                                            console.log(dataProduct);
                                            if (dataProduct.length > 0) {
                                                _this.list_favo_product = _this.list_favo_product.concat(dataProduct);
                                                _this.start = _this.start + 1;
                                            }
                                        });
                                    }, function (error) {
                                    });
                                }
                                console.log(_this.favo_id_arr);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FavoritesPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    FavoritesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers_products__WEBPACK_IMPORTED_MODULE_4__["ProductsProvider"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _providers_favorites__WEBPACK_IMPORTED_MODULE_5__["FavoritesProvider"] },
        { type: _providers_currencies__WEBPACK_IMPORTED_MODULE_6__["CurrenciesProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
    ]; };
    FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/favorites/favorites.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.page.scss */ "./src/pages/Shopping/favorites/favorites.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_products__WEBPACK_IMPORTED_MODULE_4__["ProductsProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_favorites__WEBPACK_IMPORTED_MODULE_5__["FavoritesProvider"],
            _providers_currencies__WEBPACK_IMPORTED_MODULE_6__["CurrenciesProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], FavoritesPage);
    return FavoritesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-favorites-favorites-module.js.map