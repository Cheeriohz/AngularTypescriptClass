import { Component, OnInit } from '@angular/core';
import { MenuModel } from '@menu/menu.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus: MenuModel[] = [
    { displayName: 'Employee-List', tooltip: 'List All Employees', route: 'employees/employee-list'}
    //TODO: Need to add additional entries
  ];
  menuUlStyle: string = 'navbar navbar-light';
  menuLiStyle: string = 'bg-light nav-link';
  constructor() { }

  ngOnInit() {   
  }

}
