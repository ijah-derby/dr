(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/home/home.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/home/home.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" class=\"ion-no-padding ion-no-margin\">\n      <ion-back-button class=\"ion-no-padding ion-no-margin\">\n          <!-- <ion-icon style=\"color: black;font-size: 26px;margin-left: 4px;\" src=\"../../../assets/icons/chevron-back.svg\" (click)=\"goBack()\"></ion-icon> -->\n      </ion-back-button>\n      <!-- <ion-menu-button menu=\"shop\" size=\"small\" autoHide=\"true\">\n      </ion-menu-button> -->\n      <ion-icon name=\"menu\" style=\"font-size: 25px;padding-left: 10px;\" (click)=\"openMenu()\"></ion-icon>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/search'\" routerDirection=\"forward\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/mycart'\" routerDirection=\"forward\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div class=\"wrap-top-slide\" *ngIf=\"list_product_slide\">\n    <ion-slides [options]=\"slidePerViewOpts\">\n      <ion-slide *ngFor=\"let item of list_product_slide\">\n        <div text-left class=\"item-slide\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n          <div class=\"thumb ovfl-hidden flex-row flex-jus-center flex-ali-center\">\n            <img src=\"{{item.payload.doc.data().thumb}}\">\n          </div>\n          <p class=\"pdl-15 pdr-15 ellipsis txt3 mgb-5 fs-14\">{{item.payload.doc.data().description}}</p>\n          <h4 class=\"pdl-15 pdr-15 fw-500 fs-16 txt1 mgt-0 ellipsis\">{{item.payload.doc.data().name}}</h4>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  <div padding class=\"wrap-news\" *ngIf=\"list_product_new\">\n    <h5 class=\"uppercase fs-16 fw-600 spacing-1 txt1\">New Post</h5>\n    <ion-slides [options]=\"slidePerViewOpts2\">\n      <ion-slide *ngFor=\"let item of list_product_new\">\n        <div text-left class=\"item-slide\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n          <div class=\"thumb ovfl-hidden flex-row flex-jus-center flex-ali-center\">\n            <img src=\"{{item.payload.doc.data().thumb}}\">\n          </div>\n          <h4 class=\"fw-500 fs-14 txt1 mgb-0 ellipsis\">{{item.payload.doc.data().name}}</h4>\n          <p class=\"txt4 mgt-0 fs-11\">{{(item.payload.doc.data().created).substring(4, 15)}}</p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  <div padding class=\"\">\n    <h5 class=\"uppercase fs-16 fw-600 spacing-1 txt1 mgt-0\">Popular</h5>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of list_product\">\n        <div class=\"item-prd mgb-30\">\n          <div class=\"thumb ovfl-hidden flex-row flex-jus-center flex-ali-center\">\n            <div class=\"discount fw-600 pdt-5 fs-12 shadow-3 white\" *ngIf=\"item.payload.doc.data().discount > 0\">\n              - {{item.payload.doc.data().discount}}%\n            </div>\n            <img src=\"{{item.payload.doc.data().thumb2}}\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n            <ion-button size=\"small\" color=\"primary\" class=\"fs-11 bdra-0 favo-btn\" *ngIf=\"favo_str.search(item.payload.doc.id) > -1\" (click)=\"favorites(item)\">\n              <ion-icon name=\"ios-heart\"></ion-icon>\n            </ion-button>\n            <ion-button size=\"small\" color=\"dark\" class=\"fs-11 bdra-0 favo-btn\" *ngIf=\"favo_str.search(item.payload.doc.id) < 0\" (click)=\"favorites(item)\">\n              <ion-icon name=\"ios-heart\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div class=\"ovfl-hidden\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n            <h4 class=\"fs-16 fw-600 ellipsis mgb-0 mgt-10\">{{item.payload.doc.data().name}}</h4>\n            <p class=\"mgt-5 mgb-0\">\n              <span class=\"ellipsis fs-14 txt3 mg-0 line-through mgr-10 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n                <i *ngIf=\"currenciesProv\">{{item.payload.doc.data().price}}</i>\n              </span>\n              <span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n                {{item.payload.doc.data().price - item.payload.doc.data().price*item.payload.doc.data().discount/100}}\n              </span>\n              <span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount == 0\">\n                {{item.payload.doc.data().price}}\n              </span>\n            </p>\n          </div>\n          <div class=\"mgt-10\">\n            <ion-button size=\"small\" color=\"dark\" (click)=\"addCart(item)\" class=\"uppercase fs-11 bdra-0 fw-600\">\n              <ion-icon slot=\"start\" name=\"ios-cart\"></ion-icon>\n              Add to cart\n            </ion-button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <br>\n  \n\n  <ion-infinite-scroll (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/pages/Shopping/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/pages/Shopping/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/home/home.page.scss":
/*!************************************************!*\
  !*** ./src/pages/Shopping/home/home.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".can-go-back ion-menu-button {\n  display: block !important;\n}\n\n.wrap-top-slide {\n  width: 170%;\n}\n\n.wrap-top-slide .thumb {\n  height: 150px;\n}\n\n.wrap-top-slide .thumb img {\n  min-height: 100%;\n  width: 100%;\n}\n\n.wrap-news {\n  width: 120%;\n}\n\n.wrap-news .thumb {\n  height: 80px;\n}\n\n.wrap-news .thumb img {\n  height: 100%;\n  min-width: 100%;\n}\n\n.item-prd .thumb {\n  position: relative;\n  height: 150px;\n}\n\n.item-prd .thumb img {\n  height: 100%;\n  min-width: 100%;\n}\n\n.item-prd .thumb .discount {\n  z-index: 100;\n  position: absolute;\n  top: 10px;\n  left: 0px;\n  height: 25px;\n  width: 80px;\n  overflow: hidden;\n}\n\n.item-prd .thumb .discount:before {\n  content: \"\";\n  background: var(--ion-background-color);\n  display: block;\n  height: 200%;\n  width: 180%;\n  margin-left: -100px;\n  transform: rotate(-15deg);\n  position: absolute;\n  z-index: -1;\n}\n\n.item-prd .thumb .favo-btn {\n  z-index: 10;\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9wYWdlcy9TaG9wcGluZy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MseUJBQUE7QUNERjs7QURLQTtFQUNDLFdBQUE7QUNGRDs7QURHQztFQUNDLGFBQUE7QUNERjs7QURFRTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQ0FIOztBRElBO0VBQ0MsV0FBQTtBQ0REOztBREVDO0VBQ0MsWUFBQTtBQ0FGOztBRENFO0VBQ0MsWUFBQTtFQUNBLGVBQUE7QUNDSDs7QURJQztFQUNDLGtCQUFBO0VBQ0EsYUFBQTtBQ0RGOztBREVFO0VBQ0MsWUFBQTtFQUNBLGVBQUE7QUNBSDs7QURFRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FIOztBRENHO0VBQ0MsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBSCIsImZpbGUiOiJzcmMvcGFnZXMvU2hvcHBpbmcvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhbi1nby1iYWNrIHtcblx0aW9uLW1lbnUtYnV0dG9uIHtcblx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi53cmFwLXRvcC1zbGlkZXtcblx0d2lkdGg6IDE3MCU7XG5cdC50aHVtYntcblx0XHRoZWlnaHQ6IDE1MHB4O1xuXHRcdGltZ3tcblx0XHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cbn1cbi53cmFwLW5ld3N7XG5cdHdpZHRoOiAxMjAlO1xuXHQudGh1bWJ7XG5cdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdGltZ3tcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cbn1cbi5pdGVtLXByZHtcblx0LnRodW1ie1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRoZWlnaHQ6IDE1MHB4O1xuXHRcdGltZ3tcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHR9XG5cdFx0LmRpc2NvdW50e1xuXHRcdFx0ei1pbmRleDogMTAwO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAxMHB4O1xuXHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAyNXB4O1xuXHRcdFx0d2lkdGg6IDgwcHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0JjpiZWZvcmV7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGhlaWdodDogMjAwJTtcblx0XHRcdFx0d2lkdGg6IDE4MCU7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0ei1pbmRleDogLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5mYXZvLWJ0bntcblx0XHRcdHotaW5kZXg6IDEwO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0cmlnaHQ6IDEwcHg7XG5cdFx0XHRib3R0b206IDVweDtcblx0XHR9XG5cdH1cbn1cbiIsIi5jYW4tZ28tYmFjayBpb24tbWVudS1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ud3JhcC10b3Atc2xpZGUge1xuICB3aWR0aDogMTcwJTtcbn1cbi53cmFwLXRvcC1zbGlkZSAudGh1bWIge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLndyYXAtdG9wLXNsaWRlIC50aHVtYiBpbWcge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndyYXAtbmV3cyB7XG4gIHdpZHRoOiAxMjAlO1xufVxuLndyYXAtbmV3cyAudGh1bWIge1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ud3JhcC1uZXdzIC50aHVtYiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLml0ZW0tcHJkIC50aHVtYiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5pdGVtLXByZCAudGh1bWIgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uaXRlbS1wcmQgLnRodW1iIC5kaXNjb3VudCB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtLXByZCAudGh1bWIgLmRpc2NvdW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjAwJTtcbiAgd2lkdGg6IDE4MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG4uaXRlbS1wcmQgLnRodW1iIC5mYXZvLWJ0biB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/Shopping/home/home.page.ts":
/*!**********************************************!*\
  !*** ./src/pages/Shopping/home/home.page.ts ***!
  \**********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/products */ "./src/pages/Shopping/providers/products.ts");
