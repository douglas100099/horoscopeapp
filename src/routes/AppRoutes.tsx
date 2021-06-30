import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home
} from '../screens';

import HomeIconSVG from '../../assets/svg/iconsMenu/HomeIconSVG';
import CarteiraIconSVG from '../../assets/svg/iconsMenu/CarteiraIconSVG';
import ColorMathIconSVG from '../../assets/svg/iconsMenu/ColorMathIconSVG';
import ClosetIconSVG from '../../assets/svg/iconsMenu/ClosetIconSVG';
import DescontosIconSVG from '../../assets/svg/iconsMenu/DescontosIconSVG';

const Tab = createBottomTabNavigator();
const AppRoute = () => {

  const HomeIcon = () => <HomeIconSVG height={28} width={28} style={{ alignSelf: 'center', justifyContent: 'center' }} />
  const CarteiraIcon = () => <CarteiraIconSVG height={28} width={28} style={{ alignSelf: 'center', justifyContent: 'center' }} />
  const ColorMatchIcon = () => <ColorMathIconSVG height={28} width={28} style={{ alignSelf: 'center', justifyContent: 'center' }} />
  const ClosetIcon = () => <ClosetIconSVG height={28} width={28} style={{ alignSelf: 'center', justifyContent: 'center' }} />
  const DescontosIcon = () => <DescontosIconSVG height={28} width={28} style={{ alignSelf: 'center', justifyContent: 'center' }} />

  return (
    <Tab.Navigator 
      initialRouteName={'Home'}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => HomeIcon(),
        }}
      />
      <Tab.Screen
        name="Carteira"
        component={Home}
        options={{
          tabBarIcon: () => CarteiraIcon(),
        }}
      />
      <Tab.Screen
        name="Color Match"
        component={Home}
        options={{
          tabBarIcon: () => ColorMatchIcon(),
        }}
      />
      <Tab.Screen
        name="Closet"
        component={Home}
        options={{
          tabBarIcon: () => ClosetIcon(),
        }}
      />
      <Tab.Screen
        name="Descontos"
        component={Home}
        options={{
          tabBarIcon: () => DescontosIcon(),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoute;