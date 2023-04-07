import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Subscription } from 'rxjs';
import { Transaction } from 'src/Models/Transaction';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-gettransaction',
  templateUrl: './gettransaction.component.html',
  styleUrls: ['./gettransaction.component.css']
})
export class GettransactionComponent implements OnInit {
  Transaction:Transaction={
    transactionId: Guid.create(),
    counterPartyId:Guid.create(),
    accountId: Guid.create(),
    serviceId: 0,
    refTransactionStatusId: 0,
    refTransactionTypeId: 0,
    refPaymentMethodId: 0,
    dateOfTransaction: undefined,
    amountOfTransaction: 0
  }
  
  transactionId:any='ED5CE86B-DC55-4859-990B-15ACC380CB0E';
  private routesub:Subscription
  constructor(private transactionservice:TransactionService,private route:ActivatedRoute){}
  ngOnInit(){
    console.log("welcome");
    console.log(this.transactionId);
    this.getTransactionId_api();
    this.routesub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id'].Type) //log the value of id
     this.transactionId = Guid.parse(params['id']);
     
      
   });

  }
  
    getTransactionId_api():void{
      console.log(this.transactionId);
      this.transactionservice.GetTransaction((this.transactionId)).subscribe(x=>{
        this.Transaction=x;
        console.log(this.Transaction.transactionId);
        console.log(x);
      });
    }
  


}
