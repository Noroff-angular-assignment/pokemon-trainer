import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { FavouriteButtonComponent } from './components/favourite-button/favourite-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WildernessPage } from './pages/wilderness/wilderness.page';
import { LandingPage } from './pages/landing/landing.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { AppComponent } from './app.component';

// Declares and imports components, page and modules for the entire APP
@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    TrainerPage,
    WildernessPage,
    LoginFormComponent,
    NavbarComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    FavouriteButtonComponent,
    LogoutButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
