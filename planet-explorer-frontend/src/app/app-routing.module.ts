import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './features/planet/planet-list/planet-list.component';
import { PlanetDetailComponent } from './features/planet/planet-detail/planet-detail.component';

const routes: Routes = [
  { path: '', component: PlanetListComponent },
  { path: 'planet/:id', component: PlanetDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
