import { Component } from '@angular/core';
import { EmployeeservService } from '../../Services/employeeserv.service';
import { Customer } from 'src/Models/Customer';
import { CustomerRegister } from 'src/Models/CustomerRegister';
import { formatDate } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  msg:string="";
  customer:CustomerRegister = {customerId:"",
    emailId:"",
    firstname:"",
    lastname:"",
    address:"",
    phone:"",
    password:"",
    panNumber:"",
    dob:new Date()};
  Dob:Date = new Date();
  constructor(private empservice:EmployeeservService,private toastr:ToastrService){}

  ngOnInit(){
  }

  createCustomer(){
    //console.log(this.customer.dob.toISOString());
    //this.customer.dob = this.Dob.toISOString();
    //this.customer.dob = formatDate(this.Dob,'mm/dd/yyyy','en-US')
    this.empservice.createCustomer(this.customer).subscribe(data =>{
      console.log(this.customer)
      console.log(data);
      this.msg = "Success!!"
      this.toastr.success("Customer Created")
    },err =>{
      this.msg = "Error"
      this.toastr.error("Customer Creation Failed",err.error)
    })
  }
}
