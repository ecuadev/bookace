import EStyleSheet from 'react-native-extended-stylesheet';
import normalize from '../../helpers/normalizeText';

export default EStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '$screenBackground',
	},
	title: {
		fontSize: normalize(20),
		textAlign: 'center',
		margin: 10,
	},
});
