import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../helpers';

export default EStyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: normalize(65),
		borderBottomWidth: 0.3,
		borderColor: '$borderColor'
	},
	label: {
		position: 'absolute',
		top: normalize(10),
		paddingHorizontal: 20,
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(14),
		color: '$secondaryTextColor'
	},
	error: {
		position: 'absolute',
		paddingHorizontal: 20,
		right: 0,
		top: normalize(10),
		color: '$errorTextColor'
	},
	input: {
		flex: 1,
		fontFamily: 'Montserrat',
		fontSize: normalize(14),
		color: '$primaryTextColor',
		height: normalize(65),
		paddingTop: normalize(20),
		paddingHorizontal: 20
	},
	inputAndroid: {
		fontSize: normalize(16),
		padding: 0
	},
	showPassword: {
		paddingVertical: normalize(10),
		paddingHorizontal: normalize(15)
	},
	showPasswordText: {
		fontFamily: 'Montserrat-Medium',
		color: '$placeholderTextColor',
		fontSize: normalize(12)
	}
});
