import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithDrawComponent } from './transaction/Components/with-draw/with-draw.component';

const routes: Routes =[
 { 
  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
