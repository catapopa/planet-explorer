import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Planet } from 'src/app/core/models/planet.model';
import { PlanetService } from 'src/app/core/services/planet.service';
import { PlanetDetailComponent } from '../planet-detail/planet-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    PlanetDetailComponent,
    MatIconModule,
    MatButtonModule,
  ],
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    this.planetService.getPlanets().subscribe((planets) => {
      this.planets = planets;
    });
  }
}
