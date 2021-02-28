(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-people-people-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/people/components/people/people.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/people/components/people/people.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-toolbar>-->\n<!--  <ion-buttons slot=\"start\">-->\n<!--    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>-->\n<!--  </ion-buttons>-->\n<!--  <img alt=\"appicon\" height=\"22\" class=\"ion-float-right\" src=\"assets/images/logo1.png\"/>-->\n<!--</ion-toolbar>-->\n\n<ion-toolbar class=\"tool\" color=\"favorite\">\n  <ion-buttons slot=\"start\">\n    <ion-icon\n    src=\"assets/icons/menu-outline.svg\"\n    color=\"danger\"\n      style=\"font-size: 25px; padding-left: 10px; color: black;\"\n      (click)=\"openMenu()\"\n    ></ion-icon>\n    \n\n    <ion-menu-button class=\"headphones\" menu=\"second\" autoHide=\"true\">\n      <ion-icon src=\"assets/icons/play-outline.svg\" color=\"medium\"></ion-icon>\n    </ion-menu-button>\n\n  </ion-buttons>\n \n\n  <ion-buttons slot=\"end\">\n    <img\n      id=\"hide\"\n      alt=\"appicon\"\n      height=\"22\"\n      class=\"ion-float-right\"\n      src=\"assets/images/logo1.png\"\n    />\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content>\n  <app-search-bar\n    style=\"position: fixed; background-color: white; z-index: 100;\"\n    *ngIf=\"openSearch\"\n    (event)=\"onSearch($event)\"\n  ></app-search-bar>\n\n  <app-no-data *ngIf=\"list.length === 0\"> </app-no-data>\n\n  <ion-list\n    [ngStyle]=\"{ 'margin-top': openSearch ? '40px' : '0px' }\"\n    *ngIf=\"list && list.length > 0 && !isSearched\"\n  >\n    <div class=\"group\">\n      <!-- <div class=\"title\" style=\"display: none;\" [id]=\"group.letter\">\n        {{ group.letter }}\n      </div> -->\n      <ion-item\n        class=\"contact\"\n        *ngFor=\"let contact of list; let i = index\"\n        lines=\"none\"\n      >\n        <div\n          class=\"image\"\n          [image-loader]=\"contact.photoURL\"\n          (click)=\"open(contact.uid)\"\n        ></div>\n        <div class=\"detail\" (click)=\"open(contact.uid)\">\n          <div class=\"name\">{{ contact.displayName }}</div>\n          <div class=\"city\" *ngIf=\"contact.town\">{{ contact.town }}</div>\n          <div class=\"country\" *ngIf=\"contact.country\">\n            {{ contact.country }}\n          </div>\n        </div>\n\n        <div class=\"more\">\n          <ion-button\n            *ngIf=\"isFriend(contact.uid)\"\n            size=\"small\"\n            fill=\"clear\"\n            shape=\"round\"\n            (click)=\"openMore(contact)\"\n          >\n            <ion-icon name=\"more\"></ion-icon>\n          </ion-button>\n          <ion-button\n            *ngIf=\"!isFriend(contact.uid)\"\n            class=\"follow-btn\"\n            size=\"small\"\n            shape=\"round\"\n            (click)=\"manage(contact)\"\n          >\n            {{ \"people-component.follow\" | translate }}\n          </ion-button>\n        </div>\n\n        <a\n          hidden\n          #callNumber\n          href=\"tel:+{{ contact.mobile || contact.phone }}\"\n        ></a>\n      </ion-item>\n    </div>\n  </ion-list>\n\n  <ion-list\n    [ngStyle]=\"{ 'margin-top': openSearch ? '40px' : '0px' }\"\n    *ngIf=\"fullList && fullList.length > 0 && isSearched\"\n  >\n    <div class=\"group\">\n      <!-- <div class=\"title\" style=\"display: none;\" [id]=\"group.letter\">\n        {{ group.letter }}\n      </div> -->\n      <ion-item\n        class=\"contact\"\n        *ngFor=\"let contact of fullList; let i = index\"\n        lines=\"none\"\n      >\n        <div\n          class=\"image\"\n          [image-loader]=\"contact.photoURL\"\n          (click)=\"open(contact.uid)\"\n        ></div>\n        <div class=\"detail\" (click)=\"open(contact.uid)\">\n          <div class=\"name\">{{ contact.displayName }}</div>\n          <div class=\"city\" *ngIf=\"contact.town\">{{ contact.town }}</div>\n          <div class=\"country\" *ngIf=\"contact.country\">\n            {{ contact.country }}\n          </div>\n        </div>\n\n        <div class=\"more\">\n          <ion-button\n            *ngIf=\"isFriend(contact.uid)\"\n            size=\"small\"\n            fill=\"clear\"\n            shape=\"round\"\n            (click)=\"openMore(contact)\"\n          >\n            <ion-icon name=\"more\"></ion-icon>\n          </ion-button>\n          <ion-button\n            *ngIf=\"!isFriend(contact.uid)\"\n            class=\"follow-btn\"\n            size=\"small\"\n            shape=\"round\"\n            (click)=\"manage(contact)\"\n          >\n            {{ \"people-component.follow\" | translate }}\n          </ion-button>\n        </div>\n\n        <a\n          hidden\n          #callNumber\n          href=\"tel:+{{ contact.mobile || contact.phone }}\"\n        ></a>\n      </ion-item>\n    </div>\n  </ion-list>\n  <!-- <div class=\"link-alpha\">\n    <li\n      class=\"alpha-link-item\"\n      *ngFor=\"let item of alpha\"\n      (click)=\"scrollTo(item)\"\n    >\n      {{ item }}\n    </li>\n  </div> -->\n  <ion-infinite-scroll *ngIf=\"!isSearched\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more connections...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <!-- </div> -->\n\n  <app-spinner *ngIf=\"loading\"></app-spinner>\n</ion-content>\n\n\n\n<!-- <div class=\"link-alpha\">\n        <li\n          class=\"alpha-link-item\"\n          *ngFor=\"let item of alpha\"\n          (click)=\"scrollTo(item)\"\n        >\n          {{ item }}\n        </li>\n      </div> -->\n\n<ion-toolbar>\n  <ion-tabs>\n    <ion-tab-bar color=\"favorite\" slot=\"bottom\">\n      <ion-tab-button routerLink=\"/feed\" routerDirection=\"forward\">\n        <ion-icon src=\"assets/icons/home-outline.svg\" color=\"primary\" style=\"width: 30px; height: 50px;\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button routerLink=\"/profile\" routerDirection=\"forward\">\n        <ion-icon src=\"assets/icons/person-outline.svg\" color=\"primary\" style=\"width: 28px; height: 50px;\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"openSearch = !openSearch\">\n        <ion-icon  color=\"primary\" name=\"search\" style=\"width: 30px; height: 50px;\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"goToNotifications()\">\n        <ion-icon\n        color=\"primary\"\n        src=\"assets/icons/notifications-outline.svg\"\n          style=\"width: 30px; height: 50px;\"\n        ></ion-icon>\n        <ion-badge\n          *ngIf=\"notificationCounter > 0\"\n          class=\"badge\"\n          style=\"right: 12%; bottom: 15px;\"\n          color=\"green\"\n          >{{ notificationService.unreadCounter }}</ion-badge\n        >\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar>\n");

