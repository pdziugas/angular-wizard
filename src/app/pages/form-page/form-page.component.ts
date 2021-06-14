import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent {
  constructor(private fb: FormBuilder) {}

  shippingForm = this.fb.group({
    firstName: [null, [Validators.required, Validators.minLength(3)]],
    lastName: [null, [Validators.required]],
    phone: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    address: this.fb.group({
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
      street: [null, [Validators.required]],
      apartment: [null],
      postalCode: [null, [Validators.required]],
    }),
  });

  paymentForm = this.fb.group({
    firstName: [null, [Validators.required, Validators.minLength(3)]],
    lastName: [null, [Validators.required]],
    cardNumber: [null, [Validators.required]],
    cardData: this.fb.group({
      expMonth: [
        null,
        [Validators.required, Validators.min(1), Validators.max(12)],
      ],
      expYear: [
        null,
        [Validators.required, Validators.min(2021), Validators.max(2027)],
      ],
      cvv: [
        null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
    }),
  });
}
