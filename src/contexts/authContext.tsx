import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert } from "react-native";
import { IAuthContextData, IAuthenticate, IUser, IRegister } from '../interfaces';
import api from '../services/api';
import userApi from '../services/data/user';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('user');
      const storagedToken = await AsyncStorage.getItem('token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.common.Authorization = `Baerer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
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

    setUser(response.data.user);

    api.defaults.headers.common.Authorization = `Baerer ${response.data.token}`;

    await AsyncStorage.setItem('user', JSON.stringify(user));
    await AsyncStorage.setItem('token', response.data.token);
  }

  function logout() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, setLoading, signIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


export default AuthContext;