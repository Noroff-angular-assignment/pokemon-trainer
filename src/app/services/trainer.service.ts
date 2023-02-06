import { Injectable, Input } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';


// This service is responsible for handling the trainer functionality.
@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer?: Trainer;

  get trainer(): Trainer | undefined {
    return this._trainer;
  }
  // Set the trainer by storage save (StorageUtil).
  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  constructor() { 
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer)
  }
  // Filter out the pokemon which are in the trainers favourite list.
  public inFavourites(pokemonId: string): boolean {
    if(this._trainer){
      return Boolean(this._trainer?.favourites.find((pokemon: Pokemon) => pokemon.id === pokemonId))
    }
    return false;
  }

  // Adds the given pokemon to the trainers favourite list.
  public addFavourite(pokemon: Pokemon): void {
    if(this._trainer){
      this._trainer.favourites.push(pokemon)
    }
  }

  // Removes the given pokemon from the trainers favourite list.
  public removeFavourite(pokemonId: string): void {
    if(this._trainer) {
      this._trainer.favourites = this._trainer.favourites.filter((pokemon: Pokemon) => pokemon.id !== pokemonId);
    }
  }
}

