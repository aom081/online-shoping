export enum UserState {
    New = "New",
    Active = "Active",
    Blocked = "Blocked",
    Banned = "Banned"
}

export class WebUser {
    private loginId: string;
    private password: string;
    private state: UserState;

    constructor(loginId: string, password: string, state: UserState) {
        this.loginId = loginId;
        this.password = password;
        this.state = state;
    }

    public getLoginId(): string {
        return this.loginId;
    }

    public getState(): UserState {
        return this.state;
    }
}