/***/ }),

/***/ "./src/pages/people/components/people/people.component.scss":
/*!******************************************************************!*\
  !*** ./src/pages/people/components/people/people.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .content-wrapper {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n:host .content-wrapper .header .title {\n  align-items: center;\n}\n:host .content-wrapper .header .title small {\n  font-size: 50%;\n  margin-left: 10px;\n}\n.wrapper {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n.content-scroll {\n  height: 100% !important;\n  width: 100%;\n  overflow: auto;\n}\n.group {\n  display: flex;\n  flex-direction: column;\n}\n.title {\n  font-size: 22px;\n  font-weight: 600;\n  padding: 10px 0 5px 30px;\n  text-transform: uppercase;\n}\n.contact {\n  margin: 5px 10px 5px 0;\n  display: flex;\n  padding: 10px 10px 10px 15px;\n  align-items: center;\n}\n.contact .image {\n  width: 55px;\n  height: 55px;\n  border-radius: 100%;\n  background-size: cover !important;\n  box-shadow: 1px 1px 12px var(--ion-color-light-shade);\n}\n.contact .detail {\n  padding: 0 10px 0 15px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.contact .detail .name {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 0 4px 0;\n}\n.contact .detail .job {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n  margin-bottom: 2px;\n}\n.contact .detail .city,\n.contact .detail .country {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n.contact .detail .country {\n  color: var(--ion-color-primary-shade);\n}\n.contact .more .follow-btn {\n  width: 55px;\n  font-size: 10px;\n}\n.link-alpha {\n  position: fixed;\n  right: 0;\n  top: 16%;\n  display: flex;\n  flex-direction: column;\n  margin-right: 5px;\n  align-items: center;\n  justify-content: center;\n}\n.link-alpha .alpha-link-item {\n  list-style-type: none;\n  font-size: 11px;\n  margin: 0 0 1px 0;\n}\n.ion-float-right {\n  margin-right: 15px;\n}\n.header {\n  display: none;\n}\n.noti-icon {\n  padding-top: 0px;\n  position: relative;\n}\nion-badge {\n  position: absolute;\n  right: 0;\n  bottom: 5px;\n  font-size: 10px;\n  z-index: 999;\n}\n.badge {\n  width: 20px;\n  height: 17px;\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n  font-size: 10px;\n  z-index: 999;\n}\n.badgemsg {\n  width: 20px;\n  height: 17px;\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n  font-size: 10px;\n  z-index: 999;\n}\n.writer {\n  position: fixed;\n  top: 55px;\n  right: -8px;\n  z-index: 999;\n}\n@media (min-width: 829px) {\n  img#hide {\n    display: none;\n  }\n}\nion-tab-bar {\n  --ion-color-favorite: #ffffff;\n}\n.tool {\n  box-shadow: 0px 0.2px 0px #a8a8a8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvcGVvcGxlL2NvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wZW9wbGUvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREVNO0VBQ0UsbUJBQUE7QUNBUjtBREVRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQVY7QURPQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0pGO0FET0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQ0pGO0FET0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUVBLG1CQUFBO0FDTEY7QURPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFEQUFBO0FDTEo7QURRRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQ05KO0FEUUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05OO0FEU0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDUE47QURVSTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ1JOO0FEV0k7RUFDRSxxQ0FBQTtBQ1ROO0FEY0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ1pOO0FEaUJBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDZEY7QURlRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDYko7QURpQkE7RUFDRSxrQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsYUFBQTtBQ2RGO0FEaUJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ2RGO0FEaUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDZEY7QURpQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2RGO0FEaUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNkRjtBRGlCQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNkRjtBRGlCQTtFQUNFO0lBQ0UsYUFBQTtFQ2RGO0FBQ0Y7QURpQkE7RUFDRSw2QkFBQTtBQ2ZGO0FEa0JBO0VBQ0UsNENBQUE7QUNmRiIsImZpbGUiOiJzcmMvcGFnZXMvcGVvcGxlL2NvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmhlYWRlciB7XG4gICAgICAudGl0bGUge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWN0IHtcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTVweDtcbiAgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmltYWdlIHtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIH1cblxuICAuZGV0YWlsIHtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuXG4gICAgLm5hbWUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgICB9XG5cbiAgICAuam9iIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgfVxuXG4gICAgLmNpdHksXG4gICAgLmNvdW50cnkge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICB9XG5cbiAgICAuY291bnRyeSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tb3JlIHtcbiAgICAuZm9sbG93LWJ0biB7XG4gICAgICB3aWR0aDogNTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmxpbmstYWxwaGEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDE2JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAuYWxwaGEtbGluay1pdGVtIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbjogMCAwIDFweCAwO1xuICB9XG59XG5cbi5pb24tZmxvYXQtcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubm90aS1pY29uIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5iYWRnZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmJhZGdlbXNnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ud3JpdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDU1cHg7XG4gIHJpZ2h0OiAtOHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MjlweCkge1xuICBpbWcjaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5pb24tdGFiLWJhciB7XG4gIC0taW9uLWNvbG9yLWZhdm9yaXRlOiAjZmZmZmZmO1xufVxuXG4udG9vbCB7XG4gIGJveC1zaGFkb3c6IDBweCAwLjJweCAwcHggI2E4YThhOCFpbXBvcnRhbnQ7XG59IiwiOmhvc3QgLmNvbnRlbnQtd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5oZWFkZXIgLnRpdGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmhlYWRlciAudGl0bGUgc21hbGwge1xuICBmb250LXNpemU6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVudC1zY3JvbGwge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMCA1cHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRhY3Qge1xuICBtYXJnaW46IDVweCAxMHB4IDVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhY3QgLmltYWdlIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi5jb250YWN0IC5kZXRhaWwge1xuICBwYWRkaW5nOiAwIDEwcHggMCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuLmNvbnRhY3QgLmRldGFpbCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMCAwIDRweCAwO1xufVxuLmNvbnRhY3QgLmRldGFpbCAuam9iIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5jb250YWN0IC5kZXRhaWwgLmNpdHksXG4uY29udGFjdCAuZGV0YWlsIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG4uY29udGFjdCAuZGV0YWlsIC5jb3VudHJ5IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn1cbi5jb250YWN0IC5tb3JlIC5mb2xsb3ctYnRuIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmxpbmstYWxwaGEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDE2JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpbmstYWxwaGEgLmFscGhhLWxpbmstaXRlbSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDAgMCAxcHggMDtcbn1cblxuLmlvbi1mbG9hdC1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ub3RpLWljb24ge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmJhZGdlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uYmFkZ2Vtc2cge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi53cml0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTVweDtcbiAgcmlnaHQ6IC04cHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgyOXB4KSB7XG4gIGltZyNoaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5pb24tdGFiLWJhciB7XG4gIC0taW9uLWNvbG9yLWZhdm9yaXRlOiAjZmZmZmZmO1xufVxuXG4udG9vbCB7XG4gIGJveC1zaGFkb3c6IDBweCAwLjJweCAwcHggI2E4YThhOCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/pages/people/components/people/people.component.ts":
/*!****************************************************************!*\
  !*** ./src/pages/people/components/people/people.component.ts ***!
  \****************************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_notifications_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/notifications/service/notification.service */ "./src/app/notifications/service/notification.service.ts");
