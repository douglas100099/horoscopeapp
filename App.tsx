import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import Routes from './src/routes/Routes';
import { HoroscopeProvider } from './src/contexts/horoscopeContext';
import { NavigationContainer } from '@react-navigation/native';

import { AppLoading } from './src/components';

const App = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    _loadResourcesAsync().then(() => {
      setAssetsLoaded(true);
    });
  };

  const _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
        'RobotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
        'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
      }),
    ]);
  };

  return (
    assetsLoaded ?
      <HoroscopeProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </HoroscopeProvider>
      :
      <AppLoading />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
