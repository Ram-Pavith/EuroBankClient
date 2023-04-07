import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/Models/Customer';
import { CustomerLogin } from 'src/Models/CustomerLogin';
import { CustomerService } from 'src/app/customer/Services/customer.service';

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
constructor(private obj:CustomerService,private route:Router){}

  
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
      if(data.Success)
      this.msg="Success";
      this.authtoken=data.token;
      this.SaveToken();
      this.obj.getCustomerAccounts("CustomerEurobank").subscribe(dat => console.log(dat))
      this.route.navigateByUrl('home');
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
