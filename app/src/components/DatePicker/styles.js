import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../helpers';

export default EStyleSheet.create({
	wrapper: {
		borderColor: '$borderColor',
		borderBottomWidth: 0.3,
		height: normalize(65)
	},
	label: {
		position: 'absolute',
		top: normalize(10),
		paddingHorizontal: 20,
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(14),
		color: '$secondaryTextColor'
	},
	datePickerWrapper: {
		width: '100%'
	},
	dateTouchBody: {
		height: normalize(65),
		paddingHorizontal: 20,
		justifyContent: 'center'
	},
	dateInput: {
		fontFamily: 'Montserrat',
		fontSize: 14,
		color: '$primaryTextColor',
		height: 65,
		flex: 1,
		alignItems: 'flex-start',
		borderWidth: 0,
		paddingTop: normalize(20)
	},
	dateInputError: {
		borderColor: 'red'
	},
	dateIcon: {
		tintColor: '$secondaryTextColor',
		width: normalize(20),
		height: normalize(20),
		marginLeft: 18,
		marginRight: 0
	},
	dateText: {
		fontSize: normalize(14),
		lineHeight: normalize(17)
	},
	btnTextConfirm: {
		fontFamily: 'Montserrat-Medium',
		fontSize: normalize(14),
		color: '$primaryColor'
	},
	btnTextCancel: {
		fontFamily: 'Montserrat-Medium',
		fontSize: normalize(14),
		color: '$secondaryTextColor'
	},
	error: {
		color: 'red',
		fontFamily: 'Montserrat',
		fontSize: normalize(12),
		lineHeight: 14,
		marginTop: 9
	},
	datePicker: {
		borderTopWidth: 0.3,
		backgroundColor: '$grayBackground'
	}
});
