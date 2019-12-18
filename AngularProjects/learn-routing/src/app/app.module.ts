import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu/menu.component';
import { BooleanPipe } from './pipes/boolean.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    MenuComponent,
    BooleanPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
