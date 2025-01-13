import { LineItem } from './LineItem';

export enum OrderStatus {
    New = "New",
    Hold = "Hold",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Closed = "Closed"
}

export class Order {
    private number: string;
    private orderedDate: Date;
    private shippedDate: Date | null;
    private shipTo: string;
    private status: OrderStatus;
    private total: number;
    private lineItems: LineItem[];

    constructor(number: string, shipTo: string) {
        this.number = number;
        this.orderedDate = new Date();
        this.shippedDate = null;
        this.shipTo = shipTo;
        this.status = OrderStatus.New;
        this.total = 0;
        this.lineItems = [];
    }

    public addLineItem(lineItem: LineItem): void {
        this.lineItems.push(lineItem);
        this.total += lineItem.getPrice();
    }

    public getLineItems(): LineItem[] {
        return this.lineItems;
    }

    public getTotal(): number {
        return this.total;
    }
}
