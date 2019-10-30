import { fetchHabitatsByIds } from './actions';
import reducer from './reducer';
import { habitatById, plantsByHabitatId } from "./selectors";

const actions = { fetchHabitatsByIds };
const selectors = { habitatById, plantsByHabitatId };
export { actions, selectors };
export default reducer;