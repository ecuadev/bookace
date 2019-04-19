import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { normalize, isTallIPhone } from '../../helpers';

const { width, height } = Dimensions.get('window');

export default EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$screenBackground',
	},
	headerImageContainer: {
		height: normalize(300),
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
		height: normalize(150),
	},
	description: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat',
		fontSize: normalize(16),
	},
	ratingContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 10,
		marginTop: 20,
		// borderTopWidth: 0.3,
		// borderColor: '$borderColor',
		// backgroundColor: '$grayBackground',
		alignItems: 'center',
	},

	ratingTitleContainer: {
		flex: 1,
		justifyContent: 'space-around',
	},
	ratingTitle: {
		flex: 1,
		alignItems: 'center',
		fontFamily: 'Montserrat-Medium',
		color: '$primaryTextColor',
		fontSize: normalize(14),
	},
});
