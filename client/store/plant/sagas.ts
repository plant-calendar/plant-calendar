import {call, takeLatest} from "@redux-saga/core/effects";
import api from "../../api";
import TYPES from './types';

function* waterByIds({ ids, callback = _ => undefined }) {
  const response = yield call(api.plant.waterByIds.request, ids);
  callback(api.plant.waterByIds.response(response));
}

function* createOne({ plant, callback = _ => undefined }) {
  const response = yield call(api.plant.createOne.request, plant);
  callback(api.plant.createOne.response(response));
}

function* updateOne({ plant, callback = _ => undefined }) {
  const response = yield call(api.plant.updateOne.request, plant);
  callback(api.plant.updateOne.response(response));
}

export default [
  // @ts-ignore
  takeLatest(TYPES.PLANTS_WATER_BY_IDS_REQUESTED, waterByIds),
  // @ts-ignore
  takeLatest(TYPES.PLANTS_CREATE_ONE_REQUESTED, createOne),
  // @ts-ignore
  takeLatest(TYPES.PLANTS_UPDATE_ONE_REQUESTED, updateOne),
];
