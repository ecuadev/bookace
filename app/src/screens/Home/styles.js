import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone, normalize } from '../../helpers';

export default EStyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: isTallIPhone() ? 83 : 49,
		backgroundColor: '$grayBackground'
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingTop: isTallIPhone() ? 52 : normalize(35),
		paddingBottom: normalize(20)
	},
	headerTitle: {
		textAlign: 'left',
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(24)
	},
	userImageContainer: {
		width: normalize(60),
		height: normalize(60),
		borderRadius: normalize(100),
		overflow: 'hidden'
	},
	carouselContainer: {
		flex: 1,
		justifyContent: 'space-between',
		paddingBottom: 15
	}
});
