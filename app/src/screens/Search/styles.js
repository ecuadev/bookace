import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { isTallIPhone, normalize } from '../../helpers';

const { width } = Dimensions.get('window');

export default EStyleSheet.create({
	container: {
		flex: 1,
		marginBottom: isTallIPhone() ? 83 : 49,
		backgroundColor: '$grayBackground'
	},
	searchBackground: {
		width: '100%',
		height: isTallIPhone() ? 200 : normalize(160),
		zIndex: 2
	},
	searchWrapper: {
		width: '100%',
		height: '100%',
		paddingHorizontal: 20
	},
	searchBar: {
		position: 'absolute',
		bottom: normalize(-28),
		left: 20
	},
	title: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(26),
		paddingHorizontal: 20,
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
