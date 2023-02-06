import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { WildernessService } from 'src/app/services/wilderness.service';

@Component({
  selector: 'app-wilderness',
  templateUrl: './wilderness.page.html',
  styleUrls: ['./wilderness.page.css']
})
export class WildernessPage implements OnInit {
  
  get pokemons(): Pokemon[] {
    return this.wildernessService.pokemons;
  }

  get loading(): boolean {
    return this.wildernessService.loading;
  }

  get error(): string {
    return this.wildernessService.error;
  }

  constructor(private readonly wildernessService: WildernessService) { }

  ngOnInit(): void {
    //run the findAllPokemons function -> fetch all pokemons from API
    this.wildernessService.findAllPokemons();
  }
}
