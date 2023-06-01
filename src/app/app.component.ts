import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project-second';

  constructor(private formBuilder: FormBuilder) { }

  userForm = this.formBuilder.group({
    email: [''],
    password: [''],
    address: this.formBuilder.group({
      city: [''],
      house_number: [0]
    }),
    posts: this.formBuilder.array([])
  });

  getCityControl(): FormControl {
    return (this.userForm.get('address') as FormGroup).get('city') as FormControl;
  }

  getHouseNumberControl(): FormControl {
    return (this.userForm.get('address') as FormGroup).get('house_number') as FormControl;
  }

  getPostsControls(): FormArray {
    return this.userForm.get('posts') as FormArray;
  }

  getPostTitleControl(index: number): FormControl {
    const postFormControl = (this.userForm.get('posts') as FormArray).at(index);
    return postFormControl.get('title') as FormControl
  }

  getPostTextControl(index: number): FormControl {
    const postFormControl = (this.userForm.get('posts') as FormArray).at(index);
    return postFormControl.get('text') as FormControl
  }
}
