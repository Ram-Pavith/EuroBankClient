import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { TransactionService } from 'src/app/transaction.service';
import { Transaction } from 'src/Models/Transaction';

@Component({
  selector: 'app-getalltransactions',
  templateUrl: './getalltransactions.component.html',
  styleUrls: ['./getalltransactions.component.css']
})
export class GetalltransactionsComponent implements OnInit{
  Transactions:Transaction[]=[]
  ngOnInit(): void {
    this.getalltransaction_api(this.CustomerId);
  }
  CustomerId:string=localStorage.getItem('CustomerId')
  constructor(private TransactionService:TransactionService,private router:Router){}

  getalltransaction_api(CustomerId:string)
  {
     this.TransactionService.GetAllTransaction(this.CustomerId).subscribe(data=>{
    this.Transactions=data;
       console.log(this.Transactions);
     });
  }
 
  }

 

