import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone, normalize } from '../../helpers';

export default EStyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '$screenBackground',
		paddingHorizontal: 20,
		// backgroundColor: '#bada55',
		paddingBottom: isTallIPhone() ? 83 : 49
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 25
	},
	headerTitle: {
		textAlign: 'left',
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(26)
	},
	userImageContainer: {
		width: normalize(65),
		height: normalize(65),
		borderRadius: normalize(100),
		overflow: 'hidden'
	},
	userImage: {
		width: '100%',
		height: '100%'
	},
	carouselContainer: {
		flex: 5,
		alignItems: 'center',
		justifyContent: 'flex-start'
	}
});
