import {entityId} from "../../../server/db/types";
import TYPES from './types';

export function waterByIds(plantIds: entityId[], callback?: () => any) {
  return { type: TYPES.PLANTS_WATER_BY_IDS_REQUESTED, ids: plantIds, callback };
}

export function createOne(plant: object, callback?: () => any) {
  return { type: TYPES.PLANTS_CREATE_ONE_REQUESTED, plant, callback };
}