import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { EmployeeContainerComponent } from '@employee/employee-container/employee-container.component';

const routes: Routes = [
  { path: '',         redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',     component: HomeComponent },
  { path: 'about',    component: AboutComponent },
  { path: 'help/:id', component: HelpComponent },
  { path: 'employees', component: EmployeeContainerComponent,
    loadChildren: () => import('@employee/employee.module').then(mod => mod.EmployeeModule)
  },
  { path: '**',       component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
