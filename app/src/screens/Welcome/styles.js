import EStyleSheet from 'react-native-extended-stylesheet';
import normalize from '../../helpers/normalizeText';

export default EStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '$screenBackground',
	},
	message: {
		fontSize: normalize(28),
	},
});
