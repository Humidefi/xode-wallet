import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { WalletSearchBarComponent } from 'src/app/components/header/wallet-search-bar/wallet-search-bar.component';
import { AddMenuComponent } from 'src/app/components/header/add-menu/add-menu.component';
import { SettingsMenuComponent } from 'src/app/components/header/settings-menu/settings-menu.component';
import { WalletListComponent } from './wallet-list.component';
import { WalletListItemComponent } from 'src/app/components/shared/wallet-list-item/wallet-list-item.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: WalletListComponent,
  },
];

@NgModule({
  declarations: [
    WalletListComponent,
    WalletListItemComponent,
    AddMenuComponent,
    SettingsMenuComponent,
    WalletSearchBarComponent,
  ],
  imports: [
    CommonModule,
    ClipboardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
})
export class WalletListModule {}
