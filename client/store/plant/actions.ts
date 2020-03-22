import {entityId} from "../../../common/db-interfaces/types";
import TYPES from './types';

export function waterByIds(plantIds: entityId[], callback?: () => any) {
  return { type: TYPES.PLANTS_WATER_BY_IDS_REQUESTED, ids: plantIds, callback };
}

export function createOne(plant: object, callback?: () => any) {
  return { type: TYPES.PLANTS_CREATE_ONE_REQUESTED, plant, callback };
}

export function updateOne(plant: object, callback?: () => any) {
  return { type: TYPES.PLANTS_UPDATE_ONE_REQUESTED, plant, callback };
}