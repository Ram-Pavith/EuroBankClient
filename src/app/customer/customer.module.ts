import { NgModule, ɵisObservable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './Components/login/CustomerLogin.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetAccountComponent } from './Components/get-account/get-account.component';
import { GetCustomerAccountsComponent } from './Components/get-customer-accounts/get-customer-accounts.component';
import { GetCustomerStatementComponent } from './Components/get-customer-statement/get-customer-statement.component';
import { ViewAllTransactionComponent } from './Components/view-all-transaction/view-all-transaction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomerHomeComponent } from './Components/home/home.component';
import { TransactionDateFilter } from '../Filters/transactionDateFilter';
import { TransactionServiceFilter } from '../Filters/transactionServiceFilter';
import { TransactionTypeFilter } from '../Filters/transactionTypeFilter';
import { MylibComponent, MylibModule } from 'mylib';




@NgModule({
  declarations: [
    CustomerLoginComponent,
    GetCustomerAccountsComponent,
    GetCustomerStatementComponent,
    ViewAllTransactionComponent,
    CustomerHomeComponent,
    // MylibComponent,
    
],
  imports:
   [
   CommonModule,
  //  MylibComponent,
  MylibModule,
   AppRoutingModule,
    ReactiveFormsModule,
   FormsModule,
   
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  exports:[
    CustomerLoginComponent,
    
  ]
})
export class CustomerModule { }
