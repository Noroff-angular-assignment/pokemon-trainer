import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  
  @Input() pokemons: Pokemon[] = [];
  private _pageNumber = 1;

  get pageNumber() {
    return this._pageNumber;
  }

  constructor(
    ) {   }

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

  ngOnInit(): void {

  }
}
