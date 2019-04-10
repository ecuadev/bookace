import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../../helpers';

export const slideWidth = normalize(230);
export const slideHeight = slideWidth * 1.4;

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
