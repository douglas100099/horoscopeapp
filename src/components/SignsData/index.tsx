import React, { memo } from 'react';
import { View, Text } from 'react-native';
import AquarioSVG from '../../../assets/svg/AquarioSVG';
import { Colors } from '../../constants/styles';

import { styles } from './styles';

interface SignsDataProps {
    data: HoroscopesArrayResultProps;
};

const SignsData = ({ data }: SignsDataProps) => {

    const renderColor = (sign:string) => {
        switch(sign){
            case "Aquário" :
                return "#fed5d1";
            case "Peixes" :
                return "#d0e8ea";
            case "Áries" :
                return "#f9fdcb";
            case "Touro" :
                return "#dbec85";
            case "Gêmeos" :
                return "#c5e4d8";
            case "Câncer" :
                return "#edc8e9";
            case "Leão" :
                return "#c5cdf4";
            case "Virgem" :
                return "#ffefcb";
            case "Libra" :
                return "#f5b6ab";
            case "Escorpião" :
                return "#e5cbb9";
            case "Sagitário" :
                return "#c5e7ab";
            case "Capricórnio" :
                return "#c8deed";
            default :
                return Colors.Primary;
        }   
    };

    return (
        <View style={styles.CardView}>
            {/* {renderSign(data.sign)} */}
            <View style={[styles.CardImage, { backgroundColor: renderColor(data?.sign) }]}>
                <AquarioSVG />
            </View>
            <View style={styles.ViewTextSign}>
                <Text style={styles.TxtSign}>{data?.sign}</Text>
            </View>
        </View>

    );
};

export default memo(SignsData);