import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '@employee/employee-model.class';
import { EmployeeAjaxService } from '@employee/employee-ajax-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeModel[];
  constructor(private eAS: EmployeeAjaxService ) { }

  ngOnInit() {
    this.eAS.getAllEmployees()
      .subscribe(
        res => {this.employees = res; 
                console.log(res); 
                console.log(this.employees)},
        err => { console.error(err); }
      );
  }

}
