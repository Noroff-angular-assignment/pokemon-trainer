import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { StorageUtil } from '../utils/storage.util';
import { Pokemon } from '../models/pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemon?: Pokemon;

  get pokemon(): Pokemon | undefined {
    return this._pokemon;
  }

  set pokemon(pokemon: Pokemon | undefined) {
    StorageUtil.storageSave<Pokemon>(StorageKeys.PokeArr, pokemon!);
    this._pokemon = pokemon;
  }

  constructor() { 
    this._pokemon = StorageUtil.storageRead<Pokemon>(StorageKeys.PokeArr)
  }
}
