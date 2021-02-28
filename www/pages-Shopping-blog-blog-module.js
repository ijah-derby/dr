(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-blog-blog-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/blog/blog.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/blog/blog.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t<ion-back-button class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t<!-- <ion-icon style=\"color: black;font-size: 26px;margin-left: 4px;\" src=\"../../../assets/icons/chevron-back.svg\" (click)=\"goBack()\"></ion-icon> -->\n\t\t\t</ion-back-button>\n\t\t\t<ion-menu-button menu=\"shop\">\n\t\t\t</ion-menu-button>\n\t\t  </ion-buttons>\n\n\t\t<ion-title>Blog</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<h2 class=\"uppercase spacing-1 pdr-50\" padding>Our articles, invite you to follow</h2>\n\n\t<div class=\"wrap-top-slide\" *ngIf=\"list_post_star\">\n\t\t<ion-slides spaceBetween=\"10\" slidesPerView=\"2\" loop=\"true\">\n\t\t\t<ion-slide *ngFor=\"let item of list_post_star\" [routerLink]=\"['/post', item]\">\n\t\t\t\t<div text-left class=\"item-slide\">\n\t\t\t\t\t<div class=\"thumb ovfl-hidden\">\n\t\t\t\t\t\t<img src=\"{{item.thumb}}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"pdl-15 pdr-15 ellipsis txt3 mgb-0 fs-14\">{{item.name}}</p>\n\t\t\t\t\t<h4 class=\"pdl-15 pdr-15 fw-500 fs-18 txt1 mgt-0 ellipsis\">{{item.description}}</h4>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t</div>\n\n\t<h2 class=\"uppercase spacing-1 pdr-50\" padding>New post</h2>\n\n\t<div class=\"wrap-new-slide\" *ngIf=\"list_post_new\">\n\t\t<ion-slides spaceBetween=\"10\" slidesPerView=\"2\" loop=\"true\">\n\t\t\t<ion-slide *ngFor=\"let item of list_post_new\" [routerLink]=\"['/post', item]\">\n\t\t\t\t<div text-left class=\"item-slide flex-row\">\n\t\t\t\t\t<div class=\"thumb ovfl-hidden flex-1\">\n\t\t\t\t\t\t<img src=\"{{item.thumb}}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"description ovfl-hidden flex-2\">\n\t\t\t\t\t\t<h4 class=\"pdl-15 pdr-15 fw-500 fs-16 txt1 mgt-10 mgb-0 ellipsis\">{{item.name}}</h4>\n\t\t\t\t\t\t<span class=\"pdl-15 fs-12 txt3\">{{item.created.substring(4, 15)}}</span>\n\t\t\t\t\t\t<p class=\"pdl-15 pdr-15 ellipsis txt3 mg-0 fs-12\">{{item.description}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t</div>\n\n\t<br>\n\t<br>\n\n\t<h2 class=\"uppercase spacing-1 pdr-50\" padding>All our posts</h2>\n\n\t<div class=\"\">\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\" *ngFor=\"let item of list_post\" [routerLink]=\"['/post', item]\">\n\t\t\t\t<div class=\"item-post mgb-30\">\n\t\t\t\t\t<div class=\"thumb ovfl-hidden\">\n\t\t\t\t\t\t<img src=\"{{item.thumb}}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t<h3 class=\"fs-14 txt1 fw-600 mgt-10\">{{item.name}}</h3>\n\t\t\t\t\t\t<span class=\"fs-12 txt3\">{{item.created.substring(4, 15)}}</span>\n\t\t\t\t\t\t<p class=\"fs-12 txt3\">{{item.description}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n\n\t<br>\n\n\t<ion-infinite-scroll (ionInfinite)=\"loadMore($event)\">\n\t\t<ion-infinite-scroll-content></ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/blog/blog.module.ts":
/*!************************************************!*\
  !*** ./src/pages/Shopping/blog/blog.module.ts ***!
  \************************************************/
/*! exports provided: BlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageModule", function() { return BlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog.page */ "./src/pages/Shopping/blog/blog.page.ts");







var routes = [
    {
        path: '',
        component: _blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]
    }
];
var BlogPageModule = /** @class */ (function () {
    function BlogPageModule() {
    }
    BlogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]]
        })
    ], BlogPageModule);
    return BlogPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/blog/blog.page.scss":
