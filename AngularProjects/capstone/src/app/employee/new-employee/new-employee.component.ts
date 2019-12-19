import { Component, OnInit, Input} from '@angular/core';
import { EmployeeModel } from '@employee/employee-model.class';
import { NgForm }  from '@angular/forms';
import { EmployeeAjaxService } from '@employee/employee-ajax-service.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  employee: EmployeeModel;
  submitOption:string = 'new';
  constructor(private employeeService: EmployeeAjaxService) { }

  ngOnInit() {
    this.employee = new EmployeeModel();
  }

  createNewEmployee(form: NgForm) {
    console.log(this.employee);
    this.employeeService.insertEmployee(this.employee)
      .subscribe(
        success => { console.log(success);},
        err => {console.error(err);}
      );
  }
}
