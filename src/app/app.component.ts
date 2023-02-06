import { Component, OnInit } from '@angular/core';
import { TrainerService } from './services/trainer.service';
import { WildernessService } from './services/wilderness.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly trainerService: TrainerService,
    private readonly wildernessService: WildernessService
  ) {}
  ngOnInit(): void {
    if (this.trainerService.trainer) {
      this.wildernessService.findAllPokemons();
    }
  }
}
