import { Component, OnInit, Input } from '@angular/core';
import { EmployeeModel } from '@employee/employee-model.class';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee:EmployeeModel;
  route:ActivatedRouteSnapshot;
  submitOption:string = 'detail';


  constructor(route: ActivatedRoute) { 
    this.route = route.snapshot;
  }

  ngOnInit() {
    this.employee = this.route.data.employee;
  }

}
