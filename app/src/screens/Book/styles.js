import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import normalize from '../../helpers/normalizeText';

const { width } = Dimensions.get('window');

export default EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$screenBackground',
	},
	headerImageContainer: {
		height: 300,
		width,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
	headerImage: {
		height: '100%',
		width: '100%',
	},
	staticHeader: {
		opacity: 0,
	},
	content: {
		padding: 20,
		height: 1000,
	},
	description: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat',
		fontSize: normalize(16),
	},
});
