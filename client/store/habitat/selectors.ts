import { createSelector } from 'reselect';
import {IStoreHabitat} from "./interfaces/store-habitat.interface";

const habitats = state => state.habitats.data || [];

export const habitatById = (habitatId, state) => habitats(state)
  .find((habitat: IStoreHabitat) => habitat.id === habitatId) || { name: '', plants: [] };

export const plantsByHabitatId = (habitatId, state) => habitatById(habitatId, state).plants;
