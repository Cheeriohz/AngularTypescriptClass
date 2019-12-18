import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
//These are unused, but they are usually needed for any real service work.
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {
  theData:string = 'Magic Service Text';
  students:object[] = [
    { name: 'Greg', role: 'Instructor'},
    { name: 'Kerry', role: 'Student'},
    { name: 'Doug', role: 'Student'},
    { name: 'Tony', role: 'Liason' }
  ]

  constructor() { }

  get(): Observable<any> {
    return of(this.students) as Observable<any>;
  }

  getTheData():string {
    return this.theData;
  }
  getTheStudents():object[] {
    return this.students;
  }

}
