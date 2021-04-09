(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/welcome/components/welcome/welcome.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/welcome/components/welcome/welcome.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\n  <div class=\"content-wrapper\">\n    <!-- start language selection-->\n    <div class=\"language\" *ngIf=\"language\">\n      <ion-icon name=\"globe\"></ion-icon>\n      <span class=\"pl5\">{{ 'welcome-component.change-language' | translate }}</span>\n      <div class=\"flag-icon\" (click)=\"openLanguage()\">\n        <div class=\"flag-img\" [image-loader]=\"language.icon\"></div>\n        {{ language.text | translate }}\n      </div>\n    </div>\n    <!-- end language selection -->\n\n    <!-- start slides -->\n    <div class=\"slides-content\">\n      <ion-slides (ionSlideDidChange)=\"slideChanged()\">\n        <ion-slide *ngFor=\"let item of slides\">\n          <div class=\"slide-wrapper\">\n            <div class=\"image\" [image-loader]=\"item.image\"></div>\n            <div class=\"detail\">\n              <div class=\"title\">{{ item.title | translate }}</div>\n              <div class=\"paragraph\">{{ item.paragraph | translate }}</div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- end slides -->\n\n    <!-- start navigation -->\n    <div class=\"navigation\">\n      <ion-button shape=\"round\" color=\"primary\" (click)=\"goto(routes.auth)\">\n        {{ 'welcome-component.get-started' | translate }}</ion-button\n      >\n      <div class=\"swiper-bullets\">\n        <span\n          class=\"bullet\"\n          *ngFor=\"let item of slides; let i = index\"\n          [ngClass]=\"{ active: i === currentIndex }\"\n        ></span>\n      </div>\n    </div>\n    <!-- end navigation -->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/welcome/components/welcome/welcome.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/welcome/components/welcome/welcome.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content .content-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 0 10px;\n}\n:host ion-content .content-wrapper .slides-content {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n:host ion-content .content-wrapper .slides-content ion-slides {\n  background: var(--ion-color-light);\n  width: 100%;\n  height: 95%;\n  border-radius: 12px;\n  border: 1px solid var(--ion-color-light-shade);\n  box-shadow: 1px 1px 12px var(--ion-color-light-shade);\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide {\n  align-items: flex-start;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .image {\n  height: 300px;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .image:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: linear-gradient(to bottom, rgba(var(--ion-color-light-rgb), 0) 0, rgba(var(--ion-color-light-rgb), 0.7) 55%, var(--ion-color-light) 65%);\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail {\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0 20px;\n  text-align: left;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail .title {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail .paragraph {\n  font-size: 15px;\n  padding: 10px 0;\n  color: var(--ion-color-medium);\n}\n:host ion-content .content-wrapper .language {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  padding-top: 10px;\n  margin: 10px;\n}\n:host ion-content .content-wrapper .language .flag-icon {\n  color: var(--ion-color-primary);\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n}\n:host ion-content .content-wrapper .language .flag-icon .flag-img {\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n}\n:host ion-content .content-wrapper .navigation {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n:host ion-content .content-wrapper .navigation .swiper-bullets {\n  margin: 30px 0;\n  display: flex;\n}\n:host ion-content .content-wrapper .navigation .swiper-bullets span {\n  margin: 0 6px;\n  width: 7px;\n  height: 7px;\n  border-radius: 100%;\n  background: var(--ion-color-medium);\n  transition: all 200ms ease-in-out;\n}\n:host ion-content .content-wrapper .navigation .swiper-bullets span.active {\n  background: var(--ion-color-primary);\n  width: 14px;\n  border-radius: 4px;\n}\n.swiper-slide-active {\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvd2VsY29tZS9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy93ZWxjb21lL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNETjtBREdNO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RSO0FER1E7RUFDRSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7QUNEVjtBREdVO0VBQ0UsdUJBQUE7QUNEWjtBREVZO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQWQ7QURFYztFQUNFLGFBQUE7QUNBaEI7QURFZ0I7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsMEpBQUE7QUNBbEI7QURTYztFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1BoQjtBRFNnQjtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDUGxCO0FEVWdCO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ1JsQjtBRGdCTTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDZFI7QURlUTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNiVjtBRGNVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1paO0FEaUJNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2ZSO0FEaUJRO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNmVjtBRGlCVTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtBQ2ZaO0FEaUJZO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNmZDtBRHdCQTtFQUNFLGtCQUFBO0FDckJGIiwiZmlsZSI6InNyYy9wYWdlcy93ZWxjb21lL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcblxuICAgICAgLnNsaWRlcy1jb250ZW50IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogOTUlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgLnNsaWRlLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcblxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgICB0byBib3R0b20sXG4gICAgICAgICAgICAgICAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDApIDAsXG4gICAgICAgICAgICAgICAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuNykgNTUlLFxuICAgICAgICAgICAgICAgICAgICB2YXIoLS1pb24tY29sb3ItbGlnaHQpIDY1JVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZGV0YWlsIHtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucGFyYWdyYXBoIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmxhbmd1YWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIC5mbGFnLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAuZmxhZy1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLnN3aXBlci1idWxsZXRzIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4iLCI6aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTUlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnNsaWRlcy1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGUtd3JhcHBlciAuaW1hZ2Uge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc2xpZGVzLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlLXdyYXBwZXIgLmltYWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwKSAwLCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjcpIDU1JSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSA2NSUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc2xpZGVzLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlLXdyYXBwZXIgLmRldGFpbCB7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGUtd3JhcHBlciAuZGV0YWlsIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnNsaWRlcy1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5zbGlkZS13cmFwcGVyIC5kZXRhaWwgLnBhcmFncmFwaCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5sYW5ndWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAubGFuZ3VhZ2UgLmZsYWctaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmxhbmd1YWdlIC5mbGFnLWljb24gLmZsYWctaW1nIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAubmF2aWdhdGlvbiAuc3dpcGVyLWJ1bGxldHMge1xuICBtYXJnaW46IDMwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLm5hdmlnYXRpb24gLnN3aXBlci1idWxsZXRzIHNwYW4ge1xuICBtYXJnaW46IDAgNnB4O1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLm5hdmlnYXRpb24gLnN3aXBlci1idWxsZXRzIHNwYW4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB3aWR0aDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/pages/welcome/components/welcome/welcome.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/welcome/components/welcome/welcome.component.ts ***!
  \*******************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/welcome/welcome.service */ "./src/pages/welcome/services/welcome/welcome.service.ts");







