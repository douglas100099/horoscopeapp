import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons'; 
import { Colors } from '../../constants/styles';

const Header = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.ContentHeader}>
                <View style={styles.ViewIcons}>
                    <TouchableOpacity>
                        <Ionicons name="arrow-back" size={25} color={Colors.Secondary} />
                    </TouchableOpacity>
                    <Text style={styles.TitleHeader}>Horóscopo</Text>
                </View>
                <View style={styles.ViewMenu}>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-vertical" size={22} color={Colors.Secondary} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default Header;