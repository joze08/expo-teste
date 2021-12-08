import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import { IAuthContextData, IUser } from '../interfaces/User';
import { signIn } from '../services/auth';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@ExpoTeste:user');
      const storagedToken = await AsyncStorage.getItem('@ExpoTeste:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.common.Authorization = `Baerer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, [])

  async function login() {
    const response = await signIn();

    setUser(response.user);

    api.defaults.headers.common.Authorization = `Baerer ${response.token}`;

    await AsyncStorage.setItem('@ExpoTeste:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@ExpoTeste:token', response.token);
  }

  function logout() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


export default AuthContext;