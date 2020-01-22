import { setUserToken, createUser, fetchUserByToken } from './actions';
import { getUserToken, getUser } from './selectors';
import reducer from './reducer';

const actions = { setUserToken, createUser, fetchUserByToken };
const selectors = { getUserToken, getUser };
export { actions, selectors };
export default reducer;