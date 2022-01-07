import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert } from "react-native";
import { IAuthContextData, IAuthenticate, IUser, IRegister } from '../interfaces';
import api from '../services/api';
import userApi from '../services/data/user';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('user');
      const storagedToken = await AsyncStorage.getItem('token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setToken(storagedToken);
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(userData: IRegister) {
    await userApi.register(userData);
    setLoading(false);
    Alert.alert("Cadastrado com sucesso! Faça seu login!");
  }

  async function login(userData: IAuthenticate) {
    const response = await userApi.authenticate(userData);
    setLoading(false);

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

    setUser(response.data.user);
    setToken(response.data.token);

    await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    await AsyncStorage.setItem('token', response.data.token);
  }

  async function logout() {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');
    setUser(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!token, user, token, loading, setLoading, signIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


export default AuthContext;