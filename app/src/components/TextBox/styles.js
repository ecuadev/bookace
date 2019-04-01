import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	wrapper: {
		marginBottom: 20,
		width: '100%'
	},
	label: {
		color: '$darkTextColor',
		fontSize: 12,
		lineHeight: 14,
		marginBottom: 9
	},
	textBoxWrapper: {
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	textBoxWrapperAndroid: {
		backgroundColor: 'rgba(0,0,0, 0.7)'
	},
	textBoxWrapperError: {
		borderColor: '#FE6068'
	},
	textBox: {
		fontFamily: 'Montserrat',
		color: '$lightTextColor',
		height: 55,
		paddingHorizontal: 15,
		flex: 1,
		fontSize: 15,
		lineHeight: 17
	},
	password: {
		paddingRight: 15
	},
	showPasswordWrapper: {
		paddingRight: 15,
		paddingLeft: 15
	},
	showPassword: {
		width: 22
	},
	error: {
		position: 'absolute',
		bottom: -16,
		color: '#FFFFFF',
		fontSize: 14,
		lineHeight: 14,
		marginTop: 9
	},
	blurView: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		borderRadius: 10
	}
});