/* harmony import */ var _providers_currencies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/currencies */ "./src/pages/Shopping/providers/currencies.ts");
/* harmony import */ var _providers_favorites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/favorites */ "./src/pages/Shopping/providers/favorites.ts");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "./node_modules/@ionic-native/admob-free/ngx/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");









var HomePage = /** @class */ (function () {
    function HomePage(events, toastCtrl, favoritesProv, storage, currenciesProv, loadingCtrl, productsProv, navCtrl, admobFree, authService, menuCtrl) {
        var _this = this;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.favoritesProv = favoritesProv;
        this.storage = storage;
        this.currenciesProv = currenciesProv;
        this.loadingCtrl = loadingCtrl;
        this.productsProv = productsProv;
        this.navCtrl = navCtrl;
        this.admobFree = admobFree;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.slidePerViewOpts = {
            speed: 1000,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 3500,
            },
            slidesPerView: 2,
        };
        this.slidePerViewOpts2 = {
            speed: 1000,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 3500,
            },
            slidesPerView: 4,
        };
        this.favo_str = '';
        this.presentLoading();
        var bannerConfig = {
            id: 'ca-app-pub-1610982520322923~2132734290',
            isTesting: true,
            autoShow: true
        };
        this.admobFree.banner.config(bannerConfig);
        this.admobFree.banner.prepare().then(function () {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        }).catch(function (e) { return console.log(e); });
        this.events.subscribe('cart_list: change', function (lst) {
            _this.list_cart = lst;
        });
        this.events.subscribe('user: change', function (user) {
            if (user || user != null) {
                console.log(user);
                _this.id_user = user.uid;
                _this.favoritesProv.getByUserId(_this.id_user).then(function (data) {
                    if (data.length > 0) {
                        _this.favo_str = data[0].payload.doc.data().id_product;
                        _this.id_favo_str = data[0].payload.doc.id;
                        console.log(data);
                    }
                });
                _this.productsProv.getProduct(null, 4).then(function (data) {
                    _this.list_product = data;
                    _this.start = data[data.length - 1].payload.doc.data().name;
                    console.log(_this.list_product);
                }, function (error) {
                });
                _this.productsProv.getProductBySlide(6).then(function (data) {
                    _this.list_product_slide = data;
                    console.log(_this.list_product_slide);
                }, function (error) {
                });
                _this.productsProv.getProductByCreated(6).then(function (data) {
                    _this.loading.dismiss().then(function () {
                        _this.list_product_new = data;
                        console.log(_this.list_product_new);
                    });
                }, function (error) {
                });
            }
        });
    }
    HomePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        this.id_user = this.currentUser.uid;
                        console.log(this.id_user);
                        this.favoritesProv.getByUserId(this.id_user).then(function (data) {
                            console.log(data);
                            if (data.length > 0) {
                                _this.favo_str = data[0].payload.doc.data().id_product;
                                _this.id_favo_str = data[0].payload.doc.id;
                                console.log(data);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('cart_list').then(function (val) {
                if (!val || val == null) {
                    _this.list_cart = new Array();
                }
                else {
                    _this.list_cart = val;
                }
                console.log(_this.list_cart);
            });
            _this.productsProv.getProduct(null, 4).then(function (data) {
                _this.list_product = data;
                if (data) {
                    _this.start = data[data.length - 1].payload.doc.data().name;
                }
                console.log(_this.list_product);
            }, function (error) {
            });
            _this.productsProv.getProductBySlide(6).then(function (data) {
                _this.list_product_slide = data;
                console.log(_this.list_product_slide);
            }, function (error) {
            });
            _this.productsProv.getProductByCreated(6).then(function (data) {
                _this.loading.dismiss().then(function () {
                    _this.list_product_new = data;
                    console.log(_this.list_product_new);
                });
            }, function (error) {
            });
        });
    };
    HomePage.prototype.presentLoading = function () {
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
    HomePage.prototype.loadMore = function (event) {
        var _this = this;
        this.productsProv.getProduct(this.start, 2).then(function (data) {
            _this.list_product = _this.list_product.concat(data);
            console.log(data);
            if (data.length > 0) {
                _this.start = data[data.length - 1].payload.doc.data().name;
            }
            console.log(_this.list_product);
            setTimeout(function () {
                event.target.disabled = true;
            }, 1500);
        });
    };
    HomePage.prototype.favorites = function (item) {
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
    HomePage.prototype.addCart = function (item) {
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
    HomePage.prototype.presentToast = function () {
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
    HomePage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    HomePage.prototype.openMenu = function () {
        this.menuCtrl.enable(true, 'shop');
        this.menuCtrl.toggle('shop');
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _providers_favorites__WEBPACK_IMPORTED_MODULE_6__["FavoritesProvider"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _providers_currencies__WEBPACK_IMPORTED_MODULE_5__["CurrenciesProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers_products__WEBPACK_IMPORTED_MODULE_4__["ProductsProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_7__["AdMobFree"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/home/home.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/pages/Shopping/home/home.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _providers_favorites__WEBPACK_IMPORTED_MODULE_6__["FavoritesProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_currencies__WEBPACK_IMPORTED_MODULE_5__["CurrenciesProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_products__WEBPACK_IMPORTED_MODULE_4__["ProductsProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_7__["AdMobFree"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-home-home-module.js.map