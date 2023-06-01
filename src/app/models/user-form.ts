import { AbstractControl, FormControl, FormGroup, FormArray } from "@angular/forms";

import { UserKeys, User, Post, Address } from "./user";

export class UserForm {
    public static readonly formFields: typeof UserKeys = UserKeys;

    public static createForm(): FormGroup {
        return new FormGroup({
            [UserKeys.email]: new FormControl(['']),
            [UserKeys.password]: new FormControl(['']),
            [UserKeys.address]: new FormGroup({
                city: new FormControl(['']),
                house_number: new FormControl([0])
            }),
            [UserKeys.posts]: new FormArray([
                new FormGroup(
                    {
                        [UserKeys.postTitle]: new FormControl('post title'),
                        [UserKeys.postText]: new FormControl('post text')
                    }
                )
            ])
        })
    }

    private static getFormField<InputType extends AbstractControl, OutputType extends AbstractControl, K extends keyof T, T>(
        group: InputType,
        key: K,
    ): OutputType {
        return group.get(key as string) as OutputType;
    }

    public static getEmailControl(formGroup: FormGroup): FormControl {
        return this.getFormField<
            FormGroup,
            FormControl,
            UserKeys.email,
            User
        >(formGroup, this.formFields.email);
    }

    public static getPasswordControl(formGroup: FormGroup): FormControl {
        return this.getFormField<
            FormGroup,
            FormControl,
            UserKeys.password,
            User
        >(formGroup, this.formFields.password);
    }

    public static getCityControl(formGroup: FormGroup): FormControl {
        const addressGroup = this.getFormField<
            FormGroup,
            FormGroup,
            UserKeys.address,
            User
        >(formGroup, this.formFields.address);
        return this.getFormField<
            FormGroup,
            FormControl,
            UserKeys.addressCity,
            Address
        >(addressGroup, this.formFields.addressCity);
    }

    public static getHouseNumberControl(formGroup: FormGroup): FormControl {
        const addressGroup = this.getFormField<
            FormGroup,
            FormGroup,
            UserKeys.address,
            User
        >(formGroup, this.formFields.address);
        return this.getFormField<
            FormGroup,
            FormControl,
            UserKeys.addressHouseNumber,
            Address
        >(addressGroup, this.formFields.addressHouseNumber);
    }

    public static getPostsFormArray(formGroup: FormGroup): FormArray {
        return this.getFormField<
            FormGroup,
            FormArray,
            UserKeys.posts,
            User
        >(formGroup, this.formFields.posts);
    }

    public static getPostTitleControl(formGroup: FormGroup, index: number): FormControl {
        const addressGroup = this.getPostsFormArray(formGroup);
        const currentPostControl = addressGroup.at(index) as FormGroup;
        return this.getFormField<
            FormGroup,
            FormControl,
            UserKeys.postTitle,
            Post
        >(currentPostControl, this.formFields.postTitle);
    }

    public static getPostTextControl(formGroup: FormGroup, index: number): FormControl {
        const addressGroup = this.getPostsFormArray(formGroup);
        const currentPostControl = addressGroup.at(index) as FormGroup;
        return this.getFormField<
            FormGroup,
            FormControl,
            UserKeys.postText,
            Post
        >(currentPostControl, this.formFields.postText);
    }
}