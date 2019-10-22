import { call, put, takeLatest, actionChannel } from 'redux-saga/effects';
import {setPlants} from "./actions";
import {PLANTS_FETCH_BY_HABITAT_ID_REQUESTED} from "./types";
import api from '../../api';

function* fetchPlantsByHabitatId({ habitatId }) {
  console.log('called fetchPlantsByHabitatId');
  const { data } = yield call(api.plant.getByHabitatId, habitatId);
  yield put(setPlants(data.plant));
}

export default [
  // @ts-ignore

  takeLatest(PLANTS_FETCH_BY_HABITAT_ID_REQUESTED, fetchPlantsByHabitatId),
];
