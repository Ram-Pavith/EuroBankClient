import { Guid } from "guid-typescript";
export interface Account{
    accountId: Guid,
    accountTypeId:number,
    accountCreationStatusId:number,
    customerId:string,
    dateCreated:Date,
    balance:number
}