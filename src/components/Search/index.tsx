import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import { styles } from './styles';
import { Colors } from '../../constants/styles';

const Search = () => {
  return (
    <View style={styles.ContainerInput}>
      <View style={styles.IconSearch}>
        <Ionicons 
          name="search" 
          size={20} 
          color={Colors.White}
        />
      </View>
      <TextInput
        style={styles.InputSearch}
        placeholder="Pesquisar..."
        placeholderTextColor={Colors.White_opacity}
        autoCorrect={false}
      />
    </View>
  );
}

export default Search;