import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { RefTransactionStatus } from 'src/Models/RefTransactionStatus';
import { TransactionService } from '../../Services/transaction.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  depositform:FormGroup
 
  msg:string=''
  flag:boolean=false
  Amount:number
  paymentId:number
  deposit_btn_click:boolean=false;
  RefTransactionStatus:RefTransactionStatus={
    transactionStatusCode:0,
    transactionStatusDescription:""

  }

  

constructor(private transactionservice:TransactionService,private route:Router, private toastr :ToastrService){}
ngOnInit(): void { 
  this.depositform = new FormGroup({
    AccountId:new FormControl(),
    amount: new FormControl(),
    ServiceId: new FormControl()
  })
  
 }

deposit_api(AccountId:Guid,amount:number,PaymentId:number):void
{

  this.transactionservice.Deposit(AccountId,amount,PaymentId).subscribe(data=>{
    this.RefTransactionStatus=data;  
  console.log(data);

  if(data.transactionStatusCode == 1) {
    this.flag = true;
    this.msg="Transaction Success";
    this.toastr.success(this.msg,"Money Transfer Successful")

    
  //Logging the response received from web api.
  //this.route.navigateByUrl("/AccountDetails")
  }
  
},err=>{
    this.flag = false;
    this.msg=err.error
    this.toastr.success(this.msg,"Money Transfer Successful")
  })
}


onSubmit(form:FormGroup){

  this.deposit_api(Guid.parse(localStorage.getItem("AccountId")),this.Amount,this.paymentId);
  this.deposit_btn_click=true;
  
}
back(){
  this.route.navigateByUrl("/AccountsMenu")
}
}
