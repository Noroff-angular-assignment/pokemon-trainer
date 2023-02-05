import { Injectable, Input } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private _user?: User;

  get user(): User | undefined {
    return this._user;
  }

  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() { 
    this._user = StorageUtil.storageRead<User>(StorageKeys.User)
  }

  public inFavourites(pokemonId: string): boolean {
    if(this._user){
      return Boolean(this._user?.favourites.find((pokemon: Pokemon) => pokemon.id === pokemonId))
    }
    return false;
  }

  public addFavourite(pokemon: Pokemon): void {
    if(this._user){
      this._user.favourites.push(pokemon)
    }
  }

  public removeFavourite(pokemonId: string): void {
    if(this._user) {
      this._user.favourites = this._user.favourites.filter((pokemon: Pokemon) => pokemon.id !== pokemonId);
    }
  }
}

