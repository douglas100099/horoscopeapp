import { StyleSheet } from "react-native";
import { isSmallDevice } from "../../common/utils";
import { Colors } from "../../constants/styles";

export const styles = StyleSheet.create({
    CardView: {
        flex: 1,
        backgroundColor: Colors.White,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: isSmallDevice ? 10 : 15,
        marginHorizontal: 5,
        marginBottom: isSmallDevice ? 15 : 25,
    },
    CardImage: {
        height: isSmallDevice ? 70 : 90,
        width: isSmallDevice ? 70 : 90,
        borderRadius:  100,
        backgroundColor: Colors.Primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ViewTextSign: {
        marginTop: isSmallDevice ? 7 : 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TxtSign: {
        fontFamily: 'RobotoRegular',
        fontSize: 14,
        color: Colors.Secondary,
    }
})