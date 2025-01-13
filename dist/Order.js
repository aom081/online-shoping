"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["New"] = "New";
    OrderStatus["Hold"] = "Hold";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Closed"] = "Closed";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
class Order {
    constructor(number, shipTo) {
        this.number = number;
        this.orderedDate = new Date();
        this.shippedDate = null;
        this.shipTo = shipTo;
        this.status = OrderStatus.New;
        this.total = 0;
        this.lineItems = [];
    }
    addLineItem(lineItem) {
        this.lineItems.push(lineItem);
        this.total += lineItem.getPrice();
    }
    getLineItems() {
        return this.lineItems;
    }
    getTotal() {
        return this.total;
    }
}
exports.Order = Order;
