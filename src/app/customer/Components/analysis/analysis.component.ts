import { Component } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { Transaction } from 'src/Models/Transaction';
import { TransactionService } from 'src/app/transaction.service';
import { CustomerService } from '../../Services/customer.service';
import Chart from 'chart.js/auto';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  customerTransactions:Transaction[]=[]
  msg:string
  id:string=localStorage.getItem("CustomerId");
  public chart: any;
  dates:string[]
  uniqueDates:string[]
  dateCounts:number[]

  constructor(private obj:CustomerService){
    this.transactions()
    //this.createChart()
  }

  ngOnInit(): void {
  }
  

transactions()
{{{debugger}}
  this.obj.ViewAllTransaction(this.id).subscribe(data=>{
    console.log(data);
    if(data.length == 0) this.msg = "No transactions";
    this.customerTransactions = data;
  },err =>{
    console.log(err.error);
  })
  this.GetDates()
  this.GetDateCounts()
}

GetDates(){
  for(var item of this.customerTransactions){
    var date = formatDate(item.dateOfTransaction,'mm/dd/yyyy','en-US')
      this.dates.push(date)
      if(!this.uniqueDates.includes(date)){
        this.uniqueDates.push(date)
      }
      console.log(date)
  }
  console.log(this.uniqueDates)
}
GetDateCounts(){
  for(var item of this.uniqueDates){
    this.dateCounts.push(this.dates.filter((x) => x == item).length)
  }
  console.log(this.dateCounts)
}

createChart(){
  
  this.chart = new Chart("MyChart", {
    type: 'bar', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: this.uniqueDates, 
       datasets: [
        {
          label: "Sales",
          data: this.dateCounts,
          backgroundColor: 'blue'
        } 
      ]
    },
    options: {
      aspectRatio:2.5
    }
    
  });
}

}
