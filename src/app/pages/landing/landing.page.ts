import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TrainerService } from 'src/app/services/trainer.service';

// Checks if trainer has been set in Trainer Service (and isn't null)
// If so, redirect to wilderness (pokemon catalogue).
// Also redirects when user login has been handled.
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.css']
})
export class LandingPage implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly trainerService: TrainerService
  ) { }

  ngOnInit(): void {
    if(this.trainerService.trainer && this.trainerService.trainer !== null){
      this.router.navigateByUrl("/wilderness");
    }
  }

  handleLogin(): void {
    this.router.navigateByUrl("/wilderness");
  }
}
