import { Component, Input } from '@angular/core';
import { Wallet } from 'src/app/models/wallet/wallet.model';

@Component({
  selector: 'app-wallet-list-item',
  templateUrl: './wallet-list-item.component.html',
  styleUrls: ['./wallet-list-item.component.scss'],
})
export class WalletListItemComponent {
  @Input() wallet!: Wallet;
  @Input() isPreview: boolean = false;

  isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
