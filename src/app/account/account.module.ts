import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsMenuComponent } from './Components/accounts-menu/accounts-menu.component';
import { AccountDetailsComponent } from './Components/account-details/account-details.component';
import { AccountTransactionsComponent } from './Components/account-transactions/account-transactions.component';
import { AccountStatementComponent } from './Components/account-statement/account-statement.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransactionTypeFilter } from '../Filters/transactionTypeFilter';
import * as Sherlock from '../../../node_modules/sherlockjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TransactionDateFilter } from '../Filters/transactionDateFilter';
import { TransactionServiceFilter } from '../Filters/transactionServiceFilter';



@NgModule({
  declarations: [
    AccountsMenuComponent,
    AccountDetailsComponent,
    AccountTransactionsComponent,
    AccountStatementComponent,
    TransactionTypeFilter,
    TransactionDateFilter,
    TransactionServiceFilter
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  exports:[
    TransactionTypeFilter,
    TransactionDateFilter,
    TransactionServiceFilter
  ]
})
export class AccountModule { }
