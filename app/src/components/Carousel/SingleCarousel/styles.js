import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../../helpers';

const slideMargin = normalize(15);
export const slideWidth = normalize(98);
export const slideHeight = normalize(120);

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
		paddingHorizontal: 20
	},
	slideInnerContainer: {
		width: slideWidth - slideMargin,
		marginRight: slideMargin
	},
	imageContainer: {
		width: '100%',
		height: slideHeight,
		borderRadius: 8,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	textContainer: {
		justifyContent: 'center',
		paddingTop: 2,
		paddingHorizontal: 1
	},
	bookTitle: {
		fontFamily: 'Montserrat-Medium',
		color: '$primaryTextColor',
		fontSize: normalize(10),
		letterSpacing: 0.5
	}
});
