"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = exports.UserState = void 0;
var UserState;
(function (UserState) {
    UserState["New"] = "New";
    UserState["Active"] = "Active";
    UserState["Blocked"] = "Blocked";
    UserState["Banned"] = "Banned";
})(UserState || (exports.UserState = UserState = {}));
class WebUser {
    constructor(loginId, password, state) {
        this.loginId = loginId;
        this.password = password;
        this.state = state;
    }
    getLoginId() {
        return this.loginId;
    }
    getState() {
        return this.state;
    }
}
exports.WebUser = WebUser;
