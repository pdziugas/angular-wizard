import { Component, ContentChildren, QueryList } from '@angular/core';
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

  constructor(private router: Router) {}

  isLastStep(): boolean {
    return this.stepIndex + 1 === this.steps.length;
  }

  nextStep() {
    if (!this.isLastStep()) {
      this.stepIndex = this.stepIndex + 1;
    } else {
      this.wizardSubmit();
    }
  }

  prevStep() {
    this.stepIndex = this.stepIndex - 1;
  }

  // TODO: this.event.submit(native events) @Output
  wizardSubmit(): void {
    this.router.navigate(['/success']);
  }

  ngAfterContentInit() {
    this.steps = this.stepsQueryList.map((i) => i);
  }
}
