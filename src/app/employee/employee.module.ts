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



@NgModule({
  declarations: [
    LoginComponent,
    GetAllCustomersComponent,
    GetAllAccountsComponent,
    GetAllTransactionsComponent,
    CreateCustomerComponent,
    EmployeeRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    LoginComponent,
    GetAllCustomersComponent,
    GetAllAccountsComponent,
    GetAllTransactionsComponent,
    CreateCustomerComponent
  ]
})
export class EmployeeModule { }
