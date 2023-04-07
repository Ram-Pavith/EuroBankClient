import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithDrawComponent } from './Components/with-draw/with-draw.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepositComponent } from './Components/deposit/deposit.component';
import { TransferComponent } from './Components/transfer/transfer.component';




@NgModule({
  declarations: [
    WithDrawComponent,
    DepositComponent,
    TransferComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    WithDrawComponent,
    DepositComponent,
    TransferComponent
  ]
})
export class TransactionModule { }