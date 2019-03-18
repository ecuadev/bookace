import { Navigation } from "react-native-navigation";
import registerScreens from './src/screens';

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
