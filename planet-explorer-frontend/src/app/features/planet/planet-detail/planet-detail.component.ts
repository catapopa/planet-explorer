import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  Planet,
  PlanetStatus,
  UpdatePlanet,
} from 'src/app/core/models/planet.model';
import { PlanetService } from 'src/app/core/services/planet.service';
import { PlanetDetailFormComponent } from '../planet-detail-form/planet-detail-form.component';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlanetStatusComponent } from 'src/app/shared/planet-status/planet-status.component';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    PlanetDetailFormComponent,
    PlanetStatusComponent,
  ],
})
export class PlanetDetailComponent implements OnInit {
  @Input() planet: Planet | undefined;

  readonly PlanetStatus = PlanetStatus;
  isEditMode = false;
  isCaptain = false;

  constructor(
    private planetService: PlanetService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.isCaptain = this.auth.isCaptain();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  getPlanetRobotNumbers(planet: Planet): string[] {
    return (
      planet.exploredByTeam?.robots.map((robot) => robot.robotNumber) || []
    );
  }

  updatePlanet(planet: UpdatePlanet) {
    this.planetService.updatePlanet(planet.id, planet).subscribe({
      next: () => alert('Planet updated!'),
      error: () => alert('Update failed.'),
    });
  }
}
