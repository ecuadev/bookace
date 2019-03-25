import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const isTallIPhone = Platform.OS === 'ios' && Dimensions.get('window').height >= 812;

export default EStyleSheet.create({
	container: {
		flex: 1,
		marginBottom: isTallIPhone ? 83 : 49,
		backgroundColor: '$screenBackground'
	},
	searchBackground: {
		width: '100%',
		height: isTallIPhone ? 200 : 160,
		zIndex: 2
	},
	searchWrapper: {
		width: '100%',
		height: '100%',
		paddingHorizontal: 15
	},
	searchBar: {
		position: 'absolute',
		bottom: -28,
		left: 15
	},
	title: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 30,
		paddingHorizontal: 15,
		marginTop: 50,
		marginBottom: 15
	},
	categories: {
		flex: 1,
		width: '100%'
	}
});
