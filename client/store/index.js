import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import plants from './plants';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [sagaMiddleware];

const reducer = combineReducers({ plants });
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(saga);

export default store;
