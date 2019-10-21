import { call, put, takeLatest, actionChannel } from 'redux-saga/effects';
import {setPlants} from "./actions";
import {PLANTS_FETCH_BY_HABITAT_ID_REQUESTED} from "./types";

function* fetchPlantsByHabitatId({ habitatId }) {
  console.log('called fetchPlantsByHabitatId');
  const { data } = { data: [ // todo use actual plants
      {
        id: 1,
        imageUrl: 'afasf',
        name: 'Asparagus',
        lastWatered: new Date(),
        waterInterval: 3,
        createdAt: 'afsrsf',
        updatedAt: 'fasfasf',
        habitatId,
      },
      {
        id: 2,
        imageUrl: 'afasf',
        name: 'Rose Bush',
        lastWatered: new Date(),
        waterInterval: 3,
        createdAt: 'afsrsf',
        updatedAt: 'fasfasf',
        habitatId,
      },
      {
        id: 2,
        imageUrl: 'afasf',
        name: 'Purple One',
        lastWatered: new Date(),
        waterInterval: 3,
        createdAt: 'afsrsf',
        updatedAt: 'fasfasf',
        habitatId,
      },
    ] };
  yield put(setPlants(data));
}

export default [
  // @ts-ignore

  takeLatest(PLANTS_FETCH_BY_HABITAT_ID_REQUESTED, fetchPlantsByHabitatId),
];
