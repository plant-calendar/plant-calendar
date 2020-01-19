import {entityId} from "../../../server/db/types";
import TYPES from './types';

export function waterByIds(plantIds: entityId[], callback?: () => any) {
  return { type: TYPES.PLANTS_WATER_BY_IDS_REQUESTED, ids: plantIds, callback };
}
