(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-Shopping-myorder-myorder-module~pages-Shopping-offer-offer-module"],{

/***/ "./src123/pages/auth/helpers/constants.ts":
/*!************************************************!*\
  !*** ./src123/pages/auth/helpers/constants.ts ***!
  \************************************************/
/*! exports provided: SocialAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialAuthProvider", function() { return SocialAuthProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SocialAuthProvider;
(function (SocialAuthProvider) {
    SocialAuthProvider[SocialAuthProvider["google"] = 0] = "google";
    SocialAuthProvider[SocialAuthProvider["facebook"] = 1] = "facebook";
})(SocialAuthProvider || (SocialAuthProvider = {}));


/***/ }),

/***/ "./src123/pages/auth/services/auth/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src123/pages/auth/services/auth/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/constants */ "./src123/pages/auth/helpers/constants.ts");












/**
 * firebase authentication methods are handled by this service
 * email handlers https://firebase.google.com/docs/auth/custom-email-handler
 * authentication tutorial https://www.positronx.io/full-angular-7-firebase-authentication-system/
 */
var AuthService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthService, _super);
    function AuthService(injector, afAuth, gplus, facebook, firestoreService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.afAuth = afAuth;
        _this.gplus = gplus;
        _this.facebook = facebook;
        _this.firestoreService = firestoreService;
        /** watch auth state if user is logged in, get user info from users list as observable else return observable null */
        _this.user = _this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
            if (user) {
                return _this.firestoreService.doc$("users/" + user.uid);
            }
            else {
                return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        }));
        return _this;
    }
    /** get user and return as a promise to access easily in components using async and await */
    AuthService.prototype.getUser = function () {
        return this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).toPromise();
    };
    /** sign in user with email and password using firebase library */
    AuthService.prototype.signIn = function (_a) {
        var email = _a.email, password = _a.password;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, password)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /** sign up user to firebase and update user details */
    AuthService.prototype.signUp = function (_a) {
        var displayName = _a.displayName, email = _a.email, password = _a.password;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var credential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                    case 1:
                        credential = _b.sent();
                        return [4 /*yield*/, credential.user.updateProfile({ displayName: displayName, photoURL: null })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.updateUserData(credential.user)];
                }
            });
        });
    };
    /** send email verification to authenticated user */
    AuthService.prototype.sendEmailVerification = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.currentUser.sendEmailVerification()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** use by email verification to apply verification code and set user emailVerified property to true */
    AuthService.prototype.applyActionCode = function (code) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.applyActionCode(code)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** update user email in auth and in users list */
    AuthService.prototype.updateEmail = function (email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUser()];
                    case 1:
                        user = _a.sent();
                        user.email = email;
                        return [4 /*yield*/, this.firestoreService.set("users/" + user.uid, user)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.updateEmail(email)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** update user password */
    AuthService.prototype.updatePassword = function (oldPassword, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, credential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                user = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser;
                credential = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].EmailAuthProvider.credential(firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.email, oldPassword);
                return [2 /*return*/, user.reauthenticateAndRetrieveDataWithCredential(credential).then(function () {
                        return firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.updatePassword(password);
                    })];
            });
        });
    };
    /** send password reset email */
    AuthService.prototype.sendPasswordReset = function (email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.sendPasswordResetEmail(email)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Object.defineProperty(AuthService.prototype, "emailVerified", {
        /** get user emailVerified property */
        get: function () {
            return this.afAuth.auth.currentUser && this.afAuth.auth.currentUser.emailVerified;
        },
        enumerable: true,
        configurable: true
    });
    /** confirm password reset with code from email verification and password */
    AuthService.prototype.confirmPasswordReset = function (code, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.confirmPasswordReset(code, password)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** select type of social login, either facebook or google, use native login with cordova plugins if on device or web login
     * on browser. on complete update user details
     */
    AuthService.prototype.socialogin = function (providerType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var credential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window.cordova) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.nativeLogin(providerType)];
                    case 1:
                        credential = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.webLogin(providerType)];
                    case 3:
                        credential = _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.updateUserData(credential.user)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** sign out of the app and after sign out destroy all subscriptions to avoid missing permissions error */
    AuthService.prototype.signOut = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signOut().then(function () {
                            // this.forceSubscriptionDestroy();
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** update user details in users list */
    AuthService.prototype.updateUserData = function (_a) {
        var uid = _a.uid, email = _a.email, displayName = _a.displayName, photoURL = _a.photoURL;
        var data = {
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
        };
        return this.firestoreService.set("users/" + uid, data);
    };
    /** do a native login with cordova plugins for google or facebook,
     * specify by providerType with is an enum of providers
     * get token from successful native login and use with firebase library to login with token.
     */
    AuthService.prototype.nativeLogin = function (providerType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cred;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(providerType === _helpers_constants__WEBPACK_IMPORTED_MODULE_11__["SocialAuthProvider"].google)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.gplus.login({
                                webClientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].googleClientId,
                                offline: true,
                                scopes: 'profile email'
                            })];
                    case 1:
                        cred = _a.sent();
                        return [2 /*return*/, this.afAuth.auth.signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider.credential(cred.idToken))];
                    case 2: return [4 /*yield*/, this.facebook.login(['public_profile'])];
                    case 3:
                        cred = _a.sent();
                        return [2 /*return*/, this.afAuth.auth.signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider.credential(cred.authResponse.accessToken))];
                }
            });
        });
    };
    /** do web login for third party providers, specify providerType */
    AuthService.prototype.webLogin = function (providerType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var provider;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (providerType === _helpers_constants__WEBPACK_IMPORTED_MODULE_11__["SocialAuthProvider"].google) {
                            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider();
                        }
                        else {
                            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider();
                        }
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__["Facebook"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__["FirestoreService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__["Facebook"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__["FirestoreService"]])
    ], AuthService);
    return AuthService;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_9__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-Shopping-myorder-myorder-module~pages-Shopping-offer-offer-module.js.map