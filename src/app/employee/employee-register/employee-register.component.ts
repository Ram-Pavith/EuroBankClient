import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { EmployeeRegister } from 'src/Models/EmployeeRegister';
import { EmployeeservService } from '../Services/employeeserv.service';
@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {
  msg:string = "";
  empregister:EmployeeRegister ={emailId:"",firstname:"",lastname:"",password:""}

  constructor(private empservice:EmployeeservService){}

  register(){
    console.log(this.empregister)

    this.empservice.employeeRegister(this.empregister).subscribe(data =>{
      console.log(data);
      if(data.success) this.msg = "Success";
      
    },err =>{
      console.log(err.error)
      this.msg = "Error in Registration";
    })
  }
}
