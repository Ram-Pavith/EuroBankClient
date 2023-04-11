import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { TransactionService } from '../../Services/transaction.service';
import { Router } from '@angular/router';
import { RefTransactionStatus } from 'src/Models/RefTransactionStatus';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-with-draw',
  templateUrl: './with-draw.component.html',
  styleUrls: ['./with-draw.component.css']
})
export class WithDrawComponent {
  withdrawform:FormGroup
  flag:Boolean
  Amount:number
  paymentId:number
  //amount:number
  withdraw_btn_click:boolean=false
  msg:string="TransactionFailure"
  customMin:1
  customMax:20000
  RefTransactionStatus:RefTransactionStatus={
    transactionStatusCode:0,
    transactionStatusDescription:""

  }
constructor(private transactionservice:TransactionService,private route:Router,private toastr:ToastrService){}
ngOnInit(): void { 
  this.withdrawform = new FormGroup({
    
    AccountId:new FormControl(
      Validators.required
    ),
    amount: new FormControl([
      Validators.required,
      Validators.min(1),
      Validators.max(20000)]
      
    ),
    PaymentId: new FormControl()
  })
  
 }
 

 withdraw_api(AccountId:Guid,amount:number,PaymentId:number):void
 {
   
   this.transactionservice.Withdraw(AccountId,amount,PaymentId).subscribe(data=>{
     this.RefTransactionStatus=data;
     this.msg=data.transactionStatusDescription;
   if(data.transactionStatusCode == 1) {
     this.flag = true;  
     this.msg="Transaction Success"
     this.toastr.success("Succesfully withdrawed")
     console.log(this.msg);
   //Logging the response received from web api.
   // this.route.navigateByUrl("/AccountDetails");
   }
   console.log(this.flag);
 },err=>{
     this.flag = false;
     this.msg=err.error
     this.toastr.error("Withdraw Failed",err.error)

     
   })
 
 
 }
onSubmit(form:FormGroup){

  this.withdraw_api(Guid.parse(localStorage.getItem("AccountId")),this.Amount,this.paymentId);
  
  this.withdraw_btn_click=true;   
}
back(){
  this.route.navigateByUrl("/AccountsMenu")
}}


