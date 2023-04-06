import { NgModule, ɵisObservable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    
  ],
  imports:
   [
   CommonModule,
   AppRoutingModule,
    ReactiveFormsModule,
   FormsModule,
    HttpClientModule
    
  ],
  exports:[
    LoginComponent
  ]
})
export class CustomerModule { }
