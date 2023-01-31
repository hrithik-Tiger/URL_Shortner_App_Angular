import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authentication/auth.guard';
import { DashboardComponentComponent } from './DashBoard/dashboard-component/dashboard-component.component';
import { LoginComponentComponent } from './LoginComponent copy/login-component/login-component.component';
import {ContactComponent} from './Conatct/contact/contact.component'

const routes: Routes = [
  {
  // Login component 
       path: 'login',
       component:LoginComponentComponent,
    
  },
  
  {
    // Contact component 
       path: 'Contact',
       component: ContactComponent,
      
    },
  {

  //Dashboard Component wiht auth gaurd to protect from direct access give access to user if user is Authenticated
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
