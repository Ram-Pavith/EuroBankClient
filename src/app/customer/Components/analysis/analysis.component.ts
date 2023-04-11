import { Component } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { Transaction } from 'src/Models/Transaction';
import { TransactionService } from '../../../transaction/Services/transaction.service';
import { CustomerService } from '../../Services/customer.service';
import Chart from 'chart.js/auto';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent {
  customerTransactions: [];
  msg: string;
  id: string = localStorage.getItem('CustomerId');
  public chart: any;
  dates: string[] = [];
  uniqueDates: string[] = [];
  dateCounts: number[]= [];

  constructor(private obj: CustomerService) {
    //
  }

  ngOnInit(): void {
    this.transactions();

  }

  transactions() {
    this.obj.ViewAllTransaction(this.id).subscribe(
      (data) => {
        if (data.length == 0) this.msg = 'No transactions';
        this.customerTransactions = data;
        console.log(this.customerTransactions);
        this.GetDates();
        this.GetDateCounts();
        this.createChart();

      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  GetDates() {
    console.log('inside get Dates');
    this.customerTransactions.forEach((element) => this.uniqueDatesPush(element));
    console.log(this.dates)
    console.log(this.uniqueDates);
  }
  GetDateCounts() {
    console.log('inside date counts');

    for(var item in this.uniqueDates){
      var x = parseInt((this.uniqueDates[item]))
      this.dateCounts.push(x)

    }
    console.log(this.dateCounts)
  }
  uniqueDatesPush(element){
    var milliseconds = Date.parse(element.dateOfTransaction)
    var datestring = new Date(milliseconds)
    var date = datestring.toDateString()

        this.dates.push(date)
        this.uniqueDates[date] = this.uniqueDates[date]?this.uniqueDates[date]+1:1
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.uniqueDates,
        datasets: [
          {
            label: 'Customer Transactions ',
            data: this.dateCounts,
            backgroundColor: 'blue',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
