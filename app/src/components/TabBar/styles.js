import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone } from '../../helpers';

export default EStyleSheet.create({
	tabBar: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: isTallIPhone() ? 83 : 49,
		backgroundColor: '$tabsPrimaryColor',
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderTopWidth: 0.3,
		borderTopColor: '$borderColor'
	},
	tab: {
		width: '10%',
		height: 49,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: 20,
		height: 20,
		tintColor: '$tabsSecondaryColor'
	},
	imageActive: {
		tintColor: '$tabsActiveColor'
	},
	cameraTab: {
		backgroundColor: '$tabsPrimaryColor',
		borderWidth: 2,
		borderColor: '$tabsSecondaryColor',
		borderRadius: 50,
		width: 70,
		height: 70,
		padding: 3,
		top: -10
	},
	cameraTabInner: {
		backgroundColor: '$tabsSecondaryColor',
		borderRadius: 50,
		width: 60,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center'
	},
	cameraImage: {
		width: 30,
		height: 30,
		tintColor: '$tabsPrimaryColor'
	},
	cameraTabActive: {
		borderColor: '$tabsActiveColor'
	},
	cameraTabInnerActive: {
		backgroundColor: '$tabsActiveColor'
	}
});
