import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default EStyleSheet.create({
	grid: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingHorizontal: 5
	},
	categoryBackground: {
		width: (width / 2) - 15,
		height: 120,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 15,
		margin: 5
	},
	categoryBackgroundImage: {
		borderRadius: 10
	},
	categoryText: {
		fontSize: 25,
		fontWeight: '700',
		color: '#ffffff'
	}
});
