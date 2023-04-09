import { TmplAstVariable } from '@angular/compiler';
import {Pipe,PipeTransform} from '@angular/core';
import { Transaction } from 'src/Models/Transaction';
import { TransactionTypeEnum } from 'src/Models/TransactionTypeEnum';

@Pipe({
    name: 'transactionDateFilter'
})
export class TransactionDateFilter implements PipeTransform{
    transTypeId:number;
    
    transform(trans: Transaction[], transOrder:string) {
        if(!transOrder || !trans){
            return trans;
        }
        
        if(transOrder == "asc"){
            let sortedTrans = trans.sort((a, b) => (a.dateOfTransaction > b.dateOfTransaction) ? -1 : 1);
            return sortedTrans;

        }
        if(transOrder == "desc"){
            let sortedTrans = trans.sort((a, b) => (a.dateOfTransaction < b.dateOfTransaction) ? -1 : 1);
        }
        return trans;
    }
}
