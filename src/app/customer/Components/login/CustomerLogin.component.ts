import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Customer } from 'src/Models/Customer';
import { CustomerLogin } from 'src/Models/CustomerLogin';
import { TransactionService } from 'src/app/transaction.service';
import { CustomerService } from '../../Services/customer.service';

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

  constructor(private obj: CustomerService, private route: Router, private bj: TransactionService) { }


  IsLoggedIn() {

    return localStorage.getItem("token") != null;
  }

  Logout() {
    localStorage.clear();
    this.route.navigateByUrl('/Login');
  }
  login() {
    console.log(this.user)
    this.obj.userAuthorize(this.user).subscribe(data => {
      console.log(data.token);
      if (data.success) {
            this.msg = "Success";
            this.authtoken = data.token;
            this.obj.userlogin(this.user).subscribe(customer => {
            this.customerId = customer.customerId
            console.log(customer)
            console.log(this.customerId)
            console.log(customer.customerId)
          this.SaveCustomerId()
        }, error => {
          console.log(error)
        })
        this.SaveToken()
      }
      this.route.navigateByUrl('CustomerHome');
    }, err => {
      console.log(err.error)
      this.msg = "Invalid login";
    })
  }
  SaveToken() {
    localStorage.setItem("token", this.authtoken);
  }
  GetToken() {
    localStorage.getItem("token");
  }
  SaveCustomerId() {
    localStorage.setItem("CustomerId", this.customerId)
  }
  GetCustomerId() {
    localStorage.getItem("CustomerId")
  }
}
