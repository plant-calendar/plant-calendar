import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import habitats from './habitat';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [sagaMiddleware];

const reducer = combineReducers({ habitats });
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(saga);

export default store;
