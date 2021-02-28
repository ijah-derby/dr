(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/list/list.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/list/list.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n   <ion-buttons slot=\"start\">\n    <ion-back-button class=\"fs-24 txt1\" text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n  </ion-buttons>\n\n  <ion-buttons slot=\"end\">\n    <ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/search'\" routerDirection=\"forward\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/mycart'\" routerDirection=\"forward\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n  <ion-title>List</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"wrap-top-slide\" *ngIf=\"list_slide_product.length > 0\">\n    <ion-slides spaceBetween=\"10\" loop=\"true\">\n      <ion-slide *ngFor=\"let item of list_slide_product\">\n        <div text-left class=\"item-slide\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n          <div class=\"thumb ovfl-hidden flex-row flex-ali-center flex-jus-center\">\n            <img src=\"{{item.payload.doc.data().thumb}}\">\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <br/>\n\n  <div class=\"ovfl-hidden\">\n    <div class=\"wrap-slides-cat\" *ngIf=\"list_cat.length > 0\">\n      <ion-slides [options]=\"slidePerViewOpts\">\n        <ion-slide *ngFor=\"let item of list_cat\" [routerLink]=\"['/list', {id: obj.id, name: obj.name}]\">\n          <div class=\"mini-cat shadow-2\">\n            <img src=\"{{item.thumb}}\">\n            <h6 text-center class=\"mg-0 flex-row flex-jus-start flex-ali-end txt-light pd-10 capitalize\">{{item.name}}</h6>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n  <br>\n\n  <div class=\"top-action\">\n    <h6 no-margin class=\"uppercase spacing-1\">{{obj.name}}</h6>\n    <div text-right class=\"\">\n      <ion-button fill=\"clear\" shape=\"round\" (click)=\"u_list(true)\" [ngClass]=\"(u_grid == true)? 'txt-base' : 'txt4'\">\n        <ion-icon name=\"md-apps\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" shape=\"round\" (click)=\"u_list(false)\" [ngClass]=\"(u_grid == false)? 'txt-base' : 'txt4'\">\n        <ion-icon name=\"md-list\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n\n  <div class=\"list-prd-card\">\n    <ion-row no-padding *ngIf=\"u_grid == true && list_product.length > 0\">\n      <ion-col col-6 *ngFor=\"let item of list_product\">\n        <div class=\"item-prd mgb-30\">\n          <div class=\"thumb ovfl-hidden flex-row flex-jus-center flex-ali-center\">\n            <div class=\"discount fw-600 pdt-5 fs-12 shadow-3 white\" *ngIf=\"item.payload.doc.data().discount > 0\">\n              - {{item.payload.doc.data().discount}}%\n            </div>\n            <img src=\"{{item.payload.doc.data().thumb}}\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n            <ion-button size=\"small\" color=\"primary\" class=\"fs-11 bdra-0 favo-btn\" *ngIf=\"favo_str.search(item.payload.doc.id) > -1\" (click)=\"favorites(item)\">\n              <ion-icon name=\"ios-heart\"></ion-icon>\n            </ion-button>\n            <ion-button size=\"small\" color=\"dark\" class=\"fs-11 bdra-0 favo-btn\" *ngIf=\"favo_str.search(item.payload.doc.id) < 0\" (click)=\"favorites(item)\">\n              <ion-icon name=\"ios-heart\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div class=\"ovfl-hidden\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n            <h4 class=\"fs-16 fw-600 ellipsis mgb-0 mgt-10\">{{item.payload.doc.data().name}}</h4>\n            <p class=\"mgt-5 mgb-0\">\n              <span class=\"ellipsis fs-14 txt3 mg-0 line-through mgr-10 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n                <i *ngIf=\"currenciesProv\">{{currenciesProv.formatMoney(item.payload.doc.data().price)}}</i>\n              </span>\n              <span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n                {{currenciesProv.formatMoney(item.payload.doc.data().price - item.payload.doc.data().price*item.payload.doc.data().discount/100)}}\n              </span>\n              <span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount == 0\">\n                {{currenciesProv.formatMoney(item.payload.doc.data().price)}}\n              </span>\n            </p>\n          </div>\n          <div class=\"mgt-10\">\n            <ion-button size=\"small\" color=\"dark\" (click)=\"addCart(item)\" class=\"uppercase fs-11 bdra-0 fw-600\">\n              <ion-icon slot=\"start\" name=\"ios-cart\"></ion-icon>\n              Add to cart\n            </ion-button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n\n\n <div class=\"list-prd-list\" *ngIf=\"u_grid == false && list_product.length > 0\">\n    <div class=\"item-prd mgb-20 pdb-15\" *ngFor=\"let item of list_product\">\n      <div class=\"thumb mgr-10 flex-row flex-ali-center flex-jus-center\">\n        <img src=\"{{item.payload.doc.data().thumb}}\">\n      </div>\n      <div class=\"\">\n        <div class=\"ovfl-hidden\">\n          <h4 class=\"fs-14 txt1 fw-600 ellipsis mg-0\">{{item.payload.doc.data().name}}</h4>\n          <p class=\"mg-0\">\n            <span class=\"ellipsis fs-14 txt3 mg-0 line-through mgr-10 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n              <i *ngIf=\"currenciesProv\">\n                {{currenciesProv.formatMoney(item.payload.doc.data().price)}}\n              </i>\n            </span>\n            <span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount > 0\">\n              {{currenciesProv.formatMoney(item.payload.doc.data().price - item.payload.doc.data().price*item.payload.doc.data().discount/100)}}\n            </span>\n            <span class=\"ellipsis fs-14 txt1 mg-0 fw-600\" *ngIf=\"currenciesProv && item.payload.doc.data().discount == 0\">\n              {{currenciesProv.formatMoney(item.payload.doc.data().price - item.payload.doc.data().price*item.payload.doc.data().discount/100)}}\n            </span>\n          </p>\n        </div>\n        <div class=\"mgt-5\">\n          <ion-button size=\"small\" (click)=\"addCart(item)\" class=\"fs-11 bdra-0 fw-600\">\n            <ion-icon name=\"ios-cart\"></ion-icon>\n            Add cart\n          </ion-button>\n          <ion-button size=\"small\" color=\"primary\" class=\"fs-11 bdra-0\" *ngIf=\"favo_str.search(item.payload.doc.id) > -1\" (click)=\"favorites(item)\">\n            <ion-icon name=\"ios-heart\"></ion-icon>\n          </ion-button>\n          <ion-button size=\"small\" color=\"dark\" class=\"fs-11 bdra-0\" *ngIf=\"favo_str.search(item.payload.doc.id) < 0\" (click)=\"favorites(item)\">\n            <ion-icon name=\"ios-heart\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/list/list.module.ts":
/*!************************************************!*\
  !*** ./src/pages/Shopping/list/list.module.ts ***!
  \************************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/pages/Shopping/list/list.page.ts");







var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/list/list.page.scss":
/*!************************************************!*\
  !*** ./src/pages/Shopping/list/list.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap-top-slide .thumb {\n  height: 200px;\n}\n\n.wrap-slides-cat {\n  width: 135%;\n}\n\n.mini-cat {\n  height: 70px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.mini-cat h6 {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.top-action {\n  display: flex;\n  align-items: center;\n}\n\n.top-action h6 {\n  flex: 1;\n}\n\n.list-prd-card .item-prd .thumb {\n  position: relative;\n  height: 150px;\n}\n\n.list-prd-card .item-prd .thumb img {\n  height: 100%;\n  min-width: 100%;\n}\n\n.list-prd-card .item-prd .thumb .discount {\n  z-index: 100;\n  position: absolute;\n  top: 10px;\n  left: 0px;\n  height: 25px;\n  width: 80px;\n  overflow: hidden;\n}\n\n.list-prd-card .item-prd .thumb .discount:before {\n  content: \"\";\n  background: var(--ion-background-color);\n  display: block;\n  height: 200%;\n  width: 180%;\n  margin-left: -100px;\n  transform: rotate(-15deg);\n  position: absolute;\n  z-index: -1;\n}\n\n.list-prd-card .item-prd .thumb .favo-btn {\n  z-index: 10;\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n}\n\n.list-prd-list .item-prd {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.list-prd-list .item-prd .thumb {\n  height: 80px;\n  width: 90px;\n}\n\n.list-prd-list .item-prd .thumb img {\n  height: 100%;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNyYy9wYWdlcy9TaG9wcGluZy9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MsYUFBQTtBQ0RGOztBRElBO0VBQ0MsV0FBQTtBQ0REOztBREdBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0FEOztBRElDO0VBQ0Msa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUNGRjs7QURLQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQ0ZEOztBREdDO0VBQ0MsT0FBQTtBQ0RGOztBRE1FO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0FDSEg7O0FESUc7RUFDQyxZQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRElHO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRko7O0FER0k7RUFDQyxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREw7O0FESUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRFVDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNQRjs7QURRRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FDTkg7O0FET0c7RUFDQyxZQUFBO0VBQ0EsZUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9wYWdlcy9TaG9wcGluZy9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ud3JhcC10b3Atc2xpZGV7XG5cdC50aHVtYntcblx0XHRoZWlnaHQ6IDIwMHB4O1xuXHR9XG59XG4ud3JhcC1zbGlkZXMtY2F0e1xuXHR3aWR0aDogMTM1JTtcbn1cbi5taW5pLWNhdHtcblx0aGVpZ2h0OiA3MHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRpbWd7XG5cblx0fVxuXHRoNntcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR0b3A6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC40KTtcblx0fVxufVxuLnRvcC1hY3Rpb257XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGg2e1xuXHRcdGZsZXg6IDE7XG5cdH1cbn1cbi5saXN0LXByZC1jYXJke1xuXHQuaXRlbS1wcmR7XG5cdFx0LnRodW1ie1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdGltZ3tcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cdFx0XHQuZGlzY291bnR7XG5cdFx0XHRcdHotaW5kZXg6IDEwMDtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDEwcHg7XG5cdFx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdFx0aGVpZ2h0OiAyNXB4O1xuXHRcdFx0XHR3aWR0aDogODBweDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0JjpiZWZvcmV7XG5cdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMDAlO1xuXHRcdFx0XHRcdHdpZHRoOiAxODAlO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0ei1pbmRleDogLTE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5mYXZvLWJ0bntcblx0XHRcdFx0ei1pbmRleDogMTA7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0cmlnaHQ6IDEwcHg7XG5cdFx0XHRcdGJvdHRvbTogNXB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5cbi5saXN0LXByZC1saXN0e1xuXHQuaXRlbS1wcmR7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xuXHRcdC50aHVtYntcblx0XHRcdGhlaWdodDogODBweDtcblx0XHRcdHdpZHRoOiA5MHB4O1xuXHRcdFx0aW1ne1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCIud3JhcC10b3Atc2xpZGUgLnRodW1iIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLndyYXAtc2xpZGVzLWNhdCB7XG4gIHdpZHRoOiAxMzUlO1xufVxuXG4ubWluaS1jYXQge1xuICBoZWlnaHQ6IDcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWluaS1jYXQgaDYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4udG9wLWFjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9wLWFjdGlvbiBoNiB7XG4gIGZsZXg6IDE7XG59XG5cbi5saXN0LXByZC1jYXJkIC5pdGVtLXByZCAudGh1bWIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTUwcHg7XG59XG4ubGlzdC1wcmQtY2FyZCAuaXRlbS1wcmQgLnRodW1iIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLmxpc3QtcHJkLWNhcmQgLml0ZW0tcHJkIC50aHVtYiAuZGlzY291bnQge1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGlzdC1wcmQtY2FyZCAuaXRlbS1wcmQgLnRodW1iIC5kaXNjb3VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDIwMCU7XG4gIHdpZHRoOiAxODAlO1xuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuLmxpc3QtcHJkLWNhcmQgLml0ZW0tcHJkIC50aHVtYiAuZmF2by1idG4ge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiA1cHg7XG59XG5cbi5saXN0LXByZC1saXN0IC5pdGVtLXByZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xufVxuLmxpc3QtcHJkLWxpc3QgLml0ZW0tcHJkIC50aHVtYiB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDkwcHg7XG59XG4ubGlzdC1wcmQtbGlzdCAuaXRlbS1wcmQgLnRodW1iIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/Shopping/list/list.page.ts":
/*!**********************************************!*\
  !*** ./src/pages/Shopping/list/list.page.ts ***!
  \**********************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/categories */ "./src/pages/Shopping/providers/categories.ts");
/* harmony import */ var _providers_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/products */ "./src/pages/Shopping/providers/products.ts");
/* harmony import */ var _providers_currencies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/currencies */ "./src/pages/Shopping/providers/currencies.ts");
/* harmony import */ var _providers_favorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/favorites */ "./src/pages/Shopping/providers/favorites.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");










var ListPage = /** @class */ (function () {
    function ListPage(route, events, catProv, toastCtrl, favoritesProv, storage, currenciesProv, loadingCtrl, productsProv, authService) {
        var _this = this;
        this.route = route;
        this.events = events;
        this.catProv = catProv;
        this.toastCtrl = toastCtrl;
        this.favoritesProv = favoritesProv;
        this.storage = storage;
        this.currenciesProv = currenciesProv;
        this.loadingCtrl = loadingCtrl;
        this.productsProv = productsProv;
        this.authService = authService;
        this.list_cat = [];
        this.list_cart = [];
        this.list_product = [];
        this.list_slide_product = [];
        this.favo_str = '';
        this.jump = 4;
        this.u_grid = true;
        this.slidePerViewOpts = {
            speed: 1000,
            spaceBetween: 16,
            centeredSlides: true,
            initialSlide: 1,
            slidesPerView: 3
        };
        this.presentLoading();
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.obj = params;
            console.log(_this.obj);
            _this.arr_start = new Array();
            _this.list_product = new Array();
            _this.catProv.getCatChild(_this.obj.id).then(function (data) {
                _this.list_cat = data;
                console.log(_this.list_cat);
                console.log(data.length);
                if (data.length > 0) {
                    for (var i = 0; i < data.length; ++i) {
                        // console.log(this.list_cat[i].payload.doc.id);
                        var jump = 2;
                        _this.productsProv.getProductByCat(null, jump, _this.obj.id).then(function (val) {
                            if (val && val.length > 0) {
                                console.log(val);
                                _this.list_product = _this.list_product.concat(val);
                                _this.arr_start = _this.arr_start.concat(val[val.length - 1].payload.doc.data().id_cat);
                                console.log(_this.list_product);
                            }
                            else {
                                // jump = jump + 4;
                                // this.productsProv.getProductByCat(null, jump, this.list_cat[i].payload.doc.id);
                            }
                        }, function (error) {
                        });
                    }
                }
                else {
                    _this.productsProv.getProductByCat(null, 2, _this.obj.id).then(function (data) {
                        if (data && data.length > 0) {
                            _this.list_product = data;
                            _this.start = data[data.length - 1].payload.doc.data().id_cat;
                            console.log(_this.list_product);
                        }
                        else {
                        }
                    }, function (error) {
                    });
                }
            }, function (error) {
            });
            _this.productsProv.getProductBySlide(5, _this.obj.id).then(function (data) {
                _this.list_slide_product = data;
                console.log(_this.list_slide_product);
            });
            _this.storage.get('cart_list').then(function (val) {
                if (!val || val == null) {
                    _this.list_cart = new Array();
                }
                else {
                    _this.list_cart = val;
                }
                console.log(_this.list_cart);
            });
            _this.events.subscribe('cart_list: change', function (lst) {
                _this.list_cart = lst;
            });
        });
        // if(!this.obj) {return;}
    }
    ListPage.prototype.ionViewWillEnter = function () {
    };
    ListPage.prototype.loadMore = function (event) {
        var _this = this;
        if (this.list_cat.length > 0) {
            for (var i = 0; i < this.list_cat.length; ++i) {
                console.log(this.list_cat[i].payload.doc.id);
                console.log(this.arr_start[i]);
                var jump = 2;
                this.productsProv.getProductByCat(this.arr_start[i], jump, this.list_cat[i].payload.doc.id).then(function (val) {
                    if (val && val.length > 0) {
                        console.log(val);
                        _this.list_product = _this.list_product.concat(val);
                        _this.arr_start[i] = val[val.length - 1].payload.doc.data().id_cat;
                        console.log(_this.list_product);
                        setTimeout(function () {
                            event.target.disabled = true;
                        }, 1500);
                    }
                    else {
                        // jump = jump + 4;
                        // this.productsProv.getProductByCat(this.arr_start[i], jump, this.list_cat[i].payload.doc.id);
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
        }
        else {
            console.log(this.start);
            this.productsProv.getProductByCat(this.start, 2, this.obj.id).then(function (data) {
                if (data && data.length > 0) {
                    console.log(data);
                    _this.list_product = _this.list_product.concat(data);
                    _this.start = data[data.length - 1].payload.doc.data().id_cat;
                    console.log(_this.start);
                }
                else {
                }
            }, function (error) {
            });
        }
    };
    ListPage.prototype.favorites = function (item) {
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
    ListPage.prototype.addCart = function (item) {
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
        var toast = this.toastCtrl.create({
            message: 'added success',
            duration: 2000,
            position: 'top'
        });
        this.presentToast();
        // this.list_cart = new Array();
        this.events.publish('cart_list: change', this.list_cart);
        this.storage.set('cart_list', this.list_cart);
        console.log(this.list_cart);
    };
    ListPage.prototype.presentLoading = function () {
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
    ListPage.prototype.presentToast = function () {
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
    ListPage.prototype.u_list = function (val) {
        this.u_grid = val;
    };
    ListPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentUser;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        currentUser = _a.sent();
                        this.id_user = currentUser.uid;
                        this.favoritesProv.getByUserId(this.id_user).then(function (data) {
                            _this.loading.dismiss().then(function () {
                                if (data.length > 0) {
                                    _this.favo_str = data[0].payload.doc.data().id_product;
                                    _this.id_favo_str = data[0].payload.doc.id;
                                    console.log(data);
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
        { type: _providers_categories__WEBPACK_IMPORTED_MODULE_4__["CategoriesProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _providers_favorites__WEBPACK_IMPORTED_MODULE_7__["FavoritesProvider"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
        { type: _providers_currencies__WEBPACK_IMPORTED_MODULE_6__["CurrenciesProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _providers_products__WEBPACK_IMPORTED_MODULE_5__["ProductsProvider"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/list/list.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.page.scss */ "./src/pages/Shopping/list/list.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _providers_categories__WEBPACK_IMPORTED_MODULE_4__["CategoriesProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _providers_favorites__WEBPACK_IMPORTED_MODULE_7__["FavoritesProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _providers_currencies__WEBPACK_IMPORTED_MODULE_6__["CurrenciesProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _providers_products__WEBPACK_IMPORTED_MODULE_5__["ProductsProvider"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-list-list-module.js.map