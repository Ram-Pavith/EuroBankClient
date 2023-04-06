import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AccountDTO } from 'src/Models/AccountDTO';
import { CustomerDTO } from 'src/Models/CustomerDTO';
import { CustomerRegisterDTO } from 'src/Models/CustomerRegisterDTO';
import { EmployeeLoginDTO } from 'src/Models/EmployeeLoginDTO';
import { TransactionDTO } from 'src/Models/TransactionDTO';
import { UserAuthResponseDTO } from 'src/Models/UserAuthResponseDTO';

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
  employeelogin(emploginDTO:EmployeeLoginDTO):Observable<any>{
    return this.http.post<EmployeeLoginDTO>(this.req+"/EmployeeLogin",emploginDTO,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  getAllCustomers():Observable<CustomerDTO[]>{
    return this.http.get<CustomerDTO[]>(this.req+"/GetAllCustomers",{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  getAllAccounts():Observable<AccountDTO[]>{
    return this.http.get<AccountDTO[]>(this.req+"/ViewAllBankAccounts",{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  getAllTransactions():Observable<TransactionDTO[]>{
    return this.http.get<TransactionDTO[]>(this.req+"/ViewAllTransactions",{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  createCustomer(customer:CustomerRegisterDTO):Observable<any>{
    return this.http.post<CustomerRegisterDTO>(this.req+"/CreateCustomer",customer,{
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
