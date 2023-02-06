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

  public loading: boolean = false;
  public isFavourite: boolean = false;
  @Input() pokemonId: string = "";

  constructor(
    private trainerService: UserService,
    private readonly favouriteService: FavouriteService
  ) {}

  ngOnInit(): void {
    this.isFavourite = this.trainerService.inFavourites(this.pokemonId);
  }



  onFavouriteClick(): void {
    this.loading = true
    this.favouriteService.toggleFavourite(this.pokemonId)
      .subscribe({
        next: (user: User) => {
          this.loading = false
          this.isFavourite = this.trainerService.inFavourites(this.pokemonId);
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message)
        }
      })
  }
}
