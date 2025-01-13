export class Account {
    private id: string;
    private billingAddress: string;
    private isClosed: boolean;
    private openDate: Date;
    private closedDate: Date | null;

    constructor(id: string, billingAddress: string, openDate: Date) {
        this.id = id;
        this.billingAddress = billingAddress;
        this.isClosed = false;
        this.openDate = openDate;
        this.closedDate = null;
    }

    public getId(): string {
        return this.id;
    }

    public getBillingAddress(): string {
        return this.billingAddress;
    }

    public getIsClosed(): boolean {
        return this.isClosed;
    }

    public closeAccount(): void {
        this.isClosed = true;
        this.closedDate = new Date();
    }

    public getOpenDate(): Date {
        return this.openDate;
    }

    public getClosedDate(): Date | null {
        return this.closedDate;
    }
}
