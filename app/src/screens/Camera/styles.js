import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { isTallIPhone } from '../../helpers';

const { width, height } = Dimensions.get('window');

export default EStyleSheet.create({
	container: {
		flex: 1
	},
	preview: {
		flex: 1
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		flex: 1,
		width,
		height: height - (isTallIPhone() ? 83 : 49)
	}
});
