import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //properties
  menus: Menu[] = [
     new Menu('Home', '/home', 'Return to Homepage'),
     new Menu('About', '/about', 'About us'),
     new Menu('Help', '/help', "I'm so lost")
  ];

  constructor() { }

  ngOnInit() {
  }

}
