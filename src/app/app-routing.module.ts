import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    data: { title: 'Add Emmployee' }
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
    data: { title: 'List of Emmployee' },
  },
  { path: '',   redirectTo: '/employee-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
