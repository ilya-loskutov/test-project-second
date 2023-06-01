import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { UserFormFactory } from './services/user-form.factory';
import { UserKeys } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project-second';

  constructor(userFormFactory: UserFormFactory) {
    this.userForm = userFormFactory.create();
  }

  userForm: FormGroup;

  getEmailFormControl(): FormControl {
    return this.userForm.get(UserKeys.email) as FormControl;

  }

  getPasswordFormControl(): FormControl {
    return this.userForm.get(UserKeys.password) as FormControl;
  }

  getCityControl(): FormControl {
    return (this.userForm.get(UserKeys.address) as FormGroup).get('city') as FormControl;
  }

  getHouseNumberControl(): FormControl {
    return (this.userForm.get(UserKeys.address) as FormGroup).get('house_number') as FormControl;
  }

  getPostsControls(): FormArray {
    return this.userForm.get(UserKeys.posts) as FormArray;
  }

  getPostTitleControl(index: number): FormControl {
    const postFormControl = (this.userForm.get(UserKeys.posts) as FormArray).at(index);
    return postFormControl.get('title') as FormControl
  }

  getPostTextControl(index: number): FormControl {
    const postFormControl = (this.userForm.get(UserKeys.posts) as FormArray).at(index);
    return postFormControl.get('text') as FormControl
  }
}
