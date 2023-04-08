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
export class CustomerLoginComponent 
{
  userform:FormGroup=new FormGroup({})
users:Customer[]=[];
username:string="";
password:string="";
user:CustomerLogin=
 {
   emailId:"",
   password:""
 };
 msg:string="";
 authtoken:string="";
 errormsg=""
 token:string="";
 use:any;

constructor(private obj:CustomerService,private route:Router, private bj:TransactionService){}

  
  IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }

  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl('/Login');
  }
  login()
  {
    console.log(this.user)    
    this.obj.userlogin(this.user).subscribe(data=>{
      console.log(data.token);
      if(data.Success){
      this.msg="Success";
      this.authtoken = data.token;
      this.SaveToken()
    }
      this.authtoken=data.token;
      this.SaveToken();
      this.obj.GetAccount(Guid.parse("FFA504B0-9CCE-4350-A6FA-974668B725C3")).subscribe(dat => console.log(dat))
      this.obj.getCustomerAccounts("CustomerEurobank").subscribe(dat => console.log(dat))
      this.obj.GetCustomerStatement("CustomerEurobank",null,null).subscribe(dat => console.log(dat))
      this.bj.GetAllTransaction("CustomerEurobank").subscribe(data => console.log(data))
      this.route.navigateByUrl('CustomerHome');
    },err=>{
      console.log(err.error)
      this.msg="Invalid login";
    })
    }
    SaveToken()
  {
    localStorage.setItem("token",this.authtoken);
  }
  GetToken(){
    localStorage.getItem("token");
  }

  }
