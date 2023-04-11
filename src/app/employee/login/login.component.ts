import { Component } from '@angular/core';
import { EmployeeLogin } from 'src/Models/EmployeeLogin';
import { EmployeeservService } from '../Services/employeeserv.service';
import { Route, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg:string = "";
  authToken:string = "";
  employeeloginDTO:EmployeeLogin = {emailId:"",password:""}
  employeeId:string
  constructor(private empservice:EmployeeservService,private route:Router,private toastr:ToastrService,private authService:AuthService){}
  login(){
    console.log(this.employeeloginDTO)

    this.empservice.employeeAuthorize(this.employeeloginDTO).subscribe(data =>{
      console.log(data);
      if(data.success) {
        this.msg = "Success";
        this.toastr.success(this.msg,"Succesfully Logged In")
        this.authToken = data.token;
        this.SaveToken();
        this.empservice.employeelogin(this.employeeloginDTO).subscribe(emp=>{
          this.employeeId = emp.employeeId
          localStorage.setItem("UserName",emp.firstname+emp.lastname);
          this.SaveEmployeeId()
        })
        this.SaveToken()
        this.authService.login('Employee')
        this.route.navigateByUrl('/EmployeeHome');
      }
    },err =>{
      console.log(err.error)
      this.toastr.error(err.error,"Wrong Credentials")
      this.msg = "Invalid Login";
    })
  }
  SaveToken(){
    localStorage.setItem("token",this.authToken);
  }
  SaveEmployeeId(){
    localStorage.setItem("EmployeeId",this.employeeId);
  }
  GetEmployeeId(){
    localStorage.getItem("EmployeeId");
  }
  logout(){
    localStorage.clear();
    this.authService.logout
    this.route.navigateByUrl('/EmployeeLogin');  }

  ForgotPassword(){
    localStorage.setItem("PasswordForgotBy","Employee")
    this.route.navigateByUrl("/ForgotPassword")
  }
}
