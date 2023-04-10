import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { Transaction } from 'src/Models/Transaction';
import { TransactionService } from '../../../transaction/Services/transaction.service';
import { CustomerService } from '../../Services/customer.service';
import Chart from 'chart.js/auto';
import { formatDate } from '@angular/common';
import { ServiceEnum } from 'src/Models/ServiceEnum';


@Component({
  selector: 'app-view-all-transaction',
  templateUrl: './view-all-transaction.component.html',
  styleUrls: ['./view-all-transaction.component.css']
})
export class ViewAllTransactionComponent implements OnInit
 {
  customerTransactions:Transaction[]=[]
  msg:string
  id:string=localStorage.getItem("CustomerId");
  public chart: any;
  dates:string[]
  uniqueDates:string[]
  dateCounts:number[]
  filterItemType:string;
  filterItemDate:string;
  filterItemServ:string;
  display='none';
  showTable=false;

  constructor(private obj:CustomerService){
    this.transactions()
    //this.createChart()
  }

  ngOnInit(): void {
  }
  

transactions()
{
  this.obj.ViewAllTransaction(this.id).subscribe(data=>{
    console.log(data);
    if(data.length == 0) {this.msg = "No transactions";this.showTable=false}
    if(data.length>0){
      this.customerTransactions = data;
    this.showTable=true;
    }
    
  },err =>{
    console.log(err.error);
  })
  //this.GetDates()
  //this.GetDateCounts()
}
GetServiceTypeLabel(id:number):String{
  return ServiceEnum[id];
}

openModal(){
  this.display='block';
}
onCloseHandled(){
this.display='none';
}


}
