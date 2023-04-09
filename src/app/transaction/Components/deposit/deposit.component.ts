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
  flag:boolean=false
  Amount:number
  serviceId:number
  deposit_btn_click:boolean=false;
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
  if((ServiceId == 1 && (amount >= 1 && amount <= 200000)) || (ServiceId == 2 && (amount >= 20000 && amount<=200000)) ||(ServiceId == 3 && (amount >= 1 && amount <= 200000))){

  this.transactionservice.Deposit(AccountId,amount,ServiceId).subscribe(data=>{
    this.RefTransactionStatus=data;  
  console.log(data);

  if(data.transactionStatusCode == 1) {
    this.flag = true;
    this.msg="Transaction Success";
    
  //Logging the response received from web api.
  //this.route.navigateByUrl("/AccountDetails")
  }
  
},err=>{
    this.flag = false;
    this.msg=err.error
  })
}
else{
  if(ServiceId == 1){
    this.msg="For NEFT transcation amount should be less than 200000"
  }
  else if(ServiceId == 2){
    this.msg="For RTGS transcation amount should be between 20000 and 200000"
  }
  else if(ServiceId == 3){
    this.msg="For IMPS transcation amount should be less than 200000"
  }
}

  
}
onSubmit(form:FormGroup){

  this.deposit_api(Guid.parse(localStorage.getItem("AccountId")),this.Amount,this.serviceId);
  this.deposit_btn_click=true;
  
}
back(){
  this.route.navigateByUrl("/AccountsMenu")
}
}
