export interface User {
  id: number;
  role: Role;
  username: string;
}

export enum Role {
  Admin = 'Admin',
  Captain = 'Captain',
  Robot = 'Robot',
}
