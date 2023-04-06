import { Component } from '@angular/core';
import { TransactionDTO } from 'src/Models/TransactionDTO';
import { EmployeeservService } from '../Services/employeeserv.service';

@Component({
  selector: 'app-get-all-transactions',
  templateUrl: './get-all-transactions.component.html',
  styleUrls: ['./get-all-transactions.component.css']
})
export class GetAllTransactionsComponent {
  transactionsDTO:TransactionDTO[] = [];
  msg:string="";
  constructor(private empserv:EmployeeservService){}

  ngOnInit(){
    this.gettransactions();
  }

  gettransactions(){
    this.empserv.getAllTransactions().subscribe(data =>{
      console.log(data);
      if(data.length == 0) this.msg = "No transactions";
      this.transactionsDTO = data;
    },err =>{
      console.log(err);
    })
  }
}
