import { Guid } from 'guid-typescript';
export interface Transaction

{
    TransactionId:Guid,
    CounterPartyId:Guid,
    AccountId:Guid,
    ServiceId:number,
    RefTransactionStatusId:number,
    RefTransactionTypeId:number,
    RefPaymentMethodId:number,
    DateOfTransaction:Date,
    AmountOfTransaction:number
}