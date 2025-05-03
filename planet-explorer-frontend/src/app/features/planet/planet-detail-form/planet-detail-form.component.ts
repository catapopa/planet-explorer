import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Planet,
  PlanetStatus,
  UpdatePlanet,
} from 'src/app/core/models/planet.model';

@Component({
  selector: 'app-planet-detail-form',
  templateUrl: './planet-detail-form.component.html',
  styleUrls: ['./planet-detail-form.component.scss'],
  standalone: false,
})
export class PlanetDetailFormComponent {
  @Input() planet!: Planet;
  @Output() planetUpdated = new EventEmitter<UpdatePlanet>();

  readonly PlanetStatus = PlanetStatus;

  updatePlanet() {
    console.log('PlanetDetailFormComponent: updatePlanet', this.planet.status);
    const updatePayload: UpdatePlanet = {
      id: this.planet.id,
      description: this.planet.description,
      status: this.planet.status,
    };
    this.planetUpdated.emit(updatePayload);
  }
}
