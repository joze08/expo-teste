import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Profile, News, Messages } from '../pages';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {

  return (
    <Drawer.Navigator
      screenOptions={
        {
          headerShown: false,
          drawerActiveBackgroundColor: "#abe756",
          drawerActiveTintColor: "#333"
        }
      }
    >
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="News" component={News} />
      <Drawer.Screen name="Messages" component={Messages} />
    </Drawer.Navigator>
  )
}

export default DrawerRoutes;