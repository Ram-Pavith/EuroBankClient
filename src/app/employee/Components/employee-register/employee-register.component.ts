import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { EmployeeRegister } from 'src/Models/EmployeeRegister';
import { EmployeeservService } from '../../Services/employeeserv.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {
  msg:string = "";
  empregister:EmployeeRegister ={emailId:"",firstname:"",lastname:"",password:""}

  constructor(private empservice:EmployeeservService,private toastr:ToastrService,private router:Router){}

  register(){
    console.log(this.empregister)

    this.empservice.employeeRegister(this.empregister).subscribe(data =>{
      console.log(data);
      if(data.success) this.msg = "Success";
      this.toastr.success("Employee Successfully created");
      this.router.navigateByUrl('/EmployeeHome');

      
    },err =>{
      console.log(err.error)
      this.msg = "Error in Registration";
      this.toastr.error("Employee Creation Failed", err.error)
    })
  }
}
