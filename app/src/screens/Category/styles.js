import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone, normalize } from '../../helpers';

export default EStyleSheet.create({
	container: {
		paddingBottom: isTallIPhone() ? 83 : 49
	}
});
