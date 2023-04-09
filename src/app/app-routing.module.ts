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
import { CustomerHomeComponent } from './customer/Components/home/home.component';
import { GetCustomerStatementComponent } from './customer/Components/get-customer-statement/get-customer-statement.component';
import { ViewAllTransactionComponent } from './customer/Components/view-all-transaction/view-all-transaction.component';
import { EmployeeRegisterComponent } from './employee/employee-register/employee-register.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { CreateCustomerComponent } from './employee/create-customer/create-customer.component';
import { AnalysisComponent } from './customer/Components/analysis/analysis.component';
import { AppHomePageComponent } from './Components/app-home-page/app-home-page.component';
import { AuthGuard } from './Guards/auth.guard';


const routes: Routes = 
[
  {path:'EmployeeHome',component:EmployeehomeComponent},//canActivate: [AuthGuard],data: {role: 'Employee'}},
  {path:'EmployeeRegister',component:EmployeeRegisterComponent},//canActivate: [AuthGuard],data: {role: 'Employee'}},
  {path:'CreateCustomer',component:CreateCustomerComponent},//canActivate: [AuthGuard],data: {role: 'Employee'}},
  {path:'EmployeeLogin',component:LoginComponent},
  {path:'CustomerLogin',component:CustomerLoginComponent},
  {path:'GetAllCustomers',component:GetAllCustomersComponent},//canActivate: [AuthGuard],data: {role: 'Employee'}}, 
  {path:'GetAllAccounts',component:GetAllAccountsComponent},//canActivate: [AuthGuard],data: {role: 'Employee'}},
  {path:'GetAllTransactions',component:GetAllTransactionsComponent},//canActivate: [AuthGuard],data: {role: 'Employee'}},
  { path:"CustomerMenu",component:CustomerMenuComponent,canActivate: [AuthGuard],data: {expectedRole: 'Customer'}},
  {path:'AccountsMenu',component:AccountsMenuComponent,canActivate: [AuthGuard],data: {expectedRole: 'Account'}},
  {path:'AccountDetails',component:AccountDetailsComponent},
  {path:'AccountDetails/:id',component:AccountDetailsComponent},
  {path:'AccountStatement',component:AccountStatementComponent,canActivate: [AuthGuard],data: {expectedRole: 'Account'}},
  {path:'AccountTransactions',component:AccountTransactionsComponent,canActivate: [AuthGuard],data: {expectedRole: 'Account'}},
  {path:'Withdraw',component:WithDrawComponent,canActivate: [AuthGuard],data: {expectedRole: 'Account'}},
  {path:'Deposit',component:DepositComponent,canActivate: [AuthGuard],data: {expectedRole: 'Account'}},
  {path:'Transfer',component:TransferComponent,canActivate: [AuthGuard],data: {expectedRole: 'Account'}},
  {path:"Getcustomer",component:GetCustomerAccountsComponent,canActivate: [AuthGuard],data: {expectedRole: 'Customer'}},
  {path:"Getaccount",component:GetAccountComponent},
  {path:"Getaccount/:id",component:GetAccountComponent},
  {path:"gettransactionbytransactionId/:id",component:GettransactionComponent},
  {path:"CustomerHome",component:CustomerHomeComponent,canActivate: [AuthGuard],data: {expectedRole: 'Customer'}},
  {path:"statement",component:GetCustomerStatementComponent},
  {path:"viewtransaction",component:ViewAllTransactionComponent,canActivate: [AuthGuard],data: {expectedRole: 'Customer'}},
  {path:"CustomerAnalysis",component:AnalysisComponent,canActivate: [AuthGuard],data: {expectedRole: 'Customer'}},
  {path:'HomePage',component:AppHomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
