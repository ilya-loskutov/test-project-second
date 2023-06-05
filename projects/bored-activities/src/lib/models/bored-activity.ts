export interface BoredActivity {
    activity: string;
    accessibility: number;
    type: string;
    participants: number;
    price: number;
}

export const nullBoredActivity: BoredActivity = {
    activity: "The current activity is not received yet",
    accessibility: 0,
    type: "",
    participants: 0,
    price: 0
}

export class LoadedActivity {
    constructor(activity?: BoredActivity, error?: Error) {
        this.activity = activity ? activity : null;
        this.error = error ? error : null;
    }

    public readonly activity: BoredActivity | null;
    public readonly error: Error | null;

    public get isSuccessful(): boolean {
        return this.activity !== null;
    }

    public get isUnsuccessful(): boolean {
        return this.error !== null;
    }

    public get isPending(): boolean {
        return this.activity === null && this.error === null;
    }
}



