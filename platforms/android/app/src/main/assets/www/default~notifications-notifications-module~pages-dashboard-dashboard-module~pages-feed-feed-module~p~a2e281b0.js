(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~notifications-notifications-module~pages-dashboard-dashboard-module~pages-feed-feed-module~p~a2e281b0"],{

/***/ "./src/app/notifications/service/notification.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/notifications/service/notification.service.ts ***!
  \***************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");






var NotificationService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotificationService, _super);
    function NotificationService(firestoreService, injector, afs, authService) {
        var _this = _super.call(this, injector) || this;
        _this.firestoreService = firestoreService;
        _this.injector = injector;
        _this.afs = afs;
        _this.authService = authService;
        _this.isFound = true;
        _this.unreadCounter = 0;
        return _this;
    }
    NotificationService.prototype.getNotifications = function (uid) {
        var _this = this;
        if (!uid) {
            return;
        }
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.firestoreService.colWithIds$("notifications", function (ref) { return ref.where('to', 'array-contains-any', [uid]).orderBy("timestamp", "desc").limit(10); }).subscribe(function (resp) {
                    _this.notifications = [];
                    _this.unreadCounter = 0;
                    console.log(resp);
                    resp.forEach(function (notification) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            if (notification.type === 1) {
                                notification.seenBy = !notification.seenBy
                                    ? []
                                    : notification.seenBy;
                            }
                            notification.deletedBy = !notification.deletedBy
                                ? []
                                : notification.deletedBy;
                            notification.postPhoto = !notification.postPhoto
                                ? null
                                : notification.postPhoto;
                            this.notifications.push(notification);
                            resolve(this.notifications);
                            return [2 /*return*/];
                        });
                    }); });
                    if (resp.length === 0) {
                        resolve([]);
                    }
                }, function (err) {
                    console.log('err', err);
                    reject(err);
                });
                return [2 /*return*/];
            });
        }); });
    };
    NotificationService.prototype.loadNotificationsPromise = function (uid) {
        var _this = this;
        if (!uid) {
            return;
        }
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.firestoreService.colWithIds$("notifications", function (ref) { return ref.where('to', 'array-contains-any', [uid]); }).subscribe(function (resp) {
                    _this.notifications = [];
                    _this.unreadCounter = 0;
                    console.log(resp);
                    resp.forEach(function (notification) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            if (notification.type === 1) {
                                notification.seenBy = !notification.seenBy
                                    ? []
                                    : notification.seenBy;
                            }
                            notification.deletedBy = !notification.deletedBy
                                ? []
                                : notification.deletedBy;
                            notification.postPhoto = !notification.postPhoto
                                ? null
                                : notification.postPhoto;
                            this.notifications.push(notification);
                            resolve(this.notifications);
                            return [2 /*return*/];
                        });
                    }); });
                    if (resp.length === 0) {
                        resolve([]);
                    }
                }, function (err) {
                    console.log('err', err);
                    reject(err);
                });
                return [2 /*return*/];
            });
        }); });
    };
    NotificationService.prototype.getUnreadCount = function (notifications, uid) {
        var _this = this;
        this.unreadCounter = 0;
        notifications.forEach(function (item) {
            if (!item.deletedBy.includes(uid)) {
                if (item.type === 1 || (item.to.indexOf(uid) > -1 && item.by !== uid)) {
                    if ((item.type === 1 && item.seenBy.indexOf(uid) === -1) ||
                        (item.type !== 1 && (item.seen === 0 || item.seen === 2))) {
                        _this.unreadCounter = _this.unreadCounter + 1;
                    }
                }
            }
        });
        return this.unreadCounter;
    };
    NotificationService.prototype.getUpdateSpecificDoc = function (id) {
        return this.firestoreService.getSpecificDoc("feed/" + id);
    };
    NotificationService.prototype.deleteAll = function (notifications, currentUser) {
        var _this = this;
        var notificationsFound = [];
        if (notifications.length === 0) {
            return;
        }
        return new Promise(function (resolve, reject) {
            _this.loadingService.presentProcessingLoadingMsg("Fetching Notifications....");
            _this.loadNotificationsPromise(currentUser.uid).then(function (resp) {
                console.log('fetched notifications', resp);
                notificationsFound = resp;
                notifications = resp;
                _this.loadingService.dismissLoader();
                _this.loadingService.presentProcessingLoadingMsg("Deleting " + (notifications.length - 1) + " notifications");
                notificationsFound.forEach(function (item, index) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var arr, toArr, toArr;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (!item.deletedBy || !item.deletedBy.includes(currentUser.uid)) {
                            if (item.deletedBy) {
                                item.deletedBy.push(currentUser.uid);
                            }
                            else {
                                arr = [];
                                arr.push(currentUser.uid);
                                item.deletedBy = arr;
                            }
                            if (item.type !== 1) {
                                console.log("!=1");
                                this.firestoreService.delete("notifications/" + item.id).then(function () {
                                    console.log('deleted != 1', index, (notifications.length - 1), (notificationsFound.length - 1));
                                    if (index === (notifications.length - 1)) {
                                        _this.loadingService.dismissLoader();
                                        _this.isFound = false;
                                        console.log("completed delete");
                                        resolve(true);
                                    }
                                }, function (err) { return _this.loadingService.dismissLoader(); });
                            }
                            else {
                                console.log("==1");
                                toArr = item.to;
                                if (toArr.indexOf(currentUser.uid) > -1) {
                                    toArr.splice(toArr.indexOf(currentUser.uid), 1);
                                }
                                this.firestoreService
                                    .update("notifications/" + item.id, { to: toArr })
                                    .then(function () {
                                    if (index === (notifications.length - 1)) {
                                        _this.loadingService.dismissLoader();
                                        _this.isFound = false;
                                        resolve(true);
                                    }
                                }, function (err) {
                                    _this.loadingService.dismissLoader();
                                    _this.toast("Error Occurred while deleting");
                                    reject(false);
                                });
                            }
                        }
                        else {
                            console.log('not deletedBy found');
                            toArr = item.to;
                            if (toArr.indexOf(currentUser.uid) > -1) {
                                toArr.splice(toArr.indexOf(currentUser.uid), 1);
                            }
                            this.firestoreService
                                .update("notifications/" + item.id, { to: toArr })
                                .then(function () {
                                if (index === (notifications.length - 1)) {
                                    _this.loadingService.dismissLoader();
                                    _this.isFound = false;
                                    resolve(true);
                                }
                            }, function (err) {
                                _this.loadingService.dismissLoader();
                                _this.toast("Error Occurred while deleting");
                                reject(false);
                            });
                        }
                        return [2 /*return*/];
                    });
                }); });
            });
        });
    };
    NotificationService.ctorParameters = function () { return [
        { type: _shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], NotificationService);
    return NotificationService;
}(_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=default~notifications-notifications-module~pages-dashboard-dashboard-module~pages-feed-feed-module~p~a2e281b0.js.map