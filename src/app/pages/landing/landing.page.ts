import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

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
    this.checkIfLoggedIn()
  }

  checkIfLoggedIn(): void {
    if(this.trainerService.trainer){
      this.router.navigateByUrl("/wilderness");
    }
  }

  handleLogin(): void {
    // when login -> redirect to wilderness
    this.router.navigateByUrl("/wilderness");
  }
}
