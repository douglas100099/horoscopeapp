import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../constants/styles';

import { styles } from './styles';

import AquarioSVG from '../../../assets/svg/AquarioSVG';
import PeixesSVG from '../../../assets/svg/PeixesSVG';
import AriesSVG from '../../../assets/svg/AriesSVG';
import TouroSVG from '../../../assets/svg/TouroSVG';
import GemeosSVG from '../../../assets/svg/GemeosSVG';
import CancerSVG from '../../../assets/svg/CancerSVG';
import LeaoSVG from '../../../assets/svg/LeaoSVG';
import VirgemSVG from '../../../assets/svg/VirgemSVG';
import LibraSVG from '../../../assets/svg/LibraSVG';
import EscorpiaoSVG from '../../../assets/svg/EscorpiaoSVG';
import SagitarioSVG from '../../../assets/svg/SagitarioSVG';
import CapricornioSVG from '../../../assets/svg/CapricornioSVG';

interface SignsDataProps {
    data: HoroscopesArrayResultProps;
};

const SignsData = ({ data }: SignsDataProps) => {

    const renderSign = (sign: string) => {
        switch (sign) {
            case "Aquário":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#fed5d1" }]}>
                        <AquarioSVG />
                    </View>
                );
            case "Peixes":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#d0e8ea" }]}>
                        <PeixesSVG />
                    </View>
                );
            case "Áries":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#f9fdcb" }]}>
                        <AriesSVG />
                    </View>
                );
            case "Touro":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#dbec85" }]}>
                        <TouroSVG />
                    </View>
                );
            case "Gêmeos":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#c5e4d8" }]}>
                        <GemeosSVG />
                    </View>
                );
            case "Câncer":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#edc8e9" }]}>
                        <CancerSVG />
                    </View>
                );
            case "Leão":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#c5cdf4" }]}>
                        <LeaoSVG />
                    </View>
                );
            case "Virgem":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#ffefcb" }]}>
                        <VirgemSVG />
                    </View>
                );
            case "Libra":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#f5b6ab" }]}>
                        <LibraSVG />
                    </View>
                );
            case "Escorpião":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#e5cbb9" }]}>
                        <EscorpiaoSVG />
                    </View>
                );
            case "Sagitário":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#c5e7ab" }]}>
                        <SagitarioSVG />
                    </View>
                );
            case "Capricórnio":
                return (
                    <View style={[styles.CardImage, { backgroundColor: "#c8deed" }]}>
                        <CapricornioSVG />
                    </View>
                );
            default:
                return (
                    <View style={[styles.CardImage, { backgroundColor: Colors.Primary }]}>
                        <AquarioSVG />
                    </View>
                );
        }
    };

    return (
        <View style={styles.CardView}>
            {renderSign(data.sign)}
            <View style={styles.ViewTextSign}>
                <Text style={styles.TxtSign}>{data?.sign}</Text>
            </View>
        </View>

    );
};

export default memo(SignsData);