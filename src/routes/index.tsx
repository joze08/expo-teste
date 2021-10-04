import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './authStack.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}

export default Routes;