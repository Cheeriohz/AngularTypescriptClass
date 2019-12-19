import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from '@employee/employee-list/employee-list.component';
import { EmployeeContainerComponent } from '@employee/employee-container/employee-container.component';
import { NewEmployeeComponent } from '@employee/new-employee/new-employee.component';
import { EmployeeDetailComponent } from '@employee/employee-detail/employee-detail.component';
import { EditEmployeeComponent } from '@employee/edit-employee/edit-employee.component';

const routes: Routes = [ 
  
  { path: 'employeeContainer', component: EmployeeContainerComponent},
  { path: 'employee-list',    component: EmployeeListComponent },
  { path: 'new-employee',    component: NewEmployeeComponent },
  { path: 'employee-detail',    component: EmployeeDetailComponent },
  { path: 'employee-edit',    component: EditEmployeeComponent },
  { path: '', redirectTo: '/employees/employeeContainer', pathMatch: 'full' }, 
  { path: '**',    component: EmployeeContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
