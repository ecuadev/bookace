import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone, normalize } from '../../helpers';

export default EStyleSheet.create({
	container: {
		flex: 1
	},
	inner: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 20,
		paddingTop: isTallIPhone() ? 42 : 20
	},
	titleContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 55,
		paddingBottom: 15
	},
	title: {
		fontFamily: 'Montserrat-Medium',
		fontSize: normalize(28),
		textAlign: 'center',
		color: '$primaryTextColor'
	},
	form: {
		width: '100%'
	},
	signUpButton: {
		marginTop: 10
	},
	separator: {
		flexDirection: 'row',
		marginVertical: 25,
		alignItems: 'center',
		justifyContent: 'center'
	},
	separatorLine: {
		height: 2,
		backgroundColor: '$lightTextColor',
		width: 40
	},
	separatorText: {
		fontFamily: 'Montserrat-Medium',
		fontSize: normalize(14),
		color: '$lightTextColor',
		paddingHorizontal: 20
	},
	fbButton: {
		marginBottom: 15
	},
	bottomLinks: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20
	},
	bottomLink: {
		color: '$lightTextColor'
	},
	bottomLinkContainer: {
		paddingVertical: 10,
		paddingBottom: isTallIPhone() ? 30 : 10
	},
	backToLogin: {
		color: '$primaryColor'
	}
});
