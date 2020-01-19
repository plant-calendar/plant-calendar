import {call, takeLatest} from "@redux-saga/core/effects";
import api from "../../api";
import TYPES from './types';

function* waterByIds({ ids, callback }) {
  const { data } = yield call(api.plant.waterByIds, ids);
  console.log("data received", data);
  callback(data);
}

export default [
  // @ts-ignore
  takeLatest(TYPES.PLANTS_WATER_BY_IDS_REQUESTED, waterByIds),
];
