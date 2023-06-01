import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

import { UserKeys } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UserFormFactory {
    constructor(private formBuilder: FormBuilder) { }

    create(): FormGroup {
        return this.formBuilder.group({
            [UserKeys.email]: [''],
            [UserKeys.password]: [''],
            [UserKeys.address]: this.formBuilder.group({
                city: [''],
                house_number: [0]
            }),
            [UserKeys.posts]: this.formBuilder.array([])
        });
    }
}