(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Shopping-profile-profile-module"],{

/***/ "./node_modules/@ionic-native/file-path/ngx/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic-native/file-path/ngx/index.js ***!
  \***********************************************************/
/*! exports provided: FilePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePath", function() { return FilePath; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var FilePath = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilePath, _super);
    function FilePath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePath.prototype.resolveNativePath = function (path) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "resolveNativePath", {}, arguments); };
    FilePath.pluginName = "FilePath";
    FilePath.plugin = "cordova-plugin-filepath";
    FilePath.pluginRef = "window.FilePath";
    FilePath.repo = "https://github.com/hiddentao/cordova-plugin-filepath";
    FilePath.platforms = ["Android"];
    FilePath = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FilePath);
    return FilePath;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtcGF0aC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQzFDLDRCQUFpQjs7OztJQU83QyxvQ0FBaUIsYUFBQyxJQUFZOzs7Ozs7SUFQbkIsUUFBUTtRQURwQixVQUFVLEVBQUU7T0FDQSxRQUFRO21CQWxDckI7RUFrQzhCLGlCQUFpQjtTQUFsQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbi8qKlxuICogQG5hbWUgRmlsZSBQYXRoXG4gKiBAcHJlbWllciBmaWxlc3lzdGVtXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJlc29sdmUgdGhlIG5hdGl2ZSBmaWxlc3lzdGVtIHBhdGggZm9yIEFuZHJvaWQgY29udGVudCBVUklzIGFuZCBpcyBiYXNlZCBvbiBjb2RlIGluIHRoZSBhRmlsZUNob29zZXIgbGlicmFyeS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbGVQYXRoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXBhdGgvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVQYXRoOiBGaWxlUGF0aCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlUGF0aC5yZXNvbHZlTmF0aXZlUGF0aChwYXRoKVxuICogICAudGhlbihmaWxlUGF0aCA9PiBjb25zb2xlLmxvZyhmaWxlUGF0aCkpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZVBhdGgnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlcGF0aCcsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5GaWxlUGF0aCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGlkZGVudGFvL2NvcmRvdmEtcGx1Z2luLWZpbGVwYXRoJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZVBhdGggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXNvbHZlIG5hdGl2ZSBwYXRoIGZvciBnaXZlbiBjb250ZW50IFVSTC9wYXRoLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQ29udGVudCBVUkwvcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzb2x2ZU5hdGl2ZVBhdGgocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@ionic-native/file-transfer/ngx/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/file-transfer/ngx/index.js ***!
  \***************************************************************/
/*! exports provided: FileTransfer, FileTransferObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTransfer", function() { return FileTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTransferObject", function() { return FileTransferObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var FileTransfer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileTransfer, _super);
    function FileTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5,
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {FileTransferObject}
     */
    FileTransfer.prototype.create = function () {
        return new FileTransferObject();
    };
    FileTransfer.pluginName = "FileTransfer";
    FileTransfer.plugin = "cordova-plugin-file-transfer";
    FileTransfer.pluginRef = "FileTransfer";
    FileTransfer.repo = "https://github.com/apache/cordova-plugin-file-transfer";
    FileTransfer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    FileTransfer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FileTransfer);
    return FileTransfer;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

