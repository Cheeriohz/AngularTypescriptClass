import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hello, World!';
  givenName: string = 'Douglas Bonomo';
  myModel: AppModel = null;

  ngOnInit() {
    //this.myModel = new AppModel("Gerico", 11);
  }
}

class AppModel {
  name:string = "";
  age:number = 0;
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }
  get toJson(): string {
    return `{ name: ${this.name}, age: ${this.age} }`;
  }
}
