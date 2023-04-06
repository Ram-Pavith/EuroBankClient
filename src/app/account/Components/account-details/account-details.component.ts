import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';
import { Account } from 'src/Models/Account';
import { Guid } from 'guid-typescript';
import { AccountBalance } from 'src/Models/AccountBalance';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit{
  _account:Account = {
    accountId: Guid.parse("00000000-0000-0000-0000-000000000000"),
    accountTypeId:0,
    accountCreationStatusId:0,
    customerId:"",
    dateCreated:new Date(),
    balance:0
  }

  _accBal:AccountBalance = {
    accountId: Guid.parse("00000000-0000-0000-0000-000000000000"),
    balance:0
  }

  str:string;

  constructor(private AccService: AccountService,private router:Router)
  {

  }
  ngOnInit(): void {
    //this.AccService.GetAccountBalance(Guid.parse(""))
   
  }



}
