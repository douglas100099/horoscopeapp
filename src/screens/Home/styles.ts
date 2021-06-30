import { StyleSheet } from "react-native";
import { isSmallDevice } from "../../common/utils";
import { Colors } from "../../constants/styles";


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.Primary
    },
    Header: {
        height: isSmallDevice ? 240 : 350,
        width: '100%',
        backgroundColor: Colors.Primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextTitleHeader: {
        fontFamily: 'PopMedium',
        fontSize: isSmallDevice ? 14 : 16,
        color: Colors.White,
    },
    ViewHeaderTxt: {
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextNameApp: {
        fontFamily: 'PopBold',
        fontSize: isSmallDevice ? 22 : 30,
        color: Colors.White,  
    },
    ViewInfos: {
        flex: 1,
        backgroundColor: Colors.Primary,
    },
    ViewTxtInfos: {
        padding: 25,
        alignItems: 'center'
    },
    TxtTitleInfos: {
        fontFamily: 'PopBold',
        color: Colors.White,
        fontSize: isSmallDevice ? 18 : 22,
        textAlign: 'center'
    }
})