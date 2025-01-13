"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const Product_1 = require("./Product");
const ShoppingCart_1 = require("./ShoppingCart");
const Order_1 = require("./Order");
const WebUser_1 = require("./WebUser");
const Customer_1 = require("./Customer");
const Account_1 = require("./Account");
const Payment_1 = require("./Payment");
// Initialize Products
const products = [
    new Product_1.Product("P1", "Notebook", 50, "Supplier A"),
    new Product_1.Product("P2", "Pen", 10, "Supplier B"),
    new Product_1.Product("P3", "Pencil", 5, "Supplier C"),
    new Product_1.Product("P4", "Eraser", 3, "Supplier D"),
    new Product_1.Product("P5", "Marker", 20, "Supplier E")
];
// Initialize Customers and Accounts
const customer1 = new Customer_1.Customer("C1", "123 Main St", "123-456-7890", "customer1@example.com");
const customer2 = new Customer_1.Customer("C2", "456 Elm St", "987-654-3210", "customer2@example.com");
const account1 = new Account_1.Account("A1", customer1.getAddress(), new Date());
const account2 = new Account_1.Account("A2", customer2.getAddress(), new Date());
// Initialize Web Users (Linked to Customers)
const user1 = new WebUser_1.WebUser("user1", "password1", WebUser_1.UserState.Active);
const user2 = new WebUser_1.WebUser("user2", "password2", WebUser_1.UserState.Active);
// User 1 Shopping and Order
const cart1 = new ShoppingCart_1.ShoppingCart();
cart1.addLineItem(products[0], 2); // 2 Notebooks
cart1.addLineItem(products[1], 5); // 5 Pens
const order1 = new Order_1.Order("O1", customer1.getAddress());
cart1.getLineItems().forEach((item) => order1.addLineItem(item));
// User 2 Shopping and Order
const cart2 = new ShoppingCart_1.ShoppingCart();
cart2.addLineItem(products[2], 10); // 10 Pencils
cart2.addLineItem(products[3], 3); // 3 Erasers
const order2 = new Order_1.Order("O2", customer2.getAddress());
cart2.getLineItems().forEach((item) => order2.addLineItem(item));
// Process Payments
const payment1 = new Payment_1.Payment("P1", order1.getTotal(), "Paid via Credit Card");
payment1.markAsPaid();
const payment2 = new Payment_1.Payment("P2", order2.getTotal(), "Paid via PayPal");
payment2.markAsPaid();
// Display Results
function displayUserOrders(user, customer, account, order, payment) {
    console.log(`User: ${user.getLoginId()} (State: ${user.getState()})`);
    console.log(`Customer ID: ${customer.getId()}`);
    console.log(`Account ID: ${account.getId()} (Billing Address: ${account.getBillingAddress()})`);
    console.log(`Order Number: ${order["number"]}`);
    console.log(`Ordered Date: ${order["orderedDate"]}`);
    console.log(`Ship To: ${order["shipTo"]}`);
    console.log(`Status: ${order["status"]}`);
    console.log(`Total: $${order.getTotal()}`);
    console.log(`Payment ID: ${payment.getId()} (Details: ${payment.getDetails()})`);
    console.log(`Payment Date: ${payment.getPaidDate()}`);
    console.log("Items:");
    order.getLineItems().forEach((item) => {
        console.log(`- ${item.getProduct().getName()} x${item.getQuantity()} @ $${item.getProduct().getPrice()} each = $${item.getPrice()}`);
    });
    console.log("\n");
}
displayUserOrders(user1, customer1, account1, order1, payment1);
displayUserOrders(user2, customer2, account2, order2, payment2);
