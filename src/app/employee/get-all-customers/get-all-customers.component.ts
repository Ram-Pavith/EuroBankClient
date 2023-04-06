import { Component } from '@angular/core';
import { EmployeeservService } from '../Services/employeeserv.service';
import { CustomerDTO } from 'src/Models/CustomerDTO';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent {

  customersDTO:CustomerDTO[] = [];
  constructor(private empserv:EmployeeservService){}

  ngOnInit(){
    this.getcustomers();
  }

  getcustomers(){
    this.empserv.getAllCustomers().subscribe(data =>{
      console.log(data);
      this.customersDTO = data;
    },err =>{
      console.log(err);
    })
  }
}
