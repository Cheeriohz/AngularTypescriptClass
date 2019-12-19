import { Component, OnInit, Input } from '@angular/core';
import { EmployeeModel } from '@employee/employee-model.class';
import { Router } from '@angular/router';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() employee: EmployeeModel
  constructor(private router: Router) { }

  ngOnInit() {
  }

  fullAddress(employee: EmployeeModel): string {
    return `${employee.address}, ${employee.city}, ${employee.stateCode} ${employee.zip}`;
}

  routeToDetail() {
    this.router.navigate(['/employees/employee-detail', { employe: this.employee }]);
  }

  routeToEdit() {
    this.router.navigate(['/employees/employee-edit', { employe: this.employee }]);
  }

}
