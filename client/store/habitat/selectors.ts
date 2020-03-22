import {createSelector} from "reselect";
import {plantDataAccessors} from "../../../common/data-accessors/plant";
import {IPlant} from "../../../server/db/models/plant/plant.interface";

export const habitats = state => state.habitats.data.habitats || [];
export const queriedHabitats = state => state.habitats.data.queriedHabitats || [];

export const habitatById = (state, props: any) => {
  const habitatId: number = +props.match.params.id;
  return habitats(state).find(habitat => habitat.id === habitatId) || {};
};


const plants = createSelector(
  habitatById,
  habitat => habitat.plants || [],
);

const getSubscriptions = createSelector(
  habitatById,
  habitat => habitat.plantSubscriptions || [],
);

const getNonSubscribedPlants = createSelector(
  [plants, getSubscriptions],
  (allPlants, subscriptions) => allPlants.filter(plant => !subscriptions.includes(plant.id)),
);

const getSubscribedPlants = createSelector(
  [plants, getSubscriptions],
  (allPlants, subscriptions) => allPlants.filter(plant => subscriptions.includes(plant.id)),
);

export interface IAugmentedPlant {
  plant: IPlant;
  subscribed: boolean;
  daysOverdueForWater: number;
}

export const getPlantDataForDisplayInHabitat = createSelector(
  [getSubscribedPlants, getNonSubscribedPlants],
  (subscribedPlants, nonSubscribedPlants): IAugmentedPlant[] => {
    const augment = (plant, subscribed) => ({
      plant,
      subscribed,
      daysOverdueForWater: plantDataAccessors.daysOverdueForWater(plant),
    });
    const augmentedSubscribed = subscribedPlants.map(plant => augment(plant, true));
    const augmentedNonSubscribed = nonSubscribedPlants.map(plant => augment(plant, false));
    // order by:
    //  (1) subbed that need water
    //  (2) subbed that don't need water
    //  (3) non-subbed that need water
    //  (4) non-subbed that don't need water
    const sorter = (dataA, dataB) =>  dataB.daysOverdueForWater - dataA.daysOverdueForWater;
    return augmentedSubscribed.sort(sorter).concat(augmentedNonSubscribed.sort(sorter));
  },
);