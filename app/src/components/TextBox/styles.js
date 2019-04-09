import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../helpers';

export default EStyleSheet.create({
	wrapper: {
		marginBottom: normalize(20),
		width: '100%'
	},
	textBoxWrapper: {
		borderRadius: normalize(10),
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
		height: normalize(55),
		paddingHorizontal: normalize(15),
		flex: 1,
		fontSize: normalize(15),
		lineHeight: normalize(17)
	},
	error: {
		position: 'absolute',
		bottom: -16,
		color: '#FFFFFF',
		fontSize: normalize(14),
		lineHeight: normalize(14),
		marginTop: 9
	},
	blurView: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		borderRadius: normalize(10)
	},
	showPassword: {
		paddingVertical: normalize(10),
		paddingHorizontal: normalize(15)
	},
	showPasswordText: {
		fontFamily: 'Montserrat-Medium',
		color: '$lightTextColor',
		fontSize: normalize(12)
	}
});
