import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { normalize, isTallIPhone } from '../../helpers';

const { width, height } = Dimensions.get('window');

export default EStyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	avatarContainer: {
		alignItems: 'center',
		width: normalize(60),
		height: normalize(60),
		borderRadius: normalize(100),
		overflow: 'hidden',
	},
	commentContainer: {
		flex: 1,
		flexDirection: 'column',
		borderBottomWidth: 1,
		borderColor: '#eee',
		paddingVertical: 5,
	},
	reviewContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		paddingVertical: 0.5,
		backgroundColor: '#bada55',
	},
	avatar: {
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 13,
		width: 26,
		height: 26,
	},
	text: {
		flex: 1,
		fontFamily: 'Montserrat-SemiBold',
		// fontSize: normalize(14),
		// color: '$primaryTextColor',
		paddingVertical: 2,
	},
	title: {
		paddingTop: 0,
		fontSize: normalize(12),
		color: '$primaryColor',
	},
	subtitle: {
		fontSize: normalize(10),
		color: '$secondaryTextColor',
	},
	date: {
		fontSize: normalize(8),
		color: '$secondaryTextColor',
	},
	review: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	comment: {
		flex: 2,
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(12),
		color: '$primaryTextColor',
	},

	// INPUT

	modalContainer: {
		flex: 1,
		flexDirection: 'column',
		paddingHorizontal: 15,
		paddingVertical: 15,
		justifyContent: 'space-between',
		height: height * 0.8,
		marginTop: height * 0.2,

		backgroundColor: '$grayBackground',
		paddingBottom: isTallIPhone() ? 40 : 30,
		borderRadius: 2,
	},
	header: {
		// paddingHorizontal: 15,
		paddingTop: isTallIPhone() ? 12 : 6,
		// paddingBottom: 20,
		alignItems: 'center',
		// backgroundColor: '$grayBackground',
		borderBottomWidth: 0.3,
		borderColor: '$borderColor',
	},
	headerButtons: {
		// flex: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	headerButtonBack: {
		padding: 5,
	},
	headerButtonBackIcon: {
		width: normalize(40),
		height: normalize(40),
		color: '$primaryColor',
	},
	headerButtonSave: {
		padding: 5,
	},
	headerButtonSaveText: {
		fontFamily: 'Montserrat',
		fontSize: normalize(16),
		color: '$primaryColor',
	},
	ratingInputContainer: {
		paddingVertical: 5,
		// marginVertical: 2,
	},
	inputContainer: {
		flex: 1,
		marginVertical: 5,
		borderRadius: 5,
		// backgroundColor: '$grayBackground',
		justifyContent: 'flex-start',
		borderWidth: 1,
		borderColor: '$grayBackground',
		backgroundColor: '$screenBackground',
		paddingHorizontal: 15,
	},
	input: {
		flex: 1,
		// height: 'auto',
		fontSize: normalize(14),
	},

	buttons: {
		flex: 1,
		// paddingHorizontal: 20,
		paddingTop: normalize(10),
		paddingBottom: 6,
	},
	inactive: {
		color: '$secondaryTextColor',
	},

	// list
	listContainer: {
		borderTopWidth: 0.3,
		borderColor: '$borderColor',
		backgroundColor: '$screenBackground',
		paddingHorizontal: 0.5,
		marginBottom: isTallIPhone() ? 83 : 49,
	},
	listContentContainer: {
		marginVertical: -15,
		borderBottomWidth: 0.3,
		borderColor: '$borderColor',
	},
	rightContentContainerStyle: {
		paddingHorizontal: 0.5,
	},
});
