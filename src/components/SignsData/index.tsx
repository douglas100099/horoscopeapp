import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/styles';

import { styles } from './styles';

import AquarioSVG from '../../../assets/svg/signsIcons/AquarioSVG';
import PeixesSVG from '../../../assets/svg/signsIcons/PeixesSVG';
import AriesSVG from '../../../assets/svg/signsIcons/AriesSVG';
import TouroSVG from '../../../assets/svg/signsIcons/TouroSVG';
import GemeosSVG from '../../../assets/svg/signsIcons/GemeosSVG';
import CancerSVG from '../../../assets/svg/signsIcons/CancerSVG';
import LeaoSVG from '../../../assets/svg/signsIcons/LeaoSVG';
import VirgemSVG from '../../../assets/svg/signsIcons/VirgemSVG';
import LibraSVG from '../../../assets/svg/signsIcons/LibraSVG';
import EscorpiaoSVG from '../../../assets/svg/signsIcons/EscorpiaoSVG';
import SagitarioSVG from '../../../assets/svg/signsIcons/SagitarioSVG';
import CapricornioSVG from '../../../assets/svg/signsIcons/CapricornioSVG';

interface SignsDataProps {
    data: HoroscopesArrayResultProps;
    onPress: () => void;
};

const SignsData = ({ data, onPress }: SignsDataProps) => {

    const renderSign = (sign: string) => {
        switch (sign) {
            case "Aquário":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#fed5d1" }]}>
                        <AquarioSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            case "Peixes":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#d0e8ea" }]}>
                        <PeixesSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            case "Áries":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#f9fdcb" }]}>
                        <AriesSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            case "Touro":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#dbec85" }]}>
                        <TouroSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            case "Gêmeos":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#c5e4d8" }]}>
                        <GemeosSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            case "Câncer":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#edc8e9" }]}>
                        <CancerSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            case "Leão":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#c5cdf4" }]}>
                        <LeaoSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            case "Virgem":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#ffefcb" }]}>
                        <VirgemSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            case "Libra":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#f5b6ab" }]}>
                        <LibraSVG height={'50%'} width={'50%'} />
                    </View>
                );
            case "Escorpião":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#e5cbb9" }]}>
                        <EscorpiaoSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            case "Sagitário":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#c5e7ab" }]}>
                        <SagitarioSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            case "Capricórnio":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#c8deed" }]}>
                        <CapricornioSVG height={'50%'} width={'50%'}/>
                    </View>
                );
            default:
                return (
                    <View style={[styles.CardImage, { backgroundColor: Colors.Primary }]}>
                        <AquarioSVG height={'50%'} width={'50%'}/>
                    </View>
                );
        }
    };

    return (
        <TouchableOpacity 
            style={styles.CardView}
            onPress={onPress}
        >
            {renderSign(data.sign)}
            <View style={styles.ViewTextSign}>
                <Text style={styles.TxtSign}>{data?.sign}</Text>
            </View>
        </TouchableOpacity>

    );
};

export default memo(SignsData);