export interface ILogin {
  email?: string;
  password?: string;
}

export interface IAuthContextData {
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  login(): Promise<void>;
  logout(): void;
}

export interface IResponseData {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export interface IUser {
  name: string;
  email: string;
}

