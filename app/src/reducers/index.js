import { combineReducers } from 'redux';

import global from './global';
import network from './network';
import books from './books';
import user from './user';
import activeTab from './activeTab';

export default combineReducers({
	global,
	network,
	books,
	user,
	activeTab,
});
