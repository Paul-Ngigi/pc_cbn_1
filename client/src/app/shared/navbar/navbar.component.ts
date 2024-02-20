import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  constructor(private router: Router) {}

  landing() {
    this.router.navigate(['']);
  }

  features() {
    this.router.navigate(['']);
  }

  why() {
    this.router.navigate(['']);
  }

  about() {
    this.router.navigate(['']);
  }

  pricing () {
    this.router.navigate(['']);
  }

  login() {
    this.router.navigate(['/auth/login']);
  }

  signup() {
    this.router.navigate(['/auth/register']);
  }
}
