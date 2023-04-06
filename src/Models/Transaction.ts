import { Guid } from "guid-typescript"

export interface Transaction{
    transactionId: Guid,
    counterPartyId:string,
    accountId: Guid,
    serviceId: number,
    refTransactionStatusId: number,
    refTransactionTypeId: number,
    refPaymentMethodId: number,
    dateOfTransaction: Date,
    amountOfTransaction:number
}