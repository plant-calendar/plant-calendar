import { all } from 'redux-saga/effects';
import habitatSagas from './habitat/sagas';
import plantSagas from './plants/sagas';

export default function* rootSaga() {
  yield all([...habitatSagas, ...plantSagas]);
}
