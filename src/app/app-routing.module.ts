import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrisonersComponent } from './prisoners/prisoners.component'
import { FormComponent } from '../app/form/form.component'
import { VisitorFormComponent } from '../app/visitor-form/visitor-form.component'
import { ErrorPageComponent } from './error-page/error-page.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';
import { VisitorComponent } from './visitor/visitor.component';
import { DormsComponent } from './dorms/dorms.component';

const routes: Routes = [
  {
    path: '',  redirectTo: '/visit', pathMatch: 'full'
  },
  {
    path: 'login', component: FormComponent
  },
  {
    path: 'visit', component: VisitorFormComponent
  },
  {
    path: 'inmates', component: PrisonersComponent
  },
  {
    path: 'visit_history/:id', component: VisitHistoryComponent
  },
  {
    path: 'visitors', component: VisitorComponent
  },
  {
    path: 'dorms', component: DormsComponent
  },
  {
    path: '**', component: ErrorPageComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PrisonersComponent, 
                                  FormComponent,
                                  VisitorFormComponent,
                                  ErrorPageComponent,
                                  VisitHistoryComponent,
                                  VisitorComponent,
                                  DormsComponent]