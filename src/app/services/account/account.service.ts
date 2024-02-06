import { Injectable } from '@angular/core';
import keyring from '@polkadot/ui-keyring';
import type { KeypairType } from '@polkadot/util-crypto/types';
import { WalletService } from '../wallet/wallet.service';
import { mnemonicGenerate } from '@polkadot/util-crypto';

const ETH_DERIVE_DEFAULT = "/m/44'/60'/0'/0/0";

function getSuri(seed: string, type?: KeypairType): string {
  return type === 'ethereum' ? `${seed}${ETH_DERIVE_DEFAULT}` : seed;
}

type HexString = `0x${string}`;

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private walletService: WalletService) {}

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
    const addUriResult = keyring.addUri(
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
    this.walletService.xodeKeyring.addFromJson(json);

    return {
      json,
      pair,
    };
  }
}
