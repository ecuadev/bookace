import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../../helpers';

export default EStyleSheet.create({
	header: {
		marginBottom: normalize(10),
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title: {
		fontFamily: 'Montserrat-Bold',
		fontSize: normalize(18),
		color: '$primaryTextColor'
	},
	link: {
		fontFamily: 'Montserrat-Medium',
		color: '$primaryColor',
		fontSize: normalize(13)
	},
	slider: {
		paddingHorizontal: 20,
		overflow: 'visible' // for custom animations
	},
	sliderContentContainer: {
		paddingVertical: 1 // for custom animation
	}
});
