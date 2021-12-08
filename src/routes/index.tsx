import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from "react-native";

import AuthContext from '../contexts/authContext';
import AuthRoutes from './authStack.routes';
import TabRoutes from './tabRoutes.routes';

const Routes = () => {
  const { signed, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#666' />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {signed ? <TabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

export default Routes;