var FileTransferObject = /** @class */ (function () {
    function FileTransferObject() {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
        }
    }
    FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "upload", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "download", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.onProgress = function (listener) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"])(_this) === true) {
                _this._objectInstance.onprogress = listener;
            }
        })();
    };
    FileTransferObject.prototype.abort = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "abort", { "sync": true }, arguments); };
    FileTransferObject.plugin = "cordova-plugin-file-transfer";
    FileTransferObject.pluginName = "FileTransfer";
    FileTransferObject = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FileTransferObject);
    return FileTransferObject;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtdHJhbnNmZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sNERBQTZELGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBNktoRixnQ0FBaUI7OztRQUNqRDs7Ozs7Ozs7O1dBU0c7UUFDSCwyQkFBcUIsR0FBRztZQUN0QixrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxDQUFDO1lBQ1osZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQixDQUFDOzs7SUFFRjs7O09BR0c7SUFDSCw2QkFBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBekJVLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkE5S3pCO0VBOEtrQyxpQkFBaUI7U0FBdEMsWUFBWTs7SUFzQ3ZCO1FBQ0UsSUFBSSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMvRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQWVELG1DQUFNLGFBQ0osT0FBZSxFQUNmLEdBQVcsRUFDWCxPQUEyQixFQUMzQixhQUF1QjtJQWtCekIscUNBQVEsYUFBQyxNQUFjLEVBQUUsTUFBYyxFQUFFLGFBQXVCLEVBQUUsT0FBOEI7SUFTaEcsdUNBQVUsYUFBQyxRQUF1Qzs7O3NEQUFRO2dCQUN4RCxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7YUFDNUM7OztJQVNELGtDQUFLOzs7SUFoRU0sa0JBQWtCOztPQUFsQixrQkFBa0I7NkJBak4vQjs7U0FpTmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZUNoZWNrLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBjaGVja0F2YWlsYWJpbGl0eSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGZvcm0gZWxlbWVudC5cbiAgICogRGVmYXVsdHMgdG8gJ2ZpbGUnLlxuICAgKi9cbiAgZmlsZUtleT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGZpbGUgbmFtZSB0byB1c2Ugd2hlbiBzYXZpbmcgdGhlIGZpbGUgb24gdGhlIHNlcnZlci5cbiAgICogRGVmYXVsdHMgdG8gJ2ltYWdlLmpwZycuXG4gICAqL1xuICBmaWxlTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSAtIGVpdGhlciBQVVQgb3IgUE9TVC5cbiAgICogRGVmYXVsdHMgdG8gUE9TVC5cbiAgICovXG4gIGh0dHBNZXRob2Q/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW1lIHR5cGUgb2YgdGhlIGRhdGEgdG8gdXBsb2FkLlxuICAgKiBEZWZhdWx0cyB0byBpbWFnZS9qcGVnLlxuICAgKi9cbiAgbWltZVR5cGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIG9wdGlvbmFsIGtleS92YWx1ZSBwYWlycyB0byBwYXNzIGluIHRoZSBIVFRQIHJlcXVlc3QuXG4gICAqL1xuICBwYXJhbXM/OiB7IFtzOiBzdHJpbmddOiBhbnkgfTtcblxuICAvKipcbiAgICogV2hldGhlciB0byB1cGxvYWQgdGhlIGRhdGEgaW4gY2h1bmtlZCBzdHJlYW1pbmcgbW9kZS5cbiAgICogRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIGNodW5rZWRNb2RlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBtYXAgb2YgaGVhZGVyIG5hbWUvaGVhZGVyIHZhbHVlcy4gVXNlIGFuIGFycmF5IHRvIHNwZWNpZnkgbW9yZVxuICAgKiB0aGFuIG9uZSB2YWx1ZS4gT24gaU9TLCBGaXJlT1MsIGFuZCBBbmRyb2lkLCBpZiBhIGhlYWRlciBuYW1lZFxuICAgKiBDb250ZW50LVR5cGUgaXMgcHJlc2VudCwgbXVsdGlwYXJ0IGZvcm0gZGF0YSB3aWxsIE5PVCBiZSB1c2VkLlxuICAgKi9cbiAgaGVhZGVycz86IHsgW3M6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVVcGxvYWRSZXN1bHQge1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBieXRlcyBzZW50IHRvIHRoZSBzZXJ2ZXIgYXMgcGFydCBvZiB0aGUgdXBsb2FkLlxuICAgKi9cbiAgYnl0ZXNTZW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBIVFRQIHJlc3BvbnNlIGNvZGUgcmV0dXJuZWQgYnkgdGhlIHNlcnZlci5cbiAgICovXG4gIHJlc3BvbnNlQ29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCByZXNwb25zZSByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVzcG9uc2U6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIEhUVFAgcmVzcG9uc2UgaGVhZGVycyBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgaGVhZGVyczogeyBbczogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVRyYW5zZmVyRXJyb3Ige1xuICAvKipcbiAgICogT25lIG9mIHRoZSBwcmVkZWZpbmVkIGVycm9yIGNvZGVzIGxpc3RlZCBiZWxvdy5cbiAgICovXG4gIGNvZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVVJMIHRvIHRoZSBzb3VyY2UuXG4gICAqL1xuICBzb3VyY2U6IHN0cmluZztcblxuICAvKipcbiAgICogVVJMIHRvIHRoZSB0YXJnZXQuXG4gICAqL1xuICB0YXJnZXQ6IHN0cmluZztcblxuICAvKipcbiAgICogSFRUUCBzdGF0dXMgY29kZS4gVGhpcyBhdHRyaWJ1dGUgaXMgb25seSBhdmFpbGFibGUgd2hlbiBhIHJlc3BvbnNlXG4gICAqIGNvZGUgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgSFRUUCBjb25uZWN0aW9uLlxuICAgKi9cbiAgaHR0cF9zdGF0dXM6IG51bWJlcjtcblxuICAvKipcbiAgICogUmVzcG9uc2UgYm9keS4gVGhpcyBhdHRyaWJ1dGUgaXMgb25seSBhdmFpbGFibGUgd2hlbiBhIHJlc3BvbnNlIGlzIHJlY2VpdmVkIGZyb20gdGhlIEhUVFAgY29ubmVjdGlvbi5cbiAgICovXG4gIGJvZHk6IHN0cmluZztcblxuICAvKipcbiAgICogRWl0aGVyIGUuZ2V0TWVzc2FnZSBvciBlLnRvU3RyaW5nLlxuICAgKi9cbiAgZXhjZXB0aW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgRmlsZSBUcmFuc2ZlclxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byB1cGxvYWQgYW5kIGRvd25sb2FkIGZpbGVzLlxuICogXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbGVUcmFuc2ZlciwgRmlsZVVwbG9hZE9wdGlvbnMsIEZpbGVUcmFuc2Zlck9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS10cmFuc2Zlci9uZ3gnO1xuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZSc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlcjogRmlsZVRyYW5zZmVyLCBwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IGZpbGVUcmFuc2ZlcjogRmlsZVRyYW5zZmVyT2JqZWN0ID0gdGhpcy50cmFuc2Zlci5jcmVhdGUoKTtcbiAqXG4gKiAvLyBVcGxvYWQgYSBmaWxlOlxuICogZmlsZVRyYW5zZmVyLnVwbG9hZCguLikudGhlbiguLikuY2F0Y2goLi4pO1xuICpcbiAqIC8vIERvd25sb2FkIGEgZmlsZTpcbiAqIGZpbGVUcmFuc2Zlci5kb3dubG9hZCguLikudGhlbiguLikuY2F0Y2goLi4pO1xuICpcbiAqIC8vIEFib3J0IGFjdGl2ZSB0cmFuc2ZlcjpcbiAqIGZpbGVUcmFuc2Zlci5hYm9ydCgpO1xuICpcbiAqIC8vIGZ1bGwgZXhhbXBsZVxuICogdXBsb2FkKCkge1xuICogICBsZXQgb3B0aW9uczogRmlsZVVwbG9hZE9wdGlvbnMgPSB7XG4gKiAgICAgIGZpbGVLZXk6ICdmaWxlJyxcbiAqICAgICAgZmlsZU5hbWU6ICduYW1lLmpwZycsXG4gKiAgICAgIGhlYWRlcnM6IHt9XG4gKiAgICAgIC4uLi4uXG4gKiAgIH1cbiAqXG4gKiAgIGZpbGVUcmFuc2Zlci51cGxvYWQoJzxmaWxlIHBhdGg+JywgJzxhcGkgZW5kcG9pbnQ+Jywgb3B0aW9ucylcbiAqICAgIC50aGVuKChkYXRhKSA9PiB7XG4gKiAgICAgIC8vIHN1Y2Nlc3NcbiAqICAgIH0sIChlcnIpID0+IHtcbiAqICAgICAgLy8gZXJyb3JcbiAqICAgIH0pXG4gKiB9XG4gKlxuICogZG93bmxvYWQoKSB7XG4gKiAgIGNvbnN0IHVybCA9ICdodHRwOi8vd3d3LmV4YW1wbGUuY29tL2ZpbGUucGRmJztcbiAqICAgZmlsZVRyYW5zZmVyLmRvd25sb2FkKHVybCwgdGhpcy5maWxlLmRhdGFEaXJlY3RvcnkgKyAnZmlsZS5wZGYnKS50aGVuKChlbnRyeSkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZCBjb21wbGV0ZTogJyArIGVudHJ5LnRvVVJMKCkpO1xuICogICB9LCAoZXJyb3IpID0+IHtcbiAqICAgICAvLyBoYW5kbGUgZXJyb3JcbiAqICAgfSk7XG4gKiB9XG4gKlxuICogYGBgXG4gKlxuICogVG8gc3RvcmUgZmlsZXMgaW4gYSBkaWZmZXJlbnQvcHVibGljbHkgYWNjZXNzaWJsZSBkaXJlY3RvcnksIHBsZWFzZSByZWZlciB0byB0aGUgZm9sbG93aW5nIGxpbmtcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZmlsZSN3aGVyZS10by1zdG9yZS1maWxlc1xuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBGaWxlVXBsb2FkT3B0aW9uc1xuICogRmlsZVVwbG9hZFJlc3VsdFxuICogRmlsZVRyYW5zZmVyRXJyb3JcbiAqIEBjbGFzc2VzXG4gKiBGaWxlVHJhbnNmZXJPYmplY3RcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlVHJhbnNmZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGx1Z2luUmVmOiAnRmlsZVRyYW5zZmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZmlsZS10cmFuc2ZlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1VidW50dScsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRXJyb3IgY29kZSByZWplY3RlZCBmcm9tIHVwbG9hZCB3aXRoIEZpbGVUcmFuc2ZlckVycm9yXG4gICAqIERlZmluZWQgaW4gRmlsZVRyYW5zZmVyRXJyb3IuXG4gICAqICAgICAgRklMRV9OT1RfRk9VTkRfRVJSOiAxICAgUmV0dXJuIHdoZW4gZmlsZSB3YXMgbm90IGZvdW5kXG4gICAqICAgICAgSU5WQUxJRF9VUkxfRVJSOiAyLCAgICAgUmV0dXJuIHdoZW4gdXJsIHdhcyBpbnZhbGlkXG4gICAqICAgICAgQ09OTkVDVElPTl9FUlI6IDMsICAgICAgUmV0dXJuIG9uIGNvbm5lY3Rpb24gZXJyb3JcbiAgICogICAgICBBQk9SVF9FUlI6IDQsICAgICAgICAgICBSZXR1cm4gb24gYWJvcnRpbmdcbiAgICogICAgICBOT1RfTU9ESUZJRURfRVJSOiA1ICAgICBSZXR1cm4gb24gJzMwNCBOb3QgTW9kaWZpZWQnIEhUVFAgcmVzcG9uc2VcbiAgICogQGVudW0ge251bWJlcn1cbiAgICovXG4gIEZpbGVUcmFuc2ZlckVycm9yQ29kZSA9IHtcbiAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEsXG4gICAgSU5WQUxJRF9VUkxfRVJSOiAyLFxuICAgIENPTk5FQ1RJT05fRVJSOiAzLFxuICAgIEFCT1JUX0VSUjogNCxcbiAgICBOT1RfTU9ESUZJRURfRVJSOiA1LFxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEZpbGVUcmFuc2ZlciBvYmplY3RcbiAgICogQHJldHVybiB7RmlsZVRyYW5zZmVyT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKCk6IEZpbGVUcmFuc2Zlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBGaWxlVHJhbnNmZXJPYmplY3QoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5OYW1lOiAnRmlsZVRyYW5zZmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoRmlsZVRyYW5zZmVyLmdldFBsdWdpblJlZigpLCBudWxsLCBGaWxlVHJhbnNmZXIuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBuZXcgKEZpbGVUcmFuc2Zlci5nZXRQbHVnaW4oKSkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBmaWxlIHRvIGEgc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVVybCAgRmlsZXN5c3RlbSBVUkwgcmVwcmVzZW50aW5nIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2Ugb3IgYSBkYXRhIFVSSS4gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB0aGlzIGNhbiBhbHNvIGJlIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgb24gdGhlIGRldmljZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgVVJMIG9mIHRoZSBzZXJ2ZXIgdG8gcmVjZWl2ZSB0aGUgZmlsZSwgYXMgZW5jb2RlZCBieSBlbmNvZGVVUkkoKS5cbiAgICogQHBhcmFtIHtGaWxlVXBsb2FkT3B0aW9uc30gW29wdGlvbnNdICBPcHRpb25hbCBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt0cnVzdEFsbEhvc3RzXSAgT3B0aW9uYWwgcGFyYW1ldGVyLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgc2V0IHRvIHRydWUsIGl0IGFjY2VwdHMgYWxsIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gVGhpcyBpcyB1c2VmdWwgc2luY2UgQW5kcm9pZCByZWplY3RzIHNlbGYtc2lnbmVkIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIHVzZS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZVVwbG9hZFJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlVXBsb2FkUmVzdWx0IGFuZCByZWplY3RzIHdpdGggRmlsZVRyYW5zZmVyRXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgdXBsb2FkKFxuICAgIGZpbGVVcmw6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzogRmlsZVVwbG9hZE9wdGlvbnMsXG4gICAgdHJ1c3RBbGxIb3N0cz86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxGaWxlVXBsb2FkUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERvd25sb2FkcyBhIGZpbGUgZnJvbSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgIFVSTCBvZiB0aGUgc2VydmVyIHRvIGRvd25sb2FkIHRoZSBmaWxlLCBhcyBlbmNvZGVkIGJ5IGVuY29kZVVSSSgpLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0ICBGaWxlc3lzdGVtIHVybCByZXByZXNlbnRpbmcgdGhlIGZpbGUgb24gdGhlIGRldmljZS4gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB0aGlzIGNhbiBhbHNvIGJlIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgb24gdGhlIGRldmljZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbdHJ1c3RBbGxIb3N0c10gIE9wdGlvbmFsIHBhcmFtZXRlciwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIHNldCB0byB0cnVlLCBpdCBhY2NlcHRzIGFsbCBzZWN1cml0eSBjZXJ0aWZpY2F0ZXMuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2UgQW5kcm9pZCByZWplY3RzIHNlbGYtc2lnbmVkIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIHVzZS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtPcHRpb25hbF0gcGFyYW1ldGVycywgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgaGVhZGVycyAoc3VjaCBhcyBBdXRob3JpemF0aW9uIChCYXNpYyBBdXRoZW50aWNhdGlvbiksIGV0YykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlRW50cnkgb2JqZWN0LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIGRvd25sb2FkKHNvdXJjZTogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZywgdHJ1c3RBbGxIb3N0cz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7IFtzOiBzdHJpbmddOiBhbnkgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGxpc3RlbmVyIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbmV2ZXIgYSBuZXcgY2h1bmsgb2YgZGF0YSBpcyB0cmFuc2ZlcnJlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTGlzdGVuZXIgdGhhdCB0YWtlcyBhIHByb2dyZXNzIGV2ZW50LlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBzeW5jOiB0cnVlIH0pXG4gIG9uUHJvZ3Jlc3MobGlzdGVuZXI6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub25wcm9ncmVzcyA9IGxpc3RlbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFib3J0cyBhbiBpbi1wcm9ncmVzcyB0cmFuc2Zlci4gVGhlIG9uZXJyb3IgY2FsbGJhY2sgaXMgcGFzc2VkIGEgRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogb2JqZWN0IHdoaWNoIGhhcyBhbiBlcnJvciBjb2RlIG9mIEZpbGVUcmFuc2ZlckVycm9yLkFCT1JUX0VSUi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGFib3J0KCk6IHZvaWQge31cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/profile/profile.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/profile/profile.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button menu=\"shop\">\n\t\t\t\t<ion-icon class=\"fs-24 txt1\" name=\"ios-arrow-round-forward\"></ion-icon>\n\t\t\t</ion-menu-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>Profile</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<div text-center class=\"top-profile\">\n\t\t<div text-right>\n\t\t\t<ion-button fill=\"clear\" class=\"fs-16\" (click)=\"logout()\">\n\t\t\t\t<ion-icon name=\"md-log-out\"></ion-icon>logout\n\t\t\t</ion-button>\n\t\t</div>\n\t\t<br>\n\t\t<br>\n\t\t<div class=\"thumb-avt flex-row flex-ali-center flex-jus-center\" *ngIf=\"user != null || user\">\n\t\t\t<img src=\"{{(user.avt != '' && user.avt != null)? user.avt : 'assets/imgs/no-avt.png' }}\">\n\t\t</div>\n\t\t<ion-button size=\"small\" (click)=\"pickImage()\" class=\"bdra-30 btn-edit mgt--15 mgl-50 shadow-3\">\n\t\t\t<ion-icon name=\"create\"></ion-icon>\n\t\t</ion-button>\n\t\t<h2 class=\"spacing-1 fs-20 fw-600\" *ngIf=\"user != null || user\">{{user.username}}</h2>\n\t</div>\n\n\t<br>\n\t<br>\n\t\n\t<form padding (ngSubmit)=\"updateAddress()\" [formGroup]=\"addressForm\" *ngIf=\"user || user != null\">\n\t\t<ion-label class=\"pdl-15 txt-b3\">Email</ion-label>\n\t\t<ion-item>\n\t\t\t<ion-input disabled value={{user.email}} type=\"text\"></ion-input>\n\t\t</ion-item>\n\n\t\t<br>\n\n\t\t<ion-label class=\"pdl-15 txt-b3\">Username</ion-label>\n\t\t<ion-item>\n\t\t\t<ion-input formControlName=\"username\" type=\"text\"></ion-input>\n\t\t</ion-item>\n\n\t\t<br>\n\n\t\t<ion-label class=\"pdl-15 txt-b3\">Full name</ion-label>\n\t\t<ion-item>\n\t\t\t<ion-input formControlName=\"fullname\" type=\"text\"></ion-input>\n\t\t</ion-item>\n\n\t\t<br>\n\n\t\t<ion-label class=\"pdl-15 txt-b3\">Address</ion-label>\n\t\t<ion-item>\n\t\t\t<ion-input formControlName=\"address\" type=\"text\"></ion-input>\n\t\t</ion-item>\n\n\t\t<br>\n\n\t\t<ion-label class=\"pdl-15 txt-b3\">Phone</ion-label>\n\t\t<ion-item>\n\t\t\t<ion-input formControlName=\"phone\" type=\"numbber\"></ion-input>\n\t\t</ion-item>\n\n\t\t<br>\n\t\t<br>\n\n\t\t<div class=\"\" text-center>\n\t\t\t<ion-button shape=\"round\" type=\"submit\" class=\"\">\n\t\t\t\tSave change\n\t\t\t</ion-button>\n\t\t</div>\n\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t</form>\n\n\n\t<div class=\"\" text-center>\n\t\t<ion-button fill=\"clear\" [routerLink]=\"'/forgot'\" class=\"\">\n\t\t\tReset Password\n\t\t</ion-button>\n\t</div>\n\n\t<br>\n\t<br>\n\t<br>\n\t<br>\n\t<br>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/Shopping/profile/profile.module.ts":
