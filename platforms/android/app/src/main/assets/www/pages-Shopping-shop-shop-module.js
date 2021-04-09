(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-shop-shop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/shop/shop.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/shop/shop.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t<ion-back-button class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t<!-- <ion-icon style=\"color: black;font-size: 26px;margin-left: 4px;\" src=\"../../../assets/icons/chevron-back.svg\" (click)=\"goBack()\"></ion-icon> -->\n\t\t\t</ion-back-button>\n\t\t\t<ion-menu-button menu=\"shop\">\n\t\t\t</ion-menu-button>\n\t\t</ion-buttons>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/mycart'\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon name=\"cart\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>Shop</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<div class=\"\" *ngFor=\"let item of list_cat\">\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<div class=\"item-cat white\" padding (click)=\"goToList(item)\">\n\t\t\t<div class=\"thumb ovfl-hidden flex-row flex-ali-center flex-jus-center mgt--70 mgr-30 shadow-3\">\n\t\t\t\t<img class=\"\" src=\"{{item.payload.doc.data().thumb}}\">\n\t\t\t</div>\n\t\t\t<div class=\"mgt-20 pdl-30\">\n\t\t\t\t<p class=\"ellipsis txt-b3 mgb-0\">{{item.payload.doc.data().description}}</p>\n\t\t\t\t<h3 class=\"mgt-0 uppercase fs-20\">{{item.payload.doc.data().name}}</h3>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<br>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/shop/shop.module.ts":
/*!************************************************!*\
  !*** ./src/pages/Shopping/shop/shop.module.ts ***!
  \************************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/pages/Shopping/shop/shop.page.ts");







var routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]
    }
];
var ShopPageModule = /** @class */ (function () {
    function ShopPageModule() {
    }
    ShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]]
        })
    ], ShopPageModule);
    return ShopPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/shop/shop.page.scss":
/*!************************************************!*\
  !*** ./src/pages/Shopping/shop/shop.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-cat .thumb {\n  height: 150px;\n}\n.item-cat .thumb img {\n  width: 100%;\n  height: auto;\n  max-height: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvc2hvcC9zaG9wLnBhZ2Uuc2NzcyIsInNyYy9wYWdlcy9TaG9wcGluZy9zaG9wL3Nob3AucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsYUFBQTtBQ0FGO0FEQ0U7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0giLCJmaWxlIjoic3JjL3BhZ2VzL1Nob3BwaW5nL3Nob3Avc2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jYXR7XG5cdC50aHVtYntcblx0XHRoZWlnaHQ6IDE1MHB4O1xuXHRcdGltZ3tcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0bWF4LWhlaWdodDogdW5zZXQ7XG5cdFx0fVxuXHR9XG59IiwiLml0ZW0tY2F0IC50aHVtYiB7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uaXRlbS1jYXQgLnRodW1iIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IHVuc2V0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/Shopping/shop/shop.page.ts":
/*!**********************************************!*\
  !*** ./src/pages/Shopping/shop/shop.page.ts ***!
  \**********************************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/categories */ "./src/pages/Shopping/providers/categories.ts");




var ShopPage = /** @class */ (function () {
    function ShopPage(catProv, loadingCtrl, navCtrl) {
        var _this = this;
        this.catProv = catProv;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.presentLoading();
        this.catProv.getCatParent().then(function (data) {
            _this.loading.dismiss().then(function () {
                _this.list_cat = data;
                console.log(_this.list_cat[0].payload.doc.id);
                console.log(_this.list_cat);
            });
        }, function (error) {
        });
    }
    ShopPage.prototype.ngOnInit = function () {
    };
    ShopPage.prototype.presentLoading = function () {
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
    ShopPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    ShopPage.prototype.goToList = function (item) {
        var extras = {
            queryParams: {
                id: item.payload.doc.id,
                name: item.payload.doc.data().name
            }
        };
        this.navCtrl.navigateForward('list', extras);
    };
    ShopPage.ctorParameters = function () { return [
        { type: _providers_categories__WEBPACK_IMPORTED_MODULE_3__["CategoriesProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    ShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/shop/shop.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.page.scss */ "./src/pages/Shopping/shop/shop.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_categories__WEBPACK_IMPORTED_MODULE_3__["CategoriesProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ShopPage);
    return ShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-shop-shop-module.js.map