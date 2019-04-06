import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../helpers';

export default EStyleSheet.create({
	label: {
		position: 'absolute',
		top: normalize(10),
		paddingHorizontal: 20,
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(14),
		color: '$secondaryTextColor'
	},
	textBoxWrapper: {
		borderColor: '$borderColor',
		borderBottomWidth: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		height: normalize(65)
	},
	textBoxWrapperAndroid: {
		paddingHorizontal: 20
	},
	pickerAndroid: {
		fontFamily: 'Montserrat',
		fontSize: normalize(14),
		paddingTop: normalize(20),
		flex: 1
	},
	valueText: {
		fontFamily: 'Montserrat',
		fontSize: normalize(14),
		color: '$primaryTextColor',
		paddingHorizontal: 20,
		paddingTop: normalize(20),
		flex: 1
	},
	placeholderText: {
		fontFamily: 'Montserrat',
		fontSize: normalize(14),
		color: '$placeholderTextColor'
	},
	icon: {
		width: normalize(15),
		height: normalize(15),
		tintColor: '$secondaryTextColor',
		marginHorizontal: 20
	},
	pickerMask: {
		flex: 1,
		alignItems: 'flex-end',
		flexDirection: 'row',
		backgroundColor: '#00000077'
	},
	pickerContainer: {
		backgroundColor: '$screenBackground',
		height: 0,
		overflow: 'hidden'
	},
	btnText: {
		position: 'absolute',
		top: 0,
		height: 42,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnCancel: {
		left: 0
	},
	btnConfirm: {
		right: 0
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
	picker: {
		marginTop: 42,
		backgroundColor: '$grayBackground',
		borderTopColor: '$borderColor',
		borderTopWidth: 0.3
	},
	disabled: {
		backgroundColor: '$grayBackground'
	}
});
