import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone, normalize } from '../../helpers';

export default EStyleSheet.create({
	container: {
		flex: 1
	},
	inner: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 20,
		paddingTop: isTallIPhone() ? 42 : 25
	},
	titleContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: normalize(35),
		paddingBottom: 15
	},
	title: {
		fontFamily: 'Montserrat-Medium',
		fontSize: normalize(28),
		textAlign: 'center',
		color: '$primaryTextColor'
	},
	header: {
		width: '100%',
		marginBottom: normalize(150)
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
		tintColor: '$primaryTextColor'
	},
	form: {
		width: '100%'
	},
	sendEmail: {
		marginTop: 10
	}
});