/*!************************************************!*\
  !*** ./src/pages/Shopping/blog/blog.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap-top-slide {\n  width: 105%;\n}\n.wrap-top-slide .thumb {\n  height: 130px;\n}\n.wrap-new-slide {\n  width: 100%;\n}\n.wrap-new-slide .item-slide {\n  display: flex;\n}\n.wrap-new-slide .description {\n  flex: 2;\n}\n.wrap-new-slide .thumb {\n  flex: 1;\n  height: 70px;\n}\n.item-post .thumb {\n  height: 90px;\n}\n.item-post .description h3 {\n  height: 32px;\n  overflow: hidden;\n}\n.item-post .description p {\n  height: 42px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvYmxvZy9ibG9nLnBhZ2Uuc2NzcyIsInNyYy9wYWdlcy9TaG9wcGluZy9ibG9nL2Jsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtBQ0NEO0FEQUM7RUFDQyxhQUFBO0FDRUY7QURDQTtFQUNDLFdBQUE7QUNFRDtBRERDO0VBQ0MsYUFBQTtBQ0dGO0FEREM7RUFDQyxPQUFBO0FDR0Y7QUREQztFQUNDLE9BQUE7RUFDQSxZQUFBO0FDR0Y7QURDQztFQUNDLFlBQUE7QUNFRjtBRENFO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0FDQ0g7QURDRTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtBQ0NIIiwiZmlsZSI6InNyYy9wYWdlcy9TaG9wcGluZy9ibG9nL2Jsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAtdG9wLXNsaWRle1xuXHR3aWR0aDogMTA1JTtcblx0LnRodW1ie1xuXHRcdGhlaWdodDogMTMwcHg7XG5cdH1cbn1cbi53cmFwLW5ldy1zbGlkZXtcblx0d2lkdGg6IDEwMCU7XG5cdC5pdGVtLXNsaWRle1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblx0LmRlc2NyaXB0aW9ue1xuXHRcdGZsZXg6IDI7XG5cdH1cblx0LnRodW1ie1xuXHRcdGZsZXg6IDE7XG5cdFx0aGVpZ2h0OiA3MHB4O1xuXHR9XG59XG4uaXRlbS1wb3N0e1xuXHQudGh1bWJ7XG5cdFx0aGVpZ2h0OiA5MHB4O1xuXHR9XG5cdC5kZXNjcmlwdGlvbntcblx0XHRoM3tcblx0XHRcdGhlaWdodDogMzJweDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0fVxuXHRcdHB7XG5cdFx0XHRoZWlnaHQ6IDQycHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdH1cblx0fVxufSIsIi53cmFwLXRvcC1zbGlkZSB7XG4gIHdpZHRoOiAxMDUlO1xufVxuLndyYXAtdG9wLXNsaWRlIC50aHVtYiB7XG4gIGhlaWdodDogMTMwcHg7XG59XG5cbi53cmFwLW5ldy1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXAtbmV3LXNsaWRlIC5pdGVtLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53cmFwLW5ldy1zbGlkZSAuZGVzY3JpcHRpb24ge1xuICBmbGV4OiAyO1xufVxuLndyYXAtbmV3LXNsaWRlIC50aHVtYiB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLml0ZW0tcG9zdCAudGh1bWIge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uaXRlbS1wb3N0IC5kZXNjcmlwdGlvbiBoMyB7XG4gIGhlaWdodDogMzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtLXBvc3QgLmRlc2NyaXB0aW9uIHAge1xuICBoZWlnaHQ6IDQycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/pages/Shopping/blog/blog.page.ts":
/*!**********************************************!*\
  !*** ./src/pages/Shopping/blog/blog.page.ts ***!
  \**********************************************/
/*! exports provided: BlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage", function() { return BlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/posts */ "./src/pages/Shopping/providers/posts.ts");




var BlogPage = /** @class */ (function () {
    function BlogPage(loadingCtrl, postsProv, navCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.postsProv = postsProv;
        this.navCtrl = navCtrl;
        this.presentLoading();
        this.postsProv.getPostByStar().then(function (data) {
            _this.list_post_star = data;
            console.log(_this.list_post_star);
        }, function (error) {
        });
        this.postsProv.getPostByNew().then(function (data) {
            _this.list_post_new = data;
            console.log(_this.list_post_new);
        }, function (error) {
        });
        this.postsProv.getPost(null, 2).then(function (data) {
            _this.loading.dismiss().then(function () {
                _this.list_post = data;
                _this.start = data[data.length - 1].name;
                console.log(_this.list_post);
            });
        }, function (error) {
        });
    }
    BlogPage.prototype.loadMore = function (event) {
        var _this = this;
        this.postsProv.getPost(this.start, 2).then(function (data) {
            _this.loading.dismiss().then(function () {
                _this.list_post = _this.list_post.concat(data);
                console.log(data);
                if (data.length > 0) {
                    _this.start = data[data.length - 1].name;
                }
                console.log(_this.list_post);
                setTimeout(function () {
                    event.target.disabled = true;
                }, 1500);
            });
        });
    };
    BlogPage.prototype.presentLoading = function () {
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
    BlogPage.prototype.ngOnInit = function () {
    };
    BlogPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    BlogPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers_posts__WEBPACK_IMPORTED_MODULE_3__["PostsProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    BlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/blog/blog.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.page.scss */ "./src/pages/Shopping/blog/blog.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_posts__WEBPACK_IMPORTED_MODULE_3__["PostsProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], BlogPage);
    return BlogPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-blog-blog-module.js.map