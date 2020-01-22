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
            return {
                ...state,
                data: { token },
            };
        case TYPES.USER_SET_USER:
            const { user } = action;
            return {
              ...state,
              data: { ...state.data, user },
            };
        default:
            return state;
    }
};
