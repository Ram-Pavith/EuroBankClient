import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { GetAllAccountsComponent } from './get-all-accounts/get-all-accounts.component';
import { GetAllTransactionsComponent } from './get-all-transactions/get-all-transactions.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [
    LoginComponent,
    GetAllCustomersComponent,
    GetAllAccountsComponent,
    GetAllTransactionsComponent,
    CreateCustomerComponent,
    EmployeeRegisterComponent,
    EmployeehomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() ,// ToastrModule added
    PaginationModule.forRoot()

  ],
  exports:[
    LoginComponent,
    GetAllCustomersComponent,
    GetAllAccountsComponent,
    GetAllTransactionsComponent,
    CreateCustomerComponent,
    PaginationModule
  ]
})
export class EmployeeModule { }
