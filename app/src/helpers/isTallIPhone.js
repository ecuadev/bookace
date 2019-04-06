import { Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const isTallIPhone = () => Platform.OS === 'ios' && height >= 812;

export default isTallIPhone;
