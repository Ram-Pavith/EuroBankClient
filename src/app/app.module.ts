import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { CustomerModule } from './customer/customer.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AccountModule } from './account/account.module';
import { TransactionModule } from './transaction/transaction.module';
import { Router } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import * as Sherlock from '../../node_modules/sherlockjs';
import * as mdb from 'mdb-ui-kit'; // lib
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { CustomerHomeComponent } from './customer/Components/home/home.component'
import { AppHomePageComponent } from './Components/app-home-page/app-home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { TransactionDateFilter } from './Filters/transactionDateFilter';
import { TransactionServiceFilter } from './Filters/transactionServiceFilter';
import { TransactionTypeFilter } from './Filters/transactionTypeFilter';
import { MylibComponent } from 'dist/mylib/lib/mylib.component';
import { MylibModule } from 'mylib';

@NgModule({
  declarations: [
    AppComponent,
       NavbarComponent,
       ForgotPasswordComponent,
       ChangePasswordComponent,
       AppHomePageComponent,
       
      // MylibComponent
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TransactionModule,
    ReactiveFormsModule,
    EmployeeModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomerModule,
    AccountModule,
    TransactionModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule,
    FontAwesomeModule,
    JwPaginationModule,
    MylibModule
    

  ],
  exports:[
    
  //  CustomerService 
     
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {
  }
 }
