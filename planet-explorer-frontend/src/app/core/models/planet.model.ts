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

export interface Team {
  id: number;
  captainId: number;
  captain: Captain;
  robots: Robot[];
}

export interface Captain {
  id: number;
  name: string;
}

export interface Robot {
  id: number;
  robotNumber: string;
  teamId: number;
  team?: Team | null;
}
