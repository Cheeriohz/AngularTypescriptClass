import { Component, OnInit, Input } from '@angular/core';
import { EmployeeModel } from '@employee/employee-model.class';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() employee: EmployeeModel
  constructor() { }

  ngOnInit() {
  }

  fullAddress(employee: EmployeeModel): string {
    return `${employee.address}, ${employee.city}, ${employee.stateCode} ${employee.zip}`;
}

}
