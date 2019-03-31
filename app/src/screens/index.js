import { Navigation } from 'react-native-navigation';

import Welcome from './Welcome';
import Signup from './Signup';
import Login from './Login';
import ForgotPass from './ForgotPass';
import Home from './Home';
import Search from './Search';
import Category from './Category';
import Book from './Book';
import Camera from './Camera';
import Social from './Social';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';

import Alert from '../components/Alert';
import TabBar from '../components/TabBar';


export default function (Provider, store) {
	// Screens
	Navigation.registerComponentWithRedux('bookace.Welcome', () => Welcome, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Signup', () => Signup, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Login', () => Login, Provider, store);
	Navigation.registerComponentWithRedux('bookace.ForgotPass', () => ForgotPass, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Home', () => Home, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Search', () => Search, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Category', () => Category, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Book', () => Book, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Camera', () => Camera, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Social', () => Social, Provider, store);
	Navigation.registerComponentWithRedux('bookace.Profile', () => Profile, Provider, store);
	Navigation.registerComponentWithRedux('bookace.ProfileEdit', () => ProfileEdit, Provider, store);

	// Overlay components
	Navigation.registerComponentWithRedux('bookace.Alert', () => Alert, Provider, store);
	Navigation.registerComponentWithRedux('bookace.TabBar', () => TabBar, Provider, store);
}
