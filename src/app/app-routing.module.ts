import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormWizardComponent } from './public/components/form-wizard/form-wizard.component';
import { DynamicFormBuilderComponent } from './public/components/dynamic-form-builder/dynamic-form-builder.component';
import { CustomDraggableComponent as CustomDraggableComponent } from './public/components/custom-dragable/custom-dragable.component';

const routes: Routes = [
  { path: '', redirectTo:'dynamic_form' ,pathMatch:'full' },
  { path: 'custom_draggable', component: CustomDraggableComponent },
  { path: 'dynamic_form', component: DynamicFormBuilderComponent },
  { path: 'form_wizard', component: FormWizardComponent },
  { path: '**', redirectTo:'dynamic_form' ,pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
