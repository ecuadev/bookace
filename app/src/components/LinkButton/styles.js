import { StyleSheet } from 'react-native';
import { normalize } from '../../helpers';

export default StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	label: {
		fontFamily: 'Montserrat-Light',
		color: 'blue',
		fontSize: normalize(14),
		lineHeight: 18
	},
	rightIcon: {
		marginLeft: 8,
		tintColor: 'blue'
	}
});
