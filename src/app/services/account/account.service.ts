import { Injectable } from '@angular/core';
import keyring from '@polkadot/ui-keyring';
import type { KeypairType } from '@polkadot/util-crypto/types';
import { WalletService } from '../wallet/wallet.service';
import { mnemonicGenerate } from '@polkadot/util-crypto';
import { accounts as accountsObservable } from '@polkadot/ui-keyring/observable/accounts';
import { BehaviorSubject } from 'rxjs';

const ETH_DERIVE_DEFAULT = "/m/44'/60'/0'/0/0";

function getSuri(seed: string, type?: KeypairType): string {
  return type === 'ethereum' ? `${seed}${ETH_DERIVE_DEFAULT}` : seed;
}

type HexString = `0x${string}`;

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accounts: {
    add: () => void;
    remove: () => void;
    subject: BehaviorSubject<any>;
  } = {
    add: () => {},
    remove: () => {},
    subject: new BehaviorSubject(0),
  };

  constructor(private walletService: WalletService) {
    /*
    let current = {};
    const subject = new BehaviorSubject({});
    this.accounts = {
      add: (store, address, json, type) => {
        current = util$7.objectCopy(current)
      }
    }
    */
  }

  createSeed() {
    const newSeed = mnemonicGenerate();

    return {
      address: keyring.createFromUri(getSuri(newSeed)).address,
      seed: newSeed,
    };
  }

  saveAccount(
    name: string,
    password: string,
    suri: string,
    type: KeypairType,
    genesisHash?: HexString | null
  ) {
    const newSuri = getSuri(suri, type);
    /*
    const pair = this.walletService.xGameKeyring.addFromUri(
      newSuri,
      { genesisHash, name },
      type
    );
    if (!pair.meta.whenCreated) {
      pair.setMeta({ whenCreated: Date.now() });
    }
    const json = pair.toJson(password);
    this.walletService.xGameKeyring.addFromJson(json);
    // accountsObservable.add(accountsObservable, pair.address, json, pair.type)
    return json;
    */
    const addUriResult = keyring.addUri(
      // getSuri(suri, type),
      newSuri,
      password,
      { genesisHash, name },
      type
    );
    const pair = addUriResult.pair;

    // add timestamp
    if (!pair.meta.whenCreated) {
      pair.setMeta({ whenCreated: Date.now() });
    }
    const json = pair.toJson(password);
    this.walletService.xGameKeyring.addFromJson(json);
    // this.walletService.xGameKeyring;

    return {
      json,
      pair,
    };
    /*
    alert('c');
    console.log('addAccountResult:');
    console.log(addAccountResult);
    */
  }
}
