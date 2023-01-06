import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentComponent } from './DashBoard/dashboard-component/dashboard-component.component';
import { LoginComponentComponent } from './LoginComponent copy/login-component/login-component.component';


const routes: Routes = [
  {
  // Login component 
     path: 'login',
     component:LoginComponentComponent

  },{

 //Dashboard Component
 path: 'dashboard',
 component:DashboardComponentComponent


  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
