import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './customer/Components/home/home.component';
import { GetCustomerAccountsComponent } from './customer/Components/get-customer-accounts/get-customer-accounts.component';
import { GetAccountComponent } from './customer/Components/get-account/get-account.component';

const routes: Routes =[
 { 
   path:"home",component:HomeComponent
  },
  {
    path:"getcustomer",component:GetCustomerAccountsComponent
  },
  {
    path:"getaccount",component:GetAccountComponent
  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
