import { Component, OnInit } from '@angular/core';

import { WildernessService } from 'src/app/services/wilderness.service';
import { Pokemon } from 'src/app/models/pokemon.model';

// Returns all saved pokemon. (via a get)
// Returns whether the Wilderness Service is done loading (via a get)
// Returns error from Wilderness Service
// On initialization loads in all pokemon
@Component({
  selector: 'app-wilderness',
  templateUrl: './wilderness.page.html',
  styleUrls: ['./wilderness.page.css']
})
export class WildernessPage implements OnInit {
  
  constructor(private readonly wildernessService: WildernessService) { }

  get pokemons(): Pokemon[] {
    return this.wildernessService.pokemons;
  }

  get loading(): boolean {
    return this.wildernessService.loading;
  }

  get error(): string {
    return this.wildernessService.error;
  }

  ngOnInit(): void {
    this.wildernessService.findAllPokemons();
  }
}
