import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone, normalize } from '../../helpers';

export default EStyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		backgroundColor: '$screenBackground',
		paddingTop: isTallIPhone() ? 46 : 20,
		marginBottom: isTallIPhone() ? 83 : 49
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	headerTitle: {
		textAlign: 'left',
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(26)
	},
	userImageContainer: {
		width: normalize(50),
		height: normalize(50),
		borderRadius: normalize(100),
		overflow: 'hidden'
	},
	userImage: {
		width: normalize(50),
		height: normalize(50)
	},
	carousel: {
		flex: 2,
		marginHorizontal: 20,
		// height: 180,
		paddingBottom: 10
	}
});
