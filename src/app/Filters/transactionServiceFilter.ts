import { TmplAstVariable } from '@angular/compiler';
import {Pipe,PipeTransform} from '@angular/core';
import { Transaction } from 'src/Models/Transaction';
import { ServiceEnum } from 'src/Models/ServiceEnum';

@Pipe({
    name: 'TransactionServiceFilter'
})
export class TransactionServiceFilter implements PipeTransform{
    transServId:number;
    transform(trans: Transaction[], transServ:string) {
        this.transServId = ServiceEnum[transServ];
        if(!transServ || !trans){
            return trans;
        }
        
        return trans.filter(x => x.serviceId == this.transServId);
    }
}
