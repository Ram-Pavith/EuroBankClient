import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { RefTransactionStatus } from 'src/Models/RefTransactionStatus';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
   transferform:FormGroup
 
  msg:string=''
  flag:boolean
  transfer_btn_click:boolean=false
  targetaccountId:string
  Amount:number
  serviceId:number
  RefTransactionStatus:RefTransactionStatus={
    transactionStatusCode:0,
    transactionStatusDescription:""

 }

  

constructor(private transactionservice:TransactionService,private route:Router){}
ngOnInit(): void { 
  this.transferform = new FormGroup({
    TargetAccountId:new FormControl(),
    amount: new FormControl(),
    ServiceId: new FormControl()
  })
  
 }

Transfer_api(SrcAccountId:Guid,TarAccountId:Guid,amount:number,ServiceId:number):void
{
  if((ServiceId == 1 && (amount >= 1 && amount <= 20000)) || (ServiceId == 2 && (amount >= 20000 && amount<=50000)) ||(ServiceId == 3 && (amount >= 1 && amount <= 50000))){

  this.transactionservice.Transfer(SrcAccountId,TarAccountId,amount,ServiceId).subscribe(data=>{
    this.RefTransactionStatus=data;
  //Logging the response received from web api.
  //this.route.navigateByUrl("Account")Mohana Page
  console.log(data);
  console.log(data.transactionStatusCode);
  this.msg=data.transactionStatusDescription;
  if(data.transactionStatusCode==1){
    console.log(data.transactionStatusCode)
    this.flag=true;
    this.msg="Transaction success"
  }
  },err=>{
  this.flag=false;
  console.log(err.error)
  this.msg=err.error
}  )}
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
console.log(this.targetaccountId,this.Amount,this.serviceId)
  this.Transfer_api(Guid.parse(localStorage.getItem("AccountId")),Guid.parse(this.targetaccountId),this.Amount,this.serviceId);
this.transfer_btn_click=true;
}
back(){
  this.route.navigateByUrl("/AccountsMenu")
}

}
