(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/search/search.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/search/search.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button class=\"fs-24 txt1\" text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n\t\t\t\n\t\t\t<ion-menu-button>\n\t\t\t\t<ion-icon class=\"fs-24 txt1\" name=\"arrow-round-forward\"></ion-icon>\n\t\t\t</ion-menu-button>\n\t\t</ion-buttons>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/mycart'\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon name=\"cart\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>Search</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<ion-searchbar (ionInput)=\"getItems($event)\"></ion-searchbar>\n\t<div padding class=\"\">\n\t\t<div class=\"list-prd-list\" *ngIf=\"list_search && list_search.length > 0\">\n\t\t\t<div class=\"item-prd mgb-20 pdb-15\" *ngFor=\"let item of list_search\">\n\t\t\t\t<div class=\"thumb mgr-10 flex-row flex-ali-center flex-jus-center\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n\t\t\t\t\t<img src=\"{{item.payload.doc.data().thumb}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<div class=\"ovfl-hidden\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n\t\t\t\t\t\t<h4 class=\"fs-14 txt1 fw-600 ellipsis mg-0\">{{item.payload.doc.data().name}}</h4>\n\t\t\t\t\t\t<p class=\"mg-0\">\n\t\t\t\t\t\t\t<span class=\"ellipsis fs-14 txt3 mg-0 line-through mgr-10 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n\t\t\t\t\t\t\t\t<i *ngIf=\"currenciesProv\">\n\t\t\t\t\t\t\t\t\t{{currenciesProv.formatMoney(item.payload.doc.data().price)}}\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n\t\t\t\t\t\t\t\t{{currenciesProv.formatMoney(item.payload.doc.data().price - item.payload.doc.data().price*item.payload.doc.data().discount/100)}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount == 0\">\n\t\t\t\t\t\t\t\t{{currenciesProv.formatMoney(item.payload.doc.data().price - item.payload.doc.data().price*item.payload.doc.data().discount/100)}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mgt-5\">\n\t\t\t\t\t\t<ion-button size=\"small\" (click)=\"addCart(item)\" class=\"fs-11 bdra-0 fw-600\">\n\t\t\t\t\t\t\t<ion-icon name=\"ios-cart\"></ion-icon>\n\t\t\t\t\t\t\tAdd cart\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t<ion-button size=\"small\" color=\"primary\" class=\"fs-11 bdra-0\" *ngIf=\"favo_str.search(item.payload.doc.id) > -1\" (click)=\"favorites(item)\">\n\t\t\t\t\t\t\t<ion-icon name=\"ios-heart\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\" class=\"fs-11 bdra-0\" *ngIf=\"favo_str.search(item.payload.doc.id) < 0\" (click)=\"favorites(item)\">\n\t\t\t\t\t\t\t<ion-icon name=\"ios-heart\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<br>\n\t\n\t<ion-infinite-scroll (ionInfinite)=\"loadMore($event)\">\n\t\t<ion-infinite-scroll-content></ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/search/search.module.ts":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/search/search.module.ts ***!
  \****************************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/pages/Shopping/search/search.page.ts");







var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/search/search.page.scss":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/search/search.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-prd-list .item-prd {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ebebeb;\n}\n.list-prd-list .item-prd .thumb {\n  height: 80px;\n  width: 90px;\n}\n.list-prd-list .item-prd .thumb img {\n  height: 100%;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzcmMvcGFnZXMvU2hvcHBpbmcvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FEQ0U7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ0NIO0FEQUc7RUFDQyxZQUFBO0VBQ0EsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9wYWdlcy9TaG9wcGluZy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LXByZC1saXN0e1xuXHQuaXRlbS1wcmR7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xuXHRcdC50aHVtYntcblx0XHRcdGhlaWdodDogODBweDtcblx0XHRcdHdpZHRoOiA5MHB4O1xuXHRcdFx0aW1ne1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCIubGlzdC1wcmQtbGlzdCAuaXRlbS1wcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbn1cbi5saXN0LXByZC1saXN0IC5pdGVtLXByZCAudGh1bWIge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA5MHB4O1xufVxuLmxpc3QtcHJkLWxpc3QgLml0ZW0tcHJkIC50aHVtYiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/Shopping/search/search.page.ts":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/search/search.page.ts ***!
  \**************************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/products */ "./src/pages/Shopping/providers/products.ts");
