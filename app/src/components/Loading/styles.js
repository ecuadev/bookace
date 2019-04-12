import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../helpers';

export default EStyleSheet.create({
	spinnerTextStyle: {
		fontFamily: 'Montserrat',
		fontSize: normalize(14),
		color: '$lightTextColor'
	}
});
