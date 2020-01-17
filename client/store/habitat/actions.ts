import {entityId} from "../../../server/db/types";
import {IStoreHabitat} from "./interfaces/store-habitat.interface";
import TYPES from './types';

export function fetchHabitatsByIds(habitatIds: entityId[]) {
  return { type: TYPES.HABITATS_FETCH_BY_IDS_REQUESTED, habitatIds };
}

export function setHabitats(habitats: IStoreHabitat[]) {
  return { type: TYPES.HABITATS_FETCH_BY_IDS_SUCCEEDED, habitats };
}
