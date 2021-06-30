import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Cards, DimissKeyboard, Search } from '../../components';

import { styles } from './styles';

const Home = () => {

  const renderItem = () => {
    return (
      <Cards />
    )
  };

  /*const handleSearch = (query:string) => {
    if(query.length > 0){
      const filtered = data.filter((task:any) =>  task.name.includes(query))
      console.log(filtered);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    };
  };*/

  return (
    <DimissKeyboard>
      <View style={styles.Container}>
        <StatusBar style='light' />
        <View style={styles.Header}>
          <View style={styles.ViewHeaderTxt}>
            <Text style={styles.TextTitleHeader}>Bem vindo ao</Text>
            <Text style={styles.TextNameApp}>Horóscopo</Text>
          </View>
          <Search />
        </View>
        <View style={styles.ViewInfos}>
          <View style={styles.ViewTxtInfos}>
            <Text style={styles.TxtTitleInfos}>Selecione seu signo</Text>
          </View>
          <FlatList
            //data={filteredData ? filteredData : []}
            renderItem={renderItem}
            keyExtractor={(item: any, index: any) => item.id.toString()}
          />
        </View>
      </View>
    </DimissKeyboard>
  );
};

export default Home;