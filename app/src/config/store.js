import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducer from '../reducers';

const logger = createLogger({
	predicate: (getState, action) => __DEV__
});

let debuggWrapper = data => data;
if (__DEV__) {
	debuggWrapper = composeWithDevTools({ realtime: true, port: 8000 });
}

export default createStore(
	reducer,
	{},
	debuggWrapper(compose(applyMiddleware(thunk, logger)))
);
