import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from 'src/Models/Account';
import { Guid } from 'guid-typescript';
import { Observable, catchError } from 'rxjs';
import { AccountCreationStatus } from 'src/Models/AccountCreationStatus';
import { AccountBalance } from 'src/Models/AccountBalance';
import { Statement } from '../../../Models/Statement';
import { Transaction } from 'src/Models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  headers={
    'Content-Type':'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*',
    'Access-Control-Allow-Headers':'Content-Type',
    'Authorization':`Bearer ` + localStorage.getItem("token")
  }

  CreateAcc_ReqUrl: string = "https://localhost:7035/api/Accounts/CreateAccount?CustomerId=";
  GetCustAccsBal_ReqUrl:string = "https://localhost:7035/api/Accounts/GetCustomerAccountsBalance?CustomerId=";
  GetAccBal_ReqUrl:string = "https://localhost:7035/api/Accounts/GetAccountBalance?AccountId=";
  GetStatement_ReqUrl:string = "https://localhost:7035/api/Accounts/GetAccountStatement?AccountId=";
  GetAccTrans_ReqUrl:string = "https://localhost:7035/api/Accounts/GetTransactions?AccountId=";

  constructor(private http:HttpClient) 
  { 
    
  }

  CreateAccount(CustomerId:string):Observable<AccountCreationStatus>{
    return this.http.post<AccountCreationStatus>(this.CreateAcc_ReqUrl + CustomerId,{
      headers:this.headers
    }).pipe(catchError(err=>{
          console.log(err)
          throw err.error
      })
    );
  }


  GetCustomerAccountsBalance(CustomerId: string):Observable<AccountBalance[]>{
    return this.http.get<AccountBalance[]>(this.GetCustAccsBal_ReqUrl+CustomerId,{
      headers:this.headers
    });
  }

  GetAccountBalance(AccountId:Guid):Observable<AccountBalance>{
    console.log(this.http.get<AccountBalance>(this.GetAccBal_ReqUrl+AccountId.toString()));
    return this.http.get<AccountBalance>(this.GetAccBal_ReqUrl+AccountId.toString(),{
      headers:this.headers
    });
  }

  GetAccStatement(url:string):Observable<Statement[]>{
      return this.http.get<Statement[]>(url,{
        headers:this.headers
      });
  }

  
  GetAccTransactions(AccountId:Guid):Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.GetAccTrans_ReqUrl + AccountId.toString() + "&PageSize=0&PageNumber=1",{
      headers:this.headers
    });
  }



  




}
