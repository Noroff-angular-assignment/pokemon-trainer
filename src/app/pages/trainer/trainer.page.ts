import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage {

  get user(): User | undefined {
    return this.trainerService.user
  }

  get favourites(): Pokemon[] {
    if(this.trainerService.user) {
      return this.trainerService.user.favourites
    }

    return []
  }

  constructor(
    private trainerService: UserService
  ){

  }

}
