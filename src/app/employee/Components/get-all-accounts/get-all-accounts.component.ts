import { Component } from '@angular/core';
import { Account } from 'src/Models/Account';
import { EmployeeservService } from '../../Services/employeeserv.service';
import { AcccountTypeEnum } from 'src/Models/AccountTypeEnum';
import { BusinessService } from 'src/app/Services/business.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-all-accounts',
  templateUrl: './get-all-accounts.component.html',
  styleUrls: ['./get-all-accounts.component.css']
})
export class GetAllAccountsComponent {
  accountsDTO:Account[] = [];
  //acctype:AcccountTypeEnum;
  constructor(private empserv:EmployeeservService,private businessService:BusinessService, private toastr:ToastrService){}

  ngOnInit(){
    this.getaccounts();
  }

  getaccounts(){
    this.empserv.getAllAccounts().subscribe(data =>{
      console.log(data);
      this.accountsDTO = data;
    },err =>{
      console.log(err);
    })
  }
  serviceCharges(){
    this.businessService.serviceChargesApply().subscribe(data =>{
      this.toastr.success("Service charges applied for "+data+ " accounts ")
    },err =>{
      this.toastr.error("Service charges not applied,Error!",err.error)
    })
  }
}
