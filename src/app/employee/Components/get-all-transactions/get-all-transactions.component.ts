import { Component } from '@angular/core';
import { Transaction } from 'src/Models/Transaction';
import { EmployeeservService } from '../../Services/employeeserv.service';
import {PaginationModule } from 'ngx-bootstrap/pagination';
import { ServiceEnum } from 'src/Models/ServiceEnum';
@Component({
  selector: 'app-get-all-transactions',
  templateUrl: './get-all-transactions.component.html',
  styleUrls: ['./get-all-transactions.component.css']
})
export class GetAllTransactionsComponent {
  transactionsDTO:Transaction[] = [];
  msg:string="";
  pageSize = 5
  pages:number
  pageNumber=1

  constructor(private empserv:EmployeeservService){
    empserv.getAllTransactionPageNumbers(this.pageSize).subscribe(
      data=>{
        this.pages = data
        console.log(this.pages)
      }
      ,error=>{
        console.log(error.error)
      }
    )
  }

  ngOnInit(){
    this.gettransactions();
  }

  GetServiceTypeLabel(id:number):String{
    return ServiceEnum[id];
  }
  
  gettransactions(){
    this.empserv.getAllTransactions(this.pageNumber,this.pageSize).subscribe(data =>{
      console.log(data);
      if(data.length == 0) this.msg = "No transactions";
      this.transactionsDTO = data;
    },err =>{
      console.log(err);
    })
  }
  onPageChanged(event:any){
    console.log(event)
      this.pageNumber=event.page
      this.gettransactions()
  }
}
