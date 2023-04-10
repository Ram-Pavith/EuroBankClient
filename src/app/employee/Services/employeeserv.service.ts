import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Account } from 'src/Models/Account';
import { Customer } from 'src/Models/Customer';
import { CustomerRegister } from 'src/Models/CustomerRegister';
import { Employee } from 'src/Models/Employee';
import { EmployeeLogin } from 'src/Models/EmployeeLogin';
import { EmployeeRegister } from 'src/Models/EmployeeRegister';
import { Pagination } from 'src/Models/Pagination';
import { Transaction } from 'src/Models/Transaction';
import { UserAuthResponse } from 'src/Models/UserAuthResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservService {

  constructor(private http:HttpClient,private router:Router) { }

  //Variable to store the request URL for accessing API.
  req:string="https://localhost:7035/api/Employee";
  authToken:string;
  headers={
    'Content-Type':'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*',
    'Access-Control-Allow-Headers':'Content-Type',
    'Authorization':`Bearer ` + localStorage.getItem("token")
  }
  employeelogin(emploginDTO:EmployeeLogin):Observable<any>{
    return this.http.post<EmployeeLogin>(this.req+"/EmployeeLogin",emploginDTO,{
      headers:this.headers
    })
  }
  employeeAuthorize(emploginDTO:EmployeeLogin):Observable<any>{
    return this.http.post<EmployeeLogin>(this.req+"/EmployeeAuthorize",emploginDTO,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.req+"/GetAllCustomers",{
      headers:this.headers
    })
  }

  getAllAccounts():Observable<Account[]>{
    return this.http.get<Account[]>(this.req+"/ViewAllBankAccounts",{
      headers:this.headers
    })
  }

  getAllTransactions():Observable<any>{
    return this.http.get<any>(this.req+"/ViewAllTransactions",{
      headers:this.headers
    })
  }

  createCustomer(customer:CustomerRegister):Observable<any>{
    return this.http.post<CustomerRegister>(this.req+"/CreateCustomer",customer,{
      headers:this.headers
    }).pipe(
      catchError(err=>{
        console.log(err)
        throw err.error
      })
    )
  }

  employeeRegister(emp:EmployeeRegister):Observable<any>{
    return this.http.post<EmployeeRegister>(this.req+"/EmployeeRegister",emp,{
      headers:this.headers
    })
  }


  //Method to test error handling.
  register():Observable<any>
  {
    //Giving incorrect URL.
    return this.http.get<any>('https://localhost:44311/api/Players')
           .pipe(catchError(this.manageError));
  }
  

  //Method to handle errors.
  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }

  IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }


  logout(){
    localStorage.clear();
    return this.router.navigateByUrl('EmployeeLogin');
  }
}