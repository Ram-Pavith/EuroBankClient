import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { Guid } from 'guid-typescript';
import { Statement } from '../../../../Models/Statement';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit{

  AccStatement:Statement[] = []

  //get using route parameter / localstorage
  AccId: string = "C0BF0099-9706-4231-B4DA-6452C043F614";

  constructor(private AccService:AccountService){
    this.AccService.GetAccStatement(Guid.parse(this.AccId)).subscribe(data =>{
      console.log(data);
      this.AccStatement = data;
    });
  }

  ngOnInit(): void {
    
  }
}
