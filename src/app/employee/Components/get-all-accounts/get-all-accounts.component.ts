import { Component } from '@angular/core';
import { Account } from 'src/Models/Account';
import { EmployeeservService } from '../../Services/employeeserv.service';

@Component({
  selector: 'app-get-all-accounts',
  templateUrl: './get-all-accounts.component.html',
  styleUrls: ['./get-all-accounts.component.css']
})
export class GetAllAccountsComponent {
  accountsDTO:Account[] = [];
  constructor(private empserv:EmployeeservService){}

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
}
