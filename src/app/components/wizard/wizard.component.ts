import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { WizardStepDirective } from 'src/app/directives/wizard-step.directive';
import { StepperModel } from 'src/app/models/stepper.model';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent {
  @Input() step!: StepperModel;
  // currentStep!: StepperModel;

  @ContentChildren(WizardStepDirective)
  stepsQueryList!: QueryList<WizardStepDirective>;

  steps: WizardStepDirective[] = [];
  stepIndex = 0;

  constructor(private router: Router) {}

  nextStep() {
    // TODO: if last step - submit, else next step

    if (!this.isLastStep()) {
      //   // this.stepsService.nextStep();
      this.stepIndex = this.stepIndex + 1;
    } else {
      console.log('submit wiz');
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
    // TODO: remove this console.log statement
    console.log(this.steps);
  }

  isLastStep(): boolean {
    return this.stepIndex + 1 === this.steps.length;
  }

  buttonText(): string {
    return this.isLastStep() ? 'Finish' : 'Continue';
  }
}