/*!******************************************************!*\
  !*** ./src/pages/Shopping/profile/profile.module.ts ***!
  \******************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/pages/Shopping/profile/profile.page.ts");








var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/pages/Shopping/profile/profile.page.scss":
/*!******************************************************!*\
  !*** ./src/pages/Shopping/profile/profile.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thumb-avt {\n  z-index: 100;\n  margin: 0px auto;\n  border-radius: 50%;\n  height: 120px;\n  width: 120px;\n  overflow: hidden;\n  position: relative;\n  border: 3px solid var(--ion-color-light);\n}\n.thumb-avt img {\n  height: 100%;\n  min-width: 100%;\n  max-width: auto;\n}\n.btn-edit {\n  position: relative;\n  z-index: 110;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvQ2xpZW50cy9kci9zcmMvcGFnZXMvU2hvcHBpbmcvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9wYWdlcy9TaG9wcGluZy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQ0ZEO0FER0M7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNERjtBREtBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0FDRkQiLCJmaWxlIjoic3JjL3BhZ2VzL1Nob3BwaW5nL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXByb2ZpbGV7XG5cbn1cbi50aHVtYi1hdnR7XG5cdHotaW5kZXg6IDEwMDtcblx0bWFyZ2luOiAwcHggYXV0bztcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRoZWlnaHQ6IDEyMHB4O1xuXHR3aWR0aDogMTIwcHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblx0aW1ne1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiBhdXRvO1xuXHR9XG59XG5cbi5idG4tZWRpdHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxMTA7XG59IiwiLnRodW1iLWF2dCB7XG4gIHotaW5kZXg6IDEwMDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi50aHVtYi1hdnQgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogYXV0bztcbn1cblxuLmJ0bi1lZGl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMTA7XG59Il19 */");

