export interface IIndexResponse {
  id: number;
  user_id: number;
  texto: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    email: string;
    remember_me_token: null;
    created_at: string;
    updated_at: string;
  }
}


export interface IStoreData {
  texto: string;
}

export interface IStoreResponse {
  texto: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  id: number;
}

export interface IMethodsResponse {
  id: number;
  user_id: number;
  texto: string;
  created_at: string;
  updated_at: string;
}