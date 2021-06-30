import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { HoroscopeContext } from '../../contexts/horoscopeContext';
import { Header, SignsData } from '../../components';

import { styles } from './styles';

const Home = () => {
  const { horoscopes } = useContext(HoroscopeContext);
  const [data, setData] = useState<ResultDataProps['horoscopes']>();

  useEffect(() => {
    if (horoscopes != undefined) {
      setData(horoscopes.result[0].horoscopes);
    }
  }, [horoscopes]);

  const renderData = ({ item, index }: { item: HoroscopesArrayResultProps, index: number }) => {
    return (
      <SignsData key={index.toString()} data={item} />
    );
  };

  return (
    <View style={styles.Container}>
      <StatusBar style='dark' />
      <Header />
      <View style={styles.ViewBody}>
        <View style={styles.ViewBodyTitle}>
          <Text style={styles.TxtTitleBody}>Escolha um signo e descubra o horóscopo do dia!</Text>
        </View>
        <FlatList
          data={data ? data : []}
          renderItem={renderData}
          horizontal={false}
          numColumns={3}
          keyExtractor={(item: any, index: any) => index.toString()}
          style={{
            marginTop: 25,
          }}
        />
      </View>
    </View>
  );
};

export default Home;