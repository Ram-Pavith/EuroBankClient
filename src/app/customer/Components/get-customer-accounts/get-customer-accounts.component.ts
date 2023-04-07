import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { CustomerService } from 'src/app/CustomerServices/customer.service';

@Component({
  selector: 'app-get-customer-accounts',
  templateUrl: './get-customer-accounts.component.html',
  styleUrls: ['./get-customer-accounts.component.css']
})
export class GetCustomerAccountsComponent implements OnInit 
{
  customer:Customer[]=[];
  constructor(private obj:CustomerService) {}
  id:string="";

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
