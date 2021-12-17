import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Profile, News, Messages, SendMessage } from '../pages';
//import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#72B01D",
          borderTopColor: "transparent"
        },
        tabBarInactiveTintColor: "#222",
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName={"Profile"}
    >

      <Tab.Screen name="Perfil" component={Profile}
        options={{
          tabBarIcon: () => {
            return (
              <Icon name={"person"} size={26} color={'#222'} />
            );
          }
        }}
      />

      <Tab.Screen name="Notícias" component={News}
        options={{
          tabBarIcon: () => {
            return (
              <Icon name={"article"} size={26} color={'#222'} />
            );
          }

        }}
      />

      <Tab.Screen name="Mensagens" component={Messages}
        options={{
          tabBarIcon: () => {
            return (
              <Icon name={"mail"} size={26} color={'#222'} />
            );
          },
          tabBarStyle: {
            backgroundColor: "#FFF",
            borderTopColor: "transparent"
          },
        }}
      />

      <Tab.Screen name="Enviar" component={SendMessage}
        options={{
          tabBarIcon: () => {
            return (
              <Icon name={"input"} size={26} color={'#222'} />
            );
          },
          tabBarStyle: {
            backgroundColor: "#FFF",
            borderTopColor: "transparent"
          },
        }}
      />

    </Tab.Navigator>

  );
}

export default TabRoutes;