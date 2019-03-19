import { NetInfo } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import buildStyles from './src/styles';
import registerScreens from './src/screens';
import store from './src/config/store';
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
