import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone, normalize } from '../../helpers';

export default EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$screenBackground'
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		paddingTop: isTallIPhone() ? 49 : 23,
		paddingBottom: 5,
		borderColor: 'white',
		borderBottomWidth: 0.5
	},
	headerButtonLeftView: {
		width: normalize(32),
		height: normalize(32)
	},
	headerButtonLeft: {
		padding: normalize(5)
	},
	headerButtonLeftIcon: {
		width: normalize(22),
		height: normalize(22),
		tintColor: '$primaryColor'
	},
	headerTitle: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(16)
	},
	headerButtonRightView: {
		width: normalize(32),
		height: normalize(32)
	},
	headerButtonRight: {
		padding: normalize(5)
	},
	headerButtonRightIcon: {
		width: normalize(22),
		height: normalize(22),
		tintColor: '$primaryColor'
	},
	bigTitle: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(28),
		marginBottom: normalize(29)
	},
	scrollView: {
		flex: 1
	},
	content: {
		padding: 20,
		paddingTop: 10
	}
});
