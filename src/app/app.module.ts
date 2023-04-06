import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClient,
    Observable
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//summa da
