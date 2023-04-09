import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../../customer/Services/customer.service';
import { EmployeeservService } from '../../employee/Services/employeeserv.service';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import * as mdb from 'mdb-ui-kit'; // lib
import { faHouse } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  username:string="";
  fahouse = faHouse
  constructor(private CustService:CustomerService,private EmpService:EmployeeservService,private router:Router){
    
  }
  ngOnInit(): void {
    if(this.CustService.IsLoggedIn()){
      this.username = localStorage.getItem("CustomerName");
    }
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

  isUserLoggedIn():boolean{
    if(this.CustService.IsLoggedIn() || this.EmpService.IsLoggedIn()){
      return true;
    }
    return false;
  }
 

}
