import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducer from '../reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
	thunk,
	sagaMiddleware
];

let debuggWrapper = data => data;
if (__DEV__) {
	middleware.push(createLogger());
	debuggWrapper = composeWithDevTools({ realtime: true, port: 8000 });
}

const store = createStore(
	reducer,
	{},
	debuggWrapper(compose(applyMiddleware(...middleware)))
);

sagaMiddleware.run(sagas);

export default store;
