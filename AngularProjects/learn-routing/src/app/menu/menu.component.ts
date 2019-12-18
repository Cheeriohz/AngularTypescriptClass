import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component'
import { MenuModel } from './menu-item/menu-model.class'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: MenuModel[] = [];
  constructor() { }

  ngOnInit() {
    this.menus.push( new MenuModel('Home', 'Homepage', '/home'));
    this.menus.push( new MenuModel('About', 'About Us', '/about'));
    this.menus.push( new MenuModel('Help', "I'm so lost", '/help'));
  }

}
