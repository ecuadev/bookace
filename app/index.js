import NetInfo from '@react-native-community/netinfo';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

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
