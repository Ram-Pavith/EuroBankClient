import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //authtoken:string = "";
  constructor(private route:Router){}
  ngOnInit(){
    //this.authtoken = localStorage.getItem("token");
  }

  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/EmployeeLogin');
  }
}
