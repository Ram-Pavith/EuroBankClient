import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class CustomerHomeComponent
{
  constructor(private route:Router){
    if(localStorage.getItem("First")!="true" && localStorage.getItem("ROLE")=="Customer"){
      window.location.reload()
      localStorage.setItem("First","true")
      route.navigateByUrl('/CustomerHome')
    }
  }
}
