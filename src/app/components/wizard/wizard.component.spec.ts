import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { WizardStepDirective } from 'src/app/directives/wizard-step.directive';
import { WizardComponent } from './wizard.component';

describe('WizardComponent', () => {
  let component: WizardComponent;
  let fixture: ComponentFixture<WizardComponent>;
  let directive: WizardStepDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WizardComponent, WizardStepDirective],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create an instance', () => {
  //   directive = fixture.debugElement.queryAllNodes(
  //     By.directive(WizardStepDirective)
  //   )[0];
  //   // const directive = new WizardStepDirective();
  //   expect(directive).toBeTruthy();
  // });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
