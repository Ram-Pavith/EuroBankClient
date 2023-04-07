import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from 'src/Models/Account';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { AccountCreationStatus } from 'src/Models/AccountCreationStatus';
import { AccountBalance } from 'src/Models/AccountBalance';
import { Statement } from '@angular/compiler';
import { Transaction } from 'src/Models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  CreateAcc_ReqUrl: string = "https://localhost:7035/api/Accounts/CreateAccount?CustomerId=";
  GetCustAccsBal_ReqUrl:string = "https://localhost:7035/api/Accounts/GetCustomerAccountsBalance?CustomerId=";
  GetAccBal_ReqUrl:string = "https://localhost:7035/api/Accounts/GetAccountBalance?AccountId=";
  GetStatement_ReqUrl:string = "https://localhost:7035/api/Accounts/GetAccountStatement?AccountId=?";
  GetAccTrans_ReqUrl:string = "https://localhost:7035/api/Accounts/GetTransactions?AccountId=";

  constructor(private http:HttpClient) 
  { 
    
  }

  CreateAccount(CustomerId:string):Observable<AccountCreationStatus>{
    return this.http.post<AccountCreationStatus>(this.CreateAcc_ReqUrl + CustomerId,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }


  GetCustomerAccountsBalance(CustomerId: string):Observable<AccountBalance[]>{
    return this.http.get<AccountBalance[]>(this.GetCustAccsBal_ReqUrl+CustomerId);
  }

  GetAccountBalance(AccountId:Guid):Observable<AccountBalance>{
    return this.http.get<AccountBalance>(this.GetAccBal_ReqUrl+AccountId.toString())
  }

  GetAccStatement(AccountId:Guid,From_date:Date,To_Date:Date):Observable<Statement[]>{
    if(From_date != null && To_Date != null){
      return this.http.get<Statement[]>(this.GetStatement_ReqUrl+AccountId);
    }
    else{
      return this.http.get<Statement[]>(this.GetStatement_ReqUrl + AccountId + "&from_date=" + From_date + "&to_date=" + To_Date);
    }
  }

  
  GetAccTransaction(AccountId:Guid):Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.GetAccTrans_ReqUrl + AccountId.toString + "&PageSize=0&PageNumber=1");
  }



  




}