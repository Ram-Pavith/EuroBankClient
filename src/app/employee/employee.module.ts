import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { GetAllAccountsComponent } from './get-all-accounts/get-all-accounts.component';



@NgModule({
  declarations: [
    LoginComponent,
    GetAllCustomersComponent,
    GetAllAccountsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    LoginComponent,
    GetAllCustomersComponent,
    GetAllAccountsComponent
  ]
})
export class EmployeeModule { }
