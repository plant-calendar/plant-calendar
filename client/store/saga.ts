import { all } from 'redux-saga/effects';
import plantSagas from './plants/sagas';

export default function* rootSaga() {
  yield all([...plantSagas]);
}
