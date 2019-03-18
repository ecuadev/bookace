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
		backgroundColor: 'rgba(20,15,38,0.85)',
		flexDirection: 'row',
		alignItems: 'center'
	},
	textBoxWrapperError: {
		borderColor: '#FE6068'
	},
	textBox: {
		color: '$lightTextColor',
		height: 55,
		paddingHorizontal: 15,
		flex: 1,
		fontSize: 14,
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
		color: '#FE6068',
		fontSize: 12,
		lineHeight: 14,
		marginTop: 9
	}
});
