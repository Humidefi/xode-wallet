import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account.component';
import { RouterModule, Routes } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { WalletListItemModule } from 'src/app/components/shared/wallet-list-item/wallet-list-item.module';
import { WalletSearchBarModule } from 'src/app/components/header/wallet-search-bar/wallet-search-bar.module';
import { WalletAddressPreviewCardModule } from 'src/app/components/create-account/wallet-address-preview-card/wallet-address-preview-card.module';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountComponent,
  },
];

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    ClipboardModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    WalletListItemModule,
    WalletAddressPreviewCardModule,
    WalletSearchBarModule,
    RouterModule.forChild(routes),
  ],
  exports: [CreateAccountComponent],
})
export class CreateAccountModule {}
