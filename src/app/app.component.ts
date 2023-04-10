import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EuroBankClient';
  navigationSubscription: any;
  role: string;
  constructor(private route:Router){
    this.navigationSubscription = this.route.events.subscribe((e:any)=>{
      if(e instanceof NavigationEnd){
        this.initialiseInvites();
      }
    })
  }
  initialiseInvites() {
    this.role = localStorage.getItem("ROLE")
  }
ngOnInit(): void {
  //this.route.navigateByUrl('/HomePage')
}

}
