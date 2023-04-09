import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent {
  constructor(private route:Router){
    if(localStorage.getItem("EmployeeId")!=undefined && localStorage.getItem("Role")=="Employee"){
      if(localStorage.getItem("First")!="true" && localStorage.getItem("ROLE")=="Employee"){
        window.location.reload()
        localStorage.setItem("First","true")
      }    }
  }
}
