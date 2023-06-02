import { FormGroup, FormControl } from "@angular/forms";

export enum BoredActivityFormKeys {
    participants = 'participants',
    price = 'price'
}

export interface BoredActivityFormModel {
    [BoredActivityFormKeys.participants]: string,
    [BoredActivityFormKeys.price]: number
}

export class BoredActivityModel {
    constructor() {
        this.createForm();
    }

    private createForm(): void {
        this.form = new FormGroup({
            [BoredActivityFormKeys.participants]: new FormControl(['']),
            [BoredActivityFormKeys.price]: new FormControl([0])
        });
    }

    public form!: FormGroup;
}