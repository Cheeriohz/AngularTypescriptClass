import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationHistory:EducationItem[] = [];
  constructor() { }

  ngOnInit() {
    this.educationHistory.push(new EducationItem({ description: 'North Oldham High School - Graduated' }));
    this.educationHistory.push(new EducationItem({ description: 'UofL Bachelors of Computer Engineering', displayIdentifier: 'bold' }));
    this.educationHistory.push(new EducationItem({ description: 'UofL Bachelors of Computer Science', displayIdentifier: 'bold' }));
  }

}

export class EducationItem {
  description:string;
  displayIdentifier:string = 'basic'
  constructor({ description, displayIdentifier }: { description: string; displayIdentifier?: string; }){
    this.description = description;
    if(typeof displayIdentifier == 'undefined'){
      this.displayIdentifier = 'basic';
    }
    else {
      this.displayIdentifier = displayIdentifier;
    }
  }
}
