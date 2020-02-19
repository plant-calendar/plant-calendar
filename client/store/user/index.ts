import { setUserToken, createUser, fetchUserById, setUser, fetchAllNames, updateName } from './actions';
import { getUserToken, getUser, getAllUserNames } from './selectors';
import reducer from './reducer';

const actions = { setUserToken, createUser, fetchUserById, setUser, fetchAllNames, updateName };
const selectors = { getUserToken, getUser, getAllUserNames };
export { actions, selectors };
export default reducer;