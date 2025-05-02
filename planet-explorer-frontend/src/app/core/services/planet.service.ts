import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet.model';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  private apiUrl = 'http://localhost:5000/api/planets';

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.apiUrl);
  }

  getPlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.apiUrl}/${id}`);
  }

  updatePlanet(id: number, updated: Partial<Planet>): Observable<Planet> {
    return this.http.put<Planet>(`${this.apiUrl}/${id}`, { ...updated, id });
  }
}
