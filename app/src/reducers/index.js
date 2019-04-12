import { combineReducers } from 'redux';

import global from './global';
import network from './network';
import user from './user';
import books from './books';

export default combineReducers({
	global,
	network,
	user,
	books
});
