import { Component } from '@angular/core';

import { TrainerService } from 'src/app/services/trainer.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';

// Returns the current trainer from the Train Service (via a get)
// Returns the current users favourites or and empty []
@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage {

  constructor( private trainerService: TrainerService ) {}

  get trainer(): Trainer | undefined {
    return this.trainerService.trainer
  }

  get favourites(): Pokemon[] {
    if(this.trainerService.trainer) {
      return this.trainerService.trainer.favourites
    }
    return []
  }
}
