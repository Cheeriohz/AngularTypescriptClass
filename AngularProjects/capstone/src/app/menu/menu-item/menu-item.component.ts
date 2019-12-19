import { Component, OnInit, Input} from '@angular/core';
import { MenuModel } from './menu-model.class'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() model: MenuModel;
  //Default list styleing to dark.
  @Input() liStyle: string = 'bg-dark nav-link';
  constructor() { }

  ngOnInit() {
  }

}


