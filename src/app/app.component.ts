import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { UserKeys } from './models/user';
import { UserForm } from './models/user-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project-second';

  UserKeys = UserKeys;

  userForm: FormGroup = UserForm.createForm();

  get posts(): FormArray {
    return UserForm.getPostsFormArray(this.userForm);
  }
}
