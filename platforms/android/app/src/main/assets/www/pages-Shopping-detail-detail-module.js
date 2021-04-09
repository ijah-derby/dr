(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-detail-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/detail/detail.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/detail/detail.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button class=\"fs-24 txt1\" text=\"\" icon=\"ios-arrow-round-back\"></ion-back-button>\n\t\t\t<!-- <ion-menu-button>\n\t\t\t\t<ion-icon class=\"fs-24 txt1\" name=\"arrow-round-forward\"></ion-icon>\n\t\t</ion-menu-button> -->\n\t\t</ion-buttons>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/search'\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon name=\"search\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button fill=\"clear\" class=\"shadow-0 txt1\" [routerLink]=\"'/mycart'\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon name=\"cart\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>Detail</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"obj != null\">\n\t<div class=\"top-slide\">\n\t\t<div class=\"wrap-slide\">\n\t\t\t<ion-slides>\n\t\t\t\t<ion-slide *ngIf=\"obj.payload.doc.data().thumb && obj.payload.doc.data().thumb != null && obj.payload.doc.data().thumb != ''\">\n\t\t\t\t\t<div class=\"thumb flex-ali-center flex-jus-center ovfl-hidden\">\n\t\t\t\t\t\t<img src=\"{{obj.payload.doc.data().thumb}}\">\n\t\t\t\t\t</div>\n\t\t\t\t</ion-slide>\n\t\t\t\t<ion-slide *ngIf=\"obj.payload.doc.data().thumb1 && obj.payload.doc.data().thumb1 != null && obj.payload.doc.data().thumb1 != ''\">\n\t\t\t\t\t<div class=\"thumb flex-ali-center flex-jus-center ovfl-hidden\">\n\t\t\t\t\t\t<img src=\"{{obj.payload.doc.data().thumb1}}\">\n\t\t\t\t\t</div>\n\t\t\t\t</ion-slide>\n\t\t\t\t<ion-slide *ngIf=\"obj.payload.doc.data().thumb2 && obj.payload.doc.data().thumb2 != null && obj.payload.doc.data().thumb2 != ''\">\n\t\t\t\t\t<div class=\"thumb flex-ali-center flex-jus-center ovfl-hidden\">\n\t\t\t\t\t\t<img src=\"{{obj.payload.doc.data().thumb2}}\">\n\t\t\t\t\t</div>\n\t\t\t\t</ion-slide>\n\t\t\t\t<ion-slide *ngIf=\"obj.payload.doc.data().thumb3 && obj.payload.doc.data().thumb3 != null && obj.payload.doc.data().thumb3 != ''\">\n\t\t\t\t\t<div class=\"thumb flex-ali-center flex-jus-center ovfl-hidden\">\n\t\t\t\t\t\t<img src=\"{{obj.payload.doc.data().thumb3}}\">\n\t\t\t\t\t</div>\n\t\t\t\t</ion-slide>\n\t\t\t\t<ion-slide *ngIf=\"obj.payload.doc.data().thumb4 && obj.payload.doc.data().thumb4 != null && obj.payload.doc.data().thumb4 != ''\">\n\t\t\t\t\t<div class=\"thumb flex-ali-center flex-jus-center ovfl-hidden\">\n\t\t\t\t\t\t<img src=\"{{obj.payload.doc.data().thumb4}}\">\n\t\t\t\t\t</div>\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t</div>\n\t\t<div class=\"title\" padding>\n\t\t\t<div class=\"wrap-txt\">\n\t\t\t\t<h3 class=\"txt-light fs-22 spacing-1 fw-600\">{{obj.payload.doc.data().name}}</h3>\n\t\t\t</div>\n\t\t\t<ion-button fill=\"clear\" class=\"favo-btn\" *ngIf=\"favo_str.search(obj.payload.doc.id) > -1\" (click)=\"favorites()\">\n              <ion-icon class=\"txt-danger\" name=\"ios-bookmark\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" class=\"favo-btn\" *ngIf=\"favo_str.search(obj.payload.doc.id) < 0\" (click)=\"favorites()\">\n              <ion-icon class=\"txt-light\" name=\"ios-bookmark\"></ion-icon>\n            </ion-button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"fact pdl-25 pdr-25 pdb-15 pdt-10\">\n\t\t<div text-left class=\"\">\n\t\t\t<p class=\"txt3 uppercase spacing-1 fs-12\">Point</p>\n\t\t\t<span class=\"fw-600\">\n\t\t\t\t<ion-icon class=\"mgr-5\" name=\"star\"></ion-icon>\n\t\t\t\t{{obj.payload.doc.data().vote}}\n\t\t\t</span>\n\t\t\t<p class=\"txt3\">Posted at {{obj.payload.doc.data().created.substring(4, 15)}}</p>\n\t\t</div>\n\t\t<div text-right class=\"price\">\n\t\t\t<p class=\"txt3 spacing-1 uppercase fs-12\">Price</p>\n\t\t\t<i class=\"fw-600 line-through pdl-5 pdr-5 mgr-15 txt3 inline-block\" *ngIf=\"currenciesProv && obj.payload.doc.data().discount > 0\">\n\t\t\t\t{{obj.payload.doc.data().price}}\n\t\t\t</i>\n\t\t\t<span class=\"fw-600\" *ngIf=\"currenciesProv && obj.payload.doc.data().discount > 0\">\n\t\t\t\t{{obj.payload.doc.data().price - obj.payload.doc.data().price*obj.payload.doc.data().discount/100}} \n\t\t\t</span>\n\t\t\t<span class=\"fw-600\" *ngIf=\"currenciesProv && obj.payload.doc.data().discount <= 0\">\n\t\t\t\t{{obj.payload.doc.data().price}}\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\n\t<h5 class=\"uppercase txt1 fs-12 spacing-1 pdl-25 pdr-25\">Quantity</h5>\n\t<div class=\"wrap-quantity pdl-25 pdr-25\">\n\t\t<div class=\"quantity mgr-40\">\n\t\t\t<ion-button fill=\"clear\" class=\"txt1\" (click)=\"quantity(-1)\">\n\t\t\t\t<ion-icon class=\"fs-18\" name=\"md-remove\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<div>\n\t\t\t\t<ion-input [(ngModel)]=\"quantityIp\" (ionChange)=\"enterQuantity($event.target.value)\" class=\"fw-600 fs-16 flex-center flex-jus-center flex-ali-center\" min=\"1\" max=\"99\" minlength=\"1\" maxlength=\"2\" text-center type=\"number\"></ion-input>\n\t\t\t</div>\n\t\t\t<ion-button fill=\"clear\" class=\"txt1\" (click)=\"quantity(1)\">\n\t\t\t\t<ion-icon class=\"fs-18\" name=\"md-add\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</div>\n\t\t<ion-button (click)=\"addCart()\" shape=\"round\" class=\"uppercase spacing-1 fs-12 fw-600 bg-third\">Add cart</ion-button>\n\t</div>\n\t<br>\n\t<div class=\"description pdl-25 pdr-25\">\n\t\t<h5 class=\"uppercase fs-12 spacing-1 txt1\">Description</h5>\n\t\t<p class=\"txt3\">{{obj.payload.doc.data().description}}</p>\n\t\t<br>\n\t</div>\n\t<br>\n\t<br>\n\t<br>\n\t<div class=\"social pdl-25 pdr-25 flex-row flex-ali-center flex-jus-end\" text-right>\n\t\t<ion-button fill=\"clear\" (click)=\"share(obj.payload.doc.data().link_share)\" class=\"fs-18 txt1\">\n\t\t\t<ion-icon name=\"logo-facebook\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button fill=\"clear\" (click)=\"share(obj.payload.doc.data().link_share)\" class=\"fs-18 txt3\">\n\t\t\t<ion-icon name=\"logo-twitter\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button fill=\"clear\" (click)=\"share(obj.payload.doc.data().link_share)\" class=\"fs-18 txt3\">\n\t\t\t<ion-icon name=\"logo-google\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button fill=\"clear\" (click)=\"share(obj.payload.doc.data().link_share)\" class=\"fs-18 txt3\">\n\t\t\t<ion-icon name=\"logo-instagram\"></ion-icon>\n\t\t</ion-button>\n\t</div>\n\t<br>\n\t<br>\n\t<div class=\"description pdl-25 pdr-25\">\n\t\t<h5 class=\"uppercase fs-12 spacing-1 txt1\">Related</h5>\n\t\t<br>\n\t\t<div class=\"wrap-related\" *ngIf=\"list_related\">\n\t\t\t<ion-slides [options]=\"slidePerViewOpts\">\n\t\t\t\t<ion-slide *ngFor=\"let item of list_related\" [routerLink]=\"['/detail', {id_item: item.payload.doc.id}]\">\n\t\t\t\t\t<div text-left class=\"item-slide\">\n\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t<img src=\"{{item.payload.doc.data().thumb2}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"fw-500 fs-12 txt1 ellipsis\">{{item.payload.doc.data().name}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t</div>\n\t</div>\n\n\t<br>\n\t<br>\n\t<br>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/detail/detail.module.ts":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/detail/detail.module.ts ***!
  \****************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/pages/Shopping/detail/detail.page.ts");







var routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/detail/detail.page.scss":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/detail/detail.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-slide {\n  position: relative;\n}\n.top-slide .wrap-slide {\n  z-index: 10;\n  position: relative;\n}\n.top-slide .wrap-slide .slide-zoom {\n  height: 100%;\n}\n.top-slide .wrap-slide .thumb {\n  height: 300px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.top-slide .wrap-slide .thumb img {\n  height: 100%;\n  min-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.top-slide .title {\n  z-index: 100;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: flex-end;\n  /*background-image: linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0));*/\n}\n.top-slide .title .wrap-txt {\n  flex: 1;\n}\n.fact {\n  display: flex;\n  border-bottom: 1px solid #ebebeb;\n}\n.fact > div {\n  overflow: auto;\n  flex: 1;\n}\n.wrap-quantity {\n  display: flex;\n}\n.wrap-quantity .quantity {\n  flex: 1;\n  display: flex;\n}\n.wrap-quantity ion-input {\n  height: 100%;\n}\n.social {\n  display: flex;\n  border-bottom: 1px solid #ebebeb;\n}\n.social button {\n  flex: 1;\n}\n.wrap-related {\n  width: 130%;\n}\n.wrap-related ion-slides {\n  width: 100%;\n}\n.wrap-related .slide-zoom {\n  height: 100%;\n}\n.wrap-related .thumb {\n  height: 150px;\n}\n.wrap-related img {\n  width: 100%;\n  min-height: 100%;\n  max-height: unset;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzcmMvcGFnZXMvU2hvcHBpbmcvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQ0NEO0FEQUM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QUNFRjtBRERFO0VBQ0MsWUFBQTtBQ0dIO0FEREU7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNHSDtBREZHO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDSUo7QURBQztFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJFQUFBO0FDRUY7QURERTtFQUNDLE9BQUE7QUNHSDtBREdBO0VBQ0MsYUFBQTtFQUNBLGdDQUFBO0FDQUQ7QURDQztFQUNDLGNBQUE7RUFDQSxPQUFBO0FDQ0Y7QURFQTtFQUNDLGFBQUE7QUNDRDtBREFDO0VBQ0MsT0FBQTtFQUNBLGFBQUE7QUNFRjtBREFDO0VBQ0MsWUFBQTtBQ0VGO0FEQ0E7RUFDQyxhQUFBO0VBQ0EsZ0NBQUE7QUNFRDtBRERDO0VBQ0MsT0FBQTtBQ0dGO0FEQ0E7RUFDQyxXQUFBO0FDRUQ7QUREQztFQUNDLFdBQUE7QUNHRjtBRERDO0VBQ0MsWUFBQTtBQ0dGO0FEREM7RUFDQyxhQUFBO0FDR0Y7QUREQztFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9wYWdlcy9TaG9wcGluZy9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Atc2xpZGV7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0LndyYXAtc2xpZGV7XG5cdFx0ei1pbmRleDogMTA7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdC5zbGlkZS16b29te1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdH1cblx0XHQudGh1bWJ7XG5cdFx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdGltZ3tcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQudGl0bGV7XG5cdFx0ei1pbmRleDogMTAwO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDBweDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdC8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMC43KSwgcmdiYSgwLDAsMCwwKSk7Ki9cblx0XHQud3JhcC10eHR7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdH1cblx0fVxufVxuXG5cbi5mYWN0e1xuXHRkaXNwbGF5OmZsZXg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xuXHQ+ZGl2e1xuXHRcdG92ZXJmbG93OiBhdXRvO1xuXHRcdGZsZXg6IDE7XG5cdH1cbn1cbi53cmFwLXF1YW50aXR5e1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQucXVhbnRpdHl7XG5cdFx0ZmxleDogMTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cdGlvbi1pbnB1dHtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdH1cbn1cbi5zb2NpYWx7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xuXHRidXR0b257XG5cdFx0ZmxleDogMTtcblx0fVxufVxuXG4ud3JhcC1yZWxhdGVke1xuXHR3aWR0aDogMTMwJTtcblx0aW9uLXNsaWRlc3tcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHQuc2xpZGUtem9vbXtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdH1cblx0LnRodW1ie1xuXHRcdGhlaWdodDogMTUwcHg7XG5cdH1cblx0aW1ne1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0bWF4LWhlaWdodDogdW5zZXQ7XG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdH1cbn0iLCIudG9wLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvcC1zbGlkZSAud3JhcC1zbGlkZSB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9wLXNsaWRlIC53cmFwLXNsaWRlIC5zbGlkZS16b29tIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnRvcC1zbGlkZSAud3JhcC1zbGlkZSAudGh1bWIge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4udG9wLXNsaWRlIC53cmFwLXNsaWRlIC50aHVtYiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4udG9wLXNsaWRlIC50aXRsZSB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwwLjcpLCByZ2JhKDAsMCwwLDApKTsqL1xufVxuLnRvcC1zbGlkZSAudGl0bGUgLndyYXAtdHh0IHtcbiAgZmxleDogMTtcbn1cblxuLmZhY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbn1cbi5mYWN0ID4gZGl2IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZsZXg6IDE7XG59XG5cbi53cmFwLXF1YW50aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53cmFwLXF1YW50aXR5IC5xdWFudGl0eSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud3JhcC1xdWFudGl0eSBpb24taW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zb2NpYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbn1cbi5zb2NpYWwgYnV0dG9uIHtcbiAgZmxleDogMTtcbn1cblxuLndyYXAtcmVsYXRlZCB7XG4gIHdpZHRoOiAxMzAlO1xufVxuLndyYXAtcmVsYXRlZCBpb24tc2xpZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud3JhcC1yZWxhdGVkIC5zbGlkZS16b29tIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndyYXAtcmVsYXRlZCAudGh1bWIge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLndyYXAtcmVsYXRlZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogdW5zZXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/Shopping/detail/detail.page.ts":
/*!**************************************************!*\
  !*** ./src/pages/Shopping/detail/detail.page.ts ***!
  \**************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/products */ "./src/pages/Shopping/providers/products.ts");
