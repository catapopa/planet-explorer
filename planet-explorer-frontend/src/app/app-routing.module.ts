import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './features/planet/planet-list/planet-list.component';
import { LoginComponent } from './features/login/login/login.component';

const routes: Routes = [
  { path: '', component: PlanetListComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
