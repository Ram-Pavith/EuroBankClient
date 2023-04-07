import { Guid } from "guid-typescript";

export class Employee{
    employeeId:Guid;
    emailId:string;
    passwordHash:string;
    passwordSalt:string;
    firstName:string;
    lastName:string;
       
}