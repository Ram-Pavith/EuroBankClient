import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { RefTransactionStatus } from 'src/Models/RefTransactionStatus';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  depositform:FormGroup
 
  msg:string=''
  RefTransactionStatus:RefTransactionStatus={
    transactionStatusCode:0,
    transactionStatusDescription:""

  }

  

constructor(private transactionservice:TransactionService,private route:Router){}
ngOnInit(): void { 
  this.depositform = new FormGroup({
    AccountId:new FormControl(),
    amount: new FormControl(),
    ServiceId: new FormControl()
  })
  
 }

deposit_api(AccountId:Guid,amount:number,ServiceId:number):void
{
  {{debugger}}
  this.transactionservice.Deposit(AccountId,amount,ServiceId).subscribe(data=>{
    this.RefTransactionStatus=data;
  this.msg="Successfully created ";
  //Logging the response received from web api.
  //this.route.navigateByUrl("Account")Mohana Page
  console.log(data);
  console.log(this.msg);
  })
}
onSubmit(form:FormGroup){

  this.deposit_api(Guid.parse("3C8509FF-8855-48B5-84B3-46DD69E9D568"),form.value.amount,form.value.ServiceId);

}
}
