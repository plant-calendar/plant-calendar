import { call, put, takeLatest } from 'redux-saga/effects';
import { apiHabitat } from '../../api';
import {createOneSucceeded, setHabitats, setQueriedHabitats} from "./actions";
import TYPES from "./types";

function* fetchHabitatsByIds({ habitatIds }) {
  const response = yield call(apiHabitat.getByIds.request, habitatIds);
  yield put(setHabitats(apiHabitat.getByIds.response(response)));
}

function* fetchUserSubscribedHabitats({ userId, callback }) {
  const response = yield call(apiHabitat.getUserSubscribed.request, userId);
  const habitats = apiHabitat.getUserSubscribed.response(response);
  yield put(setHabitats(habitats));
  callback(habitats);
}

function* createOne({ habitat, callback }) {
  const res = yield call(apiHabitat.createOne.request, habitat);
  yield put(createOneSucceeded());
  const created = apiHabitat.createOne.response(res);
  callback(created);
}

function* searchHabitats({ name, callback }) {
  const res = yield call(apiHabitat.nameSearch.request, name);
  const found = apiHabitat.nameSearch.response(res);
  yield put(setQueriedHabitats(found));
  callback(found);
}

function* requestSubscription({ habitatId, callback }) {
  yield call(apiHabitat.requestSubscription.request, habitatId);
  callback();
}

export default [
  // @ts-ignore
  takeLatest(TYPES.HABITATS_FETCH_BY_IDS_REQUESTED, fetchHabitatsByIds),
  // @ts-ignore
  takeLatest(TYPES.HABITATS_FETCH_USER_SUBSCRIBED_REQUESTED, fetchUserSubscribedHabitats),
  // @ts-ignore
  takeLatest(TYPES.HABITATS_CREATE_ONE_REQUESTED, createOne),
  // @ts-ignore
  takeLatest(TYPES.HABITATS_SEARCH_REQUESTED, searchHabitats),
  // @ts-ignore
  takeLatest(TYPES.HABITATS_REQUEST_SUBSCRIPTION_REQUESTED, requestSubscription),
];
