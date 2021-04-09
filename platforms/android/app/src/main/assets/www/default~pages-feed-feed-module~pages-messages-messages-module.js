(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-feed-feed-module~pages-messages-messages-module"],{

/***/ "./src/app/services/messages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");





var MessagesService = /** @class */ (function () {
    function MessagesService(firestore, authService, dataProvider) {
        this.firestore = firestore;
        this.authService = authService;
        this.dataProvider = dataProvider;
        this.unreadMessagesCount = 0;
        this.unreadGroupMessagesCount = 0;
        this.conversationsInfo = [];
        this.groupsInfo = [];
    }
    MessagesService.prototype.initGroups = function () {
        var _this = this;
        this.isLoading = true;
        this.dataProvider.getGroups().subscribe(function (groupIdsRes) {
            var groupIds = [];
            groupIds = groupIdsRes;
            if (groupIds.length > 0) {
                _this.groupsInfo = groupIds;
                if (_this.groups && _this.groups.length > groupIds.length) {
                    // User left/deleted a group, clear the list and add or update each group again.
                    _this.groups = [];
                }
                groupIds.forEach(function (groupId) {
                    _this.dataProvider.getGroup(groupId.id).subscribe(function (groupRes) {
                        var group = groupRes;
                        if (group.id != null) {
                            _this.firestore.col$("groups/" + groupId.id + "/messages", function (ref) { return ref.orderBy('createdAt').startAt(groupId.createdAt); }).subscribe(function (resp) {
                                group.messages = resp;
                                group.unreadMessagesCount = group.messages ? group.messages.length - groupId.messagesRead : 0;
                                // Get group's last active date
                                if (resp.length > 0) {
                                    group.date = resp[resp.length - 1].date;
                                }
                                _this.addOrUpdateGroup(group);
                            });
                        }
                    });
                });
                _this.isLoading = false;
            }
            else {
                _this.groups = [];
                _this.isLoading = false;
                _this.groupsInfo = null;
            }
        });
        // Update groups' last active date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.groups) {
                    that.groups.forEach(function (group) {
                        var date = group.date;
                        group.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    MessagesService.prototype.initConversation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentUser, that;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.conversations = [];
                        this.isLoading = true;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        currentUser = _a.sent();
                        if (currentUser != null) {
                            // Get info of conversations of current logged in user.
                            this.dataProvider.getConversations().subscribe(function (conversationsInfoRes) {
                                var conversations = [];
                                conversations = conversationsInfoRes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.id }, c)); });
                                _this.conversationsInfo = [];
                                if (conversations.length > 0) {
                                    _this.conversationsInfo = conversations;
                                    conversations.forEach(function (conversation) {
                                        if (conversation) {
                                            console.log('LOOP TOP');
                                            // Get conversation partner info.
                                            _this.dataProvider.getUser(conversation.key).subscribe(function (user) {
                                                conversation.friend = user;
                                                // Get conversation info.
                                                _this.firestore.colWithIds$('conversations/' + conversation.conversationId + '/messages', function (ref) { return ref.orderBy('createdAt', 'desc'); }).subscribe(function (resp) {
                                                    // resp = resp.reverse();
                                                    console.log('COL WITH IDs');
                                                    var lastMessage = resp[0];
                                                    if (!lastMessage) {
                                                        return;
                                                    }
                                                    conversation.date = lastMessage.date;
                                                    conversation.sender = lastMessage.sender;
                                                    // Set unreadMessagesCount
                                                    conversation.unreadMessagesCount = resp.length - conversation.messagesRead;
                                                    // Process last message depending on messageType.
                                                    if (lastMessage.type == 'text') {
                                                        if (lastMessage.sender == currentUser.uid) {
                                                            conversation.message = 'You: ' + lastMessage.message;
                                                        }
                                                        else {
                                                            conversation.message = lastMessage.message;
                                                        }
                                                    }
                                                    else {
                                                        if (lastMessage.sender == currentUser.uid) {
                                                            conversation.message = 'You sent a photo message.';
                                                        }
                                                        else {
                                                            conversation.message = 'has sent you a photo message.';
                                                        }
                                                    }
                                                    // Add or update conversation.
                                                    _this.addOrUpdateConversation(conversation);
                                                });
                                                // this.dataProvider.getConversation(conversation.conversationId).subscribe((obj: any) => {
                                                //   // Get last message of conversation.
                                                //   if (obj != null) {
                                                //   }
                                                // });
                                            });
                                        }
                                    });
                                    _this.isLoading = false;
                                }
                                else {
                                    _this.conversations = [];
                                    _this.isLoading = false;
                                }
                            });
                            that = this;
                            if (!that.updateDateTime) {
                                that.updateDateTime = setInterval(function () {
                                    if (that.conversations) {
                                        that.conversations.forEach(function (conversation) {
                                            var date = conversation.date;
                                            conversation.date = new Date(date);
                                        });
                                    }
                                }, 60000);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagesService.prototype.addOrUpdateConversation = function (conversation) {
        if (!this.conversations) {
            this.conversations = [conversation];
        }
        else {
            var index = -1;
            index = this.conversations.findIndex(function (item) { return item.conversationId === conversation.conversationId; });
            // for (var i = 0; i < this.conversations.length; i++) {
            //   if (this.conversations[i].sender == conversation.sender) {
            //     index = i;
            //   }
            // }
            if (index > -1) {
                this.conversations[index] = conversation;
            }
            else {
                this.conversations.push(conversation);
            }
            // Sort by last active date.
            this.conversations.sort(function (a, b) {
                var date1 = new Date(a.date);
                var date2 = new Date(b.date);
                if (date1 > date2) {
                    return -1;
                }
                else if (date1 < date2) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        this.computeUnreadMessagesCount();
    };
    // Add or update group for real-time sync based on our observer.
    MessagesService.prototype.addOrUpdateGroup = function (group) {
        if (!this.groups) {
            this.groups = [group];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.groups.length; i++) {
                if (this.groups[i].id == group.id) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groups[index] = group;
            }
            else {
                this.groups.push(group);
            }
        }
        this.computeUnreadGroupMessagesCount();
    };
    // Compute all conversation's unreadMessages.
    MessagesService.prototype.computeUnreadMessagesCount = function () {
        var _this = this;
        this.unreadMessagesCount = 0;
        if (this.conversations) {
            this.conversations.forEach(function (group) {
                _this.unreadMessagesCount = _this.unreadMessagesCount + group.unreadMessagesCount;
            });
        }
    };
    MessagesService.prototype.getUnreadMessagesCount = function () {
        return (this.unreadMessagesCount != null && this.unreadMessagesCount > 0) ? this.unreadMessagesCount : 0;
    };
    // Compute all group's unreadMessages.
    MessagesService.prototype.computeUnreadGroupMessagesCount = function () {
        var _this = this;
        this.unreadGroupMessagesCount = 0;
        if (this.groups) {
            this.groups.forEach(function (group) {
                if (group.name) {
                    _this.unreadGroupMessagesCount = _this.unreadGroupMessagesCount + group.unreadMessagesCount;
                }
            });
        }
    };
    MessagesService.prototype.getUnreadGroupMessagesCount = function () {
        return (this.unreadGroupMessagesCount != null && this.unreadGroupMessagesCount > 0) ? this.unreadGroupMessagesCount : 0;
    };
    MessagesService.ctorParameters = function () { return [
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
    ]; };
    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], MessagesService);
    return MessagesService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-feed-feed-module~pages-messages-messages-module.js.map