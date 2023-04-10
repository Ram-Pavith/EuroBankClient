import { NgModule } from '@angular/core';
import { MylibComponent } from './mylib.component';
import {JwPaginationModule} from 'jw-angular-pagination';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MylibComponent
  ],
  imports: [
    RouterModule

  ],
  exports: [
    MylibComponent
  ]
})
export class MylibModule { }
