import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	noInternet: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 36
	},
	noInternetImage: {
		width: 115,
		height: 87,
		marginBottom: 66
	},
	noInternetTitle: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-Medium',
		fontSize: 20,
		fontWeight: '500',
		lineHeight: 25,
		marginBottom: 10,
		textAlign: 'center'
	},
	noInternetMessage: {
		opacity: 0.7,
		color: '$secondaryTextColor',
		fontFamily: 'Montserrat',
		fontSize: 14,
		fontWeight: '400',
		letterSpacing: -0.3,
		lineHeight: 23,
		textAlign: 'center'
	}
});
