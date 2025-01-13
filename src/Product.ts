export class Product {
    private id: string;
    private name: string;
    private price: number;
    private supplier: string;

    constructor(id: string, name: string, price: number, supplier: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.supplier = supplier;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getSupplier(): string {
        return this.supplier;
    }
}