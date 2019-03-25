import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { iOSUIKit, systemWeights } from 'react-native-typography';

const { width } = Dimensions.get('window');

export default EStyleSheet.create({
	grid: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingHorizontal: 7.5
	},
	categoryBackground: {
		width: (width / 2) - 22.5,
		height: 120,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 15,
		margin: 7.5
	},
	categoryBackgroundImage: {
		borderRadius: 10
	},
	categoryText: {
		color: '$lightTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 20
	}
});
