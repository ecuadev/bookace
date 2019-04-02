import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { isTallIPhone } from '../../helpers';
import normalize from '../../helpers/normalizeText';

const { width, height } = Dimensions.get('window');

export default EStyleSheet.create({
	container: {
		flex: 1,
	},
	preview: {
		flex: 1,
		height: height - (isTallIPhone() ? 83 : 49),
		width,
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		flex: 1,
		height: height - (isTallIPhone() ? 83 : 49),
		width,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});
