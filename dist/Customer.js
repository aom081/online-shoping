"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, address, phone, email) {
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    getAddress() {
        return this.address;
    }
    getPhone() {
        return this.phone;
    }
    getEmail() {
        return this.email;
    }
}
exports.Customer = Customer;
