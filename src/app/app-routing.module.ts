import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './customer/Components/home/home.component';
import { WithDrawComponent } from './transaction/Components/with-draw/with-draw.component';

const routes: Routes =[
 { 
   path:"home",component:HomeComponent
  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
