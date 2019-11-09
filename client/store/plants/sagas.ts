import { call, put, takeLatest } from 'redux-saga/effects';
import { apiFailed } from './actions';
import api from '../../api';
import TYPES from './types';

function* waterPlantById({ plantId, callback }) {
  try {
    yield call(api.plants.waterById, plantId);
    if (typeof callback === 'function') {
      callback();
    }
  } catch (err) {
    yield put(apiFailed(err));
  }
}

export default [
  // @ts-ignore
  takeLatest(TYPES.PLANT_WATER_BY_ID_REQUESTED, waterPlantById),
];
