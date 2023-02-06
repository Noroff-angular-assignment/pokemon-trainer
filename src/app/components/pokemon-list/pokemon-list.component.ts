import { Component, Input, OnInit } from '@angular/core';

import { Pokemon } from 'src/app/models/pokemon.model';

// Responsible for handling previous / next click
// Making sure not to go into negatives and not beyond amount of pokemon
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  
  @Input() pokemons: Pokemon[] = [];
  private _pageNumber = 1;

  get pageNumber() {
    return this._pageNumber;
  }

  onPrevClick(): void {
    if (this._pageNumber===1) {
      return;
    }
    this._pageNumber--
  }

  onNextClick(): void {
    if (this._pageNumber*24>this.pokemons.length) {
      this._pageNumber = 1;
      return;
    }
    this._pageNumber++
  }
}