/**
 * welcome screen with walkthrough on using the app and access to auth module
 */
var WelcomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WelcomeComponent, _super);
    function WelcomeComponent(injector, storage, appService, welcomeService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.storage = storage;
        _this.appService = appService;
        _this.welcomeService = welcomeService;
        /** stores slides array from service */
        _this.slides = [];
        /** save active index of slides */
        _this.currentIndex = 0;
        /** stores language data */
        _this.language = null;
        return _this;
    }
    /** get slides and languages data from services
     * set selected language from device local storage or default to gb
     */
    WelcomeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lang;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.slides = this.welcomeService.slides;
                        this.languages = this.welcomeService.languages;
                        return [4 /*yield*/, this.storage.get('language')];
                    case 1:
                        lang = _a.sent();
                        if (lang) {
                            this.language = this.languages.find(function (item) { return item.code === lang; });
                        }
                        else {
                            this.language = this.languages[0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** on slide changes, update currentIndex property, this will update our custom navigation bullets */
    WelcomeComponent.prototype.slideChanged = function () {
        var _this = this;
        this.slider.getActiveIndex().then(function (index) {
            _this.currentIndex = index;
        });
    };
    /** open an action sheet with language options */
    WelcomeComponent.prototype.openLanguage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('welcome-component.select-lang'),
                            buttons: [
                                {
                                    text: this.translate.instant('welcome-component.english'),
                                    handler: function () {
                                        _this.changeLanguage('gb');
                                    }
                                },
                                {
                                    text: this.translate.instant('welcome-component.spanish'),
                                    handler: function () {
                                        _this.changeLanguage('es');
                                    }
                                },
                                {
                                    text: this.translate.instant('welcome-component.french'),
                                    handler: function () {
                                        _this.changeLanguage('fr');
                                    }
                                },
                                {
                                    text: this.translate.instant('other.close'),
                                    role: 'cancel'
                                }
                            ]
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
    /**
     * change language based on actionsheet selection
     */
    WelcomeComponent.prototype.changeLanguage = function (lang) {
        this.appService.langConfig(lang);
        this.language = this.languages.find(function (data) { return data.code === lang; });
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
        { type: _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__["WelcomeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], WelcomeComponent.prototype, "slider", void 0);
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/welcome/components/welcome/welcome.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.scss */ "./src/pages/welcome/components/welcome/welcome.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__["WelcomeService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}(_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"]));



/***/ }),

/***/ "./src/pages/welcome/services/welcome/welcome.service.ts":
/*!***************************************************************!*\
  !*** ./src/pages/welcome/services/welcome/welcome.service.ts ***!
  \***************************************************************/
/*! exports provided: WelcomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeService", function() { return WelcomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/helpers/extender */ "./src/shared/helpers/extender.ts");



/**
 * set data for languages and slides in welcome component
 */
var WelcomeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WelcomeService, _super);
    function WelcomeService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        /** set app language options this property is used by component to set language dropdown */
        _this._languages = [
            {
                icon: 'assets/images/flags/gb.svg',
                text: _this.translate.instant('welcome-component.english'),
                code: 'gb'
            },
            {
                icon: 'assets/images/flags/es.svg',
                text: _this.translate.instant('welcome-component.spanish'),
                code: 'es'
            },
            {
                icon: 'assets/images/flags/fr.svg',
                text: _this.translate.instant('welcome-component.french'),
                code: 'fr'
            }
        ];
        /** set welcome slides data */
        _this._slides = [
            {
                image: '../assets/images/logo.png',
                title: 'welcome-component.slide-1-title',
                paragraph: 'welcome-component.slide-1-paragraph'
            },
            {
                image: '../assets/images/welcome/profile.jpg',
                title: 'welcome-component.slide-2-title',
                paragraph: 'welcome-component.slide-2-paragraph'
            },
            {
                image: '../assets/images/welcome/feed.jpeg',
                title: 'welcome-component.slide-3-title',
                paragraph: 'welcome-component.slide-3-paragraph'
            },
            {
                image: '../assets/images/welcome/friends.jpg',
                title: 'welcome-component.slide-4-title',
                paragraph: 'welcome-component.slide-4-paragraph'
            },
            {
                image: '../assets/images/welcome/chat.jpg',
                title: 'welcome-component.slide-5-title',
                paragraph: 'welcome-component.slide-5-paragraph'
            }
        ];
        return _this;
    }
    Object.defineProperty(WelcomeService.prototype, "languages", {
        /** public getter to make language property accessible */
        get: function () {
            return this._languages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WelcomeService.prototype, "slides", {
        /** public getter to make slides property accessible */
        get: function () {
            return this._slides;
        },
        enumerable: true,
        configurable: true
    });
    WelcomeService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    WelcomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], WelcomeService);
    return WelcomeService;
}(_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/welcome/welcome.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/welcome/welcome.module.ts ***!
  \*********************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/pages/welcome/components/welcome/welcome.component.ts");






var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                    },
                ]),
            ],
        })
    ], WelcomeModule);
    return WelcomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module.js.map