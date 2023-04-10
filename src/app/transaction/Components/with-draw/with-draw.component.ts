import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { TransactionService } from 'src/app/transaction.service';
import { Router } from '@angular/router';
import { RefTransactionStatus } from 'src/Models/RefTransactionStatus';

@Component({
  selector: 'app-with-draw',
  templateUrl: './with-draw.component.html',
  styleUrls: ['./with-draw.component.css']
})
export class WithDrawComponent {
  withdrawform:FormGroup
  flag:Boolean
  Amount:number
  serviceId:number
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
constructor(private transactionservice:TransactionService,private route:Router){}
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
    ServiceId: new FormControl()
  })
  
 }
 

 withdraw_api(AccountId:Guid,amount:number,ServiceId:number):void
 {
   if((ServiceId == 1 && (amount >= 1 && amount <= 20000)) || (ServiceId == 2 && (amount >= 20000 && amount<=50000)) ||(ServiceId == 3 && (amount >= 1 && amount <= 50000))){
   
   this.transactionservice.Withdraw(AccountId,amount,ServiceId).subscribe(data=>{
     this.RefTransactionStatus=data;
     this.msg=data.transactionStatusDescription;
   if(data.transactionStatusCode == 1) {
     this.flag = true;  
     this.msg="Transaction Success"
     console.log(this.msg);
   //Logging the response received from web api.
   // this.route.navigateByUrl("/AccountDetails");
   }
   console.log(this.flag);
 },err=>{
     this.flag = false;
     this.msg=err.error
     
   })
 }
 else{
   if(ServiceId == 1){
     this.msg="For NEFT transcation amount should be less than 20000"
   }
   else if(ServiceId == 2){
     this.msg="For RTGS transcation amount should be between 20000 and 50000"
   }
   else if(ServiceId == 3){
     this.msg="For IMPS transcation amount should be less than 50000"
   }
   
 }
 
 }
onSubmit(form:FormGroup){

  this.withdraw_api(Guid.parse(localStorage.getItem("AccountId")),this.Amount,this.serviceId);
  
  this.withdraw_btn_click=true;   
}
back(){
  this.route.navigateByUrl("/AccountsMenu")
}}


