import React, { ReactNode } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home
} from '../screens';

const App = createStackNavigator();
const AppRoute = () => {
  return (
    <App.Navigator initialRouteName={'Home'}>
      <App.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </App.Navigator>
  );
}

export default AppRoute;