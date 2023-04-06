import { NgModule, ɵisObservable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports:
   [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClient
    
  ],
  exports:[
    LoginComponent
  ]
})
export class CustomerModule { }
