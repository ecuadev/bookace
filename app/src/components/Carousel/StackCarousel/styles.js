import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { normalize } from '../../../helpers';

const { height } = Dimensions.get('window');

export const slideHeight = height / 2.5;
export const slideWidth = slideHeight * 0.7;

export default EStyleSheet.create({
	slideInnerContainer: {
		width: slideWidth,
		height: slideHeight,
		borderRadius: normalize(12),
		overflow: 'hidden'
	},
	image: {
		height: '100%',
		width: '100%'
	}
});
