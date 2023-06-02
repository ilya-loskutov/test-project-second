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