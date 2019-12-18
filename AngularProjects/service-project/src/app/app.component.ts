import { Component, OnInit } from '@angular/core';
import { MockServiceService} from './mock-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  students: any;
  constructor( private mockService: MockServiceService) {
  }

  ngOnInit() {
    //console.log(this.mockService.getTheData());
    this.mockService.get().subscribe(
      res => { this.students = res; console.log(res); },
      err => { console.log(err); }
    );
    //console.log(this.mockService.getTheStudents());
  }

  getColor(role:string):string {
    if(role=='Instructor'){
      return 'yellow';
    }
    else if (role=='Student') {
      return 'blue';
    }
    else if (role=='Liason'){
      return 'green'
    }
    else {
      return 'blue';
    }
    
  }


}
