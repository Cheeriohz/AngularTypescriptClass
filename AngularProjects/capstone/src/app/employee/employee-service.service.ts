import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { EmployeeModel} from './employee-model'
import { _values } from 'lodash'

const baseAPIUrl: string = `http://www.MaxTrain.com`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  
  constructor(private ajaxClient: HttpClient) { }

  private url(path: string): string {
    return `${baseAPIUrl}/${path}`;
  }

  getAsync(): Observable<EmployeeModel> {
    /*return of(this.ajaxClient.request('Get', 
                                       this.url('api/employees'), 
                                       { responseType:'json' }
                                     )
             ) 
    as Observable<EmployeeModel>*/
    return new Observable<EmployeeModel>();
  }

  private get(): EmployeeModel {
    this.ajaxClient
        .get<EmployeeModel[]>( this.url('api/employees'))
        .map(employee => _values(employee)
  }

}


/*
 * GET /api/employees - returns all employees
 * GET /api/employees/5 - returns signle employee with primary key 5 or not found
 * POST /api/employees - inserts new employee; pass employee in request body
 * PUT /api/employees/5 - updates employee with primary key 5; pass employee in request body
 * DELETE /api/employees/5 0 deletes employee with primary key 5; no data in request body
 */
