import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';

import { FavouriteService } from 'src/app/services/favourite.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { Trainer } from 'src/app/models/trainer.model';

// Favourite button is the little pokeball next to pokemon.
// Has fields for if each individual button is loading or favourited.
// On initialization checks if it is favourited and display accordingly.
@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent {

  public loading: boolean = false;
  public isFavourite: boolean = false;
  @Input() pokemonId: string = "";

  constructor(
    private trainerService: TrainerService,
    private readonly favouriteService: FavouriteService
  ) {}

  ngOnInit(): void {
    this.isFavourite = this.trainerService.inFavourites(this.pokemonId);
  }

  // Sets loading true while handingly the toggleFavourite call.
  onFavouriteClick(): void {
    this.loading = true
    this.favouriteService.toggleFavourite(this.pokemonId)
      .subscribe({
        next: (trainer: Trainer) => {
          this.loading = false
          this.isFavourite = this.trainerService.inFavourites(this.pokemonId);
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message)
        }
      })
  }
}
