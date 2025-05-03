import { Component, OnInit } from '@angular/core';
import { Planet, UpdatePlanet } from 'src/app/core/models/planet.model';
import { PlanetService } from 'src/app/core/services/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  standalone: false,
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

  updatePlanet(planet: UpdatePlanet) {
    this.planetService.updatePlanet(planet.id, planet).subscribe({
      next: () => alert('Planet updated!'),
      error: () => alert('Update failed.'),
    });
  }
}
