import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions } from 'react-native';
import { normalize } from '../../../helpers';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
	'window'
);

export default EStyleSheet.create({
	title: {
		backgroundColor: 'transparent',
		paddingLeft: 30,
		textAlign: 'left',
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(23)
		// paddingHorizontal: 20,
	},
	titleDark: {
		color: '$darkTextColor'
	},
	slider: {
		flex: 2,
		marginLeft: 15,
		overflow: 'visible' // for custom animations
	},
	sliderContentContainer: {
		paddingVertical: 1 // for custom animation
	},
	header: {
		paddingBottom: 10,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	headerTitle: {
		flex: 1,
		justifyContent: 'center'
	},
	headerLink: {
		flex: 1,
		justifyContent: 'center'
	},
	link: {
		textAlign: 'right',
		marginLeft: 35,
		color: '$primaryColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(13)
	}
});
