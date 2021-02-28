(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-post-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/post/post.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/post/post.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n     <ion-buttons slot=\"start\">\n      <ion-back-button class=\"fs-24 txt1\" text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"\">\n\t\t<img src=\"{{obj.thumb}}\">\n\t</div>\n\t<br>\n\t<div padding class=\"\">\n\t\t<h2 class=\"txt1 fw-600 spacing1\">{{obj.name}}</h2>\n\t\t<p class=\"txt-b3\">Posted {{obj.created.substring(4, 15)}}</p>\n\t\t<p class=\"txt-b2\">{{obj.content}}</p>\n\t</div>\n\n\t<div padding class=\"social-share\">\n\t\t<h4 class=\"mg-0 uppercase fs-14 spacing-1\">share with:</h4>\n\t\t<div class=\"btn-social\" text-right>\n\t\t\t<ion-button fill=\"clear\" size=\"small\" (click)=\"share(obj.link_share)\" class=\"txt1\">\n\t\t\t\t<ion-icon name=\"logo-facebook\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button fill=\"clear\" size=\"small\" (click)=\"share(obj.link_share)\" class=\"txt1\">\n\t\t\t\t<ion-icon name=\"logo-twitter\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button fill=\"clear\" size=\"small\" (click)=\"share(obj.link_share)\" class=\"txt1\">\n\t\t\t\t<ion-icon name=\"logo-google\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button fill=\"clear\" size=\"small\" (click)=\"share(obj.link_share)\" class=\"txt1\">\n\t\t\t\t<ion-icon name=\"logo-instagram\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</div>\n\t</div>\n\n\t<br/>\n\t<br/>\n\n\t<div padding class=\"\" *ngIf=\"list_related.length > 0\">\n\t\t<h2 class=\"uppercase fs-14 spacing-1\">related articles</h2>\n\t\t<br>\n\t\t<div class=\"item-related mgb-20\" *ngFor=\"let item of list_related\" [routerLink]=\"['/post', item]\">\n\t\t\t<div class=\"thumb ovfl-hidden\">\n\t\t\t\t<img src=\"{{item.thumb}}\">\t\n\t\t\t</div>\n\t\t\t<div class=\"description ovfl-hidden pdl-10\">\n\t\t\t\t<h4 class=\"ellipsis fs-16 mgb-0\">{{item.name}}</h4>\n\t\t\t\t<p class=\"fs-12 txt-b3 mg-0\">{{item.created.substring(4, 15)}}</p>\n\t\t\t\t<p class=\"ellipsis txt-b2 mg-0\">{{item.description}}</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t</div>\n\n\t<br>\n\t<br>\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/post/post.module.ts":
/*!************************************************!*\
  !*** ./src/pages/Shopping/post/post.module.ts ***!
  \************************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "./src/pages/Shopping/post/post.page.ts");







var routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]
    }
];
var PostPageModule = /** @class */ (function () {
    function PostPageModule() {
    }
    PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
        })
    ], PostPageModule);
    return PostPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/post/post.page.scss":
/*!************************************************!*\
  !*** ./src/pages/Shopping/post/post.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-related {\n  display: flex;\n  align-items: center;\n}\n.item-related .thumb {\n  width: 80px;\n  height: 70px;\n}\n.item-related .description {\n  flex: 1;\n}\n.social-share {\n  display: flex;\n  align-items: center;\n}\n.social-share .btn-social {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNyYy9wYWdlcy9TaG9wcGluZy9wb3N0L3Bvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FDQ0Q7QURBQztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDRUY7QURBQztFQUNDLE9BQUE7QUNFRjtBRENBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FDRUQ7QUREQztFQUNDLE9BQUE7QUNHRiIsImZpbGUiOiJzcmMvcGFnZXMvU2hvcHBpbmcvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLXJlbGF0ZWR7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC50aHVtYntcblx0XHR3aWR0aDogODBweDtcblx0XHRoZWlnaHQ6IDcwcHg7XG5cdH1cblx0LmRlc2NyaXB0aW9ue1xuXHRcdGZsZXg6IDE7XG5cdH1cbn1cbi5zb2NpYWwtc2hhcmV7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC5idG4tc29jaWFse1xuXHRcdGZsZXg6IDE7XG5cdH1cbn0iLCIuaXRlbS1yZWxhdGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtLXJlbGF0ZWQgLnRodW1iIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cbi5pdGVtLXJlbGF0ZWQgLmRlc2NyaXB0aW9uIHtcbiAgZmxleDogMTtcbn1cblxuLnNvY2lhbC1zaGFyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc29jaWFsLXNoYXJlIC5idG4tc29jaWFsIHtcbiAgZmxleDogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/Shopping/post/post.page.ts":
/*!**********************************************!*\
  !*** ./src/pages/Shopping/post/post.page.ts ***!
  \**********************************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/posts */ "./src/pages/Shopping/providers/posts.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");






var PostPage = /** @class */ (function () {
    function PostPage(loadingCtrl, postsProv, route, socialSharing) {
        // this.presentLoading();
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.postsProv = postsProv;
        this.route = route;
        this.socialSharing = socialSharing;
        this.list_related = [];
        this.route.params.subscribe(function (params) {
            _this.obj = params;
            _this.postsProv.getPostByRelated(_this.obj.tag, _this.obj.name).then(function (data) {
                // this.loading.dismiss().then(() => {
                _this.list_related = data;
                console.log(_this.list_related);
                // });
            });
        });
        console.log(this.obj);
    }
    PostPage.prototype.ionViewWillEnter = function () {
    };
    PostPage.prototype.share = function (link) {
        this.socialSharing.share(this.obj.name, this.obj.description, null, link);
    };
    PostPage.prototype.presentLoading = function () {
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
    PostPage.prototype.ngOnInit = function () {
    };
    PostPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers_posts__WEBPACK_IMPORTED_MODULE_4__["PostsProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] }
    ]; };
    PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/post/post.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.page.scss */ "./src/pages/Shopping/post/post.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_posts__WEBPACK_IMPORTED_MODULE_4__["PostsProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]])
    ], PostPage);
    return PostPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-post-post-module.js.map