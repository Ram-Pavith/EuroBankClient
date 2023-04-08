import { Component } from '@angular/core';
import { EmployeeLogin } from 'src/Models/EmployeeLogin';
import { EmployeeservService } from '../Services/employeeserv.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg:string = "";
  authToken:string = "";
  employeeloginDTO:EmployeeLogin = {emailId:"",password:""}

  constructor(private empservice:EmployeeservService,private route:Router){}

  login(){
    console.log(this.employeeloginDTO)

    this.empservice.employeelogin(this.employeeloginDTO).subscribe(data =>{
      {{debugger}}
      console.log(data);
      if(data.success){
        this.msg = "Success";
        this.authToken = data.token;
        this.SaveToken();
        this.route.navigateByUrl('/EmployeeHome');
      }
    },err =>{
      console.log(err.error)
      this.msg = "Invalid Login";
    })
  }
  SaveToken(){
    localStorage.setItem("token",this.authToken);
  }
}
