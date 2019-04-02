import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone } from '../../helpers';
import normalize from '../../helpers/normalizeText';

export default EStyleSheet.create({
	container: {
		paddingBottom: isTallIPhone() ? 83 : 49,
	},
});
