import { Component, OnInit, Input} from '@angular/core';
import { EmployeeModel } from '@employee/employee-model.class';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() employees: EmployeeModel[];
  constructor() { }

  ngOnInit() {
  }

}
