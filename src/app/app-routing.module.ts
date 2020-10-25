import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-employee', pathMatch: 'full'},
  { path: 'view-employee', component: ViewEmployeesComponent},
  { path: 'add-employee', component: AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
