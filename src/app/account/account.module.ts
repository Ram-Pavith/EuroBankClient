import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsMenuComponent } from './Components/accounts-menu/accounts-menu.component';
import { AccountDetailsComponent } from './Components/account-details/account-details.component';
import { AccountTransactionsComponent } from './Components/account-transactions/account-transactions.component';
import { AccountStatementComponent } from './Components/account-statement/account-statement.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AccountsMenuComponent,
    AccountDetailsComponent,
    AccountTransactionsComponent,
    AccountStatementComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ]
})
export class AccountModule { }
