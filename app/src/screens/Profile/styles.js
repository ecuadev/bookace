import EStyleSheet from 'react-native-extended-stylesheet';
import normalize from '../../helpers/normalizeText';

export default EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$screenBackground',
		padding: 0,
	},
	title: {
		paddingHorizontal: 20,
		marginBottom: 9,
	},
	topContainer: {
		padding: 20,
		borderBottomWidth: 0.3,
		borderColor: '$borderColor',
		height: 165,
		backgroundColor: '$screenBackground',
	},
	bottomContainer: {
		flex: 1,
		padding: 20,
		backgroundColor: '$grayBackground',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	user: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},
	userImageContainer: {
		width: 65,
		height: 65,
		borderRadius: 100,
		overflow: 'hidden',
		marginRight: 15,
	},
	userImage: {
		width: '100%',
		height: '100%',
	},
	userInfoContainer: {
		flex: 1,
		flexWrap: 'wrap',
	},
	userName: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-Medium',
		fontSize: normalize(18),
	},
	userEmail: {
		color: '$secondaryTextColor',
		fontFamily: 'Montserrat-Light',
		fontSize: normalize(14),
	},
	scores: {
		flexDirection: 'row',
		marginTop: 25,
	},
	scoreItem: {
		marginRight: 30,
	},
	scoreItemTitle: {
		color: '$primaryColor',
		fontFamily: 'Montserrat-Medium',
		fontSize: normalize(18),
	},
	scoreItemValue: {
		color: '$secondaryTextColor',
		fontFamily: 'Montserrat-Light',
		fontSize: normalize(14),
	},
});
