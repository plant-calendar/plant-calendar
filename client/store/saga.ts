import { all } from 'redux-saga/effects';
import habitatSagas from './habitat/sagas';
import plantSagas from './plant/sagas';
import userSagas from './user/sagas';
import authSagas from './auth/sagas';

export default function* rootSaga() {
  yield all([...plantSagas, ...habitatSagas, ...userSagas, ...authSagas]);
}
