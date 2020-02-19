import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import habitats from './habitat';
import user from './user';
import saga from './saga';
import auth from './auth';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [sagaMiddleware];

const reducer = combineReducers({ habitats, user, auth });
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(saga);

export default store;
