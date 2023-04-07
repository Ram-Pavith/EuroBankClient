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
  CustomerId:string='CustomerEuroBank'
  constructor(private TransactionService:TransactionService,private router:Router){}

  getalltransaction_api(CustomerId:string)
  {
     this.TransactionService.GetAllTransaction(this.CustomerId).subscribe(data=>{
    this.Transactions=data;
       //this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
       //Logging the response recieved from web api.
       console.log(this.Transactions);
     });
  }
 
  }

 

