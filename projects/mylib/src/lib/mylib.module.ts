import { NgModule } from '@angular/core';
import { MylibComponent } from './mylib.component';
import {JwPaginationModule} from 'jw-angular-pagination';


@NgModule({
  declarations: [
    MylibComponent
  ],
  imports: [
    JwPaginationModule

  ],
  exports: [
    MylibComponent
  ]
})
export class MylibModule { }
