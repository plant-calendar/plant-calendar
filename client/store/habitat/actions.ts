import {entityId} from "../../../server/db/types";
import {IStoreHabitat} from "./interfaces/store-habitat.interface";
import TYPES from './types';

export function fetchHabitatsByIds(habitatIds: entityId[]) {
  return { type: TYPES.HABITATS_FETCH_BY_IDS_REQUESTED, habitatIds };
}

export function fetchUserSubscribedHabitats(userId: string, callback = () => undefined) {
  return { type: TYPES.HABITATS_FETCH_USER_SUBSCRIBED_REQUESTED, userId, callback };
}

export function setHabitats(habitats: IStoreHabitat[]) {
  return { type: TYPES.SET_HABITATS, habitats };
}
