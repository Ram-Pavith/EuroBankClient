import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Account } from 'src/Models/Account';
import { Guid } from 'guid-typescript';
import { AccountBalance } from 'src/Models/AccountBalance';
import { AccountCreationStatus } from 'src/Models/AccountCreationStatus';
import { CustomerService } from 'src/app/customer/Services/customer.service';
import { AcccountTypeEnum } from 'src/Models/AccountTypeEnum';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth-service.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  accTypeLabel:string="";
  accId:Guid
  accIdString:string
  accDet: Account = {
    accountId: Guid.parse("00000000-0000-0000-0000-000000000000"),
    accountTypeId: 0,
    accountCreationStatusId: 0,
    customerId: "",
    dateCreated: new Date(),
    balance:0
  }
  
  constructor(private AccService: AccountService, private CustService: CustomerService, private router: Router,private route:ActivatedRoute,private toastr:ToastrService,private authService:AuthService) {
    this.accId= Guid.parse(this.route.snapshot.paramMap.get('id')); 
    this.accIdString = this.route.snapshot.paramMap.get('id');
    this.CustService.GetAccount(this.accId).subscribe(data => {
      console.log(data);
      this.accDet = data;
      this.accTypeLabel = AcccountTypeEnum[data.accountTypeId];
    })
  }
  ngOnInit(): void {
  }
  SaveAccountId(){
    localStorage.setItem("AccountId",this.accIdString)
    this.authService.login('Account')
    localStorage.setItem("ROLE","Account")
    localStorage.setItem("First","false")
    this.toastr.success(this.accIdString,"Account Chosen")
    this.router.navigateByUrl( "/AccountsMenu");
  }

}
