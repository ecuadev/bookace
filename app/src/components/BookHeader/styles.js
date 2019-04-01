import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone } from '../../helpers';

export default EStyleSheet.create({
	container: {
		justifyContent: 'center',
		paddingHorizontal: 15,
		paddingTop: isTallIPhone() ? 49 : 28
	},
	staticContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: isTallIPhone() ? 42 : 21
	},
	headerButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15
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
		flexDirection: 'row',
		paddingHorizontal: 5
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
	bookTitleSmall: {
		flex: 1,
		flexWrap: 'wrap',
		color: '$lightTextColor',
		fontFamily: 'Montserrat-Semibold',
		fontSize: 16,
		textAlign: 'center',
		paddingHorizontal: 20
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
