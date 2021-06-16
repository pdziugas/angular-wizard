import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WizardStepDirective } from 'src/app/directives/wizard-step.directive';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent {
  @ContentChildren(WizardStepDirective)
  stepsQueryList!: QueryList<WizardStepDirective>;

  steps: WizardStepDirective[] = [];
  stepIndex = 0;

  @Input() shippingForm!: FormGroup;
  @Input() paymentForm!: FormGroup;

  constructor(private router: Router) {}

  isLastStep(): boolean {
    return this.stepIndex + 1 === this.steps.length;
  }

  nextStep() {
    this.stepIndex = this.stepIndex + 1;
  }

  prevStep() {
    this.stepIndex = this.stepIndex - 1;
  }

  wizardSubmit(): void {
    let object = Object.assign(this.shippingForm.value, this.paymentForm.value);
    console.log(object);

    this.router.navigate(['/success']);

    alert(JSON.stringify(object));
  }

  ngAfterContentInit() {
    this.steps = this.stepsQueryList.map((i) => i);
  }
}
