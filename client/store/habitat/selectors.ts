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


export const plants = createSelector(
  habitatById,
  habitat => habitat.plants || [],
);

const subscriptions = createSelector(
  habitatById,
  habitat => habitat.subscriptions || [],
);

export const nonSubscribedPlants = createSelector(
  [plants, subscriptions],
  (allPlants, allSubscriptions) => allPlants.filter(plant => !allSubscriptions.includes(plant.id)),
);

const subscribedPlants = createSelector(
  [plants, subscriptions],
  (allPlants, allSubscriptions) => allPlants.filter(plant => allSubscriptions.includes(plant.id)),
);

const plantNeedsWater = (plant: IPlant) => plantDataAccessors.daysSinceWatered(plant) >= plant.waterInterval;

export const plantsToWater = createSelector(
  subscribedPlants,
  (allPlants: IPlant[]) => allPlants.filter(plant => plantNeedsWater(plant)),
);

export const plantsThatDontNeedWater = createSelector(
  subscribedPlants,
  (allPlants: IPlant[]) => allPlants.filter(plant => !plantNeedsWater(plant)),
);
