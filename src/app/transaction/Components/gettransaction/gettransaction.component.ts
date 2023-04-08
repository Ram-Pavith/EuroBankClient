import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
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
  txnid:Guid
  Transaction:Transaction;
  
  constructor(private transactionservice:TransactionService,private route:ActivatedRoute)
  {
    
    this.txnid=Guid.parse(this.route.snapshot.paramMap.get('id'));
    console.log(this.txnid);
    this.getTransactionId_api(this.txnid);
  }
  ngOnInit(){
  }
  
    getTransactionId_api(tid:Guid):void{
      this.transactionservice.GetTransaction(tid).subscribe(x=>{
        this.Transaction=x;
        console.log(this.Transaction.transactionId);
        console.log(x);
      });
    }
  


}
