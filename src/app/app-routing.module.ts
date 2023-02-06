import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { AuthGuard } from './guards/auth.guard';
import { WildernessPage } from './pages/wilderness/wilderness.page';


//defining the Angular routing
// landing page is the trainer login page
// wilderness page is the pokemon catalogue page
// trainer page is for the trainer list caught pokemon
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/landing"
  },
  {
    path: 'landing',
    component: LandingPage,
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
