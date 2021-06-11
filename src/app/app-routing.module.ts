import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';

const routes: Routes = [
  { path: 'form', pathMatch: 'full', component: FormPageComponent },
  { path: 'success', pathMatch: 'full', component: SuccessPageComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
