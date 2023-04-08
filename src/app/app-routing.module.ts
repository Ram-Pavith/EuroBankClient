import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './employee/login/login.component';
import { GetAllCustomersComponent } from './employee/get-all-customers/get-all-customers.component';
import { GetAllAccountsComponent } from './employee/get-all-accounts/get-all-accounts.component';
import { GetAllTransactionsComponent } from './employee/get-all-transactions/get-all-transactions.component';
// import { HomeComponent } from './customer/Components/home/home.component';
import {CustomerLoginComponent} from './customer/Components/login/CustomerLogin.component';
import { AccountsMenuComponent } from './account/Components/accounts-menu/accounts-menu.component';
import { AccountDetailsComponent } from './account/Components/account-details/account-details.component';
import { WithDrawComponent } from './transaction/Components/with-draw/with-draw.component';
import { DepositComponent } from './transaction/Components/deposit/deposit.component';
import { TransferComponent } from './transaction/Components/transfer/transfer.component';
import { GetCustomerAccountsComponent } from './customer/Components/get-customer-accounts/get-customer-accounts.component';
import { GetAccountComponent } from './customer/Components/get-account/get-account.component';
import { AccountStatementComponent } from './account/Components/account-statement/account-statement.component';
import { AccountTransactionsComponent } from './account/Components/account-transactions/account-transactions.component';
import { CustomerMenuComponent } from './customer/Components/customer-menu/customer-menu.component';
import { GettransactionComponent } from './transaction/Components/gettransaction/gettransaction.component';
import { HomeComponent } from './customer/Components/home/home.component';
import { GetCustomerStatementComponent } from './customer/Components/get-customer-statement/get-customer-statement.component';
import { ViewAllTransactionComponent } from './customer/Components/view-all-transaction/view-all-transaction.component';
import { EmployeeRegisterComponent } from './employee/employee-register/employee-register.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { CreateCustomerComponent } from './employee/create-customer/create-customer.component';

const routes: Routes = 
[
  {path:'EmployeeHome',component:EmployeehomeComponent},
  {path:'EmployeeRegister',component:EmployeeRegisterComponent},
  {path:'CreateCustomer',component:CreateCustomerComponent},
  {path:'EmployeeLogin',component:LoginComponent},
  {path:'CustomerLogin',component:CustomerLoginComponent},
  {path:'GetAllCustomers',component:GetAllCustomersComponent}, 
  {path:'GetAllAccounts',component:GetAllAccountsComponent},
  {path:'GetAllTransactions',component:GetAllTransactionsComponent},
  { path:"CustomerMenu",component:CustomerMenuComponent},
  {path:'AccountsMenu',component:AccountsMenuComponent},
  {path:'AccountDetails/:id',component:AccountDetailsComponent},
  {path:'AccountStatement',component:AccountStatementComponent},
  {path:'AccountTransactions',component:AccountTransactionsComponent},

  {path:'Withdraw',component:WithDrawComponent},
  {path:'Deposit',component:DepositComponent},
  {path:'Transfer',component:TransferComponent},
  {path:"Getcustomer",component:GetCustomerAccountsComponent},
  {path:"Getaccount",component:GetAccountComponent},
  {path:"Getaccount/:id",component:GetAccountComponent},
  {path:"gettransactionbytransactionId/:id",component:GettransactionComponent},
  {path:"CustomerHome",component:HomeComponent},
  {path:"statement",component:GetCustomerStatementComponent},
  {path:"viewtransaction",component:ViewAllTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
