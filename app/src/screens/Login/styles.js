import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone, normalize } from '../../helpers';

export default EStyleSheet.create({
	container: {
		flex: 1
	},
	inner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 30,
		paddingVertical: 10
	},
	logo: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logoImage: {
		width: normalize(150),
		height: normalize(150)
	},
	title: {
		fontSize: normalize(20),
		textAlign: 'center',
		margin: 10
	},
	form: {
		width: '100%'
	},
	signinButton: {
		marginTop: normalize(10)
	},
	separator: {
		flexDirection: 'row',
		marginVertical: normalize(25),
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
		marginBottom: normalize(15)
	},
	bottomLinks: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: normalize(20)
	},
	bottomLink: {
		color: '$lightTextColor'
	},
	bottomLinkContainer: {
		paddingVertical: 10,
		paddingBottom: isTallIPhone() ? 30 : 10
	}
});
