import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { WizardStepDirective } from 'src/app/directives/wizard-step.directive';
import { StepperModel } from 'src/app/models/stepper.model';
import { FormPageComponent } from 'src/app/pages/form-page/form-page.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent {
  @Input() step!: StepperModel;

  @ContentChildren(WizardStepDirective)
  stepsQueryList!: QueryList<WizardStepDirective>;

  steps: WizardStepDirective[] = [];
  stepIndex = 0;

  constructor(private router: Router) {}

  nextStep() {
    if (!this.isLastStep()) {
      this.stepIndex = this.stepIndex + 1;
    } else {
      this.onSubmit();
    }
  }

  prevStep() {
    this.stepIndex = this.stepIndex - 1;
  }

  onSubmit(): void {
    this.router.navigate(['/success']);
  }

  ngAfterContentInit() {
    this.steps = this.stepsQueryList.map((i) => i);
  }

  isLastStep(): boolean {
    return this.stepIndex + 1 === this.steps.length;
  }
}
