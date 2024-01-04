import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent {
  constructor(private router: Router) {}
  goToCreateAccount() {
    this.router.navigateByUrl('/create-account');
  }
}
