import React, { useCallback, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import AquarioSVG from '../../../assets/svg/signsIcons/AquarioSVG';
import { Colors } from '../../constants/styles';

interface BottomSheetSignDataProps {
    data: HoroscopesArrayResultProps | undefined;
    BottomRef: React.Ref<BottomSheetMethods>;
    onPressClose: () => void;
}

const BottomSheetSign = ({ data, BottomRef, onPressClose }: BottomSheetSignDataProps) => {
    let indexCurrent = 0;

    const snapPoints = useMemo(() => [0, '90%'], []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
        indexCurrent = index;
    }, []);

    return (
        <>
            {indexCurrent === 1 ?
                <View style={styles.backgroundColor} />
                : null}
            <BottomSheet
                ref={BottomRef}
                index={1}
                snapPoints={snapPoints}
                enableContentPanningGesture={false}
                enableFlashScrollableIndicatorOnExpand={true}
                enableHandlePanningGesture={false}
                onChange={handleSheetChanges}
                handleComponent={() =>
                    <View style={styles.closeLineContainer}>
                        <View style={styles.closeLine}></View>
                    </View>
                }
                backgroundComponent={() =>
                    <View style={styles.contentContainer}>
                    </View>
                }
            >
                <View style={styles.mainView}>
                    <TouchableOpacity
                        style={styles.BtnClose}
                        onPress={onPressClose}
                    >
                        <Ionicons name="close" size={30} color={Colors.Secondary} />
                    </TouchableOpacity>
                    <View style={styles.HeaderView}>
                        <View style={styles.ViewIconSign}>
                            <AquarioSVG height={90} width={90} />
                        </View>
                        <View style={styles.TxtDateAndTtile}>
                            <Text style={styles.TitleSign}>{data?.sign}</Text>
                            <Text style={styles.DateSign}>08/06/2021</Text>
                        </View>
                    </View>
                    <ScrollView style={styles.ViewDescription}>
                        <Text style={styles.TxtDescription}>{data?.description}</Text>
                    </ScrollView>
                    <View>
                    <TouchableOpacity
                            style={styles.ViewButtonSign}
                        >
                            <Text style={styles.TxtButtonSigns}>Veja o horóscopo de outros signos!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>
        </>
    );
}

export default BottomSheetSign;