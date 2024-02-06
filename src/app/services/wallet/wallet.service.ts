import { Injectable } from '@angular/core';
import { Keyring } from '@polkadot/keyring';
import { web3Enable } from '@polkadot/extension-dapp';
import { Wallet } from 'src/app/models/wallet/wallet.model';

interface IChromeStorageAccountObject {
  address: string;
  encoded: string;
  encoding: {
    content: string[];
    type: string[];
    version: string;
  };
  meta: {
    name: string;
    whenCreated: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  xodeKeyring: Keyring;

  constructor() {
    this.xodeKeyring = new Keyring({ type: 'sr25519' });
    (async () => {
      await web3Enable('XODE DASHBOARD');
    })();
  }

  async getWalletList() {
    let newWalletList: Wallet[] = [];
    if (chrome) {
      const targetData = await chrome.storage.local.get(null);
      console.log('targetData:');
      console.log(targetData);
      newWalletList = Object.entries(targetData)
        .filter((entry) => {
          const key = entry[0];
          console.log(`key: ${key}`);
          return key.startsWith('XODE_WALLETaccounts:account:');
        })
        .map((entry) => {
          const account = entry[1];
          console.log('account:');
          console.log(account);
          const targetAccount =
            account as unknown as IChromeStorageAccountObject;
          return {
            name: targetAccount.meta?.name || '',
            address: targetAccount.address,
          };
        });
      return newWalletList;
    } else {
      alert('Chrome API is not accessible.');
      return [];
    }
  }
}
