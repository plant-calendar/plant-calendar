import {call, takeLatest} from "@redux-saga/core/effects";
import { apiPlant } from "../../api";
import TYPES from './types';

function* waterByIds({ ids, callback = _ => undefined }) {
  const response = yield call(apiPlant.waterByIds.request, ids);
  callback(apiPlant.waterByIds.response(response));
}

function* createOne({ plant, callback = _ => undefined }) {
  const response = yield call(apiPlant.createOne.request, plant);
  callback(apiPlant.createOne.response(response));
}

function* updateOne({ plant, callback = _ => undefined }) {
  const response = yield call(apiPlant.updateOne.request, plant);
  callback(apiPlant.updateOne.response(response));
}

export default [
  // @ts-ignore
  takeLatest(TYPES.PLANTS_WATER_BY_IDS_REQUESTED, waterByIds),
  // @ts-ignore
  takeLatest(TYPES.PLANTS_CREATE_ONE_REQUESTED, createOne),
  // @ts-ignore
  takeLatest(TYPES.PLANTS_UPDATE_ONE_REQUESTED, updateOne),
];
