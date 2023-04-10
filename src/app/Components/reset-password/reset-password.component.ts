import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BusinessService } from 'src/app/Services/business.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  user= {
    email:"",
    password:""
  }
  role:string
  constructor(private route:Router,private toastr:ToastrService,private businessService:BusinessService){
    this.role=localStorage.getItem("PasswordForgotBy")
    console.log(this.role)
  }

  ResetPassword(){
    this.businessService.resetPassword(this.user.email,this.user.password,this.role).subscribe(
      data=>{
        if(data.success){
          console.log(data)
          this.toastr.success("Password Succesfully Reset")
          if(this.role=="Customer"){
            localStorage.clear()
            this.route.navigateByUrl("/CustomerLogin")
          }
          if(this.role=="Employee"){
            localStorage.clear()
            this.route.navigateByUrl("/EmployeeLogin")
          }
        }
      },error=>{
        console.log(error)
        this.toastr.error("Password could not be Reset", error.error)
      }
    )

  }


}
