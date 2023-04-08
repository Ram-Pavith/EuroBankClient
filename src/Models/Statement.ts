import { Guid } from "guid-typescript";

export class Statement{
    statementId: number;
    accountId : Guid;
    date: Date;
    narration: string;
    refNo: string;
    valueDate: Date;
    withdrawal: number;
    deposit: number;
    closingBalance: number
}