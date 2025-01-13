export class Customer {
    private id: string;
    private address: string;
    private phone: string;
    private email: string;

    constructor(id: string, address: string, phone: string, email: string) {
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    public getId(): string {
        return this.id;
    }

    public getAddress(): string {
        return this.address;
    }

    public getPhone(): string {
        return this.phone;
    }

    public getEmail(): string {
        return this.email;
    }
}
