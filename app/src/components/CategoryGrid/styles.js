import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import normalize from '../../helpers/normalizeText';

const { width } = Dimensions.get('window');

export default EStyleSheet.create({
	grid: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingHorizontal: 12.5,
	},
	categoryBackground: {
		width: width / 2 - 27.5,
		height: 120,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 15,
		margin: 7.5,
	},
	categoryBackgroundImage: {
		borderRadius: 8,
	},
	categoryText: {
		color: '$lightTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(20),
	},
});
