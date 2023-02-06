import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  get trainer(): Trainer | undefined {
    return this.trainerService.trainer;
  }

  get route(): string | undefined {
    return this.router.url;
  }
  
  constructor(
    private readonly trainerService: TrainerService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
  }

}
