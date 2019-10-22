import {IPlant} from "../../../server/db/models/plant/plant.interface";
import {
  PLANTS_FETCH_BY_HABITAT_ID_REQUESTED,
  PLANTS_FETCH_BY_HABITAT_ID_SUCCEEEDED,
} from './types';

export function fetchPlantsByHabitatId(habitatId: string) {
  return { type: PLANTS_FETCH_BY_HABITAT_ID_REQUESTED, habitatId };
}

export function setPlants(plants: IPlant[]) {
  return { type: PLANTS_FETCH_BY_HABITAT_ID_SUCCEEEDED, plants };
}
