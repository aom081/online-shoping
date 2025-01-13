"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const ShoppingCart_1 = require("./ShoppingCart");
const Order_1 = require("./Order");
const WebUser_1 = require("./WebUser");
// Initialize Products
const products = [
    new Product_1.Product("P1", "Notebook", 50, "Supplier A"),
    new Product_1.Product("P2", "Pen", 10, "Supplier B"),
    new Product_1.Product("P3", "Pencil", 5, "Supplier C"),
    new Product_1.Product("P4", "Eraser", 3, "Supplier D"),
    new Product_1.Product("P5", "Marker", 20, "Supplier E")
];
// Initialize Web Users
const user1 = new WebUser_1.WebUser("user1", "password1", WebUser_1.UserState.Active);
const user2 = new WebUser_1.WebUser("user2", "password2", WebUser_1.UserState.Active);
// User 1 Shopping and Order
const cart1 = new ShoppingCart_1.ShoppingCart();
cart1.addLineItem(products[0], 2); // 2 Notebooks
cart1.addLineItem(products[1], 5); // 5 Pens
const order1 = new Order_1.Order("O1", "123 Main St");
cart1.getLineItems().forEach((item) => order1.addLineItem(item));
// User 2 Shopping and Order
const cart2 = new ShoppingCart_1.ShoppingCart();
cart2.addLineItem(products[2], 10); // 10 Pencils
cart2.addLineItem(products[3], 3); // 3 Erasers
const order2 = new Order_1.Order("O2", "456 Elm St");
cart2.getLineItems().forEach((item) => order2.addLineItem(item));
// Display Results
function displayUserOrders(user, order) {
    console.log(`User: ${user.getLoginId()} (State: ${user.getState()})`);
    console.log(`Order Number: ${order["number"]}`);
    console.log(`Ordered Date: ${order["orderedDate"]}`);
    console.log(`Ship To: ${order["shipTo"]}`);
    console.log(`Status: ${order["status"]}`);
    console.log(`Total: $${order.getTotal()}`);
    console.log("Items:");
    order.getLineItems().forEach((item) => {
        console.log(`- ${item.getProduct().getName()} x${item.getQuantity()} @ $${item.getProduct().getPrice()} each = $${item.getPrice()}`);
    });
    console.log("\n");
}
displayUserOrders(user1, order1);
displayUserOrders(user2, order2);
