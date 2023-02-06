import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Simple logout button.
// Removes the session storage and reloads the page.
// Making the AuthGuard redirect to the login page.
@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {

  constructor(
    private readonly router: Router
  ) {}

  handleLogout() {
    window.sessionStorage.clear()
    window.location.reload()
  }
}
