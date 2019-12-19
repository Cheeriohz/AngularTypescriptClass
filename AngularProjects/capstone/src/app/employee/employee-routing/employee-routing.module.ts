import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from '@employee/employee-list/employee-list.component';
import { EmployeeContainerComponent } from '@employee/employee-container/employee-container.component';

const routes: Routes = [ 
  
  { path: 'employeeContainer', component: EmployeeContainerComponent},
  { path: 'employee-list',    component: EmployeeListComponent }, //, outlet: 'employee'
  { path: '', redirectTo: '/employees/employeeContainer', pathMatch: 'full' }, 
  { path: '**',    component: EmployeeContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
