import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 30
	},
	logo: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logoImage: {
		width: 130,
		height: 130,
		tintColor: '$lightTextColor'
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	form: {
		width: '100%'
	},
	signinButton: {
		marginTop: 10
	},
	separator: {
		flexDirection: 'row',
		marginVertical: 25,
		alignItems: 'center',
		justifyContent: 'center'
	},
	separatorLine: {
		height: 2,
		backgroundColor: '$lightTextColor',
		width: 40
	},
	separatorText: {
		fontSize: 14,
		fontWeight: '700',
		color: '$lightTextColor',
		paddingHorizontal: 20
	},
	fbButton: {
		marginBottom: 15
	},
	bottomLinks: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		marginBottom: 5
	},
	bottomLink: {
		color: '$lightTextColor',
		fontWeight: '500'
	},
	bottomLinkContainer: {
		paddingVertical: 10
	}
});
