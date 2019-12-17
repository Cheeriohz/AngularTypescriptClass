import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workHistory: string[] = [];
  constructor() { }

  ngOnInit() {
    this.workHistory.push('ControlTouch Systems');
    this.workHistory.push('Intelligrated');
    this.workHistory.push('HoneyWell');
    this.workHistory.push('Cincinnati Insurance Companies');
  }

}
