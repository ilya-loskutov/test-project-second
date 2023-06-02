import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { UserKeys } from '../../models/user';
import { UserForm } from '../../models/user-form';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  UserKeys = UserKeys;

  userForm: FormGroup = UserForm.createForm();

  constructor(
  ) { }

  get posts(): FormArray {
    return UserForm.getPostsFormArray(this.userForm);
  }

  ngOnInit(): void {
    const emailControl = UserForm.getEmailControl(this.userForm);
    emailControl.valueChanges.subscribe(() => {
      const passwordControl = UserForm.getPasswordControl(this.userForm);
      setTimeout(() => passwordControl.setValue('1234567890'));
    })
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
