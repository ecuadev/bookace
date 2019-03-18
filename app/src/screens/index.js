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

export default function (store, Provider) {
	Navigation.registerComponent('bookace.Welcome', () => Welcome);
	Navigation.registerComponent('bookace.Signup', () => Signup);
	Navigation.registerComponent('bookace.Login', () => Login);
	Navigation.registerComponent('bookace.Home', () => Home);
	Navigation.registerComponent('bookace.Search', () => Search);
	Navigation.registerComponent('bookace.Camera', () => Camera);
	Navigation.registerComponent('bookace.Social', () => Social);
	Navigation.registerComponent('bookace.Profile', () => Profile);
	Navigation.registerComponent('bookace.TabBar', () => TabBar);
}
