import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { CustomerService } from '../../Services/customer.service';

@Component({
  selector: 'app-get-customer-statement',
  templateUrl: './get-customer-statement.component.html',
  styleUrls: ['./get-customer-statement.component.css']
})
export class GetCustomerStatementComponent implements OnInit
{
  customer:Customer[]=[];
  constructor(private obj:CustomerService) {}
  id:string=""
  Fdate:Date
  Tdate:Date
  msg:string

  ngOnInit()
   {
    this.getstatement();
  }

  getstatement()
  {
    this.obj.GetCustomerStatement(this.id,this.Fdate,this.Tdate).subscribe(data=>{
      console.log(data);
      if(data.length == 0) this.msg = "No transactions";
      this.customer = data;
    },err =>{
      console.log(err);
    })
  }

}
