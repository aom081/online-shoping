// index.ts
import { Product } from './Product';
import { LineItem } from './LineItem';
import { ShoppingCart } from './ShoppingCart';
import { Order, OrderStatus } from './Order';
import { WebUser, UserState } from './WebUser';
import { Customer } from './Customer';
import { Account } from './Account';
import { Payment } from './Payment';

// Initialize Products
const products = [
    new Product("P1", "Notebook", 50, "Supplier A"),
    new Product("P2", "Pen", 10, "Supplier B"),
    new Product("P3", "Pencil", 5, "Supplier C"),
    new Product("P4", "Eraser", 3, "Supplier D"),
    new Product("P5", "Marker", 20, "Supplier E")
];

// Initialize Customers and Accounts
const customer1 = new Customer("C1", "123 Main St", "123-456-7890", "customer1@example.com");
const customer2 = new Customer("C2", "456 Elm St", "987-654-3210", "customer2@example.com");

const account1 = new Account("A1", customer1.getAddress(), new Date());
const account2 = new Account("A2", customer2.getAddress(), new Date());

// Initialize Web Users (Linked to Customers)
const user1 = new WebUser("user1", "password1", UserState.Active);
const user2 = new WebUser("user2", "password2", UserState.Active);

// User 1 Shopping and Order
const cart1 = new ShoppingCart();
cart1.addLineItem(products[0], 2); // 2 Notebooks
cart1.addLineItem(products[1], 5); // 5 Pens

const order1 = new Order("O1", customer1.getAddress());
cart1.getLineItems().forEach((item: LineItem) => order1.addLineItem(item));

// User 2 Shopping and Order
const cart2 = new ShoppingCart();
cart2.addLineItem(products[2], 10); // 10 Pencils
cart2.addLineItem(products[3], 3); // 3 Erasers

const order2 = new Order("O2", customer2.getAddress());
cart2.getLineItems().forEach((item: LineItem) => order2.addLineItem(item));

// Process Payments
const payment1 = new Payment("P1", order1.getTotal(), "Paid via Credit Card");
payment1.markAsPaid();

const payment2 = new Payment("P2", order2.getTotal(), "Paid via PayPal");
payment2.markAsPaid();

// Display Results
function displayUserOrders(user: WebUser, customer: Customer, account: Account, order: Order, payment: Payment) {
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
    order.getLineItems().forEach((item: LineItem) => {
        console.log(`- ${item.getProduct().getName()} x${item.getQuantity()} @ $${item.getProduct().getPrice()} each = $${item.getPrice()}`);
    });
    console.log("\n");
}

displayUserOrders(user1, customer1, account1, order1, payment1);
displayUserOrders(user2, customer2, account2, order2, payment2);
