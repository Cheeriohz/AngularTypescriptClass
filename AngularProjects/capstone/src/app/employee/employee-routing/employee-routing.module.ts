import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from '@employee/employee-list/employee-list.component';
import { EmployeeContainerComponent } from '@employee/employee-container/employee-container.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/employees/employeeContainer', pathMatch: 'full' }, 
  { path: 'employees/employeeContainer', component: EmployeeContainerComponent},
  { path: 'employees/employee-list',    component: EmployeeListComponent, outlet: 'employee' },
  { path: '**',    component: EmployeeContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
