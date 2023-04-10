import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Customer } from 'src/Models/Customer';
import { CustomerLogin } from 'src/Models/CustomerLogin';
import { TransactionService } from '../../../transaction/Services/transaction.service';
import { CustomerService } from '../../Services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-CustomerLogin',
  templateUrl: './CustomerLogin.component.html',
  styleUrls: ['./CustomerLogin.component.css']
})
export class CustomerLoginComponent {
  userform: FormGroup = new FormGroup({})
  users: Customer[] = [];
  username: string = "";
  password: string = "";
  user: CustomerLogin =
    {
      emailId: "",
      password: ""
    };
  msg: string = "";
  authtoken: string = "";
  errormsg = ""
  token: string = "";
  customerId: string = ""
  use: any;

  constructor(private obj: CustomerService, private route: Router, private bj: TransactionService, private toastr: ToastrService, private authService: AuthService) { }


  IsLoggedIn() {

    return localStorage.getItem("token") != null;
  }

  Logout() {
    localStorage.clear();
    this.authService.logout();
    this.route.navigateByUrl('/CustomerLogin');
  }
  login() {
    console.log(this.user)
    this.obj.userAuthorize(this.user).subscribe(data => {
      console.log(data.token);
      if (data.success) {
        this.msg = "Success";
        this.toastr.success(this.msg, "Succesfully Logged In")
        this.authtoken = data.token;
        this.obj.userlogin(this.user).subscribe(customer => {
          this.customerId = customer.customerId
          localStorage.setItem("CustomerEmailId", customer.emailId)
          this.SaveCustomerId()
          this.authService.login('Customer')
          this.SaveToken()
          this.SaveCustomerId()
          this.route.navigateByUrl('CustomerHome');
        }, error => {
          console.log(error)
        })

      }
      
    }, err => {
      console.log(err.error)
      this.msg = "Invalid login";
      this.toastr.error(err.error, "Wrong Credentials")
    })
  }
  SaveToken() {
    localStorage.setItem("token", this.authtoken);
  }
  GetToken() {
    localStorage.getItem("token");
  }
  SaveCustomerId() {
    localStorage.setItem("CustomerId", this.customerId);
  }
  GetCustomerId() {
    localStorage.getItem("CustomerId");
  }
  ForgotPassword() {
    localStorage.setItem("PasswordForgotBy", "Customer")
    this.route.navigateByUrl("/ForgotPassword")
  }
}
