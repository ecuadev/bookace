import EStyleSheet from 'react-native-extended-stylesheet';
import normalize from '../../helpers/normalizeText';

export default EStyleSheet.create({
	wrapper: {
		borderColor: '$borderColor',
		borderBottomWidth: 0.3,
		height: 65,
	},
	label: {
		position: 'absolute',
		top: 10,
		paddingHorizontal: 20,
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(14),
		color: '$secondaryTextColor',
	},
	datePickerWrapper: {
		width: '100%',
	},
	dateTouchBody: {
		height: 65,
		paddingHorizontal: 20,
		justifyContent: 'center',
	},
	dateInput: {
		fontFamily: 'Montserrat',
		fontSize: 14,
		color: '$primaryTextColor',
		height: 65,
		flex: 1,
		alignItems: 'flex-start',
		borderWidth: 0,
		paddingTop: 20,
	},
	dateInputError: {
		borderColor: 'red',
	},
	dateIcon: {
		tintColor: '$secondaryTextColor',
		width: 20,
		height: 20,
		marginLeft: 18,
		marginRight: 0,
	},
	dateText: {
		fontSize: 14,
		lineHeight: 17,
	},
	btnTextConfirm: {
		fontFamily: 'Montserrat-Medium',
		fontSize: 14,
		color: '$primaryColor',
	},
	btnTextCancel: {
		fontFamily: 'Montserrat-Medium',
		fontSize: 14,
		color: '$secondaryTextColor',
	},
	error: {
		color: 'red',
		fontFamily: 'Montserrat',
		fontSize: 12,
		lineHeight: 14,
		marginTop: 9,
	},
	datePicker: {
		borderTopWidth: 0.3,
		backgroundColor: '$grayBackground',
	},
});
