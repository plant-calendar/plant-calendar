import { getHaveCorrectUser, setHaveCorrectUser } from './actions';
import { getHaveCorrectUser as selectHaveUser } from './selectors';
import reducer from './reducer';

const actions = { getHaveUser: getHaveCorrectUser, setHaveUser: setHaveCorrectUser };
const selectors = { getHaveUser: selectHaveUser };
export { actions, selectors };
export default reducer;