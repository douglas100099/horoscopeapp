import { StyleSheet } from "react-native";
import { isSmallDevice } from "../../common/utils";
import { Colors } from "../../constants/styles";


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.White
    },
    ViewBody: {
        flex: 1,
        backgroundColor: Colors.White,
        padding: 20,
    },
    ViewBodyTitle: {
        marginTop: 5,
        maxHeight: 45,
        justifyContent: 'center',
    },
    TxtTitleBody: {
        fontFamily: 'RobotoRegular',
        fontSize: 15,
        color: Colors.Secondary,
        textAlign: 'left'
    },
    ScrollView: {
        marginTop: 15,
    },
    MainView: {
        flex: 1,
        backgroundColor: Colors.White,
        flexDirection: 'row',
    },
})