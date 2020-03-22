import {entityId} from "../../../common/db-interfaces/types";
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

export function setQueriedHabitats(habitats: Array<{ id: entityId; name: string }>) {
  return { type: TYPES.HABITATS_SET_QUERIED_HABITATS, queriedHabitats: habitats };
}

export function habitatSearch(searchString: string, callback = () => undefined) {
  return { type: TYPES.HABITATS_SEARCH_REQUESTED, name: searchString, callback };
}

export function createOne(habitat, callback = (result: IStoreHabitat) => undefined) {
  return { type: TYPES.HABITATS_CREATE_ONE_REQUESTED, habitat, callback };
}

export function createOneSucceeded() {
  return { type: TYPES.HABITATS_CREATE_ONE_SUCCEEDED };
}

export function requestSubscription(habitatId: entityId, callback = () => undefined) {
  return { type: TYPES.HABITATS_REQUEST_SUBSCRIPTION_REQUESTED, habitatId, callback };
}