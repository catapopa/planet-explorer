import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/core/models/planet.model';
import { PlanetService } from 'src/app/core/services/planet.service';
import { PlanetDetailComponent } from '../planet-detail/planet-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    PlanetDetailComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];
  isLoggedIn = false;
  isCaptain = false;

  constructor(
    private planetService: PlanetService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getPlanets();
    this.isLoggedIn = !!localStorage.getItem('token');
    this.isCaptain = this.auth.isCaptain();
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.isCaptain = false;
  }

  getPlanets(): void {
    this.planetService.getPlanets().subscribe((planets) => {
      this.planets = planets;
    });
  }
}
