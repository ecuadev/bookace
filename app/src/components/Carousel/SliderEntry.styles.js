import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './styles';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
	const value = (percentage * viewportWidth) / 100;
	return Math.round(value);
}

const slideHeight = viewportHeight * 0.26;
const slideWidth = wp(30);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default EStyleSheet.create({
	slideInnerContainer: {
		width: itemWidth,
		height: slideHeight,
		paddingHorizontal: itemHorizontalMargin,
		paddingBottom: 10 // needed for shadow
	},
	shadow: {
		position: 'absolute',
		top: 0,
		left: itemHorizontalMargin,
		right: itemHorizontalMargin,
		bottom: 18,
		shadowColor: '$primaryColor',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 10,
		borderRadius: entryBorderRadius
	},
	imageContainer: {
		flex: 1,
		marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
		backgroundColor: 'white',
		borderTopLeftRadius: entryBorderRadius,
		borderTopRightRadius: entryBorderRadius,
		borderBottomLeftRadius: entryBorderRadius,
		borderBottomRightRadius: entryBorderRadius
	},
	// imageContainerEven: {
	// 	backgroundColor: '$primaryColor',
	// },
	image: {
		...StyleSheet.absoluteFillObject,
		resizeMode: 'cover',
		borderRadius: IS_IOS ? entryBorderRadius : 0
	},
	// image's border radius is buggy on iOS; let's hack it!
	radiusMask: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: entryBorderRadius,
		backgroundColor: 'white'
	},
	radiusMaskEven: {
		backgroundColor: '$primaryColor'
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
		color: colors.gray,
		fontSize: 12,
		fontStyle: 'italic'
	},
	subtitleEven: {
		color: 'rgba(255, 255, 255, 0.7)'
	}
});
