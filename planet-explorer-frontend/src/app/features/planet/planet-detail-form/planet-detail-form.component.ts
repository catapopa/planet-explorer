import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Planet } from 'src/app/core/models/planet.model';
import { PlanetService } from 'src/app/core/services/planet.service';

@Component({
  selector: 'app-planet-detail-form',
  templateUrl: './planet-detail-form.component.html',
  styleUrls: ['./planet-detail-form.component.scss'],
})
export class PlanetDetailFormComponent {
  @Input() planet!: Planet;
  @Output() planetUpdated = new EventEmitter<Planet>();

  constructor(private planetService: PlanetService) {}

  updatePlanet() {
    const updatePayload: Partial<Planet> = {
      description: this.planet.description,
      status: this.planet.status,
    };

    this.planetService.updatePlanet(this.planet.id, updatePayload).subscribe({
      next: () => alert('Planet updated!'),
      error: () => alert('Update failed.'),
    });
  }
}
