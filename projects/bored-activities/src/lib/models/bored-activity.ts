export interface BoredActivity {
    activity: string;
    type: string,
    participants: number;
    price: number;
    accessibility: number;
}

export const nullBoredActivity: BoredActivity = {
    activity: 'The current activity is not received yet. Please make a request',
    type: '',
    participants: 0,
    price: 0,
    accessibility: 0
}