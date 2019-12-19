import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from './employee-model.class';

const baseAPIUrl: string = `https://ngjsonservice20191211114126.azurewebsites.net`;


// Service uses ajax calls to interface with the azure api.
@Injectable({
  providedIn: 'root'
})
export class EmployeeAjaxService {
  
  constructor(private ajaxClient: HttpClient) { }

  private url(path: string): string {
    return `${baseAPIUrl}/${path}`;
  }

  getAllEmployees(): Observable<EmployeeModel[]> {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.ajaxClient
        .get<EmployeeModel[]>( this.url('api/employees'), { headers: headers});
  }

  getEmployee( employeeId: number ): Observable<EmployeeModel> {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    
    let params: HttpParams = new HttpParams().set('id', employeeId.toString());
    
    return this.ajaxClient
        .get<EmployeeModel>( this.url('api/employees'), { headers: headers, params: params });
  }

  insertEmployee( employee: EmployeeModel ): Observable<HttpResponse<EmployeeModel>> {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.ajaxClient
        .post<EmployeeModel>( this.url('api/employees'), employee, { headers: headers, observe: 'response'}) 
  }

  updateEmployee( employee: EmployeeModel ): Observable<EmployeeModel> {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.ajaxClient
        .put<EmployeeModel>( this.url(`api/employees/${employee.id}`), employee, { headers: headers, observe: 'body'} )
  }

  deleteEmployee( employeeId: number ): Observable<any> {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.ajaxClient.delete( this.url(`api/employees/${employeeId}`), { headers: headers })
  }

}

/*
 * GET /api/employees - returns all employees
 * GET /api/employees/5 - returns signle employee with primary key 5 or not found
 * POST /api/employees - inserts new employee; pass employee in request body
 * PUT /api/employees/5 - updates employee with primary key 5; pass employee in request body
 * DELETE /api/employees/5 0 deletes employee with primary key 5; no data in request body
 */
