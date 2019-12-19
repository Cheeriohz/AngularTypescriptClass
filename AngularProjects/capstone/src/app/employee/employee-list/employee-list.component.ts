import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '@employee/employee-model.class';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeModel[] = [];
  constructor() { }

  ngOnInit() {
  }

}
