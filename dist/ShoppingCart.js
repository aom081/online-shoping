"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
const LineItem_1 = require("./LineItem");
class ShoppingCart {
    constructor() {
        this.created = new Date();
        this.lineItems = [];
    }
    addLineItem(product, quantity) {
        const lineItem = new LineItem_1.LineItem(product, quantity);
        this.lineItems.push(lineItem);
    }
    getLineItems() {
        return this.lineItems;
    }
}
exports.ShoppingCart = ShoppingCart;
