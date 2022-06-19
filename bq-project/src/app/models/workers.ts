export interface Workers {
  id: number;
  email: string;
  password: string;
  roles: {
    admin: boolean;
  };
}
