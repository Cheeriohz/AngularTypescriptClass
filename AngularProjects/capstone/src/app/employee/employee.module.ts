import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { MenuModule } from '@menu/menu.module';

import { EmployeeRoutingModule } from '@employee/employee-routing/employee-routing.module'

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './employee-list/table/table.component';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import { RowComponent } from './employee-list/table/row/row.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [EmployeeListComponent, HeaderComponent, TableComponent, EmployeeContainerComponent, RowComponent, NewEmployeeComponent, EmployeeFormComponent, EditEmployeeComponent, EmployeeDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MenuModule,
    EmployeeRoutingModule
  ],
  exports: [ EmployeeContainerComponent ]
  
})
export class EmployeeModule { }
