import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    transactionId: Guid.parse(''),
    counterPartyId:Guid.parse(''),
    accountId: Guid.parse(''),
    serviceId: 0,
    refTransactionStatusId: 0,
    refTransactionTypeId: 0,
    refPaymentMethodId: 0,
    dateOfTransaction: undefined,
    amountOfTransaction: 0
  }
  private routesub:Subscription
  constructor(private transactionservice:TransactionService,private route:Router){}
  ngOnInit(){
    this.routesub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      //console.log(params['id'].Type) //log the value of id
      this.editid = params['id'];
      console.log(this.editid)
      this.getid_api();
    });

  }

}
