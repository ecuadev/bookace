import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { normalize } from '../../../helpers';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
	'window'
);

function wp(percentage) {
	const value = (percentage * viewportWidth) / 100;
	return Math.round(value);
}

const slideHeight = viewportHeight * 0.2;
const slideWidth = wp(18);
const itemHorizontalMargin = wp(1);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default EStyleSheet.create({
	slideInnerContainer: {
		width: itemWidth,
		height: slideHeight,
		paddingHorizontal: itemHorizontalMargin + 1,
		marginRight: 25
	},
	imageContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		borderRadius: entryBorderRadius,
		overflow: 'hidden'
	},
	image: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		// width: '100%',
		// height: '100%',
		resizeMode: 'stretch'
	},
	textContainer: {
		justifyContent: 'center',
		paddingTop: 2,
		paddingHorizontal: 1
	},
	textContainerEven: {
		backgroundColor: '$primaryColor'
	},
	title: {
		color: '$primaryTextColor',
		fontSize: normalize(13),
		fontWeight: 'bold',
		letterSpacing: 0.5
	},
	titleEven: {
		color: 'white'
	},
	subtitle: {
		marginTop: 6,
		color: '$secondaryTextColor',
		fontSize: normalize(11),
		fontStyle: 'italic'
	},
	subtitleEven: {
		color: 'rgba(255, 255, 255, 0.7)'
	},
	canvas: {
		flex: 1,
		width: itemWidth,
		resizeMode: 'cover'
	}
});
