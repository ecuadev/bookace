import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$screenBackground'
	},
	headerImageContainer: {
		height: 300,
		width,
		backgroundColor: 'rgba(0, 0, 0, 0.2)'
	},
	headerImage: {
		height: '100%',
		width: '100%'
	}
});
