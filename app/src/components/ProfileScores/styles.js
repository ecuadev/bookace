import EStyleSheet from 'react-native-extended-stylesheet';
import { normalize } from '../../helpers';

export default EStyleSheet.create({
	scores: {
		flexDirection: 'row',
		marginTop: normalize(25)
	},
	scoreItem: {
		marginRight: 30
	},
	scoreItemTitle: {
		color: '$primaryColor',
		fontFamily: 'Montserrat-Medium',
		fontSize: normalize(18)
	},
	scoreItemValue: {
		color: '$secondaryTextColor',
		fontFamily: 'Montserrat-Light',
		fontSize: normalize(14)
	}
});
