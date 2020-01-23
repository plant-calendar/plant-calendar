import TYPES from "./types";
import {IUser} from "../../../server/db/models/user/user.interface";

const defaultState = {
    data: { token: '', user: null },
};

export default (state = defaultState, action: { type: TYPES, token?: string, user?: IUser }) => {
    console.log("reducer got action of ", action);
    switch (action.type) {
        case TYPES.USER_SET_TOKEN:
            const { token } = action;
            localStorage.setItem('userToken', token || '');
            return {
                ...state,
                data: { token },
            };
        case TYPES.USER_SET_USER:
            const { user } = action;
            // this if should be unnecessary since action should not be dispatched with null user, but TSLint likes it
            if (user) {
                localStorage.setItem('userId', user.id.toString());
                localStorage.setItem('userName', user.name);
            }

            return {
              ...state,
              data: { ...state.data, user },
            };
        default:
            return state;
    }
};