/* harmony import */ var _shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var _messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var _services_people_people_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/people/people.service */ "./src/pages/people/services/people/people.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");











/**
 * get list of people fro users collection, group them by first letter of their display names.
 * using a href to scroll to category by letter in the user list.
 * you can follow and unfollow users, call and start message
 */
var PeopleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PeopleComponent, _super);
    function PeopleComponent(injector, authService, messageService, peopleService, commonService, notificationService, angularFire, navCtrl, menuCtrl, loadCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.messageService = messageService;
        _this.peopleService = peopleService;
        _this.commonService = commonService;
        _this.notificationService = notificationService;
        _this.angularFire = angularFire;
        _this.navCtrl = navCtrl;
        _this.menuCtrl = menuCtrl;
        _this.loadCtrl = loadCtrl;
        _this.isSearched = false;
        /** group contacts by first letter of their first names */
        _this.groupedPeople = [];
        /** stores string array of alphabets */
        _this.alpha = [];
        /** stores tabbed views properties */
        _this.views = [];
        /** toggles search bar in template */
        _this.openSearch = false;
        _this.selectedIndex = 0;
        _this.messages = [];
        _this.messageCounter = 0;
        _this.notificationCounter = 0;
        _this.items = [];
        _this.numTimesLeft = 5;
        _this.alpha = _this.peopleService.alpha;
        _this.views = _this.peopleService.views;
        _this.addMoreItems();
        return _this;
    }
    /** get currentUser, get users friends ids and get all users from user collection */
    PeopleComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingService.presentProcessingLoading();
                        this.list = [];
                        this.openProfileFromUrl();
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        this.getFilteredMessages();
                        this.subscriptions.push(this.peopleService
                            .getFriendIds(this.currentUser.uid)
                            .subscribe(function (ids) { return (_this.friends = ids); }));
                        this.angularFire
                            .collection("users", function (ref) { return ref.limit(20); })
                            .get()
                            .subscribe(function (resp) {
                            var arr = [];
                            resp.docs.forEach(function (user) {
                                var peopleUser = user.data();
                                peopleUser.doc = user;
                                if (peopleUser.uid !== _this.currentUser.uid) {
                                    arr.push(peopleUser);
                                }
                            });
                            _this.list = arr;
                            _this.tempList = arr;
                            // this.showList(this.selectedIndex);
                            _this.loadingService.dismissLoader();
                        });
                        this.loadAllUsers();
                        this.notificationService
                            .getNotifications(this.currentUser.uid)
                            .then(function (not) {
                            console.log("page-not", not);
                            _this.notificationCounter = _this.notificationService.unreadCounter;
                            _this.notificationCounter = _this.notificationService.getUnreadCount(not, _this.currentUser.uid);
                            console.log("unread counter", _this.notificationService.unreadCounter);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PeopleComponent.prototype.loadData = function (event) {
        var _this = this;
        console.log("event", event);
        setTimeout(function () {
            console.log("Done");
            // this.addMoreItems();
            _this.loadMore(event);
            _this.numTimesLeft -= 1;
            event.target.complete();
        }, 1000);
    };
    PeopleComponent.prototype.addMoreItems = function () {
        for (var i = 0; i < 100; i++)
            this.items.push(i);
    };
    PeopleComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.angularFire
            .collection("users")
            .get()
            .subscribe(function (resp) {
            var arr = [];
            resp.docs.forEach(function (user) {
                var peopleUser = user.data();
                peopleUser.doc = user;
                if (peopleUser.uid !== _this.currentUser.uid) {
                    arr.push(peopleUser);
                }
            });
            _this.fullList = arr;
            _this.fullTempList = arr;
            // this.showList(this.selectedIndex);
            _this.loadingService.dismissLoader();
        });
    };
    /** if you navigate to this page with query params, open person modal and use id in query param to find user details */
    PeopleComponent.prototype.openProfileFromUrl = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe(function (param) {
            if (param && param.id) {
                _this.open(param.id);
            }
        }));
    };
    PeopleComponent.prototype.loadMore = function (event) {
        var _this = this;
        console.log("loading more", event);
        var cursor = this.list[this.list.length - 1].doc;
        this.angularFire
            .collection("users", function (ref) { return ref.limit(20).startAfter(cursor); })
            .get()
            .subscribe(function (resp) {
            console.log("resp", resp);
            resp.docs.forEach(function (user) {
                console.log(user.data());
                var peopleUser = user.data();
                peopleUser.doc = user;
                if (peopleUser.uid !== _this.currentUser.uid) {
                    if (_this.list.filter(function (p) { return p.uid === peopleUser.uid; }).length === 0) {
                        _this.list.push(peopleUser);
                        console.log("new list", _this.list);
                    }
                }
            });
            // this.showList(this.selectedIndex);
            _this.loadingService.dismissLoader();
            event.target.complete();
        });
    };
    PeopleComponent.prototype.getCursor = function (prePend) {
        console.log("length", this.list.length, prePend);
        if (this.list.length) {
            return this.list[this.list.length - 1].doc;
        }
        return null;
    };
    /** search list of users by name and regroup into alphabet categories */
    PeopleComponent.prototype.onSearch = function (val) {
        var people;
        this.fullList = this.fullTempList;
        if (val && val.trim() !== "") {
            this.isSearched = true;
            people = this.fullList.filter(function (item) {
                if (item.displayName) {
                    return item.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
            });
        }
        else {
            this.isSearched = false;
            people = this.list.slice();
        }
        console.log(this.fullList);
        console.log(people);
        this.fullList = people;
    };
    /** show either friends or all people based on tab selection */
    PeopleComponent.prototype.showList = function (index) {
        var _this = this;
        this.selectedIndex = index;
        this.loadingService.presentProcessingLoading();
        if (index === 0) {
            this.groupedPeople = this.peopleService.groupPeople(this.list);
            this.loadingService.dismissLoader();
        }
        else {
            var friends = this.list.filter(function (user) {
                return _this.friends && _this.friends.length > 0
                    ? _this.friends.includes(user.uid)
                    : null;
            });
            this.groupedPeople = this.peopleService.groupPeople(friends);
            this.loadingService.dismissLoader();
        }
        console.log("group", this.groupedPeople);
    };
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    PeopleComponent.prototype.manage = function (friend) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: "",
                            animated: true,
                        })];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        if (!(Object(util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.friends) && this.friends.includes(friend.uid))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.peopleService.unfollow(friend.uid).then(function () { return loader.dismiss(); }, function (err) { return loader.dismiss(); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.peopleService.follow(friend.uid).then(function () {
                            loader.dismiss();
                        }, function (err) {
                            loader.dismiss();
                        })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PeopleComponent.prototype.isFriend = function (fid) {
        return Object(util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.friends) && this.friends.includes(fid);
    };
    /** open a persons profile */
    PeopleComponent.prototype.open = function (uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var extras;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // const modal = await this.openModal(PersonComponent, uid, 'custom-modal');
                // modal.present();
                if (this.currentUser.uid === uid) {
                    return [2 /*return*/];
                }
                extras = {
                    queryParams: {
                        id: uid,
                    },
                };
                this.navCtrl.navigateForward("profile", extras);
                return [2 /*return*/];
            });
        });
    };
    /** open action sheet with options for a person selection */
    PeopleComponent.prototype.openMore = function (contact) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant("other.options"),
                            buttons: [
                                {
                                    text: this.translate.instant("people-component.unfollow"),
                                    handler: function () {
                                        _this.manage(contact);
                                    },
                                },
                                {
                                    text: this.translate.instant("people-component.open"),
                                    handler: function () {
                                        _this.open(contact.uid);
                                    },
                                },
                                {
                                    text: this.translate.instant("people-component.call"),
                                    handler: function () {
                                        _this.commonService.callUser(contact.mobile || contact.phone, _this.callNumber);
                                    },
                                },
                                {
                                    text: this.translate.instant("people-component.chat"),
                                    handler: function () {
                                        _this.messageService.startChat(contact);
                                    },
                                },
                                {
                                    text: this.translate.instant("other.cancel"),
                                    role: "cancel",
                                },
                            ],
                        })];
                    case 1:
                        actionSheetCtrl = _a.sent();
                        return [4 /*yield*/, actionSheetCtrl.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** scroll user to user group category */
    PeopleComponent.prototype.scrollTo = function (item) {
        var element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        }
    };
    PeopleComponent.prototype.getAllMessages = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.angularFire.collection("messages").valueChanges()];
            });
        });
    };
    /**
     * Filtering all messages
     * **/
    PeopleComponent.prototype.getFilteredMessages = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllMessages()];
                    case 1:
                        (_a.sent()).subscribe(function (data) {
                            _this.messages = data;
                            _this.messages.forEach(function (msg) {
                                if (msg.participantsId.indexOf(_this.currentUser.uid) !== -1 &&
                                    msg.last_sender !== _this.currentUser.uid) {
                                    _this.messageCounter = 0;
                                    _this.messageCounter = _this.messageCounter + msg.unread_count;
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PeopleComponent.prototype.goToNotifications = function () {
        this.goto(this.routes.notifications);
    };
    PeopleComponent.prototype.goToMessages = function () {
        this.goto(this.routes.messages);
    };
    PeopleComponent.prototype.openMenu = function () {
        this.menuCtrl.enable(true, "first");
        this.menuCtrl.toggle("first");
    };
    PeopleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_8__["MessagesService"] },
        { type: _services_people_people_service__WEBPACK_IMPORTED_MODULE_9__["PeopleService"] },
        { type: _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _app_notifications_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("content", null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PeopleComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("callNumber", null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PeopleComponent.prototype, "callNumber", void 0);
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-people",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/people/components/people/people.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people.component.scss */ "./src/pages/people/components/people/people.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_8__["MessagesService"],
            _services_people_people_service__WEBPACK_IMPORTED_MODULE_9__["PeopleService"],
            _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _app_notifications_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"]])
    ], PeopleComponent);
    return PeopleComponent;
}(_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"]));



/***/ }),

/***/ "./src/pages/people/people.module.ts":
/*!*******************************************!*\
  !*** ./src/pages/people/people.module.ts ***!
  \*******************************************/
/*! exports provided: PeopleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModule", function() { return PeopleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/people/people.component */ "./src/pages/people/components/people/people.component.ts");
/* harmony import */ var _components_person_person_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/person/person.component */ "./src/pages/people/components/person/person.component.ts");








var PeopleModule = /** @class */ (function () {
    function PeopleModule() {
    }
    PeopleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_people_people_component__WEBPACK_IMPORTED_MODULE_6__["PeopleComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_people_people_component__WEBPACK_IMPORTED_MODULE_6__["PeopleComponent"],
                    },
                    {
                        path: ':id',
                        component: _components_person_person_component__WEBPACK_IMPORTED_MODULE_7__["PersonComponent"],
                    },
                ]),
            ]
        })
    ], PeopleModule);
    return PeopleModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-people-people-module.js.map