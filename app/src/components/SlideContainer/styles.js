import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const isTallIPhone = Platform.OS === 'ios' && height >= 812;

export default EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$screenBackground'
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingTop: isTallIPhone ? 49 : 23,
		paddingBottom: 5,
		borderColor: 'white',
		borderBottomWidth: 0.5
	},
	headerButtonLeftView: {
		width: 32,
		height: 32
	},
	headerButtonLeft: {
		padding: 5
	},
	headerButtonLeftIcon: {
		width: 22,
		height: 22,
		tintColor: '$primaryColor'
	},
	headerTitle: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 16
	},
	headerButtonRightView: {
		width: 32,
		height: 32
	},
	headerButtonRight: {
		padding: 5
	},
	headerButtonRightIcon: {
		width: 22,
		height: 22,
		tintColor: '$primaryColor'
	},
	bigTitle: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 28,
		marginBottom: 29
	},
	scrollView: {
		flex: 1
	},
	content: {
		padding: 20,
		paddingTop: 10
	}
});
