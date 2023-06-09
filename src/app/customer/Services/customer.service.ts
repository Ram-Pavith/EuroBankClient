import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders, HttpParamsOptions} from '@angular/common/http';
import { catchError, observable, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { Customer } from 'src/Models/Customer';
import { CustomerLogin } from 'src/Models/CustomerLogin';
import { Guid } from 'guid-typescript';
import { Weather } from 'src/Models/weather';
import { Account } from 'src/Models/Account';
import { Statement } from '@angular/compiler';
import { Transaction } from 'src/Models/Transaction';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService
 {

  token:string = null;
  headers={
    'Content-Type':'application/json;charset=UTF-8',
    'Accept':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*',
    'Access-Control-Allow-Headers':'Content-Type',
    'Authorization':`Bearer ` + localStorage.getItem("token")
  }
  
  constructor(private http:HttpClient, private router: Router) { }
  req:string="https://localhost:7035/api/Customer";
  getCustomerAccounts(id:string):Observable<any>
  {this.GetToken()
    console.log(this.token)
    
    return this.http.get<Customer>("https://localhost:7035/api/Customer/GetCustomerAccounts?CustomerId="+id,{headers:this.headers});
  }
  httpOption = {
    headers: new HttpHeaders(this.headers)
  }
  
  GetToken(){
    this.token = localStorage.getItem("token");
  }


  GetAccount(id:Guid):Observable<any>
  {
    return this.http.get<Account>(this.req+"/GetAccount?AccountId="+id,{
      headers:this.headers
    }).pipe(
      catchError(error=>{
        return throwError(error.error)
      })
    )    

  }

  GetCustomerStatement(url:string):Observable<any>
  {
    return this.http.get<Statement>(url,{
      headers:this.headers
    }
    ).pipe(
      catchError(error=>{
        return throwError(error.error)
      })
    )    
  }

  ViewAllTransaction(id:string):Observable<any>
  {
    return this.http.get<Transaction>(this.req+"/ViewAllTransactions?CustomerId="+id,{
      headers:this.headers
    }).pipe(
      catchError(error=>{
        return throwError(error.error)
      })
    )    
  }

  userlogin(CusloginDTO:CustomerLogin):Observable<any>
  {
    return this.http.post<CustomerLogin>(this.req+"/CustomerLogin",CusloginDTO,{
      headers:this.headers
    }).pipe(
      catchError(error=>{
        return throwError(error.error)
      })
    )    
  }
  userAuthorize(CusloginDTO:CustomerLogin):Observable<any>
  {
    return this.http.post<CustomerLogin>(this.req+"/CustomerAuthorize",CusloginDTO,{
      headers:this.headers
    }).pipe(
      catchError(error=>{
        return throwError(error.error)
      })
    )    
  }
  

  IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }


  logout(){
    localStorage.clear();
    return this.router.navigateByUrl('CustomerLogin');
  }

}
