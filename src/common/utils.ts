import { Dimensions } from 'react-native';

export const height : Number = Dimensions.get('window').height;
export const width : Number = Dimensions.get('window').width;

export const isSmallDevice = width < 375;