import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { TrainerService } from './trainer.service';
import { WildernessService } from './wilderness.service';

const { APIKey, APITrainers } = environment;

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private _loading: boolean = false;

  constructor(
    private readonly http : HttpClient,
    private readonly pokemonService: WildernessService,
    private readonly trainerService: TrainerService
  ) { }

  get loading():boolean {
    return this._loading;
  }

  public toggleFavourite(pokemonId: string): Observable<Trainer> {
    if(!this.trainerService.trainer) {
      throw new Error("Trainer doesn't exist!")
    }

    const trainer: Trainer = this.trainerService.trainer
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonById(pokemonId)

    if(!pokemon) {
      throw new Error("No pokemon with id: " + pokemonId);
    }

    if(this.trainerService.inFavourites(pokemonId)) {
      this.trainerService.removeFavourite(pokemonId)
    } else {
      this.trainerService.addFavourite(pokemon)
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-Key': APIKey
    })

    this._loading = true;

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
