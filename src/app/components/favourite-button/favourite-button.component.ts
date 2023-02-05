import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FavouriteService } from 'src/app/services/favourite.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent {

  public isFavourite: boolean = false;
  @Input() pokemonId: string = "";

  get loading(): boolean {
    return this.favouriteService.loading;
  }

  constructor(
    private trainerService: UserService,
    private readonly favouriteService: FavouriteService
  ) {}

  ngOnInit(): void {
    this.isFavourite = this.trainerService.inFavourites(this.pokemonId);
  }



  onFavouriteClick(): void {
    this.favouriteService.toggleFavourite(this.pokemonId)
      .subscribe({
        next: (user: User) => {
          this.isFavourite = this.trainerService.inFavourites(this.pokemonId);
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message)
        }
      })
  }
}
