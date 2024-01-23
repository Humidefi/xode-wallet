import { Injectable } from '@angular/core';
import { Wallet } from 'src/app/models/wallet/wallet.model';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  constructor() {}

  getWalletList() {
    const newWalletList: Wallet[] = [
      {
        name: 'nyan',
        address: '5EUKXtK3jCPGgC861sxY3fhHsEmv4gpmPeopFM5WTm2diey1',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F2a%2Fa5%2Fdb%2F2aa5dbf739fc6f8d0997810a4ce70df5.jpg&f=1&nofb=1&ipt=98fe1978e331b2b61854502de81f9be897c7451299a27db415014d195d7153fd&ipo=images',
      },
      {
        name: 'nyan2',
        address: '5G1C22p5aFEH2ZFZXuPdDNUVVznGjvrDi3ZC7QWhcgq8HPyz',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F1d%2Ff7%2Fae%2F1df7ae0df5596c192cf9356d7f568886.jpg&f=1&nofb=1&ipt=a6a70d6c494e3bccbc1b505b0dd406a1d92b45f36d2da88873b6b53b23d9331b&ipo=images',
      },
      {
        name: 'nyan3',
        address: '5EPDgkkk8b4VxHn2KDu6WTR75xwyJfwq6s8B41PBpXd4Zeme',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F1d%2Ff7%2Fae%2F1df7ae0df5596c192cf9356d7f568886.jpg&f=1&nofb=1&ipt=a6a70d6c494e3bccbc1b505b0dd406a1d92b45f36d2da88873b6b53b23d9331b&ipo=images',
      },
    ];
    return newWalletList;
  }
}
