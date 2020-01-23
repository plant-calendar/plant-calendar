import { setUserToken, createUser, fetchUserByToken, setUser } from './actions';
import { getUserToken, getUser } from './selectors';
import reducer from './reducer';

const actions = { setUserToken, createUser, fetchUserByToken, setUser };
const selectors = { getUserToken, getUser };
export { actions, selectors };
export default reducer;