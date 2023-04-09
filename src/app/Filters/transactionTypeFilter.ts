import { TmplAstVariable } from '@angular/compiler';
import {Pipe,PipeTransform} from '@angular/core';
import { Transaction } from 'src/Models/Transaction';
import { TransactionTypeEnum } from 'src/Models/TransactionTypeEnum';

@Pipe({
    name: 'TransactionTypeFilter'
})
export class TransactionTypeFilter implements PipeTransform{
    transTypeId:number;
    transform(trans: Transaction[], transType:string) {
        this.transTypeId = TransactionTypeEnum[transType];
        if(!transType || !trans){
            return trans;
        }
        
        return trans.filter(x => x.refTransactionTypeId == this.transTypeId);
    }
}
