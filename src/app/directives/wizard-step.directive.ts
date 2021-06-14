import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appWizardStep]',
})
export class WizardStepDirective {
  @Input() name!: string;
  @Input() invalid!: boolean;

  constructor(public templateRef: TemplateRef<any>) {}
}
