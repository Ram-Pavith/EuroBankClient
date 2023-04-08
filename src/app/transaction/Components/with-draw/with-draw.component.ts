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
  isValidFormSubmitted = null;
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
  
  this.transactionservice.Withdraw(AccountId,amount,ServiceId).subscribe(data=>{
    this.RefTransactionStatus=data;
    this.msg=data.transactionStatusDescription;
    console.log(this.msg);
  console.log(data);
  this.flag=false;
  this.msg="Transaction Failure";
  if(data.transactionStatusCode == 1) {
    this.flag = true;  
    this.msg="Transaction Success"
    console.log(this.msg);
  //Logging the response received from web api.
  this.route.navigateByUrl("/AccountDetails");
  }
  console.log(this.flag);
  
},err=>{
    this.flag = false;
    
  })
  

}
onSubmit(form:FormGroup){
  this.withdraw_api(Guid.parse("97F891B9-8321-4B37-9D93-95F10FCD7771"),form.value.amount,form.value.ServiceId);
  this.withdraw_btn_click=true;
  
   
}
}

