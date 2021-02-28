(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/setting/components/setting/setting.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/setting/components/setting/setting.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar class=\"tool\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button style=\"color: black;\"></ion-back-button>\n    <ion-menu-button size=\"small\"\n      autoHide=\"true\"></ion-menu-button>\n  </ion-buttons>\n  <img id=\"hide\" alt=\"appicon\" height=\"22\" class=\"ion-float-right\" src=\"assets/images/logo1.png\"/>\n</ion-toolbar>\n\n<ion-content scrollX=\"false\"\n  scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <div class=\"header no-border has-toolbar\">\n    \n    </div>\n   <h2 class=\"margin\">Settings</h2> \n    <ion-button \n    class=\"update2\"\n   color=\"medium\"\n    (click)=\"openUpdate()\">\n    <ion-label class=\"update\" color=\"favorite\" text-uppercase>Update app - </ion-label>\n    <ion-icon class=\"iconupdate\" color=\"google\" name=\"appstore\"></ion-icon>\n  </ion-button>\n\n    <div class=\"wrapper\"\n      *ngIf=\"currentUser\">\n      <div class=\"content-scroll\">\n\n        <app-accordion #accordion>\n          <app-panel *ngFor=\"let settingOption of settingOptions\"\n            [open]=\"settingOption.open\"\n            title=\"{{ settingOption.title }}\"\n            color=\"dark\">\n            <app-simple-item *ngFor=\"let item of settingOption.items\"\n              (click)=\"!item.checkbox ? item.event(setting) : null\">\n              <div class=\"img\"\n                prefix\n                [image-loader]=\"item.icon\"></div>\n              <strong>{{ item.text }}</strong>\n              <p>{{item.description}}</p>\n\n              <ion-icon *ngIf=\"item.checkbox\"\n                suffix\n                [src]=\"item.selected ? 'assets/icons/check-square.svg' : 'assets/icons/square.svg'\"\n                color=\"primary\"\n                (click)=\"item.selected = !item.selected; item.event(item.selected)\">\n              </ion-icon>\n            </app-simple-item>\n          </app-panel>\n        </app-accordion>\n\n        <ion-button\n          shape=\"round\"\n          (click)=\"save()\">\n          {{'setting-component.save-button' | translate}}\n        </ion-button>\n\n        <ion-button\n          shape=\"round\"\n          color=\"danger\"\n          (click)=\"signOut()\">\n          {{'setting-component.logout-button' | translate}}\n        </ion-button>\n\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/pages/setting/components/setting/setting.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/setting/components/setting/setting.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .content-wrapper .wrapper {\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 90px) !important;\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel ::ng-deep .title {\n  padding: 10px 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item {\n  align-items: center;\n  margin: 10px 0;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item .img {\n  width: 20px;\n  max-width: 20px;\n  margin: 0 10px;\n  height: 20px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item ion-icon {\n  padding: 0 10px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item strong {\n  font-size: 14px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item p {\n  margin: 0;\n  font-size: 11px;\n  color: var(--ion-color-medium);\n}\n:host .content-wrapper .wrapper .content-scroll ion-button {\n  margin: 10px 0;\n}\n.ion-float-right {\n  margin-right: 15px;\n}\n@media (min-width: 829px) {\n  img#hide {\n    display: none;\n  }\n}\n.tool {\n  box-shadow: 0px 0.3px 0px #a8a8a8 !important;\n}\n.margin {\n  margin-left: 15px;\n}\n.update {\n  font-size: 16px;\n  font-weight: 700;\n}\n.iconupdate {\n  height: 40px;\n}\n.update2 {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvc2V0dGluZy9jb21wb25lbnRzL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9zZXR0aW5nL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNETjtBREdNO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FESVk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRmQ7QURNVTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0paO0FETVk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSmQ7QURPWTtFQUNFLGVBQUE7QUNMZDtBRFFZO0VBQ0UsZUFBQTtBQ05kO0FEUVk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDTmQ7QURVUTtFQUNFLGNBQUE7QUNSVjtBRGVBO0VBQ0Esa0JBQUE7QUNaQTtBRGVBO0VBQ0U7SUFDRSxhQUFBO0VDWkY7QUFDRjtBRGVBO0VBQ0UsNENBQUE7QUNiRjtBRGdCQTtFQUNFLGlCQUFBO0FDYkY7QURnQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNiRjtBRGdCQTtFQUNFLFlBQUE7QUNiRjtBRGdCQTtFQUNFLGlCQUFBO0FDYkYiLCJmaWxlIjoic3JjL3BhZ2VzL3NldHRpbmcvY29tcG9uZW50cy9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgYXBwLXBhbmVsIHtcbiAgICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICBhcHAtc2ltcGxlLWl0ZW0ge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaW9uLWZsb2F0LXJpZ2h0e1xubWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo4MjlweCkge1xuICBpbWcjaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4udG9vbCB7XG4gIGJveC1zaGFkb3c6IDBweCAwLjNweCAwcHggI2E4YThhOCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW57XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4udXBkYXRle1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pY29udXBkYXRle1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi51cGRhdGUyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7ICBcbn0iLCI6aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCBhcHAtcGFuZWwgOjpuZy1kZWVwIC50aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgYXBwLXBhbmVsIGFwcC1zaW1wbGUtaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgYXBwLXBhbmVsIGFwcC1zaW1wbGUtaXRlbSAuaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1heC13aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGFwcC1wYW5lbCBhcHAtc2ltcGxlLWl0ZW0gaW9uLWljb24ge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCBhcHAtcGFuZWwgYXBwLXNpbXBsZS1pdGVtIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGFwcC1wYW5lbCBhcHAtc2ltcGxlLWl0ZW0gcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5pb24tZmxvYXQtcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MjlweCkge1xuICBpbWcjaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnRvb2wge1xuICBib3gtc2hhZG93OiAwcHggMC4zcHggMHB4ICNhOGE4YTggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4udXBkYXRlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaWNvbnVwZGF0ZSB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnVwZGF0ZTIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/setting/components/setting/setting.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/setting/components/setting/setting.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/setting/setting.service */ "./src/pages/setting/services/setting/setting.service.ts");





/**
 * manage users preferences
 */
var SettingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SettingComponent, _super);
    function SettingComponent(injector, authService, settingService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.settingService = settingService;
        return _this;
    }
    /** get settings and setting options from settings service. set uid to current user id.
     *  this is necessary if no settings has been saved previously
     */
    SettingComponent.prototype.ngOnInit = function () {
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
                        this.subscriptions.push(this.settingService.getUserSettings(this.currentUser.uid).subscribe(function (data) {
                            _this.setting = data;
                            _this.setting.uid = _this.currentUser.uid;
                        }));
                        this.subscriptions.push(this.settingService.settingsOptions.subscribe(function (data) { return (_this.settingOptions = data); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** save or update user preferences  */
    SettingComponent.prototype.save = function () {
        this.settingService.upsertPreferences(this.settingService.setting);
    };
    SettingComponent.prototype.openUpdate = function () {
        window.open('https://play.google.com/store/apps/details?id=com.dontramp.drm&hl=en_GB&gl=US', '_system', 'location=yes');
    };
    /** logout and return to welcome or auth screen */
    SettingComponent.prototype.signOut = function () {
        var _this = this;
        var hideWalkthrough = this.setting.hideWalkthrough;
        this.authService.signOut().then(function () {
            if (hideWalkthrough) {
                _this.goto(_this.routes.auth);
            }
            else {
                _this.goto(_this.routes.welcome);
            }
        });
    };
    SettingComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
    ]; };
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/setting/components/setting/setting.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.component.scss */ "./src/pages/setting/components/setting/setting.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
    ], SettingComponent);
    return SettingComponent;
}(_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/setting/setting.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/setting/setting.module.ts ***!
  \*********************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/pages/setting/components/setting/setting.component.ts");






var SettingModule = /** @class */ (function () {
    function SettingModule() {
    }
    SettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"]
                    }
                ])
            ]
        })
    ], SettingModule);
    return SettingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-setting-setting-module.js.map