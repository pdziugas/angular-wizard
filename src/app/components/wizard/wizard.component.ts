import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { WizardStepDirective } from 'src/app/directives/wizard-step.directive';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent {
  @ContentChildren(WizardStepDirective)
  stepsQueryList!: QueryList<WizardStepDirective>;

  stepIndex = 0;
  @Input() steps: WizardStepDirective[] = [];
  @Output() wizardSubmit = new EventEmitter<string>();

  nextStep() {
    this.stepIndex = this.stepIndex + 1;
  }

  prevStep() {
    this.stepIndex = this.stepIndex - 1;
  }

  ngAfterContentInit() {
    this.steps = this.stepsQueryList.map((i) => i);
  }

  get isLastStep(): boolean {
    return this.stepIndex + 1 === this.steps.length;
  }
}
