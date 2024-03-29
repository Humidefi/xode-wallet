import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { Wallet } from 'src/app/models/wallet/wallet.model';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss'],
})
export class WalletListComponent implements OnInit {
  walletList: Wallet[] = [];

  constructor(private walletService: WalletService) {}

  async getWalletList() {
    this.walletList = await this.walletService.getWalletList();
  }

  ngOnInit(): void {
    (async () => {
      await this.getWalletList();
    })();
  }
}
