import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone } from '../../helpers';

export default EStyleSheet.create({
	container: {
		flex: 1,
	},
	inner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	heading: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 35,
		textAlign: 'center',
		margin: 5,
		color: '$lightTextColor',
	},
	form: {
		flex: 1,
		width: '100%',
	},
	formFields: {
		flex: 1,
	},
	sendEmail: {
		marginTop: 10,
	},

	header: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingTop: isTallIPhone() ? 49 : 23,
		paddingBottom: 5,
	},
	headerButtonLeftView: {
		width: 32,
		height: 32,
	},
	headerButtonLeft: {
		padding: 5,
	},
	headerButtonLeftIcon: {
		width: 22,
		height: 22,
		tintColor: '$lightTextColor',
	},

	bottomLinks: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 10,
	},
	bottomLink: {
		color: '$lightTextColor',
	},
	bottomLinkContainer: {
		paddingVertical: 10,
	},
});
