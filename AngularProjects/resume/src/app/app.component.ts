import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Douglas Bonomo\'s Resume';
  introductoryText: string = `A software engineer trained predominantly as a full stack developer.
                              Began work as a controls engineer working on a vareity of material 
                              handling installations and modifications for both private and public
                              applications. Worked extensively in C# for Intelligrated, syncing up 
                              with external interfaces to handle eccomerce deployments as well as 
                              a variety of ARS and PTL solutions.
                              
                              Continued professional development by fleshing out an understanding 
                              of a more prominent web based application under Cincinnati Insurance
                              Companies. Picked up training on older legacy technologies such as 
                              ASPX and AngularJS, and began work on understanding Angular`;
email:string = 'dwbono01@gmail.com';
phone:string = '(888)-888-8888';
address:string= `1212 Gilmore Lane,
                 Fairfield, OH 45555`;
}
