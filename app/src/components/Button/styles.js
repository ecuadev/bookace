import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		backgroundColor: '$primaryColor',
		height: 50,
		width: '100%'
	},
	facebookButton: {
		backgroundColor: '$fbColor',
		flexDirection: 'row'
	},
	googleButton: {
		backgroundColor: '$googleColor',
		flexDirection: 'row'
	},
	label: {
		color: '#ffffff',
		fontWeight: '600',
		fontSize: 14,
		lineHeight: 18
	},
	facebookLabel: {
		color: '#FFFFFF',
		fontWeight: '600',
		fontSize: 14,
		lineHeight: 18
	},
	googleLabel: {
		color: '#FFFFFF',
		fontWeight: '600',
		fontSize: 14,
		lineHeight: 18
	},
	icon: {
		marginRight: 7,
		tintColor: '#FFFFFF'
	}
});
