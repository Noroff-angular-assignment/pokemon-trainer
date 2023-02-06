import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { UserService } from './user.service';
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
    private readonly trainerService: UserService
  ) { }

  get loading():boolean {
    return this._loading;
  }

  public toggleFavourite(pokemonId: string): Observable<User> {
    if(!this.trainerService.user) {
      throw new Error("Trainer doesn't exist!")
    }

    const trainer: User = this.trainerService.user
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

    return this.http.patch<User>(`${APITrainers}/${trainer.id}`, {
      favourites: [...trainer.favourites]
    }, {
      headers
    }).pipe(
      tap((syncedUser: User) => {
        this.trainerService.user = syncedUser
      }),
      finalize(() => this._loading = false)
    )
  }
}
