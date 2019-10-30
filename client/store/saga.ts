import { all } from 'redux-saga/effects';
import plantSagas from './habitat/sagas';

export default function* rootSaga() {
  yield all([...plantSagas]);
}
