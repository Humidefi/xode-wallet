import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent {
  constructor(private router: Router, private location: Location) {}

  goToCreateAccount() {
    this.router.navigateByUrl('create-account');
  }
}
