import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletSearchBarComponent } from './wallet-search-bar.component';

describe('WalletSearchBarComponent', () => {
  let component: WalletSearchBarComponent;
  let fixture: ComponentFixture<WalletSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
