import {IStoreHabitat} from "./interfaces/store-habitat.interface";
import TYPES from './types';

export function fetchHabitatsByIds(habitatIds: number[]) {
  return { type: TYPES.HABITATS_FETCH_BY_IDS_REQUESTED, habitatIds };
}

export function setHabitats(habitats: IStoreHabitat[]) {
  return { type: TYPES.HABITATS_FETCH_BY_IDS_SUCCEEDED, habitats };
}
