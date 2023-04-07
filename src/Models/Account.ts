import { Guid } from "guid-typescript";

export class Account{
    accountId:Guid;
    accountTypeId:number;
    accountCreationStatusId:number;
    customerId:string;
    dateCreated:Date;
    balance:number;
}