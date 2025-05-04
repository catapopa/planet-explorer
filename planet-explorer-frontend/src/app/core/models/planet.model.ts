import { Team } from './team.model';

export interface Planet {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  status: PlanetStatus;
  exploredByTeam?: Team;
}

export interface UpdatePlanet {
  id: number;
  description: string;
  status: PlanetStatus;
}

export enum PlanetStatus {
  OK = 'OK',
  NotOK = 'Not OK',
  Todo = 'Todo',
  EnRoute = 'En Route',
}
