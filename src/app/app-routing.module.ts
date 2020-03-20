import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormWizardComponent } from './public/components/form-wizard/form-wizard.component';

const routes: Routes = [
  { path: '', redirectTo:'form_wizard' ,pathMatch:'full' },
  { path: 'form_wizard', component: FormWizardComponent },
  { path: '**', redirectTo:'form_wizard' ,pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
