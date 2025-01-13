export class Payment {
    private id: string;
    private paidDate: Date | null;
    private total: number;
    private details: string;

    constructor(id: string, total: number, details: string) {
        this.id = id;
        this.total = total;
        this.details = details;
        this.paidDate = null;
    }

    public getId(): string {
        return this.id;
    }

    public getTotal(): number {
        return this.total;
    }

    public getDetails(): string {
        return this.details;
    }

    public markAsPaid(): void {
        this.paidDate = new Date();
    }

    public getPaidDate(): Date | null {
        return this.paidDate;
    }
}
