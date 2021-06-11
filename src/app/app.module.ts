import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { WizardStepDirective } from './directives/wizard-step.directive';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    SuccessPageComponent,
    StepperComponent,
    WizardComponent,
    WizardStepDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
