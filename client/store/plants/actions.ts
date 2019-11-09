import TYPES from './types';

export function waterPlantById(plantId: number, callback: Function) {
  return { type: TYPES.PLANT_WATER_BY_ID_REQUESTED, plantId, callback };
}

export function apiFailed(error: string) {
  return {
    type: TYPES.PLANT_API_FAILED,
    error,
  };
}
