import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	textBoxWrapper: {
		width: '100%',
		borderRadius: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '$searchBarColor',
		paddingHorizontal: 20
	},
	textBox: {
		color: '$lightTextColor',
		height: 55,
		paddingHorizontal: 15,
		flex: 1,
		fontSize: 15,
		lineHeight: 17
	},
	icons: {
		width: 20,
		height: 20,
		tintColor: '$lightTextColor'
	}
});
