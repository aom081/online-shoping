import { Product } from './Product';

export class LineItem {
    private product: Product;
    private quantity: number;
    private price: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
        this.price = product.getPrice() * quantity;
    }

    public getProduct(): Product {
        return this.product;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getPrice(): number {
        return this.price;
    }
}
