import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { environment } from 'src/environments/environment.development';
import { finalize } from 'rxjs';
import { PokePicture } from '../enums/pokemon.enum';

const { APIPokemon } = environment;

@Injectable({
  providedIn: 'root',
})
export class WildernessService {
  private _pokemon: Pokemon[] = [];
  private _error: string = '';
  private _loading: boolean = false;

  get pokemons(): Pokemon[] {
    return this._pokemon;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor(private readonly http: HttpClient) {}

  public findAllPokemons(): void {
    if (this._pokemon.length > 0 || this._loading) {
      return;
    }
    this._loading = true;
    this.http
      .get<Pokemon[]>(`${APIPokemon}pokemon?limit=20&offset=0`)
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemon: any) => {
          this._pokemon = pokemon.results;
          this.fillModel();
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        },
      });
  }
  private fillModel(): void {
    this._pokemon.forEach((pokemon: Pokemon) => {
      const SplitURL = pokemon.url.split('/');
      pokemon.id = Number(SplitURL[SplitURL.length - 2]);
      pokemon.img = `${PokePicture.BaseURL}${pokemon.id}.png`;
      pokemon.name =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    });
  }
}
