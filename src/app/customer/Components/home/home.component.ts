import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class CustomerHomeComponent
{
  constructor(private route:Router){
  }
}
