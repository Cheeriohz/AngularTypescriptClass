import { Component, OnInit, Input } from '@angular/core';
import { MenuModel } from './menu-item/menu-model.class'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menus: MenuModel[];
  //Default ulStyle to dark.
  @Input() ulStyle: string = 'navbar navbar-dark';
  @Input() liStyle: string = 'bg-dark nav-link'
  constructor() { }

  ngOnInit() {
  }

}
