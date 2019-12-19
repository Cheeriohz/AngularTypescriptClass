import { Component, OnInit, Input } from '@angular/core';
import { EmployeeModel } from '@employee/employee-model.class';

@Component({
  selector: '[app-employee-form]',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: EmployeeModel
  @Input() lockControls: boolean
  @Input() submitOption: string;
  constructor() { }

  ngOnInit() {
  }

}
