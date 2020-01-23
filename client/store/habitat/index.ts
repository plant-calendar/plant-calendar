import { fetchHabitatsByIds, fetchUserSubscribedHabitats } from './actions';
import reducer from './reducer';
import { habitatById, getPlantDataForDisplayInHabitat, habitats } from "./selectors";

const actions = { fetchHabitatsByIds, fetchUserSubscribedHabitats };
const selectors = { habitatById, getPlantDataForDisplayInHabitat, habitats };
export { actions, selectors };
export default reducer;