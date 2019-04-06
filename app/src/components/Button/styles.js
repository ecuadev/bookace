import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../helpers';

export default EStyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: normalize(50),
		backgroundColor: '$primaryColor',
		height: normalize(50),
		width: '100%',
		flexDirection: 'row'
	},
	transparentButton: {
		backgroundColor: 'transparent'
	},
	transparentButtonAndroid: {
		backgroundColor: 'rgba(255,255,255, 0.4)'
	},
	label: {
		fontFamily: 'Montserrat-SemiBold',
		color: '$lightTextColor',
		fontWeight: '600',
		fontSize: normalize(14),
		lineHeight: normalize(18)
	},
	icon: {
		marginRight: 7,
		tintColor: '$lightTextColor'
	},
	blurView: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		borderRadius: normalize(25)
	}
});
