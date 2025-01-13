"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, total, details) {
        this.id = id;
        this.total = total;
        this.details = details;
        this.paidDate = null;
    }
    getId() {
        return this.id;
    }
    getTotal() {
        return this.total;
    }
    getDetails() {
        return this.details;
    }
    markAsPaid() {
        this.paidDate = new Date();
    }
    getPaidDate() {
        return this.paidDate;
    }
}
exports.Payment = Payment;
