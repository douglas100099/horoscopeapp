import { StyleSheet } from "react-native";
import { isSmallDevice } from "../../common/utils";
import { Colors } from "../../constants/styles";

export const styles = StyleSheet.create({
    ContainerInput: {
        height: isSmallDevice ? 42 : 52,
        width: isSmallDevice ? '90%' : '80%',
        padding: 10,
        justifyContent: 'center'
    },
    InputSearch: {
        height: isSmallDevice ? 40 : 50,
        width: '100%',
        borderWidth: 0.8,
        borderRadius: 10,
        borderColor: Colors.White,
        paddingLeft: 50,
        fontFamily: 'PopRegular',
        fontSize: 14,
        color: Colors.White
    },
    IconSearch: {
        position: 'absolute',
        left: 25,
        height: isSmallDevice ? 22 : 25,
        width: isSmallDevice ? 22 : 25,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})