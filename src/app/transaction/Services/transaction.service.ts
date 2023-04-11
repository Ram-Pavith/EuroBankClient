import { Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Guid } from 'guid-typescript';
import { RefTransactionStatus } from 'src/Models/RefTransactionStatus';
import { Observable, catchError, throwError } from 'rxjs';
import { Transaction } from 'src/Models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  headers={
    'Content-Type':'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*',
    'Access-Control-Allow-Headers':'Content-Type',
    'Authorization': 'Bearer '+ localStorage.getItem("token")
  }

  constructor(private http:HttpClient) { }

  url:string="https://localhost:7035/api/Transaction"
  Withdraw(AccountId:Guid,amount:number,PaymentId:number):Observable<RefTransactionStatus>
  {
    return this.http.get<RefTransactionStatus>(this.url+"/Withdraw?AccountId="+AccountId.toString()+"&amount="+amount+"&paymentId="+PaymentId,{
      headers:this.headers
    }); 
  }
  Deposit(AccountId:Guid,amount:number,PaymentId:number):Observable<RefTransactionStatus>
  {
    return this.http.get<RefTransactionStatus>(this.url+"/Deposit?AccountId="+AccountId.toString()+"&amount="+amount+"&paymentId="+PaymentId,{
      headers:this.headers
    });
  }
  Transfer(SourceAccountId:Guid,TargetAccountId:Guid,amount:number,ServiceId:number):Observable<RefTransactionStatus>
  {
    return this.http.get<RefTransactionStatus>(this.url+"/Transfer?Source_AccountId="+SourceAccountId.toString()+"&Target_AccountId="+TargetAccountId.toString()+"&amount="+amount+"&serviceId="+ServiceId,{
      headers:this.headers
    });   
  }

  GetTransaction(TransactionId:Guid):Observable<Transaction>
  {
    return this.http.get<Transaction>(this.url+"/GetTransactionById?TransactionId="+TransactionId,{
      headers:this.headers
    }).pipe(
      catchError(error=>{
        return throwError(error.error)
      })
    )    
  }
 

}
