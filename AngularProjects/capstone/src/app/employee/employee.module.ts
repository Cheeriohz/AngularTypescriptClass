import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HeaderComponent } from './employee-list/header/header.component';
import { TableComponent } from './employee-list/table/table.component';



@NgModule({
  declarations: [EmployeeListComponent, HeaderComponent, TableComponent, CurrencyPipe],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
