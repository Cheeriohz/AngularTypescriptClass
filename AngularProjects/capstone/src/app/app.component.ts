import { Component } from '@angular/core';
import { MenuModel } from '@menu/menu.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menus: MenuModel[] = [
    { displayName: 'Home', tooltip: 'Homepage', route: '/home'},
    { displayName:'Employee', tooltip: 'Employee Information', route: '/employees'},
    { displayName:'About', tooltip: 'About Us', route: '/about'},
    { displayName:'Help', tooltip: "I'm so lost", route: '/help'}
  ];
  title = 'capstone';
}
