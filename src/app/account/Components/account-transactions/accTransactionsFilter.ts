import { TmplAstVariable } from '@angular/compiler';
import {Pipe,PipeTransform} from '@angular/core';
import { Transaction } from 'src/Models/Transaction';

@Pipe({
    name: 'AccTransactionsFilter'
})
export class AccTransactionsFilter implements PipeTransform{
    transform(trans: Transaction[], transType:number) {
        if(!transType || !trans){
            return trans;
        }
        return trans.filter(x => x.refTransactionTypeId == transType);
    }
}
