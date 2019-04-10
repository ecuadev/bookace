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

const slideHeight = viewportHeight * 0.35;
const slideWidth = wp(60);
const itemHorizontalMargin = wp(0.05);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default EStyleSheet.create({
	slideInnerContainer: {
		width: itemWidth,
		height: slideHeight,

		paddingHorizontal: itemHorizontalMargin
	},
	imageContainer: {
		flex: 1,
		// width: normalize(300),
		height: 'auto',
		borderRadius: entryBorderRadius,
		overflow: 'hidden'
	},
	image: {
		...StyleSheet.absoluteFillObject,
		width: '100%',
		resizeMode: 'stretch'
	},
	textContainer: {
		justifyContent: 'center',
		// paddingTop: 20 - entryBorderRadius,
		paddingTop: 2,
		// paddingBottom: 20,
		paddingHorizontal: 1
		// backgroundColor: 'white',
		// borderBottomLeftRadius: entryBorderRadius,
		// borderBottomRightRadius: entryBorderRadius,
	},
	textContainerEven: {
		backgroundColor: '$primaryColor'
	},
	title: {
		color: '$darkTextColor',
		fontSize: 13,
		fontWeight: 'bold',
		letterSpacing: 0.5
	},
	titleEven: {
		color: 'white'
	},
	subtitle: {
		marginTop: 6,
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: 12,
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
