import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import habitats from './habitat';
import user from './user';
import saga from './saga';
import auth from './auth';

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [sagaMiddleware];
// @ts-ignore
const reducer = combineReducers({ habitats, user, auth });
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

// the dtynamic import below reduces bundle.js by 200KiB, but does not work...
// import('./saga').then(saga => {
//     const rootSagaGenerator = saga.default;
//     sagaMiddleware.run(rootSagaGenerator);
// });
sagaMiddleware.run(saga);

export default store;
