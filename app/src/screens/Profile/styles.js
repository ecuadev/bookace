import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const isTallIPhone = Platform.OS === 'ios' && height >= 812;

export default EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$screenBackground',
		paddingBottom: isTallIPhone ? 83 : 49
	},
	topContainer: {
		paddingHorizontal: 25,
		paddingTop: isTallIPhone ? 34 : 0,
		paddingBottom: 20
	},
	bottomContainer: {
		flex: 1,
		padding: 25,
		backgroundColor: '$grayBackground'
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 26,
		marginVertical: 30
	},
	editIcon: {
		width: 18,
		height: 18,
		tintColor: '$primaryColor'
	},
	user: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%'
	},
	userImageContainer: {
		width: 50,
		height: 50,
		borderRadius: 100,
		overflow: 'hidden',
		marginRight: 15
	},
	userImage: {
		width: 50,
		height: 50
	},
	userInfoContainer: {
		flex: 1,
		flexWrap: 'wrap'
	},
	userName: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-Medium',
		fontSize: 18
	},
	userEmail: {
		color: '$secondaryTextColor',
		fontFamily: 'Montserrat-Light',
		fontSize: 14
	},
	scores: {
		flexDirection: 'row',
		marginTop: 25
	},
	scoreItem: {
		marginRight: 30
	},
	scoreItemTitle: {
		color: '$primaryColor',
		fontFamily: 'Montserrat-Medium',
		fontSize: 18
	},
	scoreItemValue: {
		color: '$secondaryTextColor',
		fontFamily: 'Montserrat-Light',
		fontSize: 14
	}
});
