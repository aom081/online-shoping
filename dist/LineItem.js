"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        this.price = product.getPrice() * quantity;
    }
    getProduct() {
        return this.product;
    }
    getQuantity() {
        return this.quantity;
    }
    getPrice() {
        return this.price;
    }
}
exports.LineItem = LineItem;
