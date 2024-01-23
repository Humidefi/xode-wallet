import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletAddressPreviewCardComponent } from './wallet-address-preview-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { WalletListItemModule } from '../../shared/wallet-list-item/wallet-list-item.module';

@NgModule({
  declarations: [WalletAddressPreviewCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ClipboardModule,
    WalletListItemModule,
  ],
  exports: [WalletAddressPreviewCardComponent],
})
export class WalletAddressPreviewCardModule {}
