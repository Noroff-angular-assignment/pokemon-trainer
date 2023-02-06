import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { TrainerService } from './trainer.service';
import { WildernessService } from './wilderness.service';

const { APIKey, APITrainers } = environment;

// This service handles the favourite button for each individual pokemon.
@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  // Noolean to determine whether the functionallity is active or not.
  private _loading: boolean = false;

  constructor(
    private readonly http : HttpClient,
    private readonly pokemonService: WildernessService,
    private readonly trainerService: TrainerService
  ) { }

  get loading():boolean {
    return this._loading;
  }

  // Toggles between adding or removing the given pokemon from the trainers favourite list
  public toggleFavourite(pokemonId: string): Observable<Trainer> {
    if(!this.trainerService.trainer) {
      throw new Error("Trainer doesn't exist!")
    }

    const trainer: Trainer = this.trainerService.trainer
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonById(pokemonId)

    if(!pokemon) {
      throw new Error("No pokemon with id: " + pokemonId);
    }

    // Determine if the pokemon is already in the favourite list.
    // If yes -> remove and if not -> add to the favourite list.
    if(this.trainerService.inFavourites(pokemonId)) {
      this.trainerService.removeFavourite(pokemonId)
    } else {
      this.trainerService.addFavourite(pokemon)
    }
    
    // The standard header to http client request
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-Key': APIKey
    })

    this._loading = true;

    // Patch the favourite list of the active trainer in the API database
    return this.http.patch<Trainer>(`${APITrainers}/${trainer.id}`, {
      favourites: [...trainer.favourites]
    }, {
      headers
    }).pipe(
      tap((syncedTrainer: Trainer) => {
        this.trainerService.trainer = syncedTrainer
      }),
      finalize(() => this._loading = false)
    )
  }
}
