import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		flex: 1
	},
	inner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	heading: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},

	title: {
		fontSize: 40,
		textAlign: "center",
		margin: 5,
		color: "$lightTextColor"
	},
	form: {
		flex: 1,
		width: '100%'
	},
	formFields: {
		flex: 1
	},
	sendEmail: {
		marginTop: 10
	},

	bottomLinks: {

		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 10
	},
	bottomLink: {
		color: '$lightTextColor',
		fontWeight: '500'
	},
	bottomLinkContainer: {
		paddingVertical: 10
	}
});
