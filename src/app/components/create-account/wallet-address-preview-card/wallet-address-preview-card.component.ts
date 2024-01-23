import { Component, Input } from '@angular/core';
import { Wallet } from 'src/app/models/wallet/wallet.model';

@Component({
  selector: 'app-wallet-address-preview-card',
  templateUrl: './wallet-address-preview-card.component.html',
  styleUrls: ['./wallet-address-preview-card.component.scss'],
})
export class WalletAddressPreviewCardComponent {
  @Input() newWallet!: Wallet;
}
