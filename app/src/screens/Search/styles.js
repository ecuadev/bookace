import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTallIPhone = Platform.OS === 'ios' && height >= 812;

export default EStyleSheet.create({
	container: {
		flex: 1,
		marginBottom: isTallIPhone ? 83 : 49,
		backgroundColor: '$grayBackground'
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
		fontFamily: 'Montserrat-Medium',
		fontSize: 26,
		paddingHorizontal: 15,
		marginTop: 50,
		marginBottom: 15
	},
	paginator: {
		position: 'relative',
		flex: 1,
		width: '100%'
	},
	categories: {
		flex: 1,
		width: '100%'
	},
	results: {
		position: 'absolute',
		flex: 1,
		backgroundColor: '$screenBackground',
		top: 0,
		right: width,
		width: '100%',
		height: '100%'
	}
});
