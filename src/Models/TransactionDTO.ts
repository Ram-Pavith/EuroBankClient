export class TransactionDTO{
    transactionId: string;
    counterPartyId: string;
    accountId: string;
    serviceId: number;
    refTransactionStatusId: number;
    refTransactionTypeId: number;
    refPaymentMethodId: number;
    dateOfTransaction: Date;
    amountOfTransaction: number
}