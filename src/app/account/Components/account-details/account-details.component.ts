import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';
import { Account } from 'src/Models/Account';
import { Guid } from 'guid-typescript';
import { AccountBalance } from 'src/Models/AccountBalance';
import { AccountCreationStatus } from 'src/Models/AccountCreationStatus';
import { CustomerService } from 'src/app/customer/Services/customer.service';
import { AcccountTypeEnum } from 'src/Models/AccountTypeEnum';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  accTypeLabel:string="";

  accDet: Account = {
    accountId: Guid.parse("00000000-0000-0000-0000-000000000000"),
    accountTypeId: 0,
    accountCreationStatusId: 0,
    customerId: "",
    dateCreated: new Date(),
    balance:0
  }

  constructor(private AccService: AccountService, private CustService: CustomerService, private router: Router) {
    this.CustService.GetAccount(Guid.parse("C0BF0099-9706-4231-B4DA-6452C043F614")).subscribe(data => {
      console.log(data);
      this.accDet = data;
      this.accTypeLabel = AcccountTypeEnum[data.accountTypeId];
    })
  }
  ngOnInit(): void {
  }

}
