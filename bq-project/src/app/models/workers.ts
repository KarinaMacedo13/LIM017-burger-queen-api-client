export interface Workers {
  id: number;
  email: string;
  password: string;
  roles : {
    admin: boolean;
  }
}

export interface Users {
  email: string;
  password: string;
  roles : {
    admin: boolean;
  }
}

export interface tokenLogin{
  accessToken: string;
}
