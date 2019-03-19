import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		backgroundColor: '$primaryColor',
		height: 50,
		width: '100%',
		flexDirection: 'row'
	},
	transparentButton: {
		backgroundColor: 'transparent'
	},
	transparentButtonAndroid: {
		backgroundColor: 'rgba(255,255,255, 0.4)'
	},
	label: {
		color: '$lightTextColor',
		fontWeight: '600',
		fontSize: 14,
		lineHeight: 18
	},
	icon: {
		marginRight: 7,
		tintColor: '$lightTextColor'
	},
	blurView: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		borderRadius: 25
	}
});
