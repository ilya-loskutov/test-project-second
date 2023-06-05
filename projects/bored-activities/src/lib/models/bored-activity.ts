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
        if (activity) {
            this.activity = activity;
        }
        else {
            this.error = error;
        }
    }

    public readonly activity?: BoredActivity;
    public readonly error?: Error;

    public get isSuccessful(): boolean {
        return this.activity !== null;
    }

    public get isPending(): boolean {
        return this.activity === null && this.error === null;
    }
}



