import {call, takeLatest} from "@redux-saga/core/effects";
import api from "../../api";
import TYPES from './types';

function* updatePlantById({ id, plant, callback }) {
  const { data } = yield call(api.plant.updateById, id, plant);
  console.log("data received", data);
  callback(data);
}

export default [
  // @ts-ignore
  takeLatest(TYPES.PLANTS_UPDATE_BY_ID_REQUESTED, updatePlantById),
];
