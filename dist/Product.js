"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, supplier) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.supplier = supplier;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getSupplier() {
        return this.supplier;
    }
}
exports.Product = Product;
