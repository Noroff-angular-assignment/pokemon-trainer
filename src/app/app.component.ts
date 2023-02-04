import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { WildernessService } from './services/wilderness.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly userService: UserService,
    private readonly wildernessService: WildernessService
  ) {}
  ngOnInit(): void {
    if (this.userService.user) {
      this.wildernessService.findAllPokemons();
    }
  }
}
