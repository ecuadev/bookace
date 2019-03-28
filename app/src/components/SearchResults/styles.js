import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15
	},
	title: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-Semibold',
		fontSize: 18,
		marginTop: 40,
		marginBottom: 15
	},
	result: {
		flexDirection: 'row',
		paddingVertical: 10,
		borderColor: '$listBorderColor',
		borderBottomWidth: 0.5
	},
	'result:last-child': {
		borderBottomWidth: 0
	},
	resultImageContainer: {
		borderRadius: 8,
		width: 50,
		height: 70,
		overflow: 'hidden'
	},
	resultImage: {
		width: 50,
		height: 70
	},
	resultContent: {
		flex: 1,
		flexWrap: 'wrap',
		marginLeft: 15
	},
	resultTitle: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-Medium',
		fontSize: 14,
		fontWeight: '500'
	},
	resultAuthor: {
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-Light',
		fontSize: 14,
		fontWeight: '300'
	}
});
