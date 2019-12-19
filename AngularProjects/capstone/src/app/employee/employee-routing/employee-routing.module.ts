import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from '@employee/employee-list/employee-list.component';
import { EmployeeContainerComponent } from '@employee/employee-container/employee-container.component';

const routes: Routes = [ 
  { path: 'employee/employee-list',    component: EmployeeListComponent },
  { path: '**',    component: EmployeeContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
