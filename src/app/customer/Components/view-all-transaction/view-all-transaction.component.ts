import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { Transaction } from 'src/Models/Transaction';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-view-all-transaction',
  templateUrl: './view-all-transaction.component.html',
  styleUrls: ['./view-all-transaction.component.css']
})
export class ViewAllTransactionComponent implements OnInit
 {
  customer:Transaction[]=[]
  msg:string
  id:string="CustomerEurobank"
  constructor(private obj:TransactionService){}

  ngOnInit(): void {
    this.transactions()
  }
  

transactions()
{
  this.obj.GetAllTransaction(this.id).subscribe(data=>{
    console.log(data);
    if(data.length == 0) this.msg = "No transactions";
    this.customer = data;
  },err =>{
    console.log(err);
  })
}



}
