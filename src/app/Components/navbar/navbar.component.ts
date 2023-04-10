import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../../customer/Services/customer.service';
import { EmployeeservService } from '../../employee/Services/employeeserv.service';
import { NavigationEnd, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import * as mdb from 'mdb-ui-kit'; // lib
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth-service.service';
import { Guid } from 'guid-typescript';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  username:string="";
  fahouse = faHouse
  role:string
  accId:string
  customerId:string
  employeeId:string
  navigationSubscription;
  customer: string;
  employee: string;
  account: string;
  @Input() ParentRole:string;
  constructor(private CustService:CustomerService,private EmpService:EmployeeservService,private router:Router,private authService:AuthService){
    this.navigationSubscription = this.router.events.subscribe((e:any)=>{
      if(e instanceof NavigationEnd){
        this.initialiseInvites();
      }
    })
  }

  initialiseInvites(){
    this.role = localStorage.getItem("ROLE")==undefined?"":localStorage.getItem("ROLE")
    console.log(this.role)
  }
  // ngOnChanges(): void {
    // if(this.CustService.IsLoggedIn()){
    //   this.username = localStorage.getItem("CustomerName");
    // }
    // this.role = localStorage.getItem("ROLE")
  // }

  user_logout():void{
    if(localStorage.getItem("ROLE")=="Customer"){
      console.log("customer log out");
      this.CustService.logout();
    }
    if(localStorage.getItem("ROLE")=="Employee"){
      console.log("employee log out");
      this.EmpService.logout();
    }else{
      localStorage.clear()
      this.router.navigateByUrl('/CustomerLogin')
    }
    localStorage.clear(); 
  }

  isUserLoggedIn():boolean{
    if(this.CustService.IsLoggedIn() || this.EmpService.IsLoggedIn()){
      return true;
    }
    return false;
  }
 accountProfile(){
  this.accId = localStorage.getItem("AccountId")
  this.authService.login('Customer')
  this.router.navigateByUrl(`/AccountDeails/${this.accId}`)
 }
}
