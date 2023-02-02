import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { WildernessPage } from './pages/wilderness/wilderness.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'wilderness',
    component: WildernessPage,
  },
  {
    path: 'trainer',
    component: TrainerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
