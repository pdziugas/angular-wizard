import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardStepDirective } from './wizard-step.directive';

@Component({
  template: `<ng-template appWizardStep></ng-template>`,
})
class HostComponent {
  @ViewChild(WizardStepDirective) templateRef!: WizardStepDirective;
}

describe('WizardStepDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let directive: WizardStepDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WizardStepDirective, HostComponent],
    });

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    directive = fixture.componentInstance.templateRef;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
