import { LineItem } from './LineItem';
import { Product } from './Product';

export class ShoppingCart {
    private created: Date;
    private lineItems: LineItem[];

    constructor() {
        this.created = new Date();
        this.lineItems = [];
    }

    public addLineItem(product: Product, quantity: number): void {
        const lineItem = new LineItem(product, quantity);
        this.lineItems.push(lineItem);
    }

    public getLineItems(): LineItem[] {
        return this.lineItems;
    }
}
