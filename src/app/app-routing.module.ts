import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsMenuComponent } from './account/Components/accounts-menu/accounts-menu.component';
import { AccountDetailsComponent } from './account/Components/account-details/account-details.component';

const routes: Routes = [
  {path:'AccountsMenu',component:AccountsMenuComponent},
  {path:'AccountDetails',component:AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
