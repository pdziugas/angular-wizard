import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

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
    cardholderFirstName: [null, [Validators.required, Validators.minLength(3)]],
    cardholderLastName: [null, [Validators.required]],
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

  review = this.fb.group({
    confirmInformation: [false, Validators.requiredTrue],
  });

  wizardSubmit(): void {
    let dataObject = Object.assign(
      this.shippingForm.value,
      this.paymentForm.value
    );

    this.router.navigate(['/success']);

    alert(JSON.stringify(dataObject));
  }
}
