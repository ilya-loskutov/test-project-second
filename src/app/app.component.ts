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

  ngAfterViewInit(): void {
    this.userForm.setValue({
      [UserKeys.email]: 'example@example.com',
      [UserKeys.password]: '12345',
      [UserKeys.address]: {
        [UserKeys.addressCity]: 'London',
        [UserKeys.addressHouseNumber]: 3
      },
      [UserKeys.posts]: [
        {
          [UserKeys.postTitle]: 'post title 1',
          [UserKeys.postText]: 'post text 1'
        }
      ]
    });
  }
}
