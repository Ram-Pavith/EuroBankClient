import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Account } from 'src/Models/Account';
import { Customer } from 'src/Models/Customer';
import { CustomerRegister } from 'src/Models/CustomerRegister';
import { EmployeeLogin } from 'src/Models/EmployeeLogin';
import { Transaction } from 'src/Models/Transaction';
import { UserAuthResponse } from 'src/Models/UserAuthResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservService {

  constructor(private http:HttpClient) { }

  //Variable to store the request URL for accessing API.
  req:string="https://localhost:7035/api/Employee";

  
  //Method to get the list of all players from the API.
  // getAllTrains():Observable<Train[]>
  // {
  //   return this.http.get<Train[]>(this.req,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
        
  //     })
  //   });
  // }

  // getTrainById(id:string):Observable<Train>{
  //   var res = this.http.get<Train>(this.req+"/"+id,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
  //     })
  //   })
  //   console.log(res);
  //   return res;
  // }

  // //Method  to create a new player.
  // createTrain(player:Train):Observable<Train>
  // {
    // var response = this.http.post<Train>(this.req,player,{
    //   headers:new HttpHeaders({
    //     'Content-Type':'application/json;charset=UTF-8',
    //     'Access-Control-Allow-Origin':'*',
    //     'Access-Control-Allow-Method':'*'
        
    //   })
    // });
  //   console.log(response)
  //   return response;
  // }

  // //Method to update an existing player.
  // updateTrain(id:string,player:Train):Observable<any>
  // {
  //   return this.http.put<any>(this.req+"/"+id,player,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
  //     })
  //   });
  // }


  // //Method to delete an existing player.
  // deleteTrain(id:number):Observable<any>
  // {
  //   return this.http.delete<any>(this.req+"/"+id,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
  //     })
  //   });
  // }

  // filterTrains(tbobj:TicketBooking):Observable<any>{
  //   return this.http.post<TicketBooking>(this.req+"/FilterTrains",tbobj,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
        
  //     })
  //   })
  // }
  headers = {
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

  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.req+"/GetAllCustomers",{
      headers:this.headers
    })
  }

  getAllAccounts():Observable<Account[]>{
    return this.http.get<Account[]>(this.req+"/ViewAllBankAccounts",{headers:this.headers
    })
  }

  getAllTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.req+"/ViewAllTransactions",{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  createCustomer(customer:CustomerRegister):Observable<any>{
    return this.http.post<CustomerRegister>(this.req+"/CreateCustomer",customer,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'

      })
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
}
