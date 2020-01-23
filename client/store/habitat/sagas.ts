import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../api';
import {setHabitats} from "./actions";
import TYPES from "./types";

function* fetchHabitatsByIds({ habitatIds }) {
  const response = yield call(api.habitat.getByIds.request, habitatIds);
  yield put(setHabitats(api.habitat.getByIds.response(response)));
}

function* fetchUserSubscribedHabitats({ userId, callback }) {
  const response = yield call(api.habitat.getUserSubscribed.request, userId);
  const habitats = api.habitat.getUserSubscribed.response(response);
  yield put(setHabitats(habitats);
  callback(habitats);
}

export default [
  // @ts-ignore
  takeLatest(TYPES.HABITATS_FETCH_BY_IDS_REQUESTED, fetchHabitatsByIds),
  // @ts-ignore
  takeLatest(TYPES.HABITATS_FETCH_USER_SUBSCRIBED_REQUESTED, fetchUserSubscribedHabitats),
];
