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
  NotOk = 'NotOk',
  Todo = 'Todo',
  EnRoute = 'EnRoute',
}

export const PlanetStatusRecord: Record<PlanetStatus, string> = {
  [PlanetStatus.OK]: 'OK',
  [PlanetStatus.NotOk]: 'Not OK',
  [PlanetStatus.Todo]: 'To Do',
  [PlanetStatus.EnRoute]: 'En Route',
};
