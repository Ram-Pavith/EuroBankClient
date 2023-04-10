import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Customer } from 'src/Models/Customer';
import { TransactionService } from 'src/app/transaction/Services/transaction.service';
import { EmployeeservService } from '../../Services/employeeserv.service';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent {
  custId:string;
  customer:Customer[];
  
  constructor(private empservice:EmployeeservService,private route:ActivatedRoute)
  {   
    this.custId=this.route.snapshot.paramMap.get('id');
    console.log(this.custId);
    this.getcustomerbycustomerId(this.custId);
  }
  ngOnInit(){
  }
  
    getcustomerbycustomerId(custId:string):void{
      this.empservice.getcustomerbycutomerid(custId).subscribe(data=>{
        this.customer = data;
        //console.log(this.customer);
        console.log(data);
      });
    }
}
