import { StyleSheet } from "react-native";
import { height, width } from "../../common/utils";
import { Colors } from "../../constants/styles";

export const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: Colors.Secondary,
        borderWidth: 1,
        borderColor: Colors.Secondary,
        height: height,
        width: width,
    },
    closeLineContainer: {
        alignSelf: 'center',
    },
    closeLine: {
        width: 80,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#ababab',
        marginTop: 5,
        marginBottom: 5
    },
    BtnClose: {
        position: 'absolute',
        height: 32,
        width: 32,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        top: 25,
    },
    mainView: {
        flex: 1,
        backgroundColor: Colors.White,
        padding: 20,
    },
    backgroundColor: {
        ...StyleSheet.absoluteFillObject,
        height: height,
        width: width,
        backgroundColor: 'rgba(0,0,0,0.50)'
    },
    HeaderView: {
        height: 220,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ViewIconSign: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    TxtDateAndTtile: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TitleSign: {
        fontFamily: 'RobotoMedium',
        fontSize: 20,
        color: Colors.Secondary,
        textAlign: 'center'
    },
    DateSign: {
        fontFamily: 'RobotoRegular',
        fontSize: 13,
        color: Colors.Secondary,
        textAlign: 'center'
    },
    ViewDescription: {
        
    },
    TxtDescription: {
        fontFamily: 'RobotoRegular',
        fontSize: 15,
        color: Colors.Secondary,
        textAlign: 'center',
        paddingBottom: 10,
    },
    ViewButtonSign: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: "center",
        height: 40,
        borderRadius: 25,
        backgroundColor: Colors.Secondary,
    },
    TxtButtonSigns: {
        fontFamily: 'RobotoMedium',
        fontSize: 14,
        color: Colors.White,
        textAlign: 'center'
    }
})