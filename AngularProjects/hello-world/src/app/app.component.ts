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
  classRoom: Student[] = [];
  selectedStudent:Student = null;
  ngOnInit() {
    this.myModel = new AppModel("Gerico", 11);
    this.classRoom.push(new Student("John Josh", this.classRoom));
    this.classRoom.push(new Student("Jill Jane", this.classRoom));
    this.classRoom.push(new Student("Bill Bob", this.classRoom));
    this.classRoom.push(new Student("Matt Mark", this.classRoom));
  }

  onSelect(student: Student){
    this.selectedStudent = student;
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

class Student {
  name: string ="";
  id: number;
  constructor(name: string, classRoom: Student[]) {
    this.name = name;
    this.id = Math.max(...classRoom.map(student => student.id), 0) + 1;
  }
}