import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account.component';
import { RouterModule, Routes } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WalletAddressPreviewCardComponent } from 'src/app/components/create-account/wallet-address-preview-card/wallet-address-preview-card.component';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountComponent,
  },
];

@NgModule({
  declarations: [CreateAccountComponent, WalletAddressPreviewCardComponent],
  imports: [
    CommonModule,
    ClipboardModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class CreateAccountModule {}
