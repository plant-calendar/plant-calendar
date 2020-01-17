import {entityId} from "../../../server/db/types";
import TYPES from './types';

export function waterPlantById(plantId: entityId, callback?: () => any) {
  return {
    type: TYPES.PLANTS_UPDATE_BY_ID_REQUESTED,
    id: plantId,
    plant: { id: plantId, lastWatered: new Date() },
    callback,
  };
}
