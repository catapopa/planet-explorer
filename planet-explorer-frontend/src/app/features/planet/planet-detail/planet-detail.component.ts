import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet, PlanetStatus } from 'src/app/core/models/planet.model';
import { PlanetService } from 'src/app/core/services/planet.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent implements OnInit {
  @Input() planet: Planet | undefined;
  readonly PlanetStatus = PlanetStatus;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getPlanet(id);
  }

  getPlanet(id: number): void {
    this.planetService.getPlanet(id).subscribe((planet) => {
      this.planet = planet;
    });
  }
}
