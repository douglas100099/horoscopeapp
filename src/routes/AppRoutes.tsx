import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home
} from '../screens';

const Tab = createBottomTabNavigator();
const AppRoute = () => {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carteira" component={Home} />
      <Tab.Screen name="Color Match" component={Home} />
      <Tab.Screen name="Closet" component={Home} />
      <Tab.Screen name="Descontos" component={Home} />
    </Tab.Navigator>
  );
}

export default AppRoute;