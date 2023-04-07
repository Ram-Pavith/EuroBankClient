import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';
import { Account } from 'src/Models/Account';
import { Guid } from 'guid-typescript';
import { AccountBalance } from 'src/Models/AccountBalance';
import { AccountCreationStatus } from 'src/Models/AccountCreationStatus';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit{
  
  
  


  constructor(private AccService: AccountService,private router:Router)
  {

  }
  ngOnInit(): void {
    
    
    
  }



}
