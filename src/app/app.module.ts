import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { CustomerModule } from './customer/customer.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AccountModule } from './account/account.module';
import { TransactionModule } from './transaction/transaction.module';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { ForgotPasswordComponent } from './Componenets/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
//import { CustomerModule } from './customer/customer.module';
@NgModule({
  declarations: [
    AppComponent,
       NavbarComponent,
       HomeComponent,
       ForgotPasswordComponent,
       ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TransactionModule,
    ReactiveFormsModule,
    EmployeeModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomerModule,
    AccountModule,
    TransactionModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  exports:[
  //  CustomerService    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {
    this.router.navigateByUrl('EmployeeLogin');
  }
 }
