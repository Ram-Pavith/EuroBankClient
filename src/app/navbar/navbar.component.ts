import { Component, ViewChild } from '@angular/core';
import { CustomerService } from '../customer/Services/customer.service';
import { EmployeeservService } from '../employee/Services/employeeserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent 
{
  constructor(private CustService:CustomerService,private EmpService:EmployeeservService,private route:Router){
    
  }
  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl('CustomerLogin');
  }

  

  user_logout():void{
    if(this.CustService.IsLoggedIn()){
      console.log("customer log out");
      this.CustService.logout();
    }
    if(this.EmpService.IsLoggedIn()){
      console.log("employee log out");
      this.EmpService.logout();
    }
  }
 

}
