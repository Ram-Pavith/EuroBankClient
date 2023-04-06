import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders, HttpParamsOptions} from '@angular/common/http';
import { observable } from 'rxjs';
import { Observable } from 'rxjs';
import { Customer } from 'src/Models/Customer';
import { CustomerLoginDTO } from 'src/Models/CustomerLoginDTO';
import { Guid } from 'guid-typescript';
import { Weather } from 'src/Models/weather';
import { Account } from 'src/Models/Account';
import { Statement } from '@angular/compiler';
import { Transaction } from 'src/Models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class CustomerService
 {
  
  token:string = null;
  headers:HttpHeaders = new HttpHeaders({
    'Content-Type':'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*',
    'Authorization': `Bearer ${this.token}`,

  })
  constructor(private http:HttpClient) { }
  req:string="https://localhost:7035/api/Customer";
  getCustomerAccounts(id:string):Observable<any>
  {this.GetToken()
    console.log(this.token)
    
    return this.http.get<Customer>("https://localhost:7035/api/Customer/GetCustomerAccounts?CustomerId="+id,this.httpOption);
  }
  httpOption = {
    headers:this.headers
  }
  
  GetToken(){
    this.token = localStorage.getItem("token");
  }
  getWeatherForecastCustomer():Observable<any>{

    return this.http.get<Weather>("https://localhost:7035/WeatherForecast/CustomerGetWeatherForecast",this.httpOption);
  }

  GetAccount(id:Guid):Observable<any>
  {
    return this.http.get<Account>(this.req+"/GetAccount?AccountId="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });``

  }

  GetCustomerStatement(id:string,fromdate:Date,todate:Date):Observable<any>
  {
    return this.http.get<Statement>(this.req+"/GetAccountStatement?CustomerId="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    }
    );
  }

  ViewAllTransaction(id:string):Observable<any>
  {
    return this.http.get<Transaction>(this.req+"/ViewAllTransactions?CustomerId="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  userlogin(CusloginDTO:CustomerLoginDTO):Observable<any>
  {
    return this.http.post<CustomerLoginDTO>(this.req+"/CustomerLogin",CusloginDTO,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  

  IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }

}
