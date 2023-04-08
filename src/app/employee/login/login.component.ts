import { Component } from '@angular/core';
import { EmployeeLogin } from 'src/Models/EmployeeLogin';
import { EmployeeservService } from '../Services/employeeserv.service';
import { Route, Router } from '@angular/router';
import { Guid } from 'guid-typescript';

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
  constructor(private empservice:EmployeeservService,private route:Router){}
  login(){
    console.log(this.employeeloginDTO)

    this.empservice.employeeAuthorize(this.employeeloginDTO).subscribe(data =>{
      console.log(data);
      if(data.success) {
        this.msg = "Success";
        this.authToken = data.token;
        this.empservice.employeelogin(this.employeeloginDTO).subscribe(emp=>{
          this.employeeId = emp.employeeId
          this.SaveEmployeeId()
        }
          )
        this.SaveToken()
      }
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
  SaveEmployeeId(){
    localStorage.setItem("EmployeeId",this.employeeId);
  }
  GetEmployeeId(){
    localStorage.getItem("EmployeeId");
  }
}
