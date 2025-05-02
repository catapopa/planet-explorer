export interface Planet {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  status: PlanetStatus;
  exploredByTeam?: Team;
}

export enum PlanetStatus {
  OK,
  NotOk,
  Todo,
  EnRoute,
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
