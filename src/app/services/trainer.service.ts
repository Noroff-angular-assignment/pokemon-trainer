import { Injectable, Input } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';


// this service is all about the trainer actions
@Injectable({
  providedIn: 'root'
})
export class TrainerService {


  private _trainer?: Trainer;

  get trainer(): Trainer | undefined {
    return this._trainer;
  }
  //set the trainer by storage save (StorageUtil)
  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  constructor() { 
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer)
  }
  // filter out the pokemon which is defined as favourites
  public inFavourites(pokemonId: string): boolean {
    if(this._trainer){
      return Boolean(this._trainer?.favourites.find((pokemon: Pokemon) => pokemon.id === pokemonId))
    }
    return false;
  }

  //function to add the given pokemon to the favorites list of the trainer
  public addFavourite(pokemon: Pokemon): void {
    if(this._trainer){
      this._trainer.favourites.push(pokemon)
    }
  }

  //function to remove the given pokemon to the favorites list of the trainer
  public removeFavourite(pokemonId: string): void {
    if(this._trainer) {
      this._trainer.favourites = this._trainer.favourites.filter((pokemon: Pokemon) => pokemon.id !== pokemonId);
    }
  }
}

