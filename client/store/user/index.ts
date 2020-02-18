import { setUserToken, createUser, fetchUserById, setUser } from './actions';
import { getUserToken, getUser } from './selectors';
import reducer from './reducer';

const actions = { setUserToken, createUser, fetchUserById, setUser };
const selectors = { getUserToken, getUser };
export { actions, selectors };
export default reducer;