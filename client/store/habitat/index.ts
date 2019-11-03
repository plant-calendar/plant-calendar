import { fetchHabitatsByIds } from './actions';
import reducer from './reducer';
import {
  habitatById,
  plantsToWater,
  plantsThatDontNeedWater,
  nonSubscribedPlants,
} from "./selectors";

const actions = { fetchHabitatsByIds };
const selectors = {
  habitatById,
  plantsToWater,
  plantsThatDontNeedWater,
  nonSubscribedPlants,
};
export { actions, selectors };
export default reducer;