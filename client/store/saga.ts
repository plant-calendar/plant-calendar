import { all } from 'redux-saga/effects';
import habitatSagas from './habitat/sagas';
import plantSagas from './plant/sagas';

export default function* rootSaga() {
  yield all([...plantSagas, ...habitatSagas]);
}
