import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions } from 'react-native';
import { normalize } from '../../../helpers';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
	'window'
);

export default EStyleSheet.create({
	gradient: {
		...StyleSheet.absoluteFillObject
	},

	slider: {
		flex: 4,
		overflow: 'visible', // for custom animations
		marginBottom: viewportWidth * 0.08
	},
	sliderContentContainer: {
		paddingVertical: 5 // for custom animation
	}
});
