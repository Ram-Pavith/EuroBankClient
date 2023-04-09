import { Component } from '@angular/core';
import { AccountService } from 'src/app/account/Services/account.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  customerId:string="";
  msg:string="";
  constructor(private accountservice:AccountService){}

  ngOnInit(){}

  createaccount(){
    this.accountservice.CreateAccount(this.customerId).subscribe(data =>{
      console.log(data);
      this.msg = "Success";
    },err =>{
      console.log(err.error)
    })
  }
}
