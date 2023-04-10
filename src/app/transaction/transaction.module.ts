import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithDrawComponent } from './Components/with-draw/with-draw.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepositComponent } from './Components/deposit/deposit.component';
import { TransferComponent } from './Components/transfer/transfer.component';
import { GettransactionComponent } from './Components/gettransaction/gettransaction.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    WithDrawComponent,
    DepositComponent,
    TransferComponent,
    GettransactionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports:[
    WithDrawComponent,
    DepositComponent,
    TransferComponent,
    GettransactionComponent
  ]
})
export class TransactionModule { }