/* harmony import */ var _providers_currencies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/currencies */ "./src/pages/Shopping/providers/currencies.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_favorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/favorites */ "./src/pages/Shopping/providers/favorites.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");









var DetailPage = /** @class */ (function () {
    function DetailPage(currenciesProv, loadingCtrl, productsProv, route, events, toastCtrl, storage, socialSharing, favoritesProv) {
        var _this = this;
        this.currenciesProv = currenciesProv;
        this.loadingCtrl = loadingCtrl;
        this.productsProv = productsProv;
        this.route = route;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.favoritesProv = favoritesProv;
        this.obj = null;
        this.slidePerViewOpts = {
            speed: 1000,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 3500,
            },
            slidesPerView: 3,
        };
        this.quantityIp = 1;
        this.favo_str = '';
        this.presentLoading();
        this.route.params.subscribe(function (params) {
            _this.id_obj = params.id_item;
            _this.productsProv.getProductById(_this.id_obj).then(function (data) {
                _this.obj = data[0];
                console.log(_this.obj);
                _this.productsProv.getProductByRelated(_this.obj.payload.doc.data().tag).then(function (dataRelated) {
                    _this.loading.dismiss().then(function () {
                        _this.list_related = dataRelated;
                        console.log(_this.list_related);
                        console.log(_this.obj);
                        console.log(_this.obj.payload.doc.data().tag);
                    });
                });
            });
        });
        this.storage.get('user').then(function (val) {
            _this.id_user = val['id_auth'];
            _this.favoritesProv.getByUserId(_this.id_user).then(function (data) {
                if (data.length > 0) {
                    _this.favo_str = data[0].payload.doc.data().id_product;
                    _this.id_favo_str = data[0].payload.doc.id;
                    console.log(data);
                }
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
        this.events.subscribe('cart_list: change', function (lst) {
            _this.list_cart = lst;
        });
    }
    DetailPage.prototype.presentLoading = function () {
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
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.favorites = function () {
        var _this = this;
        console.log(this.obj.payload.doc.id);
        var check = this.favo_str.indexOf(this.obj.payload.doc.id);
        if (check == -1) {
            this.favo_str = this.favo_str + this.obj.payload.doc.id + ' ';
        }
        else {
            this.favo_str = this.favo_str.replace(this.obj.payload.doc.id + ' ', '');
        }
        this.favoritesProv.favoritesAdd(this.favo_str, this.id_user, this.id_favo_str).then(function (data) {
            if (!_this.id_favo_str || _this.id_favo_str == null) {
                _this.favoritesProv.getByUserId(_this.id_user).then(function (newFavo) {
                    _this.id_favo_str = newFavo[0].payload.doc.id;
                });
            }
        });
    };
    DetailPage.prototype.quantity = function (qtt) {
        this.quantityIp = this.quantityIp + parseInt(qtt);
        if (this.quantityIp > 99) {
            this.quantityIp = 99;
        }
        if (this.quantityIp < 1) {
            this.quantityIp = 1;
        }
    };
    DetailPage.prototype.enterQuantity = function (qtt) {
        this.quantityIp = parseInt(qtt);
        if (this.quantityIp > 99) {
            this.quantityIp = 99;
        }
        if (this.quantityIp < 1 || this.quantityIp == null || isNaN(this.quantityIp)) {
            this.quantityIp = 1;
        }
        console.log(qtt);
        console.log(this.quantityIp);
    };
    DetailPage.prototype.addCart = function () {
        var _this = this;
        var itemCv = {
            id: this.obj.payload.doc.id,
            name: this.obj.payload.doc.data().name,
            price: this.obj.payload.doc.data().price,
            discount: this.obj.payload.doc.data().discount,
            description: this.obj.payload.doc.data().description,
            vote: this.obj.payload.doc.data().vote,
            created: this.obj.payload.doc.data().created,
            id_cat: this.obj.payload.doc.data().id_cat,
            tag: this.obj.payload.doc.data().tag,
            thumb: this.obj.payload.doc.data().thumb,
            thumb1: this.obj.payload.doc.data().thumb1,
            thumb2: this.obj.payload.doc.data().thumb2,
            thumb3: this.obj.payload.doc.data().thumb3,
            thumb4: this.obj.payload.doc.data().thumb4,
            quantity: this.quantityIp
        };
        var temp = this.list_cart.filter(function (element) {
            if (element.id == itemCv.id) {
                element.quantity = _this.quantityIp + element.quantity;
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
    DetailPage.prototype.share = function (item) {
        this.socialSharing.share(this.obj.payload.doc.data().name, this.obj.payload.doc.data().description, null, 'post?id=' + this.obj.payload.doc.id);
    };
    DetailPage.prototype.presentToast = function () {
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
    DetailPage.prototype.ngOnInit = function () {
    };
    DetailPage.ctorParameters = function () { return [
        { type: _providers_currencies__WEBPACK_IMPORTED_MODULE_4__["CurrenciesProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers_products__WEBPACK_IMPORTED_MODULE_3__["ProductsProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
        { type: _providers_favorites__WEBPACK_IMPORTED_MODULE_7__["FavoritesProvider"] }
    ]; };
    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/detail/detail.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.page.scss */ "./src/pages/Shopping/detail/detail.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_currencies__WEBPACK_IMPORTED_MODULE_4__["CurrenciesProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_products__WEBPACK_IMPORTED_MODULE_3__["ProductsProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
            _providers_favorites__WEBPACK_IMPORTED_MODULE_7__["FavoritesProvider"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-detail-detail-module.js.map