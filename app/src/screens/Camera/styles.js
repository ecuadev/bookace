import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTallIPhone = Platform.OS === 'ios' && height >= 812;

export default EStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	preview: {
		flex: 1,
		height: height - (isTallIPhone ? 83 : 49),
		width
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		flex: 1,
		height: height - (isTallIPhone ? 83 : 49),
		width,
		justifyContent: 'flex-end',
		alignItems: 'center'
	}
});
