import { Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import buildStyles from './src/config/styles';
import store from './src/config/store';
import registerScreens from './src/screens';
import { changeNetworkStatus } from './src/actions/network';

buildStyles();
registerScreens(Provider, store);

NetInfo.addEventListener('connectionChange', info => {
	store.dispatch(changeNetworkStatus(info.type));
});

Navigation.events().registerAppLaunchedListener(() => {
	SplashScreen.hide();

	Navigation.setDefaultOptions({
		topBar: {
			visible: false,
			height: 0
		},
		bottomTabs: {
			visible: false,
			...Platform.select({ android: { drawBehind: true } })
		}
	});

	Navigation.setRoot({
		root: {
			component: {
				name: 'bookace.Welcome'
			}
		}
	});

	Navigation.showOverlay({
		component: {
			name: 'bookace.Loading',
			options: {
				overlay: {
					interceptTouchOutside: false
				}
			}
		}
	});

	Navigation.showOverlay({
		component: {
			name: 'bookace.Alert',
			options: {
				overlay: {
					interceptTouchOutside: false
				}
			}
		}
	});
});
