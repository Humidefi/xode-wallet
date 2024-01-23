import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletListItemComponent } from './wallet-list-item.component';
import { IdenticonModule } from '../identicon/identicon.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [WalletListItemComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    IdenticonModule,
    ClipboardModule,
  ],
  exports: [WalletListItemComponent],
})
export class WalletListItemModule {}
