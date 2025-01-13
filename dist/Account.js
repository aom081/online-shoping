"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, billingAddress, openDate) {
        this.id = id;
        this.billingAddress = billingAddress;
        this.isClosed = false;
        this.openDate = openDate;
        this.closedDate = null;
    }
    getId() {
        return this.id;
    }
    getBillingAddress() {
        return this.billingAddress;
    }
    getIsClosed() {
        return this.isClosed;
    }
    closeAccount() {
        this.isClosed = true;
        this.closedDate = new Date();
    }
    getOpenDate() {
        return this.openDate;
    }
    getClosedDate() {
        return this.closedDate;
    }
}
exports.Account = Account;
