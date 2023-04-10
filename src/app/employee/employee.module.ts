import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetAllCustomersComponent } from './Components/get-all-customers/get-all-customers.component';
import { GetAllAccountsComponent } from './Components/get-all-accounts/get-all-accounts.component';
import { GetAllTransactionsComponent } from './Components/get-all-transactions/get-all-transactions.component';
import { CreateCustomerComponent } from './Components/create-customer/create-customer.component';
import { EmployeeRegisterComponent } from './Components/employee-register/employee-register.component';
import { EmployeehomeComponent } from './Components/employeehome/employeehome.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PaginationModule } from 'ngx-bootstrap/pagination';
import { CreateaccountComponent } from './Components/createaccount/createaccount.component';
import { ShowcustomerComponent } from './Components/showcustomer/showcustomer.component';



@NgModule({
  declarations: [
    LoginComponent,
    GetAllCustomersComponent,
    GetAllAccountsComponent,
    GetAllTransactionsComponent,
    CreateCustomerComponent,
    EmployeeRegisterComponent,
    EmployeehomeComponent,
    CreateaccountComponent,
    ShowcustomerComponent
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
    ShowcustomerComponent,
    PaginationModule
  ]
})
export class EmployeeModule { }
