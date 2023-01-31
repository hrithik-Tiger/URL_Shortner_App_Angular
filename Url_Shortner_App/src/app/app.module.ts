import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ClipboardModule } from 'ngx-clipboard';


import { AppComponent } from './app.component';
import { LoginComponentComponent } from './LoginComponent copy/login-component/login-component.component';
import { DashboardComponentComponent } from './DashBoard/dashboard-component/dashboard-component.component';
import {LoadingspinnerComponent} from '../app/shared/loadingspinner/loadingspinner.component';
import { ContactComponent } from './Conatct/contact/contact.component'





@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponentComponent,
    LoadingspinnerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule ,
    ClipboardModule,
    
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
