import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, StatusBar } from 'react-native';
import { normalize } from '../../helpers';

export default EStyleSheet.create({
	container: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		paddingHorizontal: 20,
		paddingVertical: 10,
		justifyContent: 'center',
		overflow: 'hidden',
		...Platform.select({
			android: {
				paddingTop: StatusBar.currentHeight * 1.5
			}
		})
	},
	messageText: {
		fontSize: normalize(14),
		textAlign: 'left',
		fontWeight: 'normal',
		color: '$lightTextColor',
		backgroundColor: 'transparent'
	},
	error: {
		backgroundColor: '$errorColor'
	},
	success: {
		backgroundColor: '$successColor'
	}
});
