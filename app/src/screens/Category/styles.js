import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const isTallIPhone = Platform.OS === 'ios' && height >= 812;

export default EStyleSheet.create({
	container: {
		paddingBottom: isTallIPhone ? 83 : 49
	}
});
