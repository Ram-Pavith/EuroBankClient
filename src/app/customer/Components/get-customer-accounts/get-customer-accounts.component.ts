import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { CustomerService } from '../../Services/customer.service';
import { Account } from 'src/Models/Account';

@Component({
  selector: 'app-get-customer-accounts',
  templateUrl: './get-customer-accounts.component.html',
  styleUrls: ['./get-customer-accounts.component.css']
})
export class GetCustomerAccountsComponent implements OnInit 
{
  id:string=""
  customer:Account[]=[];
  constructor(private obj:CustomerService) 
  {
    this.id=localStorage.getItem("CustomerId")
  }
  

  ngOnInit(): void {
    this.getaccounts();
  }

  getaccounts()
  {
    this.obj.getCustomerAccounts(this.id).subscribe(data =>{
      console.log(data);
      this.customer = data;
    },err =>{
      console.log(err);
    })
  }

}
