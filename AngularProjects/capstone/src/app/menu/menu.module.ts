import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
export { MenuModel } from './menu-item/menu-model.class';

@NgModule({
  declarations: [MenuComponent, MenuItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ MenuComponent ]
})
export class MenuModule { }