/***/ }),

/***/ "./src/pages/Shopping/profile/profile.page.ts":
/*!****************************************************!*\
  !*** ./src/pages/Shopping/profile/profile.page.ts ***!
  \****************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/users */ "./src/pages/Shopping/providers/users.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");












var ProfilePage = /** @class */ (function () {
    function ProfilePage(menuCtrl, events, alertCtrl, storage, loadingCtrl, usersProv, formBuilder, router, camera, file, filePath, transfer, platform) {
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.usersProv = usersProv;
        this.formBuilder = formBuilder;
        this.router = router;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.transfer = transfer;
        this.platform = platform;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('user').then(function (val) {
                console.log(val);
                _this.user = val;
                _this.addressForm = _this.formBuilder.group({
                    username: [val.username],
                    fullname: [val.fullname],
                    address: [val.address],
                    phone: [val.phone]
                });
            });
        });
    };
    // =============== up avt =======================
    ProfilePage.prototype.pickImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, cameraInfo, blobInfo, uploadInfo, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 80,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        cameraInfo = _a.sent();
                        return [4 /*yield*/, this.makeFileIntoBlob(cameraInfo)];
                    case 3:
                        blobInfo = _a.sent();
                        return [4 /*yield*/, this.uploadToFirebase(blobInfo)];
                    case 4:
                        uploadInfo = _a.sent();
                        alert("File Upload Success " + uploadInfo.fileName);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        alert("File Upload Error " + e_1.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // -------------------
    ProfilePage.prototype.makeFileIntoBlob = function (_imagePath) {
        var _this = this;
        // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
        return new Promise(function (resolve, reject) {
            var fileName = "";
            _this.file
                .resolveLocalFilesystemUrl(_imagePath)
                .then(function (fileEntry) {
                var name = fileEntry.name, nativeURL = fileEntry.nativeURL;
                // get the path..
                var path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
                console.log("path", path);
                console.log("fileName", name);
                fileName = name;
                // we are provided the name, so now read the file into
                // a buffer
                return _this.file.readAsArrayBuffer(path, name);
            })
                .then(function (buffer) {
                // get the buffer and make a blob to be saved
                var imgBlob = new Blob([buffer], {
                    type: "image/jpeg"
                });
                console.log(imgBlob.type, imgBlob.size);
                resolve({
                    fileName: fileName,
                    imgBlob: imgBlob
                });
            })
                .catch(function (e) { return reject(e); });
        });
    };
    // ------------------------
    ProfilePage.prototype.uploadToFirebase = function (_imageBlobInfo) {
        console.log("uploadToFirebase");
        return new Promise(function (resolve, reject) {
            var fileRef = firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref("users/" + _imageBlobInfo.fileName);
            var uploadTask = fileRef.put(_imageBlobInfo.imgBlob);
            uploadTask.on("state_changed", function (_snapshot) {
                console.log("snapshot progess " +
                    (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100);
            }, function (_error) {
                console.log(_error);
                reject(_error);
            }, function () {
                // completion...
                resolve(uploadTask.snapshot);
            });
        });
    };
    // =============== end up avt =======================
    ProfilePage.prototype.updateAddress = function () {
        var _this = this;
        this.usersProv.updateUser(this.user.id, this.addressForm.value).then(function (data) {
            _this.loading.dismiss().then(function () {
                console.log(data);
                _this.user.username = _this.addressForm.value.username;
                _this.user.fullname = _this.addressForm.value.fullname;
                _this.user.address = _this.addressForm.value.address;
                _this.user.phone = _this.addressForm.value.phone;
                _this.storage.set('user', _this.user);
                _this.events.publish('user: change', _this.user);
            });
        }, function (error) {
            _this.loading.dismiss().then(function () {
                _this.presentAlertErr(error);
            });
        });
        this.presentLoading();
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.usersProv.logoutUser().then(function () {
            _this.storage.remove('user');
            _this.user = null;
            _this.router.navigateByUrl('/login');
            _this.menuCtrl.enable(false);
        });
    };
    ProfilePage.prototype.presentLoading = function () {
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
    ProfilePage.prototype.presentAlertErr = function (err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: err.message,
                            buttons: [{
                                    text: "Ok",
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _providers_users__WEBPACK_IMPORTED_MODULE_5__["UsersProvider"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/Shopping/profile/profile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/pages/Shopping/profile/profile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_users__WEBPACK_IMPORTED_MODULE_5__["UsersProvider"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Shopping-profile-profile-module.js.map