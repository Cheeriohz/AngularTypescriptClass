import { Component, OnInit } from '@angular/core';
import { MenuModel } from '@menu/menu.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus: MenuModel[] = [
    { displayName: 'Employee-List', tooltip: 'List All Employees', route: '/employees/employee-list'},
    { displayName: 'New Employee', tooltip: 'Add an Employees', route: '/employees/new-employee'}
    //TODO: Need to add additional entries
  ];
  menuUlStyle: string = 'navbar navbar-light';
  menuLiStyle: string = 'bg-light nav-link';
  constructor() { }

  ngOnInit() {   
  }

}
