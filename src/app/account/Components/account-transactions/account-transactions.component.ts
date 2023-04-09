import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { Guid } from 'guid-typescript';
import { Transaction } from 'src/Models/Transaction';
import { AcccountTypeEnum } from 'src/Models/AccountTypeEnum';
import { ServiceEnum } from 'src/Models/ServiceEnum';

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnInit {
  //get using route parameter / localstorage
  AccId: string = localStorage.getItem("AccountId");
  searchItem:number;

  AccTransactions:Transaction[] = [];

  constructor(private AccService:AccountService){
    this.AccService.GetAccTransactions(Guid.parse(this.AccId)).subscribe(data =>{
      console.log(data);
      this.AccTransactions = data;
      
    });
  }

  ngOnInit(): void {
    
  }

  GetServiceTypeLabel(id:number):String{
    return ServiceEnum[id];
  }
}
