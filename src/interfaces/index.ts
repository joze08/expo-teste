export interface ILogin {
  email?: string;
  password?: string;
}

export interface IAuthContextData {
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  setLoading(value: boolean): void;
  signIn(userData: IRegister): Promise<void>
  login(userData: IAuthenticate): Promise<void>;
  logout(): void;
}

export interface IResponseRegister {
  email: string;
  created_at: string;
  updated_at: string;
  id: number;
}

export interface IUser {
  id: number;
  email: string;
  remember_me_token: null;
  created_at: string;
  updated_at: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface IAuthenticate {
  name: string;
  email: string;
  password: string;
}

export interface IResponseAuthenticate {
  token: string;
  user: {
    id: number;
    email: string;
    remember_me_token: null;
    created_at: string;
    updated_at: string;
  }
}

