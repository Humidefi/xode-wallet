import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import keyring from '@polkadot/ui-keyring';
import { BehaviorSubject } from 'rxjs';
import { Wallet } from 'src/app/models/wallet/wallet.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  createFormStepNo$ = new BehaviorSubject(1);

  newAccountForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder
  ) {}

  newGeneratedWalletAddress = '';
  newGeneratedMnemonicSeed = '';
  newGeneratedWallet = new Wallet();
  isMnemonicConfirmSaveChecked: boolean = false;

  createNewMnemonicSeedAndAddressPair() {
    return this.accountService.createSeed();
  }

  goToCreateAccountPrevStep() {
    this.createFormStepNo$.next(this.createFormStepNo$.getValue() - 1);
  }

  goToCreateAccountNextStep() {
    this.createFormStepNo$.next(this.createFormStepNo$.getValue() + 1);
  }

  saveNewAccount() {
    try {
      const newAccountName = this.newAccountForm.value.name;
      const newAccountPassword = this.newAccountForm.value.password;

      let incorrectFieldsErrorMessage = '';

      if (!newAccountName)
        incorrectFieldsErrorMessage += '\nAccount name is required';
      if (!newAccountPassword)
        incorrectFieldsErrorMessage += '\nAccount password is required';

      if (!newAccountName || !newAccountPassword) {
        throw incorrectFieldsErrorMessage;
      }

      this.accountService.saveAccount(
        newAccountName,
        newAccountPassword,
        this.newGeneratedMnemonicSeed,
        'sr25519'
      );
    } catch (error) {
      alert(`An error occurred while trying to save the account: ${error}`);
    }
  }

  ngOnInit() {
    const newMnemonicAndAddressPair =
      this.createNewMnemonicSeedAndAddressPair();
    this.newGeneratedMnemonicSeed = newMnemonicAndAddressPair.seed;
    // this.newGeneratedWalletAddress = newMnemonicAndAddressPair.address;
    this.newGeneratedWallet.name = '<unknown>';
    this.newGeneratedWallet.address = newMnemonicAndAddressPair.address;
  }
}
