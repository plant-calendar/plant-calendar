import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../api';
import { setHabitats } from './actions';
import TYPES from './types';

function* fetchHabitatsByIds({ habitatIds }) {
  console.log('called fetchHabitatsByIds with habitatIds', habitatIds);
  const { data } = yield call(api.habitat.getByIds, habitatIds);
  console.log('data received', data);
  yield put(setHabitats(data.habitat));
}

export default [
  // @ts-ignore
  takeLatest(TYPES.HABITATS_FETCH_BY_IDS_REQUESTED, fetchHabitatsByIds),
];
