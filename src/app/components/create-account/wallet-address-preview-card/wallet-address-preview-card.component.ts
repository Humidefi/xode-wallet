import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wallet-address-preview-card',
  templateUrl: './wallet-address-preview-card.component.html',
  styleUrls: ['./wallet-address-preview-card.component.scss'],
})
export class WalletAddressPreviewCardComponent {
  @Input() newGeneratedWalletAddress!: string;
}
