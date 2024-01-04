import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet-search-bar',
  templateUrl: './wallet-search-bar.component.html',
  styleUrls: ['./wallet-search-bar.component.scss'],
})
export class WalletSearchBarComponent {
  isSearching: boolean = false;

  toggleSearch() {
    this.isSearching = !this.isSearching;
  }
}
