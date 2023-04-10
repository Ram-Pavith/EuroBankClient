import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }
  token:string = null;
  headers={
    'Content-Type':'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*',
    'Access-Control-Allow-Headers':'Content-Type',
    'Authorization':`Bearer ` + localStorage.getItem("token")
  }

  sendEmail(to:string, subject:string, body:string,role:string):Observable<any>{
    return this.http.post<any>("https://localhost:7035/SendEmail?To="+to+"&Subject=" + subject+ "&Body=" + body + "&Role=" + role,{
      headers:this.headers
    }).pipe(
      catchError(error=>{
        return throwError(error.error)
      })
    )      
  }

  resetPassword(email:string, password:string, role:string):Observable<any>{
    console.log(role)
    return this.http.put<any>("https://localhost:7035/ResetPassword?Email="+email+"&Password="+password+"&Role="+role,{
      headers:this.headers
    }).pipe(
      catchError(error=>{
        return throwError(error.error)
      })
    )
  }

  serviceChargesApply():Observable<any>{
    return this.http.get<any>("https://localhost:7035/EvaluateServiceCharges",{
      headers:this.headers
    }).pipe(
      catchError(error => {
        return throwError(error.error)
      })
    )
  }
}
