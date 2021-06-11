import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent {
  constructor(private fb: FormBuilder) {}

  reactiveForm = this.fb.group({
    firstName: ['name', [Validators.required, Validators.minLength(3)]],
    lastName: ['surname', [Validators.required]],
    phone: [123345456, [Validators.required]],
    email: ['email@mail.com', [Validators.required, Validators.email]],
    address: this.fb.group({
      country: ['Lithuania', [Validators.required]],
      city: ['Vilnius', [Validators.required]],
      street: ['street', [Validators.required]],
      apartment: [null],
      postalCode: ['LT-12345', [Validators.required]],
      // firstName: [null, [Validators.required, Validators.minLength(3)]],
      // lastName: [null, [Validators.required]],
      // phone: [null, [Validators.required]],
      // email: [null, [Validators.required, Validators.email]],
      // address: this.fb.group({
      //   country: [null, [Validators.required]],
      //   city: [null, [Validators.required]],
      //   street: [null, [Validators.required]],
      //   apartment: [null],
      //   postalCode: [null, [Validators.required]],
    }),
  });
}
