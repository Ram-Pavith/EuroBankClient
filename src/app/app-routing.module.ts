import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './employee/login/login.component';
import { GetAllCustomersComponent } from './employee/get-all-customers/get-all-customers.component';
import { GetAllAccountsComponent } from './employee/get-all-accounts/get-all-accounts.component';
import { GetAllTransactionsComponent } from './employee/get-all-transactions/get-all-transactions.component';
import { HomeComponent } from './customer/Components/home/home.component';


const routes: Routes = 
[
  {
    path:'login',component:LoginComponent
  },
  {
    path:'getAllCustomers',component:GetAllCustomersComponent
  },
  {
    path:'getAllAccounts',component:GetAllAccountsComponent
  },
  {
    path:'getAllTransactions',component:GetAllTransactionsComponent
  },
  { 
    path:"CustomerHome",component:HomeComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
