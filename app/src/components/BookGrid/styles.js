import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { normalize } from '../../helpers';

const { width } = Dimensions.get('window');

export default EStyleSheet.create({
	grid: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	book: {
		width: '50% - 30',
		borderRadius: 8,
		overflow: 'hidden',
		marginBottom: 20
	},
	'book:nth-child-odd': {
		marginLeft: 20
	},
	bookImageContainer: {
		borderRadius: 8,
		width: '100%',
		height: width * 0.65,
		overflow: 'hidden'
	},
	bookImage: {
		width: '100%',
		height: '100%'
	},
	bookRating: {
		marginTop: 8,
		width: 75
	},
	bookTitle: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-Medium',
		fontSize: normalize(14),
		fontWeight: '500',
		marginVertical: 5
	},
	bookAuthors: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-Light',
		fontSize: normalize(14),
		fontWeight: '300'
	}
});
