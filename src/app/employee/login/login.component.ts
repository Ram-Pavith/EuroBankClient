import { Component } from '@angular/core';
import { EmployeeLogin } from 'src/Models/EmployeeLogin';
import { EmployeeservService } from '../Services/employeeserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg:string = "";
  employeeloginDTO:EmployeeLogin = {emailId:"",password:""}

  constructor(private empservice:EmployeeservService){}

  login(){
    console.log(this.employeeloginDTO)

    this.empservice.employeelogin(this.employeeloginDTO).subscribe(data =>{
      console.log(data);
      if(data.success) this.msg = "Success";
      
    },err =>{
      console.log(err.error)
      this.msg = "Invalid Login";
    })
  }

}