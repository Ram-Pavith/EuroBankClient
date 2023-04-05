import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithDrawComponent } from './Components/withdraw/withdraw.component';



@NgModule({
  declarations: [
    WithDrawComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WithDrawComponent
  ]
})
export class TransactionModule { }
