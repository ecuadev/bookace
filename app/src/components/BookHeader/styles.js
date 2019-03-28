import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const isTallIPhone = Platform.OS === 'ios' && height >= 812;

export default EStyleSheet.create({
	container: {
		justifyContent: 'center',
		padding: 20,
		paddingTop: isTallIPhone ? 49 : 28
	},
	headerButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20
	},
	headerButtonBack: {
		padding: 5
	},
	headerButtonBackIcon: {
		width: 22,
		height: 22,
		tintColor: '$lightTextColor'
	},
	headerButtonMenu: {
		padding: 5
	},
	headerButtonMenuIcon: {
		width: 22,
		height: 22,
		tintColor: '$lightTextColor'
	},
	bookMain: {
		flexDirection: 'row'
	},
	bookImageShadow: {
		borderWidth: 5,
		borderColor: '$lightTextColor',
		borderRadius: 8,
		width: 120,
		height: 180,
		shadowColor: '$shadowColor',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5

	},
	bookImageContainer: {
		width: '100%',
		height: '100%',
		overflow: 'hidden'
	},
	bookImage: {
		width: '100%',
		height: '100%'
	},
	bookInfo: {
		flex: 1,
		flexWrap: 'wrap',
		marginLeft: 20
	},
	bookTitle: {
		color: '$lightTextColor',
		fontFamily: 'Montserrat-Semibold',
		fontSize: 22,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 2
	},
	bookAuthors: {
		color: '$lightTextColor',
		fontFamily: 'Montserrat-Medium',
		fontSize: 18,
		marginTop: 10,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 2
	}
});
