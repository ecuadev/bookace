import { Navigation } from 'react-native-navigation';
import buildStyles from './src/styles';
import registerScreens from './src/screens';

buildStyles();
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setDefaultOptions({
		bottomTabs: {
			visible: false,
			drawBehind: true
		}
	});

	Navigation.setRoot({
		root: {
			component: {
				name: 'bookace.Welcome'
			}
		}
	});
});
