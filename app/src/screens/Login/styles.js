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
		marginVertical: 15,
		alignItems: 'center',
		justifyContent: 'center'
	},
	separatorLine: {
		height: 1,
		backgroundColor: '$lightTextColor',
		width: 40
	},
	separatorText: {
		fontSize: 14,
		color: '$lightTextColor',
		paddingHorizontal: 15
	},
	fbButton: {
		marginBottom: 10
	},
	bottomLinks: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 40,
		marginBottom: 15
	},
	bottomLink: {
		color: '$lightTextColor'
	}
});
