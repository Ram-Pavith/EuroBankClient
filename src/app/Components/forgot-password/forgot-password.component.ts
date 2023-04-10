import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BusinessService } from 'src/app/Services/business.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email = {
    to :"",
    subject:"",
    body:""
  }
  role:string
  constructor(private toastr:ToastrService,private businessService:BusinessService){
    this.role = localStorage.getItem("PasswordForgotBy")
  }
  submit(){

  }
  ForgotPassword(){
    this.email.subject = "Reset Password Email";
    this.email.body = "<p> Click on this Link to Reset Password :<a href='http://localhost:4200/ResetPassword'>Reset Password</a></p>"
    this.businessService.sendEmail(this.email.to,this.email.subject,this.email.body,this.role).subscribe(data=>{
      console.log(data)
      if(data.success="Success"){
        this.toastr.success("Password Reset Email sent","Email sent to "+this.email.to)
      }
    },error=>{
      this.toastr.error("Password Reset Email not Sent,Error!",error.error)
    }
    )
  }
}
