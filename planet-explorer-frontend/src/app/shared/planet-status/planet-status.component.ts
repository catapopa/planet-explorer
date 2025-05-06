import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  PlanetStatus,
  PlanetStatusRecord,
} from 'src/app/core/models/planet.model';

@Component({
  selector: 'app-planet-status',
  templateUrl: './planet-status.component.html',
  styleUrls: ['./planet-status.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class PlanetStatusComponent {
  @Input() status: PlanetStatus | undefined;

  readonly PlanetStatus = PlanetStatus;
  readonly PlanetStatusRecord = PlanetStatusRecord;

  statusMap: Record<PlanetStatus, { icon: string; color: string }> = {
    [PlanetStatus.OK]: { icon: 'check_circle', color: 'green' },
    [PlanetStatus.NotOk]: { icon: 'cancel', color: 'red' },
    [PlanetStatus.Todo]: { icon: 'bookmark', color: 'orange' },
    [PlanetStatus.EnRoute]: { icon: 'rocket', color: 'blue' },
  };

  constructor() {}
}
