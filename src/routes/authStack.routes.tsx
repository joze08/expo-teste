import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthStackParamList } from '../types/AuthStack.types';
import { Login, SignIn } from '../pages';
import TabRoutes from './tabRoutes.routes';
import DrawerRoutes from './drawerRoutes.routes';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignIn" component={SignIn} />
      {/* <Stack.Screen name="TabRoutes" component={TabRoutes} /> */}
      {/* <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} /> */}
    </Stack.Navigator>
  );
}

export default AuthRoutes;
