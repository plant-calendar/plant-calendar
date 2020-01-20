import {createSelector} from "reselect";
import {plantDataAccessors} from "../../../common/data-accessors/plant";
import {IPlant} from "../../../server/db/models/plant/plant.interface";
import {IHabitatComponentProps} from "../../components/Habitat";

const habitatsSelector = state => state.habitats.data || [];

export const habitatById = (state, props: IHabitatComponentProps) => {
  console.log('recaclulated habitat');
  console.log(state.habitats.data);
  const habitatId: number = +props.match.params.id;
  return habitatsSelector(state).find(habitat => habitat.id === habitatId) || {};
};


const plants = createSelector(
  habitatById,
  habitat => habitat.plants || [],
);

const getSubscriptions = createSelector(
  habitatById,
  habitat => habitat.subscriptions || [],
);

const getNonSubscribedPlants = createSelector(
  [plants, getSubscriptions],
  (allPlants, subscriptions) => allPlants.filter(plant => !subscriptions.includes(plant.id)),
);

const getSubscribedPlants = createSelector(
  [plants, getSubscriptions],
  (allPlants, subscriptions) => allPlants.filter(plant => subscriptions.includes(plant.id)),
);
//
// const plantNeedsWater = (plant: IPlant) => plantDataAccessors.daysSinceWatered(plant) >= plant.waterInterval;

// export const plantsToWater = createSelector(
//   subscribedPlants,
//   (allPlants: IPlant[]) => allPlants.filter(plant => plantNeedsWater(plant)),
// );
// //
// export const plantsThatDontNeedWater = createSelector(
//   subscribedPlants,
//   (allPlants: IPlant[]) => allPlants.filter(plant => !plantNeedsWater(plant)),
// );
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