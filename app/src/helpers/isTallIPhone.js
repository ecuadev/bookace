import { Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const isTallIPhone = () => {
	return Platform.OS === 'ios' && height >= 812;
};

export default isTallIPhone;
