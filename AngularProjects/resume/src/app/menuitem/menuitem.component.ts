import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../Menu/menu.class'


@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {
  @Input() menu: Menu
  constructor() { }

  ngOnInit() {
  }

}
