import { all } from 'redux-saga/effects';
import habitatSagas from './habitat/sagas';
import plantSagas from './plant/sagas';
import userSagas from './user/sagas';
import authSagas from './auth/sagas';


export default function* rootSaga() {
  // Promise.all([
  //     import('./habitat/sagas'),
  //     import('./plant/sagas'),
  //     import('./user/sagas'),
  //     import('./auth/sagas'),
  // ]).then((a, b, c, d) => {
  //   console.log({ a, b, c, d});
  // });
  yield all([...plantSagas, ...habitatSagas, ...userSagas, ...authSagas]);
}
