import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { HoroscopeContext } from '../../contexts/horoscopeContext';
import { BottomSheetSign, Header, SignsData } from '../../components';

import { styles } from './styles';
import BottomSheet from '@gorhom/bottom-sheet';

const Home = ({ navigation }: any) => {
  const { horoscopes } = useContext(HoroscopeContext);
  const [data, setData] = useState<ResultDataProps['horoscopes']>();
  const [itemSelected, setItemSelected] = useState<HoroscopesArrayResultProps>();
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (horoscopes != undefined) {
      setData(horoscopes.result[0].horoscopes);
    }
  }, [horoscopes]);

  const renderData = ({ item, index }: { item: HoroscopesArrayResultProps, index: number }) => {
    return (
      <SignsData onPress={() => { renderBottomSheet(item) }} key={index.toString()} data={item} />
    );
  };

  const renderBottomSheet = (item: HoroscopesArrayResultProps) => {
    if (item) {
      navigation.setOptions({ tabBarVisible: false });
      setItemSelected(item);
      bottomSheetRef?.current?.snapTo(1);
    };
  };

  const closeBottomSheet = () => {
    navigation.setOptions({ tabBarVisible: true });
    bottomSheetRef?.current?.snapTo(0);
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
      <BottomSheetSign
        BottomRef={bottomSheetRef}
        data={itemSelected}
        onPressClose={() => closeBottomSheet()}
      />
    </View>
  );
};

export default Home;