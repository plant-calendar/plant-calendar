import TYPES from './types';

export function waterPlantById(plantId: number) {
  return { type: TYPES.PLANT_WATER_BY_ID_REQUESTED, plantId };
}
