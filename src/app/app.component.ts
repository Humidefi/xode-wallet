import { Component, OnInit } from '@angular/core';
import keyring from '@polkadot/ui-keyring';
import { AccountsStore } from '@polkadot/extension-base/stores';
import '@polkadot/api-augment';
import { cryptoWaitReady } from '@polkadot/util-crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'xode-wallet';

  constructor() {
    (async () => {
      await cryptoWaitReady();
      keyring.loadAll({ store: new AccountsStore(), type: 'sr25519' });
      if (chrome) {
        chrome.storage.local.get(null, function (data) {
          console.log(data);
        });
      }
    })();
  }

  ngOnInit(): void {
    const isExtensionPopup = window.innerWidth <= 560;
    if (isExtensionPopup) {
      if (chrome) {
        chrome.tabs.create({ url: '/index.html' });
      } else {
        console.error('Chrome API not found');
      }
    }
  }
}
