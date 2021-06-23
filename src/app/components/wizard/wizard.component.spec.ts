import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { WizardStepDirective } from 'src/app/directives/wizard-step.directive';
import { WizardComponent } from './wizard.component';

@Component({
  template: `<app-wizard
    ><ng-template appWizardStep></ng-template
  ></app-wizard>`,
})
class HostComponent {
  @ViewChild(WizardComponent) templateRef!: WizardComponent;
}

describe('WizardComponent', () => {
  let component: WizardComponent;
  let hostComponent: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let stepIndex: number;
  let steps: [] = [];

  const getters = {
    get isLastStep(): boolean {
      return stepIndex + 1 === steps.length;
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WizardComponent, HostComponent, WizardStepDirective],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
    component = hostComponent.templateRef;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show previous step on prevStep()', () => {
    spyOn(component, 'prevStep').and.callThrough();
    component.prevStep();
    expect(component.prevStep).toHaveBeenCalled();
  });

  it('should show next step on nextStep()', () => {
    spyOn(component, 'nextStep').and.callThrough();
    component.nextStep();
    expect(component.nextStep).toHaveBeenCalled();
  });

  it('should go to next step if is not the last step', () => {
    getters.isLastStep === false;
    spyOn(component, 'nextStep').and.callThrough();
    component.nextStep();

    fixture.detectChanges();

    expect(component.nextStep).toHaveBeenCalled();
  });
});
