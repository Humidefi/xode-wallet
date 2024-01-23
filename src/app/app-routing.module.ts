import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/wallet-list/wallet-list.module').then(
        (m) => m.WalletListModule
      ),
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./modules/create-account/create-account.module').then(
  //       (m) => m.CreateAccountModule
  //     ),
  // },
  {
    path: 'create-account',
    loadChildren: () =>
      import('./modules/create-account/create-account.module').then(
        (m) => m.CreateAccountModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
