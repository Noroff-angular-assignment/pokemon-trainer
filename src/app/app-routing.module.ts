import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { AuthGuard } from './guards/auth.guard';
import { WildernessPage } from './pages/wilderness/wilderness.page';


// Defines the Angular routing.
// Landing page is the trainer login page.
// Wilderness page is the pokemon catalogue page.
// Trainer page is for the trainer list caught pokemon.
// Also indicates if Auth Guard canActivate on wilderness and trainer page.
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/landing"
  },
  {
    path: 'landing',
    component: LandingPage
  },
  {
    path: 'wilderness',
    component: WildernessPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'trainer',
    component: TrainerPage,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
