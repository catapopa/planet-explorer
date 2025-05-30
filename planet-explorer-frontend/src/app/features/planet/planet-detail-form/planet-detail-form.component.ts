import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Planet,
  PlanetStatusRecord,
  UpdatePlanet,
} from 'src/app/core/models/planet.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-planet-detail-form',
  templateUrl: './planet-detail-form.component.html',
  styleUrls: ['./planet-detail-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class PlanetDetailFormComponent {
  @Input() planet!: Planet;
  @Input() isCaptain!: Planet;
  @Output() planetUpdated = new EventEmitter<UpdatePlanet>();

  readonly PlanetStatusRecord = PlanetStatusRecord;

  updatePlanet() {
    const updatePayload: UpdatePlanet = {
      id: this.planet.id,
      description: this.planet.description,
      status: this.planet.status,
    };
    this.planetUpdated.emit(updatePayload);
  }
}
