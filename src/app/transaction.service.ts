import { Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Guid } from 'guid-typescript';
import { RefTransactionStatus } from 'src/Models/RefTransactionStatus';
import { Observable } from 'rxjs';
import { Transaction } from 'src/Models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http:HttpClient) { }

  url:string="https://localhost:7035/api/Transaction"
  Withdraw(AccountId:Guid,amount:number,ServiceId:number):Observable<RefTransactionStatus>
  {
    return this.http.post<RefTransactionStatus>(this.url+"/Withdraw?AccountId="+AccountId.toString()+"&amount="+amount+"&serviceId="+ServiceId,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  Deposit(AccountId:Guid,amount:number,ServiceId:number):Observable<RefTransactionStatus>
  {
    return this.http.post<RefTransactionStatus>(this.url+"/Deposit?AccountId="+AccountId.toString()+"&amount="+amount+"&serviceId="+ServiceId,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  Transfer(SourceAccountId:Guid,TargetAccountId:Guid,amount:number,ServiceId:number):Observable<RefTransactionStatus>
  {
    return this.http.post<RefTransactionStatus>(this.url+"/Transfer?Source_AccountId="+SourceAccountId.toString()+"&Target_AccountId="+TargetAccountId.toString()+"&amount="+amount+"&serviceId="+ServiceId,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  GetAllTransaction(CustomerId:string):Observable<Transaction[]>
  {
    {{debugger}}
    return this.http.get<Transaction[]>(this.url+"/GetTransactions?CustomerId="+CustomerId
    ,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'})
    });
  }
  GetTransaction(TransactionId:Guid):Observable<Transaction>
  {
    {{debugger}}
    return this.http.get<Transaction>(this.url+"/GetTransactionById?TransactionId="+TransactionId
    ,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'})
    });
  }
 

}
