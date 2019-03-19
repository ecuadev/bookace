import { Navigation } from 'react-native-navigation';

import Welcome from './Welcome';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Search from './Search';
import Camera from './Camera';
import Social from './Social';
import Profile from './Profile';

import TabBar from '../components/TabBar';

export default function (Provider, store) {
	Navigation.registerComponentWithRedux('bookace.Welcome', () => Welcome, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Signup', () => Signup, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Login', () => Login, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Home', () => Home, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Search', () => Search, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Camera', () => Camera, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Social', () => Social, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Profile', () => Profile, Provider, store);
	Navigation.registerComponentWithRedux('bookace.TabBar', () => TabBar, Provider, store);
}
