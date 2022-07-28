export interface Workers {
  id: number;
  email: string;
  password: string;
  roles: {
    description?: string;
    admin: boolean;
  };
}

export interface Users {
  email: string;
  password: string;
  roles: {
    description?: string;
    admin: boolean;
  };
}

export interface tokenLogin {
  accessToken: string;
}
export interface Credentials {
  email: string;
  password: string;
  id?: any;
}
export interface User {
  id: string;
  email: string;
  roles: {
    description?: string;
    admin: boolean;
  };
}
