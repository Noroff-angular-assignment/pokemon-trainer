import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { TrainerService } from './trainer.service';
import { WildernessService } from './wilderness.service';

const { APIKey, APITrainers } = environment;

// this is the service for handling the catch/favourite button at each pokemon
@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  // boolean to determine if the functionallity is active or not
  private _loading: boolean = false;

  constructor(
    private readonly http : HttpClient,
    private readonly pokemonService: WildernessService,
    private readonly trainerService: TrainerService
  ) { }

  get loading():boolean {
    return this._loading;
  }
  //toggle between add or remove the given pokemon from the trainers favourite list
  public toggleFavourite(pokemonId: string): Observable<Trainer> {
    if(!this.trainerService.trainer) {
      throw new Error("Trainer doesn't exist!")
    }

    const trainer: Trainer = this.trainerService.trainer
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonById(pokemonId)

    if(!pokemon) {
      throw new Error("No pokemon with id: " + pokemonId);
    }
    //determine if the pokemon is already in the favourite list
    // if yes -> remove and if no -> add to the favourite list
    if(this.trainerService.inFavourites(pokemonId)) {
      this.trainerService.removeFavourite(pokemonId)
    } else {
      this.trainerService.addFavourite(pokemon)
    }
    //the standard header to http client request
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-Key': APIKey
    })

    this._loading = true;

    // patch the favourite list at the active trainer on the API database
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
