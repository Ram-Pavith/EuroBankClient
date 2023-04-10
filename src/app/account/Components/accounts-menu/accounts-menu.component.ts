import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-accounts-menu',
  templateUrl: './accounts-menu.component.html',
  styleUrls: ['./accounts-menu.component.css']
})
export class AccountsMenuComponent {
  
  accId:string = localStorage.getItem("AccountId")
  constructor(private authService:AuthService,  private router: Router){  }
  CustomerHomeRoute(){
    this.authService.login('Customer')
    this.router.navigateByUrl( "/CustomerHome");
  }
}
