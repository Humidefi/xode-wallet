import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletSearchBarComponent } from './wallet-search-bar.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WalletSearchBarComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [WalletSearchBarComponent],
})
export class WalletSearchBarModule {}
