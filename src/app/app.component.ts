import { Component } from '@angular/core';
import keyring from '@polkadot/ui-keyring';
import { AccountsStore } from '@polkadot/extension-base/stores';
import '@polkadot/api-augment';
import { cryptoWaitReady } from '@polkadot/util-crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'xgame-wallet';

  constructor() {
    (async () => {
      await cryptoWaitReady();
      keyring.loadAll({ store: new AccountsStore(), type: 'sr25519' });
    })();
  }
}
