import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authentication/auth.guard';
import { DashboardComponentComponent } from './DashBoard/dashboard-component/dashboard-component.component';
import { LoginComponentComponent } from './LoginComponent copy/login-component/login-component.component';


const routes: Routes = [
  {
  // Login component 
     path: 'login',
     component:LoginComponentComponent,
    
  },{

 //Dashboard Component wiht auth gaurd to protect from direct access
 path: 'dashboard',
 component:DashboardComponentComponent,
 canActivate: [AuthGuard],


  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
