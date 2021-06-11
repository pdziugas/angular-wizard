import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appWizardStep]',
})
export class WizardStepDirective {
  @Input() name!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
