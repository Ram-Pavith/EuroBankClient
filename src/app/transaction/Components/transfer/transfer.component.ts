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
  // transferform:FormGroup
 
  // msg:string=''
  // flag:boolean
  // transfer_btn_click:boolean=false
  // RefTransactionStatus:RefTransactionStatus={
  //   transactionStatusCode:0,
  //   transactionStatusDescription:""

 // }

  

constructor(private transactionservice:TransactionService,private route:Router){}
// ngOnInit(): void { 
//   this.transferform = new FormGroup({
//     TargetAccountId:new FormControl(),
//     amount: new FormControl(),
//     ServiceId: new FormControl()
//   })
  
//  }

// Transfer_api(SrcAccountId:Guid,TarAccountId:Guid,amount:number,ServiceId:number):void
// {
  
//   this.transactionservice.Transfer(SrcAccountId,TarAccountId,amount,ServiceId).subscribe(data=>{
//     this.RefTransactionStatus=data;
//     this.flag=false;
//     this.msg="Transaction Failure"
  
//   //Logging the response received from web api.
//   //this.route.navigateByUrl("Account")Mohana Page
//   console.log(data);
//   this.msg=data.transactionStatusDescription;
//   if(data.transactionStatusCode==1){
//     this.flag=true;
//     this.msg="Transaction success"
//   }
//   },err=>{
//   console.log(err.error)}
// )}

// onSubmit(form:FormGroup){
// console.log(form.value.TarAccountId);
//   this.Transfer_api(Guid.parse("3C8509FF-8855-48B5-84B3-46DD69E9D568"),Guid.parse(form.value.TargetAccountId),form.value.amount,form.value.ServiceId);
// this.transfer_btn_click=true;
// }

}
