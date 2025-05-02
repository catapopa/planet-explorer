import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './features/planet/planet-list/planet-list.component';
import { PlanetDetailComponent } from './features/planet/planet-detail/planet-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetDetailFormComponent } from './features/planet/planet-detail-form/planet-detail-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetDetailComponent,
    PlanetDetailFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
