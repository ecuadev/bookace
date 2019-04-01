import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const isTallIPhone = Platform.OS === 'ios' && height >= 812;

export default EStyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		backgroundColor: '$screenBackground',
		paddingTop: isTallIPhone ? 2 : 23,
		paddingBottom: isTallIPhone ? 87 : 49,
	},

	header: {
		flex: 1,
		flexDirection: 'row',
		marginHorizontal: 20,
		marginTop: 60,
	},
	headerTitle: {
		width: '80%',
		marginLeft: 5,
	},
	title: {
		textAlign: 'left',
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 26,
		paddingTop: 8,
	},

	userImageContainer: {
		width: 50,
		height: 50,
		borderRadius: 100,
		overflow: 'hidden',
	},
	userImage: {
		width: 50,
		height: 50,
	},
	carousel: {
		flex: 2,
		marginHorizontal: 20,
		// height: 180,
		paddingBottom: 10,
	},
});
