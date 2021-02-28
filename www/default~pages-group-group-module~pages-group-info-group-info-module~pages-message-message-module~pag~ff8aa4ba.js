(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-group-group-module~pages-group-info-group-info-module~pages-message-message-module~pag~ff8aa4ba"],{

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");







var DataService = /** @class */ (function () {
    function DataService(afAuth, afdb, firestore) {
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.firestore = firestore;
    }
    // Get all users
    DataService.prototype.getUsers = function () {
        // return this.afdb.list('/accounts', ref => ref.orderByChild('name'));
    };
    DataService.prototype.searchUser = function (keyword) {
        // return this.firestore.list('/accounts', (ref: any) => ref.where('name', '>=',keyword).where('name','<=',keyword + "\uf8ff").orderBy('name'));
    };
    // Get user with username
    DataService.prototype.getUserWithUsername = function (username) {
        return this.firestore.col$('users', function (ref) { return ref.orderByChild('username').equalTo(username); });
    };
    // Get logged in user data
    DataService.prototype.getCurrentUser = function () {
        return this.firestore.doc$('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid);
    };
    // Get user by their userId
    DataService.prototype.getUser = function (userId) {
        return this.firestore.doc$('users/' + userId);
    };
    // Get requests given the userId.
    DataService.prototype.getRequests = function (userId) {
        return this.afdb.object('/requests/' + userId);
    };
    // Get friend requests given the userId.
    DataService.prototype.getFriendRequests = function (userId) {
        return this.afdb.list('/requests', function (ref) { return ref.orderByChild('receiver').equalTo(userId); });
    };
    // Get conversation given the conversationId.
    DataService.prototype.getConversation = function (conversationId) {
        return this.firestore.doc$('conversations/' + conversationId);
    };
    // Get conversations of the current logged in user.
    DataService.prototype.getConversations = function () {
        return this.firestore.colWithIds$('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid + '/conversations', function (ref) { return ref.orderBy('createdAt', 'desc'); });
    };
    // Get messages of the conversation given the Id.
    DataService.prototype.getConversationMessages = function (conversationId) {
        return this.firestore.col$('conversations/' + conversationId + '/messages', function (ref) { return ref.orderBy('createdAt'); });
    };
    // Get messages of the group given the Id.
    DataService.prototype.getGroupMessages = function (groupId) {
        return this.firestore.col$('groups/' + groupId + '/messages', function (ref) { return ref.orderBy('createdAt'); });
    };
    // Get groups of the logged in user.
    DataService.prototype.getGroups = function () {
        return this.firestore.col$('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid + '/groups');
    };
    // Get group info given the groupId.
    DataService.prototype.getGroup = function (groupId) {
        return this.firestore.doc$('groups/' + groupId);
    };
    DataService.prototype.getBlockedLists = function () {
        return this.firestore.col$('users/' + firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid + '/conversations', function (ref) { return ref.orderByChild('blocked').equalTo(true); });
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");









var ImageService = /** @class */ (function () {
    function ImageService(angularfire, loadingProvider, camera, mediaCapture, firestore, file) {
        this.angularfire = angularfire;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.mediaCapture = mediaCapture;
        this.firestore = firestore;
        this.file = file;
        this.profilePhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.photoMessageOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            allowEdit: true
        };
        this.groupPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        console.log("Initializing Image Provider");
    }
    // Function to convert dataURI to Blob needed by Firebase
    ImageService.prototype.imgURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    };
    // Generate a random filename of length for the image to be uploaded
    ImageService.prototype.generateFilename = function () {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    };
    // Set ProfilePhoto given the user and the cameraSourceType.
    // This function processes the imageURI returned and uploads the file on Firebase,
    // Finally the user data on the database is updated.
    ImageService.prototype.setProfilePhoto = function (user, sourceType) {
        var _this = this;
        console.log(user);
        this.profilePhotoOptions.sourceType = sourceType;
        this.loadingProvider.presentProcessingLoading();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.profilePhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            var name = _this.generateFilename();
            var dpStorageRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child('images/' + user.userId + '/' + name);
            // Generate filename and upload to Firebase Storage.
            dpStorageRef.put(imgBlob, metadata).then(function (snapshot) {
                // Delete previous profile photo on Storage if it exists.
                // this.deleteImageFile(user.img);
                // URL of the uploaded image!
                console.log(snapshot);
                dpStorageRef.getDownloadURL().then(function (res) {
                    console.log(res);
                    var url = res;
                    var profile = {
                        displayName: user.name,
                        photoURL: url
                    };
                    // Update Firebase User.
                    firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.updateProfile(profile)
                        .then(function (success) {
                        // Update User Data on Database.
                        _this.angularfire.object('/accounts/' + user.userId).update({
                            img: url
                        }).then(function (success) {
                            _this.loadingProvider.dismissLoader();
                            _this.loadingProvider.showToast("Profile Updated");
                        }).catch(function (error) {
                            console.log(error);
                            _this.loadingProvider.dismissLoader();
                            _this.loadingProvider.showToast("Something went wrong");
                        });
                    })
                        .catch(function (error) {
                        console.log(error);
                        _this.loadingProvider.dismissLoader();
                        _this.loadingProvider.showToast("Something went wrong");
                    });
                });
            }).catch(function (error) {
                console.log(error);
                _this.loadingProvider.dismissLoader();
                _this.loadingProvider.showToast("Something went wrong");
            });
        }).catch(function (error) {
            _this.loadingProvider.dismissLoader();
        });
    };
    // Upload and set the group object's image.
    ImageService.prototype.setGroupPhoto = function (group, sourceType) {
        var _this = this;
        this.groupPhotoOptions.sourceType = sourceType;
        // this.loadingProvider.presentProcessingLoading();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.groupPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            var name = _this.generateFilename();
            var groupStorageRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child('images/' + firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid + '/' + name);
            groupStorageRef.put(imgBlob, metadata).then(function (snapshot) {
                // this.deleteImageFile(group.img);
                // URL of the uploaded image!
                groupStorageRef.getDownloadURL().then(function (url) {
                    group.img = url;
                    console.log('group', group);
                    _this.loadingProvider.dismissLoader();
                });
            }).catch(function (error) {
                _this.loadingProvider.dismissLoader();
                _this.loadingProvider.showToast("Something went wrong");
            });
        }).catch(function (error) {
            _this.loadingProvider.dismissLoader();
        });
    };
    // Set group photo and return the group object as promise.
    ImageService.prototype.setGroupPhotoPromise = function (group, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.groupPhotoOptions.sourceType = sourceType;
            _this.loadingProvider.presentProcessingLoading();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.groupPhotoOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                var uploadRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child('images/' + firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid + '/' + _this.generateFilename());
                uploadRef.put(imgBlob, metadata).on('state_changed', function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    _this.loadingProvider.showProgress(Math.round(progress) + " %");
                }, function () {
                    _this.loadingProvider.dismissLoader();
                    console.log("Failed");
                    _this.loadingProvider.showToast("Failed Uploading, please try again");
                }, function () {
                    _this.loadingProvider.dismissLoader();
                    _this.loadingProvider.showToast("Uploaded successfully");
                    uploadRef.getDownloadURL().then(function (url) {
                        resolve(url);
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.dismissLoader();
            });
        });
    };
    //Delete the image given the url.
    ImageService.prototype.deleteImageFile = function (path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child('images/' + firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid + '/' + fileName).delete().then(function () { }).catch(function (error) { console.log(error); });
    };
    //Delete the user.img given the user.
    ImageService.prototype.deleteUserImageFile = function (user) {
        var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child('images/' + user.userId + '/' + fileName).delete().then(function () { }).catch(function (error) { console.log(error); });
    };
    // Delete group image file on group storage reference.
    ImageService.prototype.deleteGroupImageFile = function (groupId, path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child('images/' + groupId + '/' + fileName).delete().then(function () { }).catch(function (error) { console.log(error); });
    };
    // Upload photo message and return the url as promise.
    ImageService.prototype.uploadPhotoMessage = function (conversationId, sourceType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.photoMessageOptions.sourceType = sourceType;
            _this.loadingProvider.presentProcessingLoading();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                var uploadRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child('images/' + conversationId + '/' + _this.generateFilename());
                // uploadRef.put(imgBlob, metadata).on('state_changed', (snapshot) => {
                //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //   this.loadingProvider.showProgress(Math.round(progress) + " %");
                // }, () => {
                //   this.loadingProvider.dismissLoader();
                //   console.log("Failed");
                //   this.loadingProvider.showToast("Failed Uploading, please try again")
                // }, () => {
                //   this.loadingProvider.dismissLoader();
                //   this.loadingProvider.showToast("Uploaded successfully")
                //   uploadRef.getDownloadURL().then(url => {
                //     resolve(url);
                //   })
                // });
                _this.firestore.uploadImage(imageData, new Date().getTime().toString() + '.png', 'chat-images').then(function (resp) {
                    _this.loadingProvider.dismissLoader();
                    resolve(resp);
                });
            }).catch(function (error) {
                _this.loadingProvider.dismissLoader();
                reject(error);
            });
        });
    };
    // Upload group photo message and return a promise as url.
    ImageService.prototype.uploadGroupPhotoMessage = function (groupId, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.photoMessageOptions.sourceType = sourceType;
            _this.loadingProvider.presentProcessingLoading();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                var uploadRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child('images/' + groupId + '/' + _this.generateFilename());
                uploadRef.put(imgBlob, metadata).on('state_changed', function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    _this.loadingProvider.showProgress(Math.round(progress) + " %");
                }, function () {
                    _this.loadingProvider.dismissLoader();
                    console.log("Failed");
                    _this.loadingProvider.showToast("Failed Uploading, please try again");
                }, function () {
                    _this.loadingProvider.dismissLoader();
                    _this.loadingProvider.showToast("Uploaded successfully");
                    uploadRef.getDownloadURL().then(function (url) {
                        resolve(url);
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.dismissLoader();
            });
        });
    };
    ImageService.prototype.uploadGroupVideoMessage = function (groupId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mediaCapture.captureVideo().then(function (data) {
                var videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                var x = videoUrl.split("/");
                var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                var name = x[x.length - 1];
                console.log(filepath + " - " + name);
                _this.file.readAsArrayBuffer(filepath, name).then(function (success) {
                    console.log(success);
                    var blob = new Blob([success], { type: "video/mp4" });
                    console.log(blob);
                    resolve(blob);
                    // let uploadRef = firebase.storage().ref().child('videos/' + groupId + "/" + name);
                    // uploadRef.put(blob).on('state_changed', (snapshot) => {
                    //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    //   this.loadingProvider.showProgress(Math.round(progress) + " %");
                    // }, () => {
                    //   this.loadingProvider.dismissLoader();
                    //   console.log("Failed");
                    //   this.loadingProvider.showToast("Failed Uploading, please try again")
                    // }, () => {
                    //   this.loadingProvider.dismissLoader();
                    //   this.loadingProvider.showToast("Uploaded successfully")
                    //   uploadRef.getDownloadURL().then(url => {
                    //     resolve(url);
                    //   })
                    // });
                });
            }, function (err) {
                _this.loadingProvider.dismissLoader();
                console.log("Media Err = " + err);
                reject(null);
            });
        });
    };
    ImageService.prototype.uploadVideoMessage = function (conversationId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loadingProvider.presentProcessingLoading();
            _this.mediaCapture.captureVideo().then(function (data) {
                var videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                var x = videoUrl.split("/");
                var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                var name = x[x.length - 1];
                console.log(filepath + " - " + name);
                _this.file.readAsArrayBuffer(filepath, name).then(function (success) {
                    console.log(success);
                    var blob = new Blob([success], { type: "video/mp4" });
                    console.log(blob);
                    // let timestamp = (Math.floor(Date.now() / 1000)).toString();
                    var uploadRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child('videos/' + name);
                    uploadRef.put(blob).on('state_changed', function (snapshot) {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        _this.loadingProvider.showProgress(Math.round(progress) + " %");
                    }, function () {
                        _this.loadingProvider.dismissLoader();
                        console.log("Failed");
                        _this.loadingProvider.showToast("Failed Uploading, please try again");
                    }, function () {
                        _this.loadingProvider.dismissLoader();
                        _this.loadingProvider.showToast("Uploaded successfully");
                        uploadRef.getDownloadURL().then(function (url) {
                            resolve(url);
                        });
                    });
                });
            }, function (err) {
                _this.loadingProvider.dismissLoader();
                console.log("Media Err = " + err);
            });
        });
    };
    ImageService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__["MediaCapture"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] }
    ]; };
    ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__["MediaCapture"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]])
    ], ImageService);
    return ImageService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-group-group-module~pages-group-info-group-info-module~pages-message-message-module~pag~ff8aa4ba.js.map