import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAddressPreviewCardComponent } from './wallet-address-preview-card.component';

describe('WalletAddressPreviewCardComponent', () => {
  let component: WalletAddressPreviewCardComponent;
  let fixture: ComponentFixture<WalletAddressPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletAddressPreviewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletAddressPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
