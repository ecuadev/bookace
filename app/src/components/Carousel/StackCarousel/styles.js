import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { normalize } from '../../../helpers';

const { height } = Dimensions.get('window');

export const slideHeight = height * 0.45;
export const slideWidth = slideHeight * 0.7;

export default EStyleSheet.create({
	sliderContainer: {
		paddingHorizontal: 20
	},
	slideInnerContainer: {
		width: slideWidth,
		height: slideHeight,
		borderRadius: normalize(20),
		overflow: 'hidden'
	},
	image: {
		height: '100%',
		width: '100%'
	}
});
