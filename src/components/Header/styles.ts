import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Colors } from '../../constants/styles';

export const styles = StyleSheet.create({
    Container: {
        height: 90,
        width: '100%',
        backgroundColor: Colors.Primary,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    ContentHeader: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 25,
        flexDirection: 'row',
    },
    ViewIcons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    TitleHeader: {
        marginLeft: 7,
        fontFamily: 'RobotoMedium',
        fontSize: 16,
        color: Colors.Secondary,
    },
    ViewMenu: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})