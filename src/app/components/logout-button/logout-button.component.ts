import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {

  constructor(
    private readonly router: Router
  ){}

  handleLogout() {
    window.sessionStorage.clear()
    window.location.reload()
  }
}
