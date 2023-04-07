import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  flag:Boolean = false;
  msg:string=''
  RefTransactionStatus:RefTransactionStatus={
    transactionStatusCode:0,
    transactionStatusDescription:""

  }

  

constructor(private transactionservice:TransactionService,private route:Router){}
ngOnInit(): void { 
  this.withdrawform = new FormGroup({
    AccountId:new FormControl(),
    amount: new FormControl(),
    ServiceId: new FormControl()
  })
  
 }

withdraw_api(AccountId:Guid,amount:number,ServiceId:number):void
{
  
  this.transactionservice.Withdraw(AccountId,amount,ServiceId).subscribe(data=>{
    this.RefTransactionStatus=data;
  
  console.log(data);

  if(data.transactionStatusCode == 1) {
    this.flag = true;
    this.msg=data.transactionStatusDescription;
  //Logging the response received from web api.
  //this.route.navigateByUrl("Account")Mohana Page
  }},err=>{
    this.flag = false;
  })
}
onSubmit(form:FormGroup){

  this.withdraw_api(Guid.parse("3C8509FF-8855-48B5-84B3-46DD69E9D568"),form.value.amount,form.value.ServiceId);
}
}
