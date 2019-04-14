import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { normalize } from '../../helpers';

const { width } = Dimensions.get('window');

export default EStyleSheet.create({
	loading: {
		marginTop: normalize(120)
	},
	grid: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingHorizontal: 12.5
	},
	categoryBackground: {
		width: width / 2 - 27.5,
		height: normalize(120),
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		margin: 7.5,
		backgroundColor: 'rgba(0,0,0,1)',
		borderRadius: 8
	},
	categoryBackgroundImage: {
		borderRadius: 8
	},
	categoryText: {
		color: '$lightTextColor',
		fontFamily: 'Montserrat-Medium',
		fontSize: normalize(18),
		textAlign: 'center'
	}
});
