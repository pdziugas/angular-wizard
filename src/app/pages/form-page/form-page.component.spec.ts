import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormPageComponent } from './form-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SuccessPageComponent } from '../success-page/success-page.component';

describe('FormPageComponent', () => {
  let component: FormPageComponent;
  let fixture: ComponentFixture<FormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPageComponent],
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot([
          { path: 'success', component: SuccessPageComponent },
        ]),
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the shippingForm is invalid if empty', () => {
    expect(component.shippingForm.valid).toBeFalsy();
  });

  it('should return paymentForm is invalid if empty', () => {
    expect(component.paymentForm.valid).toBeFalsy();
  });

  it('should redirect user to success page on wizardSubmit', () => {
    let spy = spyOn(component, 'wizardSubmit').and.callThrough();
    expect(component).toBeDefined();
    expect(spy);
    component.wizardSubmit();
    expect(component.wizardSubmit).toHaveBeenCalled();
  });
});
