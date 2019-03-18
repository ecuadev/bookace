import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	wrapper: {
		marginBottom: 19,
		width: '100%'
	},
	label: {
		color: '#72727F',
		fontSize: 12,
		lineHeight: 14,
		marginBottom: 9
	},
	textBoxWrapper: {
		borderColor: '#E8E8E8',
		borderWidth: 1,
		borderRadius: 4,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center'
	},
	textBoxWrapperError: {
		borderColor: '#FE6068'
	},
	textBox: {
		height: 44,
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