/* harmony import */ var _providers_currencies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/currencies */ "./src/pages/Shopping/providers/currencies.ts");
/* harmony import */ var _providers_favorites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/favorites */ "./src/pages/Shopping/providers/favorites.ts");







var SearchPage = /** @class */ (function () {
    function SearchPage(toastCtrl, favoritesProv, storage, currenciesProv, loadingCtrl, productsProv) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.favoritesProv = favoritesProv;
        this.storage = storage;
        this.currenciesProv = currenciesProv;
        this.loadingCtrl = loadingCtrl;
        this.productsProv = productsProv;
        this.favo_str = '';
        this.search_str = '';
        this.presentLoading();
        this.storage.get('user').then(function (val) {
            _this.id_user = val.id_auth;
            _this.favoritesProv.getByUserId(_this.id_user).then(function (data) {
                _this.loading.dismiss().then(function () {
                    if (data.length > 0) {
                        _this.favo_str = data[0].payload.doc.data().id_product;
                        _this.id_favo_str = data[0].payload.doc.id;
                        console.log(data);
                    }
                });
            });
        });
        this.storage.get('cart_list').then(function (val) {
            if (!val || val == null) {
                _this.list_cart = new Array();
            }
            else {
                _this.list_cart = val;
            }
            console.log(_this.list_cart);
        });
    }
    SearchPage.prototype.ionViewWillEnter = function () {
    };
    SearchPage.prototype.favorites = function (item) {
        var _this = this;
        console.log(item.payload.doc.id);
        var check = this.favo_str.indexOf(item.payload.doc.id);
        if (check == -1) {
            this.favo_str = this.favo_str + item.payload.doc.id + ' ';
        }
        else {
            this.favo_str = this.favo_str.replace(item.payload.doc.id + ' ', '');
        }
        this.favoritesProv.favoritesAdd(this.favo_str, this.id_user, this.id_favo_str).then(function (data) {
            if (!_this.id_favo_str || _this.id_favo_str == null) {
                _this.favoritesProv.getByUserId(_this.id_user).then(function (newFavo) {
                    _this.id_favo_str = newFavo[0].payload.doc.id;
                });
            }
        });
    };
    SearchPage.prototype.loadMore = function (event) {
        var _this = this;
        this.productsProv.getProductByName(this.start, 2, this.search_str).then(function (data) {
            _this.list_search = _this.list_search.concat(data);
            console.log(data);
            if (data.length > 0) {
                _this.start = data[data.length - 1].payload.doc.data().name;
            }
            console.log(_this.list_search);
            setTimeout(function () {
                event.target.disabled = true;
            }, 1500);
        });
    };
    SearchPage.prototype.getItems = function (val) {
        var _this = this;
        if (val.target.value != null && val.target.value != ' ' && val.target.value != '') {
            this.productsProv.getProductByName(null, 4, val.target.value).then(function (data) {
                console.log(data);
                if (data.length > 0) {
                    console.log(_this.list_search);
                    _this.list_search = data;
                    _this.start = data[data.length - 1].payload.doc.data().name;
                    _this.search_str = val.target.value;
                    console.log(_this.list_search);
                }
            }, function (error) {
            });
        }
        if (val.target.value == null || val.target.value == '') {
            this.list_search = new Array();
        }
    };
    SearchPage.prototype.addCart = function (item) {
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
        this.storage.set('cart_list', this.list_cart);
        console.log(this.list_cart);
    };
    SearchPage.prototype.presentLoading = function () {
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
    SearchPage.prototype.presentToast = function () {
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
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _providers_favorites__WEBPACK_IMPORTED_MODULE_6__["FavoritesProvider"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _providers_currencies__WEBPACK_IMPORTED_MODULE_5__["CurrenciesProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers_products__WEBPACK_IMPORTED_MODULE_4__["ProductsProvider"] }
    ]; };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/search/search.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.page.scss */ "./src/pages/Shopping/search/search.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _providers_favorites__WEBPACK_IMPORTED_MODULE_6__["FavoritesProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_currencies__WEBPACK_IMPORTED_MODULE_5__["CurrenciesProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_products__WEBPACK_IMPORTED_MODULE_4__["ProductsProvider"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-search-search-module.js.map