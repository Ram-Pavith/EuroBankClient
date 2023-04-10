import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Account } from 'src/Models/Account';
import { CustomerService } from '../../Services/customer.service';
import { MylibComponent } from 'projects/mylib/src/public-api';
import { MylibModule } from '../../../../../projects/mylib/src/lib/mylib.module';

@Component({
  selector: 'app-get-account',
  templateUrl: './get-account.component.html',
  styleUrls: ['./get-account.component.css']
})
export class GetAccountComponent implements OnInit
{
  customer:Account[]=[]
  constructor(private obj:CustomerService){}
  id:Guid
  


  ngOnInit(): void {
    this.getaccount();
  }

  getaccount()
  {
    this.obj.GetAccount(this.id).subscribe(data =>{
      console.log(data);
      this.customer = data;
    },err =>{
      console.log(err);
    })
  }


}
