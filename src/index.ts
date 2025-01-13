import { Product } from './Product';
import { LineItem } from './LineItem';
import { ShoppingCart } from './ShoppingCart';
import { Order, OrderStatus } from './Order';
import { WebUser, UserState } from './WebUser';

// Initialize Products
const products = [
    new Product("P1", "Notebook", 50, "Supplier A"),
    new Product("P2", "Pen", 10, "Supplier B"),
    new Product("P3", "Pencil", 5, "Supplier C"),
    new Product("P4", "Eraser", 3, "Supplier D"),
    new Product("P5", "Marker", 20, "Supplier E")
];

// Initialize Web Users
const user1 = new WebUser("user1", "password1", UserState.Active);
const user2 = new WebUser("user2", "password2", UserState.Active);

// User 1 Shopping and Order
const cart1 = new ShoppingCart();
cart1.addLineItem(products[0], 2); // 2 Notebooks
cart1.addLineItem(products[1], 5); // 5 Pens

const order1 = new Order("O1", "123 Main St");
cart1.getLineItems().forEach((item: LineItem) => order1.addLineItem(item));

// User 2 Shopping and Order
const cart2 = new ShoppingCart();
cart2.addLineItem(products[2], 10); // 10 Pencils
cart2.addLineItem(products[3], 3); // 3 Erasers

const order2 = new Order("O2", "456 Elm St");
cart2.getLineItems().forEach((item: LineItem) => order2.addLineItem(item));

// Display Results
function displayUserOrders(user: WebUser, order: Order) {
    console.log(`User: ${user.getLoginId()} (State: ${user.getState()})`);
    console.log(`Order Number: ${order["number"]}`);
    console.log(`Ordered Date: ${order["orderedDate"]}`);
    console.log(`Ship To: ${order["shipTo"]}`);
    console.log(`Status: ${order["status"]}`);
    console.log(`Total: $${order.getTotal()}`);
    console.log("Items:");
    order.getLineItems().forEach((item: LineItem) => {
        console.log(`- ${item.getProduct().getName()} x${item.getQuantity()} @ $${item.getProduct().getPrice()} each = $${item.getPrice()}`);
    });
    console.log("\n");
}

displayUserOrders(user1, order1);
displayUserOrders(user2, order2);
