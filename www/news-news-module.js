(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"favorite\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n       color=\"primary\"\n        name=\"menu\"\n        style=\"font-size: 25px; padding-left: 10px; color: black;\"\n        (click)=\"openMenu()\"\n      ></ion-icon>\n      <!-- <ion-menu-button color=\"medium\" size=\"small\" autoHide=\"true\"></ion-menu-button> -->\n      <!-- <ion-icon name=\"trash\" (click)=\"load()\"></ion-icon> -->\n      <!-- <ion-icon name=\"cart\" class=\"cart-icon\" (click)=\"goToShop()\"></ion-icon> -->\n      <ion-menu-button class=\"headphones\" menu=\"second\" autoHide=\"true\">\n        <ion-icon  color=\"primary\" name=\"md-headset\"></ion-icon>\n      </ion-menu-button>\n    \n    </ion-buttons>\n  \n    \n   \n  \n  \n     \n    \n   \n    <ion-buttons slot=\"end\">\n      <ion-icon class=\"cart\"\n      name=\"md-cart\"\n      (click)=\"openShop()\"\n      color=\"primary\"\n    \n    ></ion-icon>\n      <img\n        id=\"hide\"\n        alt=\"appicon\"\n        height=\"22\"\n        class=\"ion-float-right\"\n        src=\"assets/images/logo1.png\"\n      />\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"primary\">\n\n  <ion-card *ngFor=\"let article of articles\">\n    <ion-img src=\"{{article.urlToImage}}\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>{{article.title}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        {{article.description}}\n      </p>\n      <ion-button ion-button fill=\"outline\" href=\"{{article.url}}\" large>Read full article</ion-button>\n\n    </ion-card-content>\n  </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Welcome to our News App</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <p>\n          Enjoy the latest news from TechCrunch. \n        </p>\n        <ion-spinner *ngIf=\"!articles\"  name=\"dots\"></ion-spinner>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.API_KEY = '084442fd2f0f41a9b5e7884d481ebd04';
    }
    ApiService.prototype.getNews = function () {
        return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}');
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "./src/app/news/news.page.ts");







var routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/news/news.page.scss":
/*!*************************************!*\
  !*** ./src/app/news/news.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  --background: #021b46;\n  --color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMjFiNDY7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgfSIsImlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDIxYjQ2O1xuICAtLWNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/news/news.page.ts":
/*!***********************************!*\
  !*** ./src/app/news/news.page.ts ***!
  \***********************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var NewsPage = /** @class */ (function () {
    function NewsPage(apiService, navCtrl, manuCtrl) {
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.manuCtrl = manuCtrl;
    }
    NewsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.apiService.getNews().subscribe(function (data) {
            console.log(data);
            _this.articles = data['articles'];
        });
    };
    NewsPage.prototype.openMenu = function () {
        this.manuCtrl.enable(true, "first");
        this.manuCtrl.toggle("first");
    };
    NewsPage.prototype.ngOnInit = function () {
    };
    NewsPage.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.page.scss */ "./src/app/news/news.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=news-news-module.js.map