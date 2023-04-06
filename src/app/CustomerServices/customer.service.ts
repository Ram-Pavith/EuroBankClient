import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { observable } from 'rxjs';
import { Observable } from 'rxjs';
import { Customer } from 'src/Models/Customer';
import { CustomerLoginDTO } from 'src/Models/CustomerLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class CustomerService
 {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:7035/api/Customer/CustomerLogin";
  getCustomerAccounts(id:number):Observable<any>
  {
    return this.http.get<any>("https://localhost:7035/api/Customer/GetCustomerAccounts",{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  userlogin(CusloginDTO:CustomerLoginDTO):Observable<any>
  {
    return this.http.post<CustomerLoginDTO>(this.req,CusloginDTO,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  getCustomerDetailsById(username: string, password: string): Observable<Customer> 
  {
    return this.http.get<Customer>(`${this.req}?username=${username}&password=${password}`);
  }

  IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }

}
