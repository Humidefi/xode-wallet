import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WalletListComponent } from './wallet-list.component';
import { WalletListItemComponent } from 'src/app/components/shared/wallet-list-item/wallet-list-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: WalletListComponent,
  },
];

@NgModule({
  declarations: [WalletListComponent, WalletListItemComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
})
export class WalletListModule {}
