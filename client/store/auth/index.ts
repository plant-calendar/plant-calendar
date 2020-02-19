import { getHaveUser, setHaveUser } from './actions';
import { getHaveUser as selectHaveUser } from './selectors';
import reducer from './reducer';

const actions = { getHaveUser, setHaveUser };
const selectors = { getHaveUser: selectHaveUser };
export { actions, selectors };
export default reducer;