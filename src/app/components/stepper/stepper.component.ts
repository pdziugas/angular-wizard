import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { WizardStepDirective } from 'src/app/directives/wizard-step.directive';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @ContentChildren(WizardStepDirective)
  stepsQueryList!: QueryList<WizardStepDirective>;
  @Input() steps: WizardStepDirective[] = [];
  @Input() stepIndex = 0;
}
