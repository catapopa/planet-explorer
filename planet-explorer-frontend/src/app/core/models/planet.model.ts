export interface Planet {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  status: string;
  exploredByTeamId?: number;
}
