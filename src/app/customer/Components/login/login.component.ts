import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/Models/Customer';
import { CustomerLoginDTO } from 'src/Models/CustomerLoginDTO';
import { CustomerService } from 'src/app/CustomerServices/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  userform:FormGroup=new FormGroup({})
users:Customer[]=[];
username:string="";
password:string="";
user:CustomerLoginDTO=
 {
   EmailId:"",
   Password:""
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
