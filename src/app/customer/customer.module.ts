import { NgModule, ɵisObservable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './Components/login/CustomerLogin.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { HomeComponent } from './Components/home/home.component';
import { GetCustomerAccountsComponent } from './Components/get-customer-accounts/get-customer-accounts.component';
import { GetAccountComponent } from './Components/get-account/get-account.component';
import { GetCustomerStatementComponent } from './Components/get-customer-statement/get-customer-statement.component';
import { ViewAllTransactionComponent } from './Components/view-all-transaction/view-all-transaction.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    CustomerLoginComponent,
    GetCustomerAccountsComponent,
    GetAccountComponent,
    GetCustomerStatementComponent,
    ViewAllTransactionComponent,
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
    CustomerLoginComponent
  ]
})
export class CustomerModule { }
