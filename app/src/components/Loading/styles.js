import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../helpers';

export default EStyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: 'red'
	},
	spinnerTextStyle: {
		fontFamily: 'Montserrat',
		fontSize: normalize(14),
		color: '$lightTextColor'
	}
});
