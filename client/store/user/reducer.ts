import TYPES from "./types";
import {IUser} from "../../../server/db/models/user/user.interface";

const defaultState = {
    data: { token: '', user: null, allNames: [] },
};

export default (state = defaultState, action: { type: TYPES, user?: IUser, allNames: string[] }) => {
    console.log("reducer got action of ", action);
    switch (action.type) {
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
        case TYPES.USER_SET_ALL_NAMES:
            const { allNames } = action;
            return {
              ...state,
              data: { ...state.data, allNames },
            };
        default:
            return state;
    }
};
