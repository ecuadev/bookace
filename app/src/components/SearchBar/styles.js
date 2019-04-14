import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../helpers';

export default EStyleSheet.create({
	textBoxWrapper: {
		width: '100%',
		borderRadius: normalize(10),
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '$searchBarColor',
		paddingHorizontal: normalize(20),
	},
	textBox: {
		color: '$lightTextColor',
		height: normalize(55),
		paddingHorizontal: normalize(15),
		flex: 1,
		fontSize: normalize(15),
		lineHeight: normalize(17),
	},
	icons: {
		width: normalize(20),
		height: normalize(20),
		color: '$lightTextColor',
	},
});
