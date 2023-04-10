import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/Services/account.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  customerId:string="";
  msg:string="";
  constructor(private accountservice:AccountService, private toastr:ToastrService){}

  ngOnInit(){}

  createaccount(){
    this.accountservice.CreateAccount(this.customerId).subscribe(data =>{
      console.log(data);
      this.msg = "Success";
      this.toastr.success("Account Succefully Created")
    },err =>{
      console.log(err.error)
      this.toastr.error("Account Creation failed",err.error)
    })
  }
}
