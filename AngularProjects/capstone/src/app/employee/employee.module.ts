import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { MenuModule } from '@menu/menu.module';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './employee-list/table/table.component';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';




@NgModule({
  declarations: [EmployeeListComponent, HeaderComponent, TableComponent, EmployeeContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MenuModule
  ]
})
export class EmployeeModule { }
