import { fetchHabitatsByIds } from './actions';
import reducer from './reducer';
import { habitatById, getPlantDataForDisplayInHabitat } from "./selectors";

const actions = { fetchHabitatsByIds };
const selectors = { habitatById, getPlantDataForDisplayInHabitat };
export { actions, selectors };
export default reducer